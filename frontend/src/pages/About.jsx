import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Code2,
  Globe2,
  Lightbulb,
  Megaphone,
  Rocket,
  Target,
  Users,
  Zap,
} from "lucide-react";

const stats = [
  {
    number: "6+",
    label: "Years of Experience",
    icon: Rocket,
  },
  {
    number: "150+",
    label: "Projects Delivered",
    icon: Code2,
  },
  {
    number: "20+",
    label: "Industries Served",
    icon: Globe2,
  },
  {
    number: "100%",
    label: "Client Focused",
    icon: Users,
  },
];

const values = [
  {
    title: "Innovation",
    description:
      "We constantly explore new technologies, ideas and strategies to help businesses move forward.",
    icon: Lightbulb,
  },
  {
    title: "Excellence",
    description:
      "We focus on delivering high-quality digital and web solutions that create measurable results.",
    icon: Zap,
  },
  {
    title: "Growth",
    description:
      "Our strategies are designed to help businesses strengthen their online presence and grow globally.",
    icon: Rocket,
  },
  {
    title: "Customer First",
    description:
      "Every solution is created around the unique requirements and goals of our clients.",
    icon: Users,
  },
];

const services = [
  {
    title: "Web Solutions",
    text: "Modern, scalable and customized web solutions designed around your business.",
    icon: Code2,
  },
  {
    title: "Digital Marketing",
    text: "Strategies that strengthen your online presence and connect your brand with the right audience.",
    icon: Megaphone,
  },
  {
    title: "Business Growth",
    text: "Customized strategies that help businesses establish themselves and grow around the world.",
    icon: Globe2,
  },
];

const journey = [
  {
    year: "01",
    title: "The Beginning",
    text: "Aller Technologies started with a vision to help businesses establish a stronger presence in the digital world.",
  },
  {
    year: "02",
    title: "Growing Together",
    text: "We expanded our capabilities across digital marketing, web solutions and customized technology services.",
  },
  {
    year: "03",
    title: "150+ Projects",
    text: "Our multi-industry experience helped us successfully execute 150+ projects across different domains.",
  },
  {
    year: "04",
    title: "What's Next",
    text: "We continue to build meaningful digital experiences and transformative solutions for businesses.",
  },
];

