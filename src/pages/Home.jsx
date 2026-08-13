import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  MonitorCog,
  Megaphone,
  CloudCog,
  Globe2,
  Rocket,
} from "lucide-react";
import webDevelopment from "../assets/wrb-application-development.jpg";
import softwareDevelopment from "../assets/mobile-application-development.webp";
import digitalMarketing from "../assets/digital-marketing.jpg";
import devops from "../assets/devOps.png";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  console.log("loadeeeddddd....",loaded)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      title: "WEB DEVELOPMENT",
      description:
        "Modern, responsive and scalable digital experiences built for today's businesses.",
      icon: Code2,
      image: webDevelopment,
    },

    {
      title: "SOFTWARE APPLICATION",
      description:
        "Powerful software solutions designed around business requirements and workflows.",
      icon: MonitorCog,
      image: softwareDevelopment,
    },

    {
      title: "DIGITAL MARKETING",
      description:
        "Digital strategies that help businesses strengthen their online presence and reach.",
      icon: Megaphone,
      image: digitalMarketing,
    },

    {
      title: "DevOps SERVICES",
      description:
        "Reliable deployment, automation and infrastructure practices for modern applications.",
      icon: CloudCog,
      image: devops,
    },
  ];

  const aboutSlides = [
    {
      title: "Digital Engineering",
      subtitle: "Building scalable digital experiences",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=85",
      hoverImage:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85",
      number: "01",
    },

    {
      title: "Technology",
      subtitle: "Transforming ideas into intelligent solutions",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85",
      hoverImage:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1400&q=85",
      number: "02",
    },

    {
      title: "Innovation",
      subtitle: "Creating what's next",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=85",
      hoverImage:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=85",
      number: "03",
    },

    {
      title: "Digital Growth",
      subtitle: "Turning technology into business value",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
      hoverImage:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=85",
      number: "04",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [isImageHovered, setIsImageHovered] = useState(false);

  console.log("activeSlidees..",activeSlide)

  useEffect(()=>{
    console.log("Home mounted")

    const timer = setTimeout(()=>{
      console.log("Setting loaded to true");
      setLoaded(true);
    },100);

    return ()=>{
      console.log("Cleaning timer ");
      clearTimeout(timer);
    }
  },[])

  return (
    <main className="bg-[#030712] text-white overflow-hidden">


      {/* ===== INTERACTIVE ALLER HERO ===== */}

{/* ==============
    MAIN CIRCULAR ANIMATION AREA
============== */}

<section className="relative min-h-screen overflow-hidden bg-[#030303] pt-20 sm:pt-24">

      {/* ============
          BACKGROUND GLOW
      ============ */}

      <motion.div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-violet-600/[0.07]
          blur-[130px]
          sm:h-[650px]
          sm:w-[650px]
        "
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ============
          SECONDARY CYAN GLOW
      ============ */}

      <motion.div
        className="
          pointer-events-none
          absolute
          left-[15%]
          top-[30%]
          h-[250px]
          w-[250px]
          rounded-full
          bg-cyan-500/[0.035]
          blur-[100px]
        "
        animate={{
          x: [0, 80, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ============
          GRID
      ============ */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.045]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* ============
          TOP LABEL
      ============ */}

      <motion.div
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="
          absolute
          left-1/2
          top-24
          z-40
          -translate-x-1/2
          sm:top-28
        "
      >
        <div className="flex items-center gap-3">

          <span className="h-px w-6 bg-violet-500/60 sm:w-8" />

          <span
            className="
              whitespace-nowrap
              text-[8px]
              font-medium
              uppercase
              tracking-[0.4em]
              text-white/40
              sm:text-[10px]
              sm:tracking-[0.45em]
            "
          >
            Aller Technologies
          </span>

          <span className="h-px w-6 bg-violet-500/60 sm:w-8" />

        </div>
      </motion.div>

      {/* ============
          MAIN ANIMATION AREA
      ============ */}

      <div
        className="
          relative
          mx-auto
          flex
          min-h-[calc(100vh-80px)]
          max-w-[1400px]
          items-center
          justify-center
          overflow-hidden
          px-4
          sm:min-h-[calc(100vh-96px)]
        "
      >

        {/* ==========
            HORIZONTAL ORBIT
        ========== */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[300px]
            w-[560px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-[50%]
            border
            border-white/[0.045]

            sm:h-[340px]
            sm:w-[650px]

            lg:h-[380px]
            lg:w-[730px]
          "
        />

        {/* ==========
            SECOND ORBIT RING
        ========== */}

        <motion.div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[290px]
            w-[550px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-[50%]
            border
            border-violet-400/[0.035]

            sm:h-[330px]
            sm:w-[640px]

            lg:h-[370px]
            lg:w-[720px]
          "
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* ==========
            ORBIT GLOW
        ========== */}

        <motion.div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[280px]
            w-[540px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-[50%]
            opacity-20
            blur-[15px]
            sm:h-[320px]
            sm:w-[630px]
            lg:h-[360px]
            lg:w-[710px]
          "
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(139,92,246,.12), transparent)",
          }}
        />

        {/* ==========
            SIX INTERACTIVE CARDS
        ========== */}

        <InteractiveCard
          index={0}
          title="Technology"
          subtitle="Digital Engineering"
          icon={<Code2 size={20} />}
          position="
            left-1/2
            top-[8%]
            -translate-x-1/2
          "
        />

        <InteractiveCard
          index={1}
          title="Marketing"
          subtitle="Brand Growth"
          icon={<Megaphone size={20} />}
          position="
            right-[2%]
            top-[28%]
            -translate-y-1/2
            sm:right-[4%]
          "
        />

        <InteractiveCard
          index={2}
          title="Digital Growth"
          subtitle="Business Transformation"
          icon={<Globe2 size={20} />}
          position="
            right-[2%]
            bottom-[20%]
            sm:right-[4%]
          "
        />

        <InteractiveCard
          index={3}
          title="Innovation"
          subtitle="Future Solutions"
          icon={<Rocket size={20} />}
          position="
            left-1/2
            bottom-[7%]
            -translate-x-1/2
          "
        />

        <InteractiveCard
          index={4}
          title="Cloud Solutions"
          subtitle="Scalable Infrastructure"
          icon={<CloudCog size={20} />}
          position="
            left-[2%]
            bottom-[20%]
            sm:left-[4%]
          "
        />

        <InteractiveCard
          index={5}
          title="Applications"
          subtitle="Smart Digital Products"
          icon={<MonitorCog size={20} />}
          position="
            left-[2%]
            top-[28%]
            -translate-y-1/2
            sm:left-[4%]
          "
        />

        {/* ==========
            CENTER
        ========== */}

        <motion.div
          className="
            absolute
            left-1/2
            top-1/2
            z-10
            flex
            h-28
            w-28
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-white/[0.04]
            bg-white/[0.01]
            backdrop-blur-sm
            sm:h-32
            sm:w-32
          "
          animate={{
            scale: [1, 1.04, 1],
            opacity: [0.55, 0.9, 0.55],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >

          <div className="text-center">

            <div
              className="
                text-[10px]
                font-medium
                tracking-[0.3em]
                text-white/25
                sm:text-xs
              "
            >
              ALLER
            </div>

            <div
              className="
                mt-1
                text-[5px]
                tracking-[0.35em]
                text-white/10
                sm:text-[6px]
              "
            >
              DIGITAL ECOSYSTEM
            </div>

          </div>

        </motion.div>

        {/* ==========
            ROTATING ALLER CORE
        ========== */}

        <motion.div
          className="
            absolute
            left-1/2
            top-1/2
            z-30
            h-0
            w-0
          "
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        >

          {/* ========
              CORE POSITION ON ORBIT

              Smaller orbit:
              mobile 125px
              tablet 145px
              desktop 165px
          ======== */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2

              translate-y-[-125px]

              sm:translate-y-[-145px]

              lg:translate-y-[-165px]
            "
          >

            {/* ========
                COUNTER ROTATION

                Keeps ALLER upright
            ======== */}

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <AllerCore />
            </motion.div>

          </div>

        </motion.div>

        {/* ==========
            SMALL ORBIT PARTICLES
        ========== */}

        {[...Array(12)].map((_, index) => (
          <motion.span
            key={index}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[3px]
              w-[3px]
              rounded-full
              bg-white/20
            "
            style={{
              transform: `rotate(${index * 30}deg) translateY(-${
                140 + (index % 3) * 15
              }px)`,
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [0.6, 1.2, 0.6],
            }}
            transition={{
              duration: 2.5 + (index % 3),
              repeat: Infinity,
              delay: index * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* ==========
            BACKGROUND PARTICLES
        ========== */}

        {[...Array(22)].map((_, index) => (
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
              left: `${8 + (index * 37) % 84}%`,
              top: `${12 + (index * 53) % 76}%`,
            }}
            animate={{
              y: [0, -18, 0],
              opacity: [0.08, 0.6, 0.08],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + (index % 4),
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* ==========
            BOTTOM LABEL
        ========== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.5,
            duration: 1,
          }}
          className="
            absolute
            bottom-5
            left-1/2
            -translate-x-1/2
            text-center
            sm:bottom-8
          "
        >

          <p
            className="
              whitespace-nowrap
              text-[8px]
              uppercase
              tracking-[0.3em]
              text-white/20
              sm:text-xs
              sm:tracking-[0.4em]
            "
          >
            Connecting ideas • Creating possibilities
          </p>

          <div className="mx-auto mt-3 h-px w-16 bg-gradient-to-r from-transparent via-violet-400/60 to-transparent sm:w-20" />

        </motion.div>

      </div>
    </section>


      {/* ============
          SERVICES
      ============ */}

      <section className="relative py-32">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16 max-w-3xl">

            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.3em]
                text-cyan-400
              "
            >
              What We Do
            </p>

            <h2
              className="
                mt-4
                text-4xl
                font-bold
                md:text-5xl
              "
            >
              Technology that drives

              <span
                className="
                  text-transparent
                  bg-gradient-to-r
                  from-cyan-400
                  to-blue-500
                  bg-clip-text
                "
              >
                {" "}growth.
              </span>
            </h2>

            <p
              className="
                mt-5
                text-lg
                leading-relaxed
                text-slate-400
              "
            >
              From digital products to enterprise solutions,
              we help businesses turn complex challenges into
              simple, scalable technology.
            </p>

          </div>


          <div className="grid gap-6 md:grid-cols-3">

            <ServiceCard
              number="01"
              title="Web Development"
              description="Modern, responsive and high-performance web applications built for today's digital world."
              icon="⌁"
            />

            <ServiceCard
              number="02"
              title="Software Solutions"
              description="Scalable software solutions designed around your business needs and long-term goals."
              icon="◈"
            />

            <ServiceCard
              number="03"
              title="Digital Innovation"
              description="We combine technology, creativity and strategy to create meaningful digital experiences."
              icon="✦"
            />

          </div>

        </div>

      </section>


      {/* ============
          WHY ALLER
      ============ */}

      <section
        className="
          relative
          border-y
          border-white/[0.06]

          bg-[#07101d]

          py-32
        "
      >

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* LEFT */}

            <div>

              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-cyan-400
                "
              >
                Why Aller
              </p>

              <h2
                className="
                  mt-5
                  text-4xl
                  font-bold
                  leading-tight
                  md:text-5xl
                "
              >
                Building technology

                <span
                  className="
                    block
                    bg-gradient-to-r
                    from-cyan-400
                    to-blue-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  with purpose.
                </span>

              </h2>

              <p
                className="
                  mt-6
                  text-lg
                  leading-relaxed
                  text-slate-400
                "
              >
                We believe technology should do more than
                simply work. It should create opportunities,
                simplify processes and help businesses move
                forward.
              </p>

              <div className="mt-10">

                <a
                  href="/about"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2

                    font-semibold
                    text-cyan-400
                  "
                >
                  Discover Aller

                  <span
                    className="
                      transition-transform
                      duration-300

                      group-hover:translate-x-2
                    "
                  >
                    →
                  </span>

                </a>

              </div>

            </div>


            {/* STATS */}

            <div className="grid grid-cols-2 gap-4">

              <StatCard
                number="10+"
                label="Years of Experience"
              />

              <StatCard
                number="50+"
                label="Projects Delivered"
              />

              <StatCard
                number="15+"
                label="Technology Solutions"
              />

              <StatCard
                number="100%"
                label="Commitment"
              />

            </div>

          </div>

        </div>

      </section>


      {/* ============
          CTA
      ============ */}

      <section className="relative py-32">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <div
            className="
              relative
              overflow-hidden

              rounded-3xl

              border
              border-cyan-400/10

              bg-gradient-to-br
              from-cyan-400/[0.08]
              via-blue-500/[0.05]
              to-transparent

              p-12

              md:p-20
            "
          >

            <div
              className="
                absolute
                left-1/2
                top-[-100px]

                h-[200px]
                w-[400px]

                -translate-x-1/2

                bg-cyan-400/10

                blur-[100px]
              "
            />

            <div className="relative z-10">

              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-cyan-400
                "
              >
                Let's Build Something
              </p>

              <h2
                className="
                  mt-5
                  text-4xl
                  font-bold
                  md:text-6xl
                "
              >
                Have an idea?

                <span
                  className="
                    block
                    bg-gradient-to-r
                    from-cyan-400
                    to-blue-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  Let's make it real.
                </span>

              </h2>

              <p
                className="
                  mx-auto
                  mt-6
                  max-w-2xl
                  text-slate-400
                "
              >
                Let's talk about your next digital project
                and build something that makes an impact.
              </p>

              <a
                href="/contact"
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2

                  rounded-full

                  bg-gradient-to-r
                  from-cyan-400
                  to-blue-500

                  px-8
                  py-4

                  font-semibold
                  text-slate-950

                  transition-all
                  duration-300

                  hover:-translate-y-1

                  hover:shadow-xl
                  hover:shadow-cyan-500/30
                "
              >
                Start a Conversation
                →
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}


/* ===================
   HERO SERVICE CARD
=================== */

function HeroServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <div
      className="
        group
        relative

        h-[145px]

        cursor-pointer
        overflow-hidden

        rounded-2xl

        border
        border-white/[0.08]

        bg-[#07111f]

        transition-all
        duration-500
        ease-out

        hover:-translate-y-2

        hover:border-cyan-400/40

        hover:shadow-xl
        hover:shadow-cyan-500/10
      "
    >

      {/* IMAGE */}

      <img
        src={service.image}
        alt={service.title}
        className="
          absolute
          inset-0

          h-full
          w-full

          object-cover

          opacity-0
          scale-110

          transition-all
          duration-700

          group-hover:scale-100
          group-hover:opacity-100
        "
      />


      {/* IMAGE DARK OVERLAY */}

      <div
        className="
          absolute
          inset-0

          bg-black/70

          opacity-0

          transition-opacity
          duration-500

          group-hover:opacity-100
        "
      />


      {/* CARD CONTENT */}

      <div
        className="
          relative
          z-10

          flex
          h-full
          flex-col
          justify-between

          p-5
        "
      >

        {/* ICON */}

        <div
          className="
            flex
            h-10
            w-10

            items-center
            justify-center

            rounded-xl

            border
            border-cyan-400/20

            bg-cyan-400/[0.08]

            transition-all
            duration-500

            group-hover:scale-110
            group-hover:rotate-6

            group-hover:bg-cyan-400/20
          "
        >

          <Icon
            size={19}
            className="
              text-cyan-400

              transition-colors
              duration-300

              group-hover:text-cyan-200
            "
          />

        </div>


        {/* TITLE */}

        <div>

          <h3
            className="
              text-xs
              font-bold
              tracking-[0.12em]

              text-white

              transition-all
              duration-300

              group-hover:text-cyan-300
            "
          >
            {service.title}
          </h3>

          {/* Animated line */}

          <span
            className="
              mt-2
              block

              h-[2px]
              w-0

              bg-cyan-400

              transition-all
              duration-500

              group-hover:w-14
            "
          />

        </div>

      </div>


      {/* Moving light */}

      <div
        className="
          pointer-events-none

          absolute
          left-0
          top-0

          h-[1px]
          w-full

          -translate-x-full

          bg-gradient-to-r
          from-transparent
          via-cyan-300
          to-transparent

          opacity-0

          transition-all
          duration-1000

          group-hover:translate-x-full
          group-hover:opacity-100
        "
      />

    </div>
  );
}


/* ===================
   SERVICE CARD
=================== */

function ServiceCard({
  number,
  title,
  description,
  icon,
}) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden

        rounded-2xl

        border
        border-white/[0.08]

        bg-white/[0.02]

        p-8

        transition-all
        duration-500

        hover:-translate-y-3

        hover:border-cyan-400/30

        hover:bg-cyan-400/[0.04]

        hover:shadow-2xl
        hover:shadow-cyan-500/10
      "
    >

      {/* Hover glow */}

      <div
        className="
          absolute
          right-0
          top-0

          h-32
          w-32

          rounded-full

          bg-cyan-400/10

          blur-3xl

          opacity-0

          transition-opacity
          duration-500

          group-hover:opacity-100
        "
      />

      <div className="relative z-10">

        <div className="flex items-center justify-between">

          <span
            className="
              font-mono
              text-sm
              text-slate-600
            "
          >
            {number}
          </span>

          <span
            className="
              text-3xl
              text-cyan-400

              transition-transform
              duration-500

              group-hover:scale-125
              group-hover:rotate-12
            "
          >
            {icon}
          </span>

        </div>

        <h3
          className="
            mt-10
            text-2xl
            font-semibold

            transition-colors
            duration-300

            group-hover:text-cyan-400
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-4
            leading-relaxed
            text-slate-400
          "
        >
          {description}
        </p>

        <div
          className="
            mt-8

            translate-y-2

            text-cyan-400

            opacity-0

            transition-all
            duration-300

            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >
          Learn more →
        </div>

      </div>

    </div>
  );
}


/* ===================
   STAT CARD
=================== */

function StatCard({ number, label }) {
  return (
    <div
      className="
        group

        rounded-2xl

        border
        border-white/[0.06]

        bg-white/[0.02]

        p-6

        transition-all
        duration-500

        hover:-translate-y-2

        hover:border-cyan-400/20
      "
    >

      <div
        className="
          text-4xl
          font-bold

          text-transparent

          bg-gradient-to-r
          from-cyan-400
          to-blue-500

          bg-clip-text

          transition-transform
          duration-500

          group-hover:scale-110

          origin-left
        "
      >
        {number}
      </div>

      <p className="mt-3 text-slate-400">
        {label}
      </p>

    </div>
  );
}

/* ================
   ALLER CORE
================ */


function AllerCore() {
  return (
    <div
      className="
        relative
        h-24
        w-24

        sm:h-28
        sm:w-28

        lg:h-32
        lg:w-32
      "
    >

      {/* ============
          OUTER ROTATING RING
      ============ */}

      <motion.div
        className="
          absolute
          -inset-4
          rounded-full
          border
          border-violet-400/20
        "
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      >

        <span
          className="
            absolute
            left-1/2
            top-0
            h-1.5
            w-1.5
            -translate-x-1/2
            rounded-full
            bg-violet-300
            shadow-[0_0_12px_rgba(167,139,250,1)]
          "
        />

      </motion.div>


      {/* ============
          SECOND ROTATING RING
      ============ */}

      <motion.div
        className="
          absolute
          -inset-2
          rounded-full
          border
          border-dashed
          border-white/10
        "
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
      >

        <span
          className="
            absolute
            bottom-1/2
            left-0
            h-1
            w-1
            rounded-full
            bg-cyan-300
            shadow-[0_0_10px_rgba(34,211,238,1)]
          "
        />

      </motion.div>


      {/* ============
          MAIN CORE
      ============ */}

      <motion.div
        className="
          relative
          flex
          h-full
          w-full
          items-center
          justify-center
          overflow-hidden
          rounded-full
          border
          border-white/20
          bg-[#08050f]
        "
        animate={{
          boxShadow: [
            "0 0 25px rgba(124,58,237,.15)",
            "0 0 60px rgba(124,58,237,.45)",
            "0 0 25px rgba(124,58,237,.15)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >

        {/* ==========
            INTERNAL ENERGY
        ========== */}

        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            background:
              "conic-gradient(from 0deg, transparent, rgba(139,92,246,.55), transparent, rgba(34,211,238,.35), transparent)",
          }}
        />

        {/* ==========
            DARK GLASS
        ========== */}

        <div className="absolute inset-[2px] rounded-full bg-[#08050f]/90 backdrop-blur-xl" />


        {/* ==========
            INNER RING
        ========== */}

        <motion.div
          className="
            absolute
            inset-5
            rounded-full
            border
            border-violet-400/10
          "
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        >

          <span
            className="
              absolute
              left-1/2
              top-0
              h-1
              w-1
              -translate-x-1/2
              rounded-full
              bg-violet-300
              shadow-[0_0_8px_#a78bfa]
            "
          />

          <span
            className="
              absolute
              bottom-0
              left-1/2
              h-1
              w-1
              -translate-x-1/2
              rounded-full
              bg-cyan-300
              shadow-[0_0_8px_#67e8f9]
            "
          />

        </motion.div>


        {/* ==========
            INNER PULSE
        ========== */}

        <motion.div
          className="
            absolute
            h-10
            w-10
            rounded-full
            bg-violet-500/20
            blur-xl
          "
          animate={{
            scale: [0.8, 1.35, 0.8],
            opacity: [0.25, 0.65, 0.25],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />


        {/* ==========
            ALLER TEXT
        ========== */}

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
            className="
              text-sm
              font-semibold
              tracking-[0.12em]
              sm:text-base
              lg:text-lg
            "
          >
            ALLER
          </motion.div>

          <div
            className="
              mt-1
              text-[5px]
              tracking-[0.4em]
              text-white/40
              sm:text-[6px]
            "
          >
            TECHNOLOGIES
          </div>

        </div>

      </motion.div>

    </div>
  );
}


/* ======= INTERACTIVE CARD ======= */

function InteractiveCard({ index, title, subtitle, icon, position,}) {

  /*
   * ==============
   * EXACT TOUCH POINTS
   *
   * The orbit takes 18 seconds.
   *
   * 6 cards = 60 degrees each.
   *
   * The glow is ONLY active around the exact moment
   * when the AllerCore reaches the card.
   * ==============
   */

  const touchPoints = [
    0.00,   // Technology
    0.1667, // Marketing
    0.3333, // Digital Growth
    0.5000, // Innovation
    0.6667, // Cloud Solutions
    0.8333, // Applications
  ];

  const touch = touchPoints[index];

  /*
   * Small window around the actual touch.
   *
   * Smaller value = shorter glow.
   */

  const glowStart = Math.max(0, touch - 0.012);

  const glowEnd = Math.min(1, touch + 0.012);

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
        delay: 0.4 + index * 0.12,
        duration: 0.7,
      }}
    >

      {/* ==========
          FLOATING CARD
      ========== */}

      <motion.div
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 4 + index,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >

        {/* ========
            CARD GLOW

            ONLY APPEARS DURING TOUCH
        ======== */}

        <motion.div
          className="
            pointer-events-none
            absolute
            -inset-4
            rounded-[25px]
            blur-xl
          "
          animate={{
            opacity: [
              0,
              0,
              1,
              0,
              0,
            ],

            background: [
              "rgba(139,92,246,0)",
              "rgba(139,92,246,0)",
              "rgba(139,92,246,.32)",
              "rgba(139,92,246,0)",
              "rgba(139,92,246,0)",
            ],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",

            times: [
              0,
              glowStart,
              touch,
              glowEnd,
              1,
            ],
          }}
        />

        {/* ========
            CARD
        ======== */}

        <motion.div
          className="
            relative
            flex
            w-[175px]
            items-center
            gap-3
            rounded-2xl
            border
            border-white/10
            bg-white/[0.035]
            p-3.5
            backdrop-blur-xl

            sm:w-[210px]
            sm:p-4

            lg:w-[220px]
          "
          animate={{

            /* ---------------------------------------------
               BORDER
            --------------------------------------------- */

            borderColor: [
              "rgba(255,255,255,.10)",
              "rgba(255,255,255,.10)",

              "rgba(167,139,250,.95)",

              "rgba(255,255,255,.10)",
              "rgba(255,255,255,.10)",
            ],

            /* ---------------------------------------------
               BACKGROUND
            --------------------------------------------- */

            backgroundColor: [
              "rgba(255,255,255,.035)",
              "rgba(255,255,255,.035)",

              "rgba(139,92,246,.20)",

              "rgba(255,255,255,.035)",
              "rgba(255,255,255,.035)",
            ],

            /* ---------------------------------------------
               GLOW
            --------------------------------------------- */

            boxShadow: [
              "0 0 0 rgba(139,92,246,0)",
              "0 0 0 rgba(139,92,246,0)",

              "0 0 45px rgba(139,92,246,.55)",

              "0 0 0 rgba(139,92,246,0)",
              "0 0 0 rgba(139,92,246,0)",
            ],

          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",

            times: [
              0,
              glowStart,
              touch,
              glowEnd,
              1,
            ],
          }}
        >

          {/* ========
              ICON
          ======== */}

          <motion.div
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-white/10
              bg-black/30

              sm:h-11
              sm:w-11
            "
            animate={{

              color: [
                "rgba(255,255,255,.40)",
                "rgba(255,255,255,.40)",

                "rgba(167,139,250,1)",

                "rgba(255,255,255,.40)",
                "rgba(255,255,255,.40)",
              ],

              scale: [
                1,
                1,

                1.14,

                1,
                1,
              ],

            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",

              times: [
                0,
                glowStart,
                touch,
                glowEnd,
                1,
              ],
            }}
          >
            {icon}
          </motion.div>


          {/* ========
              TEXT
          ======== */}

          <div className="min-w-0">

            <motion.h3
              className="
                whitespace-nowrap
                text-xs
                font-medium
                sm:text-sm
              "
              animate={{
                color: [
                  "rgba(255,255,255,.78)",
                  "rgba(255,255,255,.78)",

                  "rgba(255,255,255,1)",

                  "rgba(255,255,255,.78)",
                  "rgba(255,255,255,.78)",
                ],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",

                times: [
                  0,
                  glowStart,
                  touch,
                  glowEnd,
                  1,
                ],
              }}
            >
              {title}
            </motion.h3>

            <p className="mt-1 whitespace-nowrap text-[9px] text-white/30 sm:text-[10px]">
              {subtitle}
            </p>

          </div>


          {/* ========
              ACTIVE DOT
          ======== */}

          <motion.span
            className="
              absolute
              right-3
              top-3
              h-1.5
              w-1.5
              rounded-full
            "
            animate={{
              backgroundColor: [
                "rgba(255,255,255,.12)",
                "rgba(255,255,255,.12)",

                "rgba(167,139,250,1)",

                "rgba(255,255,255,.12)",
                "rgba(255,255,255,.12)",
              ],

              boxShadow: [
                "0 0 0 rgba(139,92,246,0)",
                "0 0 0 rgba(139,92,246,0)",

                "0 0 14px rgba(139,92,246,1)",

                "0 0 0 rgba(139,92,246,0)",
                "0 0 0 rgba(139,92,246,0)",
              ],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",

              times: [
                0,
                glowStart,
                touch,
                glowEnd,
                1,
              ],
            }}
          />

        </motion.div>

      </motion.div>

    </motion.div>
  );
}