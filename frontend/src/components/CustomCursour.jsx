import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const moveHandler = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

      const target = e.target;

      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor]")
      ) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", moveHandler);

    return () => {
      window.removeEventListener("mousemove", moveHandler);
    };
  }, []);

  return (
    <div
      className="
        pointer-events-none
        fixed
        top-0
        left-0
        z-[9999]
      "
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      {/* OUTER GLOW */}

      <div
        className={`
          absolute
          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          border

          transition-all
          duration-300

          ${
            hovering
              ? "w-12 h-12 border-cyan-300/80 bg-cyan-400/10"
              : "w-6 h-6 border-cyan-400/40"
          }
        `}
      />

      {/* ROTATING RING */}

      <div
        className={`
          absolute
          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          border-t
          border-r

          border-cyan-400

          transition-all
          duration-300

          animate-[spin_2s_linear_infinite]

          ${
            hovering
              ? "w-14 h-14 opacity-100"
              : "w-8 h-8 opacity-60"
          }
        `}
      />

      {/* GLOW */}

      <div
        className="
          absolute

          -translate-x-1/2
          -translate-y-1/2

          w-8
          h-8

          rounded-full

          bg-cyan-400/20

          blur-xl
        "
      />

      {/* CENTER DOT */}

      <div
        className={`
          absolute

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-cyan-400

          shadow-[0_0_15px_rgba(34,211,238,0.9)]

          transition-all
          duration-300

          ${
            hovering
              ? "w-2.5 h-2.5"
              : "w-1.5 h-1.5"
          }
        `}
      />
    </div>
  );
}