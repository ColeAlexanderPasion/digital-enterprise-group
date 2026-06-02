import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { FormEvent, useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
      setMessage("");
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-32 lg:py-48 px-6 bg-[#020303] overflow-hidden border-t border-white/5 z-20 tech-grid">
      {/* Editorial layout lines */}
      <div className="absolute top-0 bottom-0 left-[8%] w-[1px] bg-gradient-to-b from-white/5 via-white/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-[8%] w-[1px] bg-gradient-to-b from-white/5 via-white/5 to-transparent pointer-events-none" />

      {/* Glow highlight lights */}
      <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-[#c7795e]/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-stretch relative">
        {/* Left: Contact Info and Quick Messaging */}
        <div className="lg:col-span-6 flex flex-col justify-between pr-4">
          <div className="space-y-6">
            <span className="text-[10px] font-mono tracking-widest text-[#c7795e] uppercase font-bold block">
              // Direct Connectivity
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[0.9] text-[#f7f3ef] uppercase">
              Let's engineer customized systems.
            </h2>
            <p className="text-base sm:text-lg text-[#bdb5b0] leading-relaxed font-light">
              Accelerate your business scale. Our solutions architect team coordinates directly with your technical divisions to design precise map strategies, secure database imports, and establish automated customer funnels.
            </p>
          </div>

          {/* Clean Unboxed Details List */}
          <div className="space-y-6 my-12 relative divide-y divide-white/5">
            <a
              href="mailto:admin@digitalenterprisegroup.com"
              className="flex items-center gap-5 pt-6 group transition-all duration-300"
            >
              <div className="h-10 w-10 rounded-xl bg-white/3 border border-white/10 flex items-center justify-center text-[#c7795e] group-hover:scale-110 group-hover:bg-[#c7795e]/10 group-hover:text-[#f2c0a7] transition-all duration-300">
                <Mail className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#bdb5b0]">Corporate Email Address</span>
                <span className="text-base font-bold text-[#f7f3ef] group-hover:text-[#f2c0a7] transition-colors">admin@digitalenterprisegroup.com</span>
              </div>
            </a>

            <a
              href="tel:+17028619024"
              className="flex items-center gap-5 pt-6 group transition-all duration-300"
            >
              <div className="h-10 w-10 rounded-xl bg-white/3 border border-white/10 flex items-center justify-center text-[#c7795e] group-hover:scale-110 group-hover:bg-[#c7795e]/10 group-hover:text-[#f2c0a7] transition-all duration-300">
                <Phone className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#bdb5b0]">Direct Hotline Stream</span>
                <span className="text-base font-bold text-[#f7f3ef] group-hover:text-[#f2c0a7] transition-colors">(702) 861-9024</span>
              </div>
            </a>

            <div className="flex items-center gap-5 pt-6">
              <div className="h-10 w-10 rounded-xl bg-white/3 border border-white/10 flex items-center justify-center text-[#c7795e]">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#bdb5b0]">Corporate Headquarters</span>
                <span className="text-base font-bold text-[#f7f3ef]">2510 E Sunset Rd, Las Vegas, NV 89120</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Message Form & Vector Location Map Mockup */}
        <div className="lg:col-span-6 flex flex-col gap-8 justify-between">
          {/* Quick Message Form */}
          <div className="p-8 sm:p-10 bg-[#050606] border border-white/5 rounded-3xl relative z-10 shadow-2xl">
            <h3 className="text-lg font-bold text-[#f7f3ef] mb-8 flex items-center gap-3 font-mono tracking-wider uppercase">
              <MessageSquare className="h-5 w-5 text-[#c7795e]" />
              Inquiry Protocol
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-[9px] font-mono uppercase tracking-widest text-[#bdb5b0] block mb-3 font-semibold">Corporate Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-white/2 border border-white/10 rounded-xl px-5 py-4 text-sm font-light text-white placeholder-white/30 focus:outline-none focus:border-[#c7795e] focus:ring-1 focus:ring-[#c7795e]/50 transition-all duration-300"
                />
              </div>

              <div>
                <label className="text-[9px] font-mono uppercase tracking-widest text-[#bdb5b0] block mb-3 font-semibold">Operational Needs / Message</label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your current systems configuration, cloud database pipelines, or bottlenecks..."
                  className="w-full bg-white/2 border border-white/10 rounded-xl px-5 py-4 text-sm font-light text-white placeholder-white/30 focus:outline-none focus:border-[#c7795e] focus:ring-1 focus:ring-[#c7795e]/50 transition-all duration-300 resize-none h-32"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center gap-3 px-8 py-5 rounded-xl text-xs font-bold uppercase tracking-widest text-black bg-gradient-to-r from-[#c7795e] to-[#f2c0a7] hover:scale-[1.01] hover:brightness-105 active:scale-95 transition-all duration-300 justify-center cursor-pointer font-mono"
              >
                {submitted ? "Protocol Dispatched Successfully" : "Submit System Request"}
                <Send className="h-4.5 w-4.5" />
              </button>
            </form>
          </div>

          {/* Map Vector Mockup representation of Las Vegas Headquarters */}
          <div className="w-full h-52 rounded-3xl border border-white/5 bg-[#050606]/50 relative z-10 overflow-hidden flex items-center justify-center tech-grid">
            {/* Map coordinate labels */}
            <div className="absolute top-4 left-4 font-mono text-[9px] text-[#bdb5b0]/60">
              COORDINATES // LAT: 36.0718° N • LON: 115.1114° W
            </div>

            {/* Glowing Map Pin location dot */}
            <div className="relative">
              <div className="h-4 w-4 bg-[#c7795e] rounded-full animate-ping absolute top-0 left-0" />
              <div className="h-4 w-4 bg-[#c7795e] border-2 border-[#020303] rounded-full relative z-10 shadow-lg shadow-[#c7795e]/50" />
            </div>

            <div className="absolute bottom-4 right-4 bg-white/3 border border-white/10 rounded-lg px-4 py-2 font-mono text-[9px] uppercase font-bold text-[#f2c0a7] tracking-wider">
              Las Vegas HQ // USA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
