import { useEffect, useRef } from "react";

export default function InteractiveLogo() {
  const canvasRef = useRef(null);

  const mouse = useRef({
    x: -1000,
    y: -1000,
    active: false,
  });

  const hovered = useRef(false);
  const particles = useRef([]);
  const animationFrame = useRef(null);

  const WIDTH = 550;
  const HEIGHT = 550;

  /*
  ============================================================
  CREATE DOT LETTER
  ============================================================
  */

  const createDots = (text, fontSize, x, y) => {
    const canvas = document.createElement("canvas");

    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    const ctx = canvas.getContext("2d");

    ctx.font = `bold ${fontSize}px Arial`;

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillStyle = "#fff";

    ctx.fillText(text, x, y);

    const image = ctx.getImageData(
      0,
      0,
      WIDTH,
      HEIGHT
    );

    const dots = [];

    /*
    4px spacing instead of 3px
    This gives better performance
    */

    for (let y = 0; y < HEIGHT; y += 4) {
      for (let x = 0; x < WIDTH; x += 4) {
        const index =
          (y * WIDTH + x) * 4;

        if (image.data[index + 3] > 120) {
          dots.push({
            x,
            y,
          });
        }
      }
    }

    return dots;
  };


  /*
  ============================================================
  INITIALIZE
  ============================================================
  */

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    /*
    ==========================================================
    CREATE A
    ==========================================================
    */

    const aDots = createDots(
      "A",
      280,
      WIDTH / 2,
      HEIGHT / 2
    );


    /*
    ==========================================================
    CREATE ALLER
    ==========================================================
    */

    const allerDots = createDots(
      "ALLER",
      75,
      WIDTH / 2,
      HEIGHT / 2 - 22
    );


    /*
    ==========================================================
    CREATE TECHNOLOGIES
    ==========================================================
    */

    const techDots = createDots(
      "TECHNOLOGIES",
      20,
      WIDTH / 2,
      HEIGHT / 2 + 32
    );


    const companyDots = [
      ...allerDots,
      ...techDots,
    ];


    /*
    ==========================================================
    PARTICLES
    ==========================================================
    */

    particles.current = aDots.map(
      (dot, index) => ({
        x: dot.x,
        y: dot.y,

        targetX: dot.x,
        targetY: dot.y,

        vx: 0,
        vy: 0,

        size: 1.4,

        color:
          index % 2 === 0
            ? "34,211,238"
            : "59,130,246",
      })
    );


    /*
    ==========================================================
    ANIMATION
    ==========================================================
    */

    const animate = () => {
      ctx.clearRect(
        0,
        0,
        WIDTH,
        HEIGHT,
      );

      const targetDots =
        hovered.current
          ? companyDots
          : aDots;


      /*
      ========================================================
      PARTICLES
      ========================================================
      */

      particles.current.forEach(
        (particle, index) => {

          const target =
            targetDots[
            index %
            targetDots.length
            ];


          /*
          ----------------------------------------------
          TARGET
          ----------------------------------------------
          */

          particle.targetX =
            target.x;

          particle.targetY =
            target.y;


          /*
          ----------------------------------------------
          MOVEMENT
          ----------------------------------------------
          */

          particle.vx +=
            (particle.targetX -
              particle.x) *
            0.015;

          particle.vy +=
            (particle.targetY -
              particle.y) *
            0.015;


          /*
          ----------------------------------------------
          FRICTION
          ----------------------------------------------
          */

          particle.vx *= 0.86;
          particle.vy *= 0.86;


          /*
          ==============================================
          CURSOR INTERACTION
          ==============================================
          */

          if (mouse.current.active) {

            const dx =
              particle.x -
              mouse.current.x;

            const dy =
              particle.y -
              mouse.current.y;

            const distanceSquared =
              dx * dx +
              dy * dy;


            /*
            Avoid expensive Math.sqrt
            */

            if (
              distanceSquared <
              70 * 70
            ) {

              const distance =
                Math.sqrt(
                  distanceSquared
                );


              const force =
                (70 - distance) /
                70;


              particle.vx +=
                (dx /
                  (distance || 1)) *
                force *
                2.5;


              particle.vy +=
                (dy /
                  (distance || 1)) *
                force *
                2.5;
            }
          }


          /*
          ----------------------------------------------
          UPDATE
          ----------------------------------------------
          */

          particle.x +=
            particle.vx;

          particle.y +=
            particle.vy;


          /*
          ==============================================
          DRAW
          ==============================================
          */

          ctx.beginPath();

          ctx.fillStyle =
            `rgb(${particle.color})`;

          /*
          IMPORTANT:
          No shadowBlur here.

          shadowBlur on hundreds of particles
          causes a lot of lag.
          */

          ctx.arc(
            particle.x,
            particle.y,
            particle.size,
            0,
            Math.PI * 2
          );

          ctx.fill();
        }
      );


      animationFrame.current =
        requestAnimationFrame(
          animate
        );
    };


    animate();


    /*
    ============================================================
    CLEANUP
    ============================================================
    */

    return () => {
      cancelAnimationFrame(
        animationFrame.current
      );
    };

  }, []);


  /*
  ============================================================
  MOUSE MOVE
  ============================================================
  */

  const handleMouseMove = (e) => {
    const canvas =
      canvasRef.current;

    const rect =
      canvas.getBoundingClientRect();


    /*
    Directly update ref.
    NO React state.
    */

    mouse.current.x =
      ((e.clientX - rect.left) /
        rect.width) *
      WIDTH;


    mouse.current.y =
      ((e.clientY - rect.top) /
        rect.height) *
      HEIGHT;
  };


  /*
  ============================================================
  MOUSE ENTER
  ============================================================
  */

  const handleMouseEnter = () => {
    hovered.current = true;

    mouse.current.active = true;
  };


  /* ==== MOUSE LEAVE ==== */

  const handleMouseLeave = () => {
    hovered.current = false;

    mouse.current.active = false;

    mouse.current.x = -1000;
    mouse.current.y = -1000;
  };


  /*
  ============================================================
  UI
  ============================================================
  */

  return (
    <div
      className="
        relative
        w-[550px]
        h-[550px]
        flex
        items-center
        justify-center
        animate-[logoStart_1.2s_ease-out]
      "
    >
      <style>
        {`
@keyframes logoStart {

  0% {
    transform: scale(0.7);
    opacity: 0;
  }

  20% {
    transform: scale(1.05) translateX(-8px);
  }

  40% {
    transform: scale(1.03) translateX(8px);
  }

  60% {
    transform: scale(1.02) translateX(-5px);
  }

  80% {
    transform: scale(1.01) translateX(5px);
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}
`}
      </style>

      {/* ==== BACKGROUND GLOW ===== */}

      <div
        className="
          absolute
          inset-32
          rounded-full
          bg-cyan-400/[0.08]
          blur-[70px]
        "
      />


      {/* ================================================
          OUTER RING
      ================================================= */}

      <div
        className="
          absolute
          inset-0

          rounded-full

          border
          border-cyan-400/10

          animate-[spin_20s_linear_infinite]
        "
      />


      {/* ================================================
          INNER RING
      ================================================= */}

      <div
        className="
          absolute
          inset-16

          rounded-full

          border
          border-blue-500/15

          animate-[spin_15s_linear_infinite_reverse]
        "
      />


      {/* ================================================
          PARTICLE CANVAS
      ================================================= */}

      <canvas
        ref={canvasRef}

        width={WIDTH}
        height={HEIGHT}

        onMouseMove={handleMouseMove}

        onMouseEnter={handleMouseEnter}

        onMouseLeave={handleMouseLeave}

        className="
          relative
          z-20

          w-full
          h-full

          cursor-none
        "
      />


      {/* ================================================
          ORBIT DOT
      ================================================= */}

      <span
        className="
          absolute

          top-6
          left-1/2

          w-2
          h-2

          rounded-full

          bg-cyan-400

          shadow-[0_0_12px_rgba(34,211,238,0.8)]

          animate-pulse
        "
      />

    </div>
  );
}