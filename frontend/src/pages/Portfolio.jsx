import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  Layers3,
  Code2,
  Globe2,
  Smartphone,
  Database,
  MoveUpRight,
} from "lucide-react";

/* =========================================================
   PORTFOLIO DATA
========================================================= */

const projects = [
  {
    id: 1,
    title: "S. B. Patil Minerals",
    category: "Industrial",
    description:
      "A modern digital platform for a leading minerals and bentonite manufacturing company serving India and international markets.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85",
    number: "01",
    tags: ["Web Development", "UI/UX", "Corporate"],
    type: "tilt",
  },
  {
    id: 2,
    title: "Goldhues",
    category: "Engineering",
    description:
      "An innovation-focused digital experience showcasing engineering, product development and technology integration.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=85",
    number: "02",
    tags: ["Web Design", "Development", "Branding"],
    type: "slide",
  },
  {
    id: 3,
    title: "Pole Material Management",
    category: "Enterprise",
    description:
      "A centralized material management platform designed to simplify inventory, allocation and maintenance workflows.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=85",
    number: "03",
    tags: ["Web Application", "Dashboard", "Management"],
    type: "scale",
  },
  {
    id: 4,
    title: "Multispeciality Hospital",
    category: "Healthcare",
    description:
      "A professional healthcare platform designed around patient experience, services and modern medical facilities.",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1400&q=85",
    number: "04",
    tags: ["Healthcare", "Web Design", "Development"],
    type: "rotate",
  },
  {
    id: 5,
    title: "Voter Data Management",
    category: "Technology",
    description:
      "A purpose-built voter data management platform designed for accuracy, speed and compliance.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=85",
    number: "05",
    tags: ["Enterprise", "Data", "Platform"],
    type: "glitch",
  },
  {
    id: 6,
    title: "J-Buddy Job Portal",
    category: "Recruitment",
    description:
      "An easy-to-use digital assistance and job platform connecting users with opportunities through a simple experience.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85",
    number: "06",
    tags: ["Job Portal", "React", "Web App"],
    type: "float",
  },
  {
    id: 7,
    title: "Ajeenkya D Y Patil University",
    category: "Education",
    description:
      "A modern digital experience for an academic institution with a strong focus on usability and accessibility.",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=85",
    number: "07",
    tags: ["Education", "Website", "UI/UX"],
    type: "reveal",
  },
  {
    id: 8,
    title: "Cosmos Clean System",
    category: "Industrial",
    description:
      "A digital presence for a leading facade access solutions and maintenance company.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=85",
    number: "08",
    tags: ["Corporate", "Website", "Branding"],
    type: "perspective",
  },
  {
    id: 9,
    title: "Samastlingayata",
    category: "Matrimonial",
    description:
      "A user-friendly matrimonial platform designed to help people discover meaningful relationships.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=85",
    number: "09",
    tags: ["Platform", "UI/UX", "Development"],
    type: "zoom",
  },
  {
    id: 10,
    title: "Hospital Management System",
    category: "Healthcare",
    description:
      "A comprehensive hospital management web application with administrative controls and digital workflows.",
    image:
      "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=1400&q=85",
    number: "10",
    tags: ["Healthcare", "Dashboard", "Admin"],
    type: "flip",
  },
  {
    id: 11,
    title: "HKE Society",
    category: "Education",
    description:
      "An interactive membership management web application with powerful administrative capabilities.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=85",
    number: "11",
    tags: ["Web Application", "Membership", "Admin"],
    type: "border",
  },
  {
    id: 12,
    title: "Nascent Thoughts",
    category: "Technology",
    description:
      "Creative website development for an IT services company focused on software and digital solutions.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
    number: "12",
    tags: ["IT Services", "Website", "Design"],
    type: "particles",
  },
];

/* =========================================================
   MOUSE TILT CARD
========================================================= */

function TiltCard({ children }) {
  const ref = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [8, -8]),
    { stiffness: 150, damping: 20 }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-8, 8]),
    { stiffness: 150, damping: 20 }
  );

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   PARTICLES
========================================================= */

