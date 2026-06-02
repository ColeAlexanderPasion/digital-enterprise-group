const MAX_MESSAGE_LENGTH = 3000;
const MAX_FIELD_LENGTH = 160;
const MIN_SUBMIT_TIME_MS = 2500;
const RATE_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT = 5;

type RateRecord = {
  count: number;
  resetAt: number;
};

const rateLimitStore = new Map<string, RateRecord>();

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const cleanText = (value: unknown, maxLength = MAX_FIELD_LENGTH) => {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u001F\u007F]/g, " ").replace(/\s+/g, " ").trim().slice(0, maxLength);
};

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const getIp = (req: any) => {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.length > 0) return forwarded.split(",")[0].trim();
  return req.socket?.remoteAddress || "unknown";
};

const isRateLimited = (ip: string) => {
  const now = Date.now();
  const current = rateLimitStore.get(ip);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  current.count += 1;
  rateLimitStore.set(ip, current);
  return current.count > RATE_LIMIT;
};

const sendJson = (res: any, status: number, body: Record<string, unknown>) => {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(body));
};

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return sendJson(res, 405, { message: "Method not allowed." });
  }

  const allowedOrigin = process.env.ALLOWED_ORIGIN;
  const origin = req.headers.origin;
  if (allowedOrigin && origin && origin !== allowedOrigin) {
    return sendJson(res, 403, { message: "Request blocked." });
  }

  const ip = getIp(req);
  if (isRateLimited(ip)) {
    return sendJson(res, 429, { message: "Too many messages. Please try again later." });
  }

  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};

  // Honeypot: real users never fill this hidden field. Return success to avoid teaching bots.
  if (cleanText(body.website, 300)) {
    return sendJson(res, 200, { ok: true });
  }

  const startedAt = Number(body.startedAt || 0);
  if (!startedAt || Date.now() - startedAt < MIN_SUBMIT_TIME_MS) {
    return sendJson(res, 400, { message: "Please wait a moment before sending the form." });
  }

  const name = cleanText(body.name);
  const email = cleanText(body.email, 254).toLowerCase();
  const company = cleanText(body.company);
  const service = cleanText(body.service);
  const message = cleanText(body.message, MAX_MESSAGE_LENGTH);

  if (!name || !email || !message) {
    return sendJson(res, 400, { message: "Please complete your name, email, and message." });
  }

  if (!isEmail(email)) {
    return sendJson(res, 400, { message: "Please enter a valid email address." });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "contact@digitalenterprisegroup.com";
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "Digital Enterprise Group <website@digitalenterprisegroup.com>";

  if (!resendApiKey) {
    return sendJson(res, 500, { message: "Email service is not configured yet." });
  }

  const subject = `New DEG website inquiry${company ? ` from ${company}` : ""}`;
  const safe = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    company: escapeHtml(company || "Not provided"),
    service: escapeHtml(service || "Not selected"),
    message: escapeHtml(message).replace(/\n/g, "<br />"),
  };

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#151515;max-width:680px">
      <h2 style="margin:0 0 16px">New Digital Enterprise Group website inquiry</h2>
      <p><strong>Name:</strong> ${safe.name}</p>
      <p><strong>Email:</strong> ${safe.email}</p>
      <p><strong>Company:</strong> ${safe.company}</p>
      <p><strong>Service:</strong> ${safe.service}</p>
      <hr style="border:none;border-top:1px solid #ddd;margin:22px 0" />
      <p><strong>Message:</strong></p>
      <p>${safe.message}</p>
    </div>
  `;

  const text = [
    "New Digital Enterprise Group website inquiry",
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "Not provided"}`,
    `Service: ${service || "Not selected"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const emailResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject,
      html,
      text,
    }),
  });

  if (!emailResponse.ok) {
    const details = await emailResponse.text().catch(() => "");
    console.error("Resend error:", details);
    return sendJson(res, 502, { message: "Email could not be sent. Please try again later." });
  }

  return sendJson(res, 200, { ok: true, message: "Message sent successfully." });
}
