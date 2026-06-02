import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CursorGlow() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 200, mass: 0.5 };
  const glowX = useSpring(cursorX, springConfig);
  const glowY = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      // Show glow only if cursor in viewport
      if (!visible) setVisible(true);
      cursorX.set(e.clientX - 150); // half of width (300px)
      cursorY.set(e.clientY - 150); // half of height (300px)
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY, visible]);

  if (!mounted) return null;

  return (
    <motion.div
      style={{
        translateX: glowX,
        translateY: glowY,
        opacity: visible ? 1 : 0,
      }}
      className="pointer-events-none fixed top-0 left-0 z-0 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle_at_center,rgba(199,121,94,0.12)_0%,rgba(199,121,94,0.03)_40%,transparent_70%)] blur-2xl transition-opacity duration-500"
    />
  );
}