function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(25)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-cyan-300/50"
          initial={{
            x: Math.random() * 1200,
            y: Math.random() * 700,
            opacity: 0,
          }}
          animate={{
            y: [null, Math.random() * -200],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
        />
      ))}
    </div>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  const card = (
    <motion.article
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.8,
        delay: (index % 3) * 0.12,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] backdrop-blur-xl ${
        index % 3 === 0
          ? "md:translate-y-10"
          : index % 3 === 1
          ? ""
          : "md:-translate-y-8"
      }`}
    >
      {/* IMAGE */}

      <div className="relative h-[320px] overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
          animate={{
            scale: hovered ? 1.12 : 1,
            rotate:
              hovered && project.type === "rotate"
                ? 2
                : 0,
          }}
          transition={{ duration: 0.7 }}
        />

        {/* dark overlay */}

        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/30 to-transparent"
          animate={{
            opacity: hovered ? 0.55 : 0.8,
          }}
        />

        {/* project number */}

        <div className="absolute left-6 top-6">
          <motion.div
            animate={{
              y: hovered ? -5 : 0,
              rotate: hovered ? -5 : 0,
            }}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/20 text-sm font-semibold text-white backdrop-blur-md"
          >
            {project.number}
          </motion.div>
        </div>

        {/* category */}

        <div className="absolute right-5 top-5 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-xs text-cyan-200 backdrop-blur-md">
          {project.category}
        </div>

        {/* hover arrow */}

        <motion.div
          animate={{
            scale: hovered ? 1 : 0.7,
            opacity: hovered ? 1 : 0,
            rotate: hovered ? 0 : -30,
          }}
          className="absolute bottom-5 right-5 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400 text-slate-950"
        >
          <ArrowUpRight size={23} />
        </motion.div>

        {/* moving glow */}

        <motion.div
          animate={{
            x: hovered ? 120 : -150,
            opacity: hovered ? 0.6 : 0,
          }}
          transition={{ duration: 0.8 }}
          className="absolute -left-20 top-0 h-full w-24 rotate-[20deg] bg-white/20 blur-2xl"
        />
      </div>

      {/* CONTENT */}

      <div className="relative p-7">
        <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-cyan-300/70">
          <span className="h-px w-8 bg-cyan-300/50" />
          Project
        </div>

        <motion.h3
          animate={{
            x: hovered ? 5 : 0,
          }}
          className="text-2xl font-semibold tracking-tight text-white"
        >
          {project.title}
        </motion.h3>

        <p className="mt-4 text-sm leading-7 text-slate-400">
          {project.description}
        </p>

        {/* tags */}

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <motion.span
              key={tag}
              animate={{
                y: hovered ? -3 : 0,
              }}
              transition={{ delay: i * 0.05 }}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* bottom line */}

        <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
          <span className="text-sm text-slate-500">
            View case study
          </span>

          <motion.div
            animate={{
              x: hovered ? 5 : 0,
            }}
            className="text-cyan-300"
          >
            <MoveUpRight size={19} />
          </motion.div>
        </div>
      </div>

      {/* animated border */}

      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[28px] border border-cyan-300/0"
        animate={{
          borderColor: hovered
            ? "rgba(103,232,249,0.35)"
            : "rgba(103,232,249,0)",
        }}
      />
    </motion.article>
  );

  if (project.type === "tilt") {
    return <TiltCard>{card}</TiltCard>;
  }

  return card;
}

/* =========================================================
   MAIN PORTFOLIO
========================================================= */

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Technology",
    "Healthcare",
    "Enterprise",
    "Education",
    "Industrial",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <main className="min-h-screen overflow-hidden bg-[#020617] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative flex min-h-screen items-center overflow-hidden">

        {/* GRID */}

        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(56,189,248,0.18) 1px, transparent 1px),
              linear-gradient(90deg, rgba(56,189,248,0.18) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* gradient */}

        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[150px]" />

        <Particles />

        {/* ORBIT */}

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute right-[-200px] top-1/2 hidden h-[650px] w-[650px] rounded-full border border-cyan-400/10 lg:block"
        >
          <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_30px_10px_rgba(34,211,238,0.5)]" />
        </motion.div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:px-8">

          <div className="max-w-5xl">

            {/* small label */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-8 flex items-center gap-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-400/10">
                <Sparkles size={17} className="text-cyan-300" />
              </span>

              <span className="text-sm uppercase tracking-[0.3em] text-cyan-200/70">
                Our Portfolio
              </span>
            </motion.div>

            {/* heading */}

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.15,
              }}
              className="text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-[100px]"
            >
              We build
              <br />

              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                digital experiences.
              </span>
            </motion.h1>

            {/* description */}

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.35,
              }}
              className="mt-10 max-w-2xl text-lg leading-8 text-slate-400"
            >
              Explore selected digital products, websites and
              enterprise solutions crafted by Aller Technologies.
              Every project combines strategy, technology and
              thoughtful design.
            </motion.p>

            {/* stats */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
              }}
              className="mt-12 flex flex-wrap gap-10"
            >
              <div>
                <div className="text-3xl font-semibold">
                  12+
                </div>
                <div className="mt-1 text-sm text-slate-500">
                  Featured projects
                </div>
              </div>

              <div>
                <div className="text-3xl font-semibold">
                  6+
                </div>
                <div className="mt-1 text-sm text-slate-500">
                  Industries
                </div>
              </div>

              <div>
                <div className="text-3xl font-semibold">
                  100%
                </div>
                <div className="mt-1 text-sm text-slate-500">
                  Digital focus
                </div>
              </div>
            </motion.div>

          </div>

          {/* scroll indicator */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-slate-600">
              Scroll to explore
            </span>

            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="h-10 w-px bg-gradient-to-b from-cyan-300 to-transparent"
            />
          </motion.div>

        </div>
      </section>

      {/* =====================================================
          INTRO STRIP
      ===================================================== */}

      <section className="relative border-y border-white/10 bg-white/[0.02]">

        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-14 md:flex-row md:items-center md:justify-between lg:px-8">

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/60">
              Selected work
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Ideas transformed into impact.
            </h2>
          </div>

          <div className="max-w-md text-sm leading-7 text-slate-500">
            From enterprise platforms to healthcare,
            education and industrial websites, we design
            experiences that are built to perform.
          </div>

        </div>
      </section>

      {/* =====================================================
          FILTER
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 pt-24 lg:px-8">

        <div className="flex flex-wrap gap-3">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative overflow-hidden rounded-full px-5 py-2.5 text-sm transition-all ${
                activeCategory === category
                  ? "bg-cyan-300 text-slate-950"
                  : "border border-white/10 bg-white/[0.03] text-slate-400 hover:border-cyan-300/30 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}

        </div>
      </section>

      {/* =====================================================
          PROJECT GRID
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <motion.div
          layout
          className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </motion.div>

      </section>

      {/* =====================================================
          TECHNOLOGY STRIP
      ===================================================== */}

      <section className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8">

        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-cyan-500/[0.08] via-blue-500/[0.04] to-purple-500/[0.08] p-10 md:p-16">

          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-[100px]" />

          <div className="relative">

            <div className="mb-10 flex items-center gap-3">
              <Layers3
                size={20}
                className="text-cyan-300"
              />

              <span className="text-sm uppercase tracking-[0.3em] text-slate-400">
                Technology meets creativity
              </span>
            </div>

            <h2 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
              Built with the tools
              <span className="text-cyan-300"> modern products </span>
              deserve.
            </h2>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  icon: Code2,
                  title: "Development",
                  text: "Scalable applications",
                },
                {
                  icon: Globe2,
                  title: "Web",
                  text: "Modern experiences",
                },
                {
                  icon: Smartphone,
                  title: "Mobile",
                  text: "Responsive products",
                },
                {
                  icon: Database,
                  title: "Data",
                  text: "Powerful systems",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.1,
                    }}
                    whileHover={{
                      y: -8,
                    }}
                    className="rounded-2xl border border-white/10 bg-black/20 p-6 backdrop-blur-md"
                  >
                    <Icon
                      size={24}
                      className="text-cyan-300"
                    />

                    <h3 className="mt-6 font-medium">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="relative overflow-hidden px-6 pb-24">

        <div className="mx-auto max-w-7xl">

          <div className="relative overflow-hidden rounded-[40px] border border-cyan-300/10 bg-[#07111f] px-8 py-20 text-center md:px-20">

            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.15, 0.3, 0.15],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 blur-[120px]"
            />

            <div className="relative">

              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/60">
                Start something new
              </p>

              <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold tracking-tight md:text-7xl">
                Have an idea?
                <br />
                <span className="text-cyan-300">
                  Let's build it.
                </span>
              </h2>

              <p className="mx-auto mt-7 max-w-xl text-slate-400">
                Tell us about your next digital product,
                website or technology challenge.
              </p>

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-cyan-300 px-7 py-4 font-medium text-slate-950 shadow-[0_0_40px_rgba(103,232,249,0.2)]"
              >
                Start a project
                <ArrowUpRight size={19} />
              </motion.button>

            </div>
          </div>

        </div>

      </section>

    </main>
  );
}