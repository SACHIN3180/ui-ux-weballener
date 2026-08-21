import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Modern, responsive and high-performance web experiences designed to help businesses build a strong digital presence.",
    tags: ["React.js", "Next.js", "Responsive UI"],
    gradient:
      "from-cyan-400/30 via-blue-500/10 to-transparent",
  },
  {
    number: "02",
    title: "Software Development",
    description:
      "Scalable software solutions built around your business requirements, processes and long-term digital goals.",
    tags: ["Custom Software", "Scalable", "Secure"],
    gradient:
      "from-blue-500/30 via-indigo-500/10 to-transparent",
  },
  {
    number: "03",
    title: "Mobile Applications",
    description:
      "Engaging mobile experiences focused on usability, performance and seamless interaction across devices.",
    tags: ["Mobile Apps", "UI/UX", "Performance"],
    gradient:
      "from-indigo-500/30 via-purple-500/10 to-transparent",
  },
  {
    number: "04",
    title: "UI / UX Design",
    description:
      "Clean and intuitive digital interfaces that combine thoughtful user experience with a modern visual identity.",
    tags: ["User Experience", "Interface Design", "Prototyping"],
    gradient:
      "from-purple-500/30 via-pink-500/10 to-transparent",
  },
  {
    number: "05",
    title: "Cloud & Technology",
    description:
      "Technology solutions designed to improve flexibility, scalability and efficiency as your business grows.",
    tags: ["Cloud", "Integration", "Scalability"],
    gradient:
      "from-sky-500/30 via-cyan-500/10 to-transparent",
  },
  {
    number: "06",
    title: "Digital Transformation",
    description:
      "Helping businesses move ideas, workflows and processes into efficient digital experiences.",
    tags: ["Automation", "Innovation", "Growth"],
    gradient:
      "from-blue-400/30 via-cyan-500/10 to-transparent",
  },
];