export default function About() {
  const [valueIndex, setValueIndex] = useState(0);
  const [serviceIndex, setServiceIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValueIndex((prev) => (prev + 1) % values.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setServiceIndex((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextValue = () => {
    setValueIndex((prev) => (prev + 1) % values.length);
  };

  const prevValue = () => {
    setValueIndex((prev) => (prev - 1 + values.length) % values.length);
  };

  const nextService = () => {
    setServiceIndex((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setServiceIndex(
      (prev) => (prev - 1 + services.length) % services.length
    );
  };

  return (
    <main className="overflow-hidden bg-[#050505] text-white">


      {/* =========================================================
    INTERACTIVE ALLER HERO
========================================================= */}
{/* =========================================================
    ALLER — PREMIUM CINEMATIC HERO
========================================================= */}

<section className="relative min-h-screen overflow-hidden bg-[#020202] text-white">

  {/* =====================================================
      BACKGROUND
  ===================================================== */}

  <div className="pointer-events-none absolute inset-0">

    {/* Main atmospheric glow */}

    <motion.div
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.25, 0.5, 0.25],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute
        left-1/2
        top-1/2
        h-[650px]
        w-[650px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-violet-600/20
        blur-[160px]
      "
    />

    {/* Cyan glow */}

    <motion.div
      animate={{
        x: [-120, 120, -120],
        y: [60, -80, 60],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute
        left-[5%]
        top-[20%]
        h-[300px]
        w-[300px]
        rounded-full
        bg-cyan-500/10
        blur-[130px]
      "
    />

    {/* Pink glow */}

    <motion.div
      animate={{
        x: [80, -100, 80],
        y: [-30, 80, -30],
      }}
      transition={{
        duration: 17,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute
        bottom-[5%]
        right-[5%]
        h-[320px]
        w-[320px]
        rounded-full
        bg-fuchsia-500/10
        blur-[140px]
      "
    />

    {/* Subtle grid */}

    <div
      className="absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)
        `,
        backgroundSize: "90px 90px",
      }}
    />

    {/* Center vignette */}

    <div
      className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_center,transparent_15%,#020202_78%)]
      "
    />

  </div>


  {/* =====================================================
      HERO CONTENT
  ===================================================== */}

  <div
    className="
      relative
      z-10
      mx-auto
      flex
      min-h-screen
      max-w-[1500px]
      items-center
      justify-center
      px-5
      pt-20
      sm:px-8
    "
  >

    <div className="relative w-full">


      {/* =================================================
          HUGE BACKGROUND ALLER TYPOGRAPHY
      ================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          select-none
        "
      >

        <motion.div
          animate={{
            opacity: [0.025, 0.05, 0.025],
            letterSpacing: ["0.12em", "0.2em", "0.12em"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            whitespace-nowrap
            text-[23vw]
            font-black
            leading-none
            text-white
          "
        >
          ALLER
        </motion.div>

      </motion.div>


      {/* =================================================
          ABSTRACT ENERGY CORE
      ================================================= */}

      <div
        className="
          relative
          mx-auto
          flex
          h-[400px]
          w-[400px]
          items-center
          justify-center

          sm:h-[500px]
          sm:w-[500px]

          lg:h-[600px]
          lg:w-[600px]
        "
      >

        {/* Outer atmosphere */}

        <motion.div
          animate={{
            scale: [0.9, 1.08, 0.9],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            h-[270px]
            w-[270px]
            rounded-full
            bg-violet-500/20
            blur-[100px]

            sm:h-[330px]
            sm:w-[330px]

            lg:h-[400px]
            lg:w-[400px]
          "
        />


        {/* =================================================
            OUTER ORBIT
        ================================================= */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            inset-0
            rounded-full
            border
            border-white/[0.07]
          "
        >

          <motion.span
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-1/2
              top-0
              h-2
              w-2
              -translate-x-1/2
              rounded-full
              bg-violet-300
              shadow-[0_0_25px_rgba(167,139,250,1)]
            "
          />

        </motion.div>


        {/* =================================================
            SECOND ORBIT
        ================================================= */}

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            inset-[8%]
            rounded-full
            border
            border-dashed
            border-white/[0.06]
          "
        >

          <span
            className="
              absolute
              right-0
              top-1/2
              h-1.5
              w-1.5
              -translate-y-1/2
              rounded-full
              bg-cyan-300
              shadow-[0_0_20px_rgba(103,232,249,.9)]
            "
          />

        </motion.div>


        {/* =================================================
            THIRD ORBIT
        ================================================= */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            inset-[17%]
            rounded-full
            border
            border-white/[0.045]
          "
        >

          <span
            className="
              absolute
              bottom-0
              left-1/2
              h-1.5
              w-1.5
              -translate-x-1/2
              rounded-full
              bg-fuchsia-300
              shadow-[0_0_18px_rgba(232,121,249,.9)]
            "
          />

        </motion.div>


        {/* =================================================
            INNER CORE
        ================================================= */}

        <motion.div
          animate={{
            scale: [1, 1.04, 1],
            boxShadow: [
              "0 0 40px rgba(124,58,237,.15)",
              "0 0 100px rgba(124,58,237,.45)",
              "0 0 40px rgba(124,58,237,.15)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            relative
            z-20
            h-36
            w-36
            overflow-hidden
            rounded-full
            border
            border-white/20
            bg-[#07050c]

            sm:h-44
            sm:w-44

            lg:h-52
            lg:w-52
          "
        >

          {/* Rotating energy */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              inset-0
              rounded-full
            "
            style={{
              background:
                "conic-gradient(from 0deg, transparent, rgba(139,92,246,.7), transparent, rgba(34,211,238,.55), transparent)",
            }}
          />

          {/* Glass */}

          <div
            className="
              absolute
              inset-[3px]
              rounded-full
              bg-[#07050c]/90
              backdrop-blur-xl
            "
          />

          {/* Inner energy */}

          <motion.div
            animate={{
              scale: [0.6, 1.5, 0.6],
              opacity: [0.15, 0.7, 0.15],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-1/2
              top-1/2
              h-20
              w-20
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-violet-500/30
              blur-3xl
            "
          />

          {/* No logo / no text here */}

        </motion.div>

      </div>


      {/* =================================================
          MAIN HEADLINE
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          z-30
          w-[92%]
          -translate-x-1/2
          -translate-y-1/2
          text-center
        "
      >

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 0.8,
          }}
          className="
            mb-5
            text-[9px]
            font-medium
            uppercase
            tracking-[0.45em]
            text-white/35
            sm:text-xs
          "
        >
          Technology • Strategy • Growth
        </motion.p>


        <motion.h1
          initial={{
            opacity: 0,
            y: 35,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 0.7,
            duration: 1.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            text-4xl
            font-semibold
            leading-[0.95]
            tracking-[-0.04em]

            sm:text-6xl

            lg:text-7xl
          "
        >

          Ideas that move

          <br />

          <span
            className="
              bg-gradient-to-r
              from-white
              via-violet-200
              to-cyan-200
              bg-clip-text
              text-transparent
            "
          >
            businesses forward.
          </span>

        </motion.h1>


        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.2,
            duration: 1,
          }}
          className="
            mx-auto
            mt-6
            max-w-xl
            text-sm
            leading-7
            text-white/40
            sm:text-base
          "
        >
          Digital experiences, technology and strategies
          designed to help businesses build, grow and move
          confidently into the future.
        </motion.p>


        {/* CTA */}

        <motion.a
          href="/contact"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.5,
            duration: 0.8,
          }}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.96,
          }}
          className="
            pointer-events-auto
            mt-8
            inline-flex
            items-center
            gap-3
            rounded-full
            bg-white
            px-7
            py-3.5
            text-sm
            font-medium
            text-black
            shadow-[0_15px_50px_rgba(255,255,255,.08)]
            transition-all
            duration-300
            hover:shadow-[0_15px_60px_rgba(139,92,246,.3)]
          "
        >
          Let's build something

          <ArrowRight size={17} />

        </motion.a>

      </div>

    </div>

  </div>


  {/* =====================================================
      FLOATING PARTICLES
  ===================================================== */}

  {[...Array(24)].map((_, index) => (

    <motion.span
      key={index}
      className="
        pointer-events-none
        absolute
        h-1
        w-1
        rounded-full
        bg-white/30
      "
      style={{
        left: `${5 + ((index * 37) % 90)}%`,
        top: `${10 + ((index * 53) % 80)}%`,
      }}
      animate={{
        y: [0, -18, 0],
        opacity: [0.05, 0.7, 0.05],
        scale: [0.5, 1.2, 0.5],
      }}
      transition={{
        duration: 3 + (index % 5),
        delay: index * 0.15,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

  ))}


  {/* =====================================================
      SCROLL INDICATOR
  ===================================================== */}

  <motion.div
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: 1,
    }}
    transition={{
      delay: 2,
    }}
    className="
      absolute
      bottom-7
      left-1/2
      z-30
      -translate-x-1/2
      text-center
    "
  >

    <p
      className="
        text-[8px]
        uppercase
        tracking-[0.45em]
        text-white/25
      "
    >
      Explore
    </p>

    <motion.div
      animate={{
        y: [0, 8, 0],
        opacity: [0.3, 1, 0.3],
      }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        mx-auto
        mt-3
        h-8
        w-px
        bg-gradient-to-b
        from-white/60
        to-transparent
      "
    />

  </motion.div>


  {/* Bottom fade */}

  <div
    className="
      pointer-events-none
      absolute
      bottom-0
      left-0
      right-0
      h-36
      bg-gradient-to-t
      from-[#050505]
      to-transparent
    "
  />

</section>




      {/* =========================================================
          STATS
      ========================================================= */}

      <section className="border-y border-white/10 bg-white/[0.02]">

        <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group border-white/10 p-8 sm:p-10 lg:border-r last:border-r-0"
              >

                <Icon
                  size={24}
                  className="mb-6 text-violet-400 transition-transform duration-300 group-hover:scale-125"
                />

                <div className="text-4xl font-semibold sm:text-5xl">
                  {stat.number}
                </div>

                <div className="mt-2 text-sm text-white/40">
                  {stat.label}
                </div>

              </motion.div>
            );
          })}

        </div>

      </section>


      {/* =========================================================
          OUR STORY
      ========================================================= */}

      <section id="our-story" className="relative py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="grid items-center gap-20 lg:grid-cols-2">

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >

              <p className="mb-5 text-sm uppercase tracking-[0.3em] text-violet-400">
                Who we are
              </p>

              <h2 className="text-4xl font-semibold leading-tight sm:text-6xl">
                Technology.
                <br />
                Strategy.
                <br />

                <span className="text-white/30">
                  Growth.
                </span>
              </h2>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-lg leading-8 text-white/60"
            >

              <p>
                Aller Technologies Pvt Ltd is a diversified company
                assisting you in your online business or software needs.
                We help companies of distinct size from a small-scale
                startup to a multinational company.
              </p>

              <p>
                Our motive is to help companies build their brand with
                the help of our customized strategies.
              </p>

              <p>
                With a strong foundation in this era, we have successfully
                catered to all industries in building their robust online
                presence.
              </p>

              <p>
                We not only improve your online presence by social media
                marketing but also other marketing tools. Our strategies
                are built to grow your business around the world where
                we assist you to stand stronger than ever.
              </p>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =========================================================
          MISSION + VISION
      ========================================================= */}

      <section className="relative bg-[#090909] py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
              What drives us
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold sm:text-6xl">
              Our thoughts shape
              <span className="text-white/30"> our direction.</span>
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">

            {/* Mission */}
            <motion.div
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-600/20 to-transparent p-10 sm:p-14"
            >

              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-violet-500/10 blur-3xl transition group-hover:bg-violet-500/20" />

              <Target
                size={42}
                strokeWidth={1.3}
                className="text-violet-300"
              />

              <p className="mt-10 text-sm uppercase tracking-[0.3em] text-white/40">
                Our Mission
              </p>

              <h3 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Creating impact
                <br />
                through technology.
              </h3>

              <p className="mt-7 max-w-lg leading-8 text-white/50">
                To consistently deliver transformative Digital Marketing
                & Web Solutions and provide the best customer results
                possible with a WOW factor through our services.
              </p>

            </motion.div>


            {/* Vision */}
            <motion.div
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-transparent p-10 sm:p-14"
            >

              <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />

              <Globe2
                size={42}
                strokeWidth={1.3}
                className="text-cyan-300"
              />

              <p className="mt-10 text-sm uppercase tracking-[0.3em] text-white/40">
                Our Vision
              </p>

              <h3 className="mt-4 text-3xl font-semibold sm:text-4xl">
                A world of
                <br />
                meaningful growth.
              </h3>

              <p className="mt-7 max-w-lg leading-8 text-white/50">
                Our vision is to create a business world full of
                prosperity, meaning & delivering measurable results
                to clients, employees, and vendors.
              </p>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =========================================================
          VALUES SLIDER
      ========================================================= */}

      <section className="relative overflow-hidden py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="mb-14 flex flex-col justify-between gap-8 sm:flex-row sm:items-end">

            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
                What matters to us
              </p>

              <h2 className="mt-5 text-4xl font-semibold sm:text-6xl">
                Our values
              </h2>
            </div>

            <div className="flex gap-3">

              <button
                onClick={prevValue}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition hover:bg-white hover:text-black"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={nextValue}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition hover:bg-white hover:text-black"
              >
                <ChevronRight size={20} />
              </button>

            </div>

          </div>


          <div className="relative min-h-[350px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">

            <AnimatePresence mode="wait">

              {(() => {
                const item = values[valueIndex];
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="flex min-h-[350px] flex-col justify-center p-10 sm:p-16 lg:p-20"
                  >

                    <Icon
                      size={50}
                      strokeWidth={1.2}
                      className="text-violet-400"
                    />

                    <div className="mt-8 text-sm text-white/30">
                      0{valueIndex + 1} / 0{values.length}
                    </div>

                    <h3 className="mt-3 text-4xl font-semibold sm:text-5xl">
                      {item.title}
                    </h3>

                    <p className="mt-5 max-w-2xl text-lg leading-8 text-white/50">
                      {item.description}
                    </p>

                  </motion.div>
                );
              })()}

            </AnimatePresence>

          </div>


          {/* Dots */}

          <div className="mt-7 flex gap-2">

            {values.map((_, index) => (
              <button
                key={index}
                onClick={() => setValueIndex(index)}
                className={`h-1.5 rounded-full transition-all ${index === valueIndex
                  ? "w-10 bg-white"
                  : "w-2 bg-white/20"
                  }`}
              />
            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          SERVICE SLIDER
      ========================================================= */}

      <section className="bg-white py-32 text-black">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">

            <div>

              <p className="text-sm uppercase tracking-[0.3em] text-violet-600">
                What we do
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">
                Helping businesses
                <span className="text-black/30">
                  {" "}move forward.
                </span>
              </h2>

            </div>


            <div className="relative">

              <AnimatePresence mode="wait">

                {(() => {
                  const service = services[serviceIndex];
                  const Icon = service.icon;

                  return (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -40 }}
                      transition={{ duration: 0.5 }}
                      className="rounded-[2rem] bg-black p-10 text-white sm:p-14"
                    >

                      <Icon
                        size={44}
                        strokeWidth={1.3}
                        className="text-violet-400"
                      />

                      <h3 className="mt-10 text-3xl font-semibold sm:text-4xl">
                        {service.title}
                      </h3>

                      <p className="mt-5 max-w-xl text-lg leading-8 text-white/50">
                        {service.text}
                      </p>

                      <button className="mt-8 inline-flex items-center gap-2 text-sm font-medium">
                        Explore
                        <ArrowUpRight size={17} />
                      </button>

                    </motion.div>
                  );
                })()}

              </AnimatePresence>


              <div className="mt-5 flex gap-3">

                <button
                  onClick={prevService}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 transition hover:bg-black hover:text-white"
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  onClick={nextService}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 transition hover:bg-black hover:text-white"
                >
                  <ChevronRight size={18} />
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          JOURNEY
      ========================================================= */}

      <section className="py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="mb-20">

            <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
              Our journey
            </p>

            <h2 className="mt-5 text-4xl font-semibold sm:text-6xl">
              Built through
              <span className="text-white/30"> experience.</span>
            </h2>

          </div>


          <div className="relative">

            <div className="absolute left-0 right-0 top-7 hidden h-px bg-white/10 lg:block" />

            <div className="grid gap-12 lg:grid-cols-4">

              {journey.map((item, index) => (

                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >

                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-[#050505] text-sm font-semibold">
                    {item.year}
                  </div>

                  <h3 className="mt-8 text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-white/40">
                    {item.text}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FOUNDER QUOTE
      ========================================================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-violet-950/60 to-[#050505] py-32">

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[120px]" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-5xl px-6 text-center"
        >

          <div className="text-6xl text-violet-400/50 sm:text-8xl">
            “
          </div>

          <blockquote className="mt-4 text-3xl font-medium leading-tight sm:text-5xl lg:text-6xl">
            We are into the business from last 6 years and have
            successfully executed 150+ projects into various domains,
            which provides us clear insight of multi-industry domain
            experience.
          </blockquote>

          <div className="mt-10">

            <div className="font-semibold">
              NAMRATA PHATATE
            </div>

            <div className="mt-2 text-sm text-white/40">
              Founder, Aller Technologies Private Limited
            </div>

          </div>

        </motion.div>

      </section>


      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="relative overflow-hidden bg-white py-32 text-black">

        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-violet-300/40 blur-[120px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

          <div className="max-w-4xl">

            <p className="text-sm uppercase tracking-[0.3em] text-violet-600">
              Let's work together
            </p>

            <h2 className="mt-6 text-5xl font-semibold leading-[1] tracking-tight sm:text-7xl">
              Looking to take your
              business online?
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-black/50">
              Connect with us, share your idea & we can help you take
              your business online easily and in no time.
            </p>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 font-medium text-white"
            >
              Connect now
              <ArrowRight size={18} />
            </motion.a>

          </div>

        </div>

      </section>

    </main>
  );
}


/* =========================================================
   FLOATING CARD
========================================================= */

function FloatingCard({ icon, text, className }) {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur-xl ${className}`}
    >
      <div className="text-violet-300">
        {icon}
      </div>

      <span className="text-sm text-white/70">
        {text}
      </span>
    </motion.div>
  );
}

/* =========================================================
   ALLER CORE
========================================================= */

function AllerCore() {
  return (
    <div className="relative h-36 w-36 sm:h-44 sm:w-44">

      {/* ==============================================
          OUTER ROTATING RING
      ============================================== */}

      <motion.div
        className="absolute -inset-6 rounded-full border border-violet-400/20"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      >

        <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-violet-300 shadow-[0_0_15px_rgba(167,139,250,1)]" />

      </motion.div>


      {/* ==============================================
          SECOND ROTATING RING
      ============================================== */}

      <motion.div
        className="absolute -inset-3 rounded-full border border-dashed border-white/10"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
        }}
      >

        <span className="absolute bottom-1/2 left-0 h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,1)]" />

      </motion.div>


      {/* ==============================================
          MAIN CORE
      ============================================== */}

      <motion.div
        className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-white/20 bg-[#08050f]"
        animate={{
          boxShadow: [
            "0 0 40px rgba(124,58,237,.20)",
            "0 0 85px rgba(124,58,237,.50)",
            "0 0 40px rgba(124,58,237,.20)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >

        {/* ==========================================
            ROTATING INTERNAL ENERGY
        ========================================== */}

        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            background:
              "conic-gradient(from 0deg, transparent, rgba(139,92,246,.55), transparent, rgba(34,211,238,.35), transparent)",
          }}
        />


        {/* Dark glass layer */}

        <div className="absolute inset-[3px] rounded-full bg-[#08050f]/90 backdrop-blur-xl" />


        {/* ==========================================
            INNER ROTATING RING
        ========================================== */}

        <motion.div
          className="absolute inset-7 rounded-full border border-violet-400/10"
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        >

          <span className="absolute left-1/2 top-0 h-1 w-1 -translate-x-1/2 rounded-full bg-violet-300 shadow-[0_0_8px_#a78bfa]" />

          <span className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_8px_#67e8f9]" />

        </motion.div>


        {/* ==========================================
            INNER PULSE
        ========================================== */}

        <motion.div
          className="absolute h-14 w-14 rounded-full bg-violet-500/20 blur-2xl"
          animate={{
            scale: [0.8, 1.5, 0.8],
            opacity: [0.25, 0.7, 0.25],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />


        {/* ==========================================
            ALLER TEXT
        ========================================== */}

        <div className="relative z-10 text-center">

          <motion.div
            animate={{
              scale: [1, 1.04, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-xl font-semibold tracking-[0.12em] sm:text-2xl"
          >
            ALLER
          </motion.div>

          <div className="mt-1 text-[6px] tracking-[0.45em] text-white/40 sm:text-[8px]">
            TECHNOLOGIES
          </div>

        </div>

      </motion.div>

    </div>
  );
}


/* =========================================================
   INTERACTIVE CARD
========================================================= */

function InteractiveCard({
  index,
  title,
  subtitle,
  icon,
  position,
}) {

  /*
   * Each card gets its own activation moment.
   *
   * 0 = Technology
   * 1 = Marketing
   * 2 = Digital Growth
   * 3 = Innovation
   */

  const activation = [
    {
      start: 0.10,
      end: 0.18,
    },
    {
      start: 0.30,
      end: 0.43,
    },
    {
      start: 0.55,
      end: 0.68,
    },
    {
      start: 0.68,
      end: 0.80,
    },
  ][index];


  return (
    <motion.div
      className={`absolute z-20 ${position}`}
      initial={{
        opacity: 0,
        scale: 0.85,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        delay: 0.5 + index * 0.15,
        duration: 0.7,
      }}
    >

      <motion.div
        animate={{
          y: [0, -7, 0],
        }}
        transition={{
          duration: 4 + index,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >

        {/* ==========================================
            CARD GLOW
        ========================================== */}

        <motion.div
          className="absolute -inset-3 rounded-[25px] blur-xl"
          animate={{
            opacity: [
              0,
              0,
              0.9,
              0.9,
              0,
              0,
            ],
            background: [
              "rgba(139,92,246,0)",
              "rgba(139,92,246,0)",
              "rgba(139,92,246,.18)",
              "rgba(139,92,246,.18)",
              "rgba(139,92,246,0)",
              "rgba(139,92,246,0)",
            ],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            times: [
              0,
              activation.start,
              activation.start + 0.03,
              activation.end,
              activation.end + 0.04,
              1,
            ],
          }}
        />


        {/* ==========================================
            CARD
        ========================================== */}

        <motion.div
          className="relative flex w-[185px] items-center gap-3 rounded-2xl border bg-white/[0.035] p-4 backdrop-blur-xl sm:w-[220px]"
          animate={{
            borderColor: [
              "rgba(255,255,255,.10)",
              "rgba(255,255,255,.10)",

              /*
               * TOUCH
               */
              "rgba(167,139,250,.75)",

              "rgba(167,139,250,.75)",

              /*
               * LEAVE
               */
              "rgba(255,255,255,.10)",
              "rgba(255,255,255,.10)",
            ],

            backgroundColor: [
              "rgba(255,255,255,.035)",
              "rgba(255,255,255,.035)",

              /*
               * TOUCH
               */
              "rgba(139,92,246,.14)",

              "rgba(139,92,246,.14)",

              /*
               * LEAVE
               */
              "rgba(255,255,255,.035)",
              "rgba(255,255,255,.035)",
            ],

            boxShadow: [
              "0 0 0 rgba(139,92,246,0)",
              "0 0 0 rgba(139,92,246,0)",

              /*
               * TOUCH
               */
              "0 0 35px rgba(139,92,246,.30)",

              "0 0 35px rgba(139,92,246,.30)",

              /*
               * LEAVE
               */
              "0 0 0 rgba(139,92,246,0)",
              "0 0 0 rgba(139,92,246,0)",
            ],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            times: [
              0,
              activation.start,
              activation.start + 0.03,
              activation.end,
              activation.end + 0.04,
              1,
            ],
          }}
        >

          {/* ========================================
              ICON
          ======================================== */}

          <motion.div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/30"
            animate={{
              color: [
                "rgba(255,255,255,.40)",
                "rgba(255,255,255,.40)",
                "rgba(167,139,250,1)",
                "rgba(167,139,250,1)",
                "rgba(255,255,255,.40)",
              ],

              scale: [
                1,
                1,
                1.12,
                1.12,
                1,
              ],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              times: [
                0,
                activation.start,
                activation.start + 0.03,
                activation.end,
                activation.end + 0.04,
              ],
            }}
          >
            {icon}
          </motion.div>


          {/* ========================================
              TEXT
          ======================================== */}

          <div>

            <motion.h3
              className="text-sm font-medium"
              animate={{
                color: [
                  "rgba(255,255,255,.78)",
                  "rgba(255,255,255,.78)",
                  "rgba(255,255,255,1)",
                  "rgba(255,255,255,1)",
                  "rgba(255,255,255,.78)",
                ],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
                times: [
                  0,
                  activation.start,
                  activation.start + 0.03,
                  activation.end,
                  activation.end + 0.04,
                ],
              }}
            >
              {title}
            </motion.h3>

            <p className="mt-1 text-[10px] text-white/30">
              {subtitle}
            </p>

          </div>


          {/* ========================================
              ACTIVE INDICATOR
          ======================================== */}

          <motion.span
            className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full"
            animate={{
              backgroundColor: [
                "rgba(255,255,255,.12)",
                "rgba(255,255,255,.12)",
                "rgba(167,139,250,1)",
                "rgba(167,139,250,1)",
                "rgba(255,255,255,.12)",
              ],

              boxShadow: [
                "0 0 0 rgba(139,92,246,0)",
                "0 0 0 rgba(139,92,246,0)",
                "0 0 12px rgba(139,92,246,.9)",
                "0 0 12px rgba(139,92,246,.9)",
                "0 0 0 rgba(139,92,246,0)",
              ],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              times: [
                0,
                activation.start,
                activation.start + 0.03,
                activation.end,
                activation.end + 0.04,
              ],
            }}
          />

        </motion.div>

      </motion.div>

    </motion.div>
  );
}

/* =========================================================
   HERO ORBIT LABEL
========================================================= */

function HeroOrbitLabel({
  icon,
  title,
  subtitle,
  position,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`absolute z-30 ${position}`}
    >

      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.08,
        }}
        className="
          group
          flex
          items-center
          gap-3
          rounded-2xl
          border
          border-white/10
          bg-white/[0.045]
          px-3
          py-3
          backdrop-blur-xl
          transition-all
          duration-300
          hover:border-violet-400/40
          hover:bg-violet-500/[0.08]
          hover:shadow-[0_0_35px_rgba(139,92,246,.15)]

          sm:px-4
          sm:py-3.5
        "
      >

        <div
          className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-xl
            border
            border-white/10
            bg-black/40
            text-violet-300
            transition
            duration-300
            group-hover:scale-110
            group-hover:text-violet-200
          "
        >
          {icon}
        </div>


        <div>

          <h3
            className="
              text-[11px]
              font-medium
              text-white/85
              sm:text-xs
            "
          >
            {title}
          </h3>

          <p
            className="
              mt-0.5
              whitespace-nowrap
              text-[8px]
              text-white/30
              sm:text-[9px]
            "
          >
            {subtitle}
          </p>

        </div>


        {/* active dot */}

        <motion.span
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-2
            top-2
            h-1.5
            w-1.5
            rounded-full
            bg-violet-300
            shadow-[0_0_10px_rgba(167,139,250,.9)]
          "
        />

      </motion.div>

    </motion.div>
  );
}