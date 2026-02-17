import { useEffect } from "react";
import { motion as Motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  // 1. Create Motion Values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // 2. Wrap them in Springs for smoothness (Optional, but looks better)
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Use .set() to update motion values without re-rendering the whole app
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <Motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%", // Centers the cursor image on the point
        translateY: "-50%",
      }}
    >
      <img
        src="/cursor.png"
        alt="cursor"
        className="w-10 h-10 object-contain custom-cursor-glow"
      />
    </Motion.div>
  );
};

export default CustomCursor;