export default function Services() {
  const heroRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const track = trackRef.current;

    if (!hero || !track) return;

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".service-panel");

      /*
      =========================================================
      HORIZONTAL SCROLL
      =========================================================
      */

      const getDistance = () => {
        return Math.max(0, track.scrollWidth - window.innerWidth);
      };

      const horizontalTween = gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",

        scrollTrigger: {
          trigger: hero,
          start: "top top",

          end: () => `+=${getDistance()}`,

          scrub: 1,

          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            /*
            Update progress line
            */
            gsap.set(".services-progress", {
              scaleX: self.progress,
            });
          },
        },
      });


      /*
      =========================================================
      HERO INTRO ANIMATION
      =========================================================
      */

      gsap.fromTo(
        ".services-heading",
        {
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
        }
      );


      gsap.fromTo(
        ".services-kicker",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      );


      gsap.fromTo(
        ".services-intro-description",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
        }
      );


      gsap.fromTo(
        ".services-scroll-text",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          delay: 0.8,
        }
      );


      /*
      =========================================================
      INDIVIDUAL SERVICE CARD ANIMATION
      =========================================================
      */

      panels.forEach((panel) => {
        const visual = panel.querySelector(".panel-visual");
        const number = panel.querySelector(".panel-number");
        const title = panel.querySelector(".panel-title");
        const description = panel.querySelector(".panel-description");

        gsap.fromTo(
          visual,
          {
            scale: 0.82,
            opacity: 0.35,
          },
          {
            scale: 1,
            opacity: 1,

            scrollTrigger: {
              trigger: panel,
              containerAnimation: horizontalTween,

              start: "left right",
              end: "center center",

              scrub: true,
            },
          }
        );


        gsap.fromTo(
          [number, title, description],
          {
            x: 80,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,

            stagger: 0.08,

            scrollTrigger: {
              trigger: panel,
              containerAnimation: horizontalTween,

              start: "left 75%",
              end: "center center",

              scrub: true,
            },
          }
        );
      });

    }, hero);


    return () => ctx.revert();

  }, []);

  return (
    <main className="bg-[#030712] text-white">

      {/* =====================================================
          CINEMATIC HORIZONTAL SERVICES HERO
      ====================================================== */}

    <section
  ref={heroRef}
  className="
    relative
    h-screen
    w-full
    overflow-hidden
    bg-[#030712]
  "
>

  {/* BACKGROUND */}
  <div className="pointer-events-none absolute inset-0">

    {/* glow */}
    <div
      className="
        absolute
        left-1/2
        top-1/2
        h-[600px]
        w-[600px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-cyan-500/[0.07]
        blur-[140px]
      "
    />

    {/* grid */}
    <div
      className="
        absolute
        inset-0
        opacity-[0.035]
        bg-[linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)]
        bg-[size:80px_80px]
      "
    />

    {/* giant word */}
    <div
      className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        whitespace-nowrap
        text-[20vw]
        font-black
        uppercase
        tracking-[-0.08em]
        text-white/[0.025]
      "
    >
      SERVICES
    </div>

  </div>


  {/* TOP LABEL */}
  <div
    className="
      services-kicker
      absolute
      left-6
      right-6
      top-8
      z-30
      flex
      items-center
      justify-between
      md:left-12
      md:right-12
    "
  >
    <div
      className="
        flex
        items-center
        gap-3
        text-xs
        uppercase
        tracking-[0.3em]
        text-cyan-400
      "
    >
      <span
        className="
          h-2
          w-2
          rounded-full
          bg-cyan-400
          shadow-[0_0_15px_rgba(34,211,238,0.9)]
        "
      />

      Our Services
    </div>

    <div
      className="
        text-xs
        uppercase
        tracking-[0.3em]
        text-slate-600
      "
    >
      01 — 06
    </div>
  </div>


  {/* =====================================================
      EVERYTHING THAT SHOULD MOVE
      MUST BE INSIDE THIS TRACK
  ====================================================== */}

  <div
    ref={trackRef}
    className="
      absolute
      left-0
      top-0
      flex
      h-full
      w-max
      items-center
      gap-[6vw]
      pl-[8vw]
      pr-[12vw]
      will-change-transform
    "
  >

    {/* =================================================
        INTRO
    ================================================= */}

    <div
      className="
        intro-panel
        relative
        flex
        h-[70vh]
        w-[90vw]
        flex-shrink-0
        items-center
        md:h-[72vh]
        md:w-[58vw]
        lg:w-[52vw]
      "
    >

      <div className="max-w-[650px]">

        <p
          className="
            mb-6
            text-xs
            uppercase
            tracking-[0.35em]
            text-cyan-400
          "
        >
          Digital capabilities
        </p>

        <h1
          className="
            services-heading
            text-5xl
            font-semibold
            leading-[0.9]
            tracking-[-0.05em]
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
          "
        >
          We build

          <span
            className="
              block
              bg-gradient-to-r
              from-cyan-300
              via-blue-400
              to-indigo-500
              bg-clip-text
              text-transparent
            "
          >
            what moves
          </span>

          business.
        </h1>

        <p
          className="
            services-intro-description
            mt-8
            max-w-md
            text-sm
            leading-7
            text-slate-500
            md:text-base
          "
        >
          Technology, design and strategy combined to
          create digital experiences that help businesses
          move forward.
        </p>

      </div>

    </div>


    {/* =================================================
        SERVICE CARDS
    ================================================= */}

    {services.map((service) => (

      <article
        key={service.number}
        className="
          service-panel
          relative
          flex
          h-[70vh]
          w-[78vw]
          flex-shrink-0
          items-center
          justify-center
          md:h-[72vh]
          md:w-[58vw]
          lg:w-[52vw]
        "
      >

        <div
          className={`
            panel-visual
            absolute
            inset-[4%]
            transform-gpu
            will-change-transform
            overflow-hidden
            rounded-[2rem]
            border
            border-white/10
            bg-gradient-to-br
            ${service.gradient}
            backdrop-blur-xl
          `}
        >

          <div
            className="
              absolute
              inset-0
              opacity-20
              bg-[linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)]
              bg-[size:60px_60px]
            "
          />

          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[45%]
              w-[45%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-cyan-300/20
              bg-cyan-300/[0.05]
              shadow-[0_0_100px_rgba(34,211,238,0.12)]
              backdrop-blur-xl
            "
          >

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-20
                w-20
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-cyan-300/10
                blur-2xl
              "
            />

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-3
                w-3
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-cyan-300
                shadow-[0_0_30px_rgba(34,211,238,1)]
              "
            />

          </div>

          <div
            className="
              absolute
              bottom-6
              left-6
              text-xs
              uppercase
              tracking-[0.25em]
              text-white/30
            "
          >
            ALLER / {service.number}
          </div>

        </div>


        {/* CONTENT */}

        <div
          className="
            absolute
            bottom-0
            left-0
            z-20
            w-[90%]
            md:w-[80%]
          "
        >

          <div
            className="
              panel-number
              mb-4
              text-sm
              tracking-[0.3em]
              text-cyan-400
            "
          >
            {service.number}
          </div>

          <h2
            className="
              panel-title
              text-4xl
              font-semibold
              leading-none
              tracking-[-0.04em]
              sm:text-5xl
              md:text-6xl
            "
          >
            {service.title}
          </h2>

          <p
            className="
              panel-description
              mt-5
              max-w-lg
              text-sm
              leading-7
              text-slate-400
              md:text-base
            "
          >
            {service.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">

            {service.tags.map((tag) => (

              <span
                key={tag}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-3
                  py-1.5
                  text-[10px]
                  uppercase
                  tracking-wider
                  text-slate-500
                "
              >
                {tag}
              </span>

            ))}

          </div>

        </div>

      </article>

    ))}

  </div>


  {/* SCROLL INDICATOR */}

  <div
    className="
      services-scroll-text
      absolute
      bottom-8
      left-1/2
      z-40
      hidden
      -translate-x-1/2
      items-center
      gap-4
      md:flex
    "
  >

    <span
      className="
        text-[10px]
        uppercase
        tracking-[0.4em]
        text-slate-600
      "
    >
      Scroll to explore
    </span>

    <span
      className="
        h-px
        w-16
        bg-gradient-to-r
        from-cyan-400
        to-transparent
      "
    />

  </div>


  {/* PROGRESS */}

  <div
    className="
      absolute
      bottom-5
      left-6
      right-6
      z-30
      md:left-12
      md:right-12
    "
  >

    <div className="h-px w-full bg-white/10">

      <div
        className="
          services-progress
          h-px
          w-full
          origin-left
          scale-x-0
          bg-cyan-400
          shadow-[0_0_15px_rgba(34,211,238,0.7)]
        "
      />

    </div>

  </div>

</section>


      {/* =====================================================
          REST OF YOUR SERVICES PAGE
      ====================================================== */}

      <section className="relative z-10 px-6 py-28 md:px-12 lg:px-20">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14">

            <p
              className="
                mb-3
                text-sm
                uppercase
                tracking-[0.3em]
                text-cyan-400
              "
            >
              Capabilities
            </p>

            <h2 className="text-4xl font-semibold md:text-6xl">
              Explore our services
            </h2>

          </div>


          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => (

              <div
                key={service.number}
                className="
                  group
                  relative
                  min-h-[330px]
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  p-7
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-cyan-400/30
                  hover:bg-white/[0.05]
                "
              >

                <div className="flex items-center justify-between">

                  <span className="text-sm tracking-[0.2em] text-cyan-400">
                    {service.number}
                  </span>

                  <span
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      text-slate-500
                      transition-all
                      duration-300
                      group-hover:rotate-45
                      group-hover:border-cyan-400/40
                      group-hover:text-cyan-300
                    "
                  >
                    ↗
                  </span>

                </div>


                <div
                  className="
                    mt-14
                    h-12
                    w-12
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-4
                    transition-all
                    duration-500
                    group-hover:border-cyan-400/30
                    group-hover:bg-cyan-400/10
                  "
                >
                  <div
                    className="
                      h-3
                      w-3
                      rounded-full
                      bg-slate-500
                      transition-all
                      duration-500
                      group-hover:bg-cyan-300
                      group-hover:shadow-[0_0_20px_rgba(34,211,238,0.9)]
                    "
                  />
                </div>


                <h3 className="mt-7 text-2xl font-semibold">
                  {service.title}
                </h3>


                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {service.description}
                </p>


                <div className="mt-6 flex flex-wrap gap-2">

                  {service.tags.map((tag) => (

                    <span
                      key={tag}
                      className="
                        rounded-full
                        border
                        border-white/[0.08]
                        bg-white/[0.025]
                        px-3
                        py-1.5
                        text-[11px]
                        text-slate-500
                      "
                    >
                      {tag}
                    </span>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="px-6 pb-28 md:px-12 lg:px-20">

        <div
          className="
            mx-auto
            max-w-7xl
            overflow-hidden
            rounded-[2rem]
            border
            border-cyan-400/15
            bg-gradient-to-br
            from-cyan-400/[0.08]
            via-blue-500/[0.04]
            to-transparent
            p-8
            md:p-14
          "
        >

          <div
            className="
              flex
              flex-col
              justify-between
              gap-10
              md:flex-row
              md:items-end
            "
          >

            <div className="max-w-2xl">

              <p
                className="
                  text-sm
                  uppercase
                  tracking-[0.3em]
                  text-cyan-400
                "
              >
                Let's Build
              </p>

              <h2
                className="
                  mt-5
                  text-4xl
                  font-semibold
                  leading-tight
                  md:text-6xl
                "
              >
                Have an idea?

                <span className="block text-slate-500">
                  Let's turn it into reality.
                </span>

              </h2>

            </div>


            <Link
              to="/contact"
              className="
                group
                inline-flex
                w-fit
                items-center
                gap-3
                rounded-full
                bg-white
                px-7
                py-4
                font-semibold
                text-slate-950
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-cyan-300
                hover:shadow-[0_15px_40px_rgba(34,211,238,0.2)]
              "
            >

              Start a Conversation

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}