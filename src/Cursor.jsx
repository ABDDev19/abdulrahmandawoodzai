import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    // Disable custom cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const dot = dotRef.current;
    const circle = circleRef.current;

    let mouseX = 0;
    let mouseY = 0;

    let circleX = 0;
    let circleY = 0;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Small dot moves immediately
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const animate = () => {
      circleX += (mouseX - circleX) * 0.12;
      circleY += (mouseY - circleY) * 0.12;

      circle.style.transform = `translate3d(${circleX}px, ${circleY}px, 0)`;

      requestAnimationFrame(animate);
    };

    const handleMouseOver = (e) => {
      const target = e.target;

      if (target.closest("a, button, input, textarea, select, [data-cursor]")) {
        circle.classList.add("cursor-hover");
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;

      if (target.closest("a, button, input, textarea, select, [data-cursor]")) {
        circle.classList.remove("cursor-hover");
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    animate();

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      {/* Small dot */}
      <div ref={dotRef} className="custom-cursor-dot" />

      {/* Large smooth circle */}
      <div ref={circleRef} className="custom-cursor-circle" />
    </>
  );
}
