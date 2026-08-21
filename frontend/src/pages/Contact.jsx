import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  ArrowUpRight,
  Send,
  CheckCircle2,
  Clock3,
  Navigation,
  Sparkles,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.error || "Something went wrong");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });

      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    } catch (err) {
      setError(err.message || "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Replace this URL with the exact ALLER Technologies location
  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=ALLER+Technologies+Bangalore";

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glow 1 */}
        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -50, 70, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[120px]"
        />

        {/* Glow 2 */}
        <motion.div
          animate={{
            x: [0, -100, 50, 0],
            y: [0, 60, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 top-[30%] h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[130px]"
        />

        {/* Floating particles */}
        {[...Array(18)].map((_, index) => (
          <motion.span
            key={index}
            className="absolute h-1 w-1 rounded-full bg-cyan-300/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>


      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative px-5 pb-20 pt-32 sm:px-8 lg:px-16 lg:pb-28 lg:pt-40">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-4xl">

            {/* Small badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300 backdrop-blur-md"
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Sparkles size={15} />
              </motion.span>

              Let's build something extraordinary
            </motion.div>


            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl"
            >
              Let's turn your
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-500 bg-clip-text text-transparent">
                ideas into impact.
              </span>
            </motion.h1>


            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg"
            >
              Have a project in mind, a challenge to solve, or simply want
              to explore what's possible? Tell us what you're thinking.
              We'll take it from there.
            </motion.p>

          </div>


          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-14 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-slate-500"
          >
            <span className="h-px w-10 bg-slate-700" />
            Start a conversation
          </motion.div>

        </div>
      </section>


      {/* =====================================================
          CONTACT CONTENT
      ====================================================== */}

      <section className="relative px-5 pb-24 sm:px-8 lg:px-16">

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">


          {/* =================================================
              CONTACT FORM
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl backdrop-blur-xl sm:p-8 lg:p-10"
          >

            {/* Top glow */}
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-500/10 blur-[80px]" />

            <div className="relative">

              <div className="mb-10">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
                  Start a project
                </p>

                <h2 className="text-3xl font-semibold sm:text-4xl">
                  Tell us what you're
                  <span className="text-cyan-300"> building.</span>
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
                  Fill out the form and our team will get back to you
                  with the next steps.
                </p>
              </div>


              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name + Email */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <PremiumInput
                    label="Your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                  <PremiumInput
                    label="Email address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                </div>


                {/* Phone + Company */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <PremiumInput
                    label="Phone number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />

                  <PremiumInput
                    label="Company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />

                </div>


                {/* Message */}
                <div className="group relative">

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder=" "
                    className="peer w-full resize-none rounded-2xl border border-white/10 bg-black/20 px-5 pb-4 pt-7 text-sm text-white outline-none transition-all duration-300 placeholder:text-transparent focus:border-cyan-400/60 focus:bg-cyan-400/[0.03] focus:shadow-[0_0_30px_rgba(34,211,238,0.08)]"
                  />

                  <label className="pointer-events-none absolute left-5 top-5 origin-left text-sm text-slate-500 transition-all duration-300 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-cyan-300 peer-not-placeholder-shown:-translate-y-3 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:text-cyan-300">
                    Tell us about your project
                  </label>

                </div>


                {/* Submit */}
                <motion.button
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="group relative mt-3 flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-6 py-4 font-semibold text-white shadow-[0_10px_40px_rgba(59,130,246,0.2)] transition-all duration-300 hover:shadow-[0_15px_50px_rgba(34,211,238,0.3)]"
                >

                  {/* Moving shine */}
                  <motion.span
                    animate={{ x: ["-150%", "250%"] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      repeatDelay: 1,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-y-0 w-20 rotate-12 bg-white/20 blur-xl"
                  />

                  <span className="relative z-10">
                    {submitted ? "Message Sent!" : "Send Message"}
                  </span>

                  {submitted ? (
                    <CheckCircle2
                      size={19}
                      className="relative z-10"
                    />
                  ) : (
                    <Send
                      size={18}
                      className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  )}

                </motion.button>

              </form>

            </div>

          </motion.div>


          {/* =================================================
              RIGHT SIDE
          ================================================== */}

          <div className="space-y-6">


            {/* LOCATION CARD */}
            <motion.a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -5 }}
              className="group relative block min-h-[390px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] backdrop-blur-xl"
            >

              {/* Fake map background */}
              <div className="absolute inset-0 opacity-30">

                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                    backgroundSize: "45px 45px",
                  }}
                />

                {/* Roads */}
                <div className="absolute left-[20%] top-0 h-full w-px rotate-[25deg] bg-cyan-400/20" />

                <div className="absolute left-0 top-[55%] h-px w-full rotate-[-8deg] bg-violet-400/20" />

                <div className="absolute left-[65%] top-0 h-full w-px rotate-[-35deg] bg-blue-400/20" />

              </div>


              {/* Animated radar rings */}

              <div className="absolute left-1/2 top-[43%] -translate-x-1/2 -translate-y-1/2">

                <motion.div
                  animate={{
                    scale: [1, 2.8],
                    opacity: [0.35, 0],
                  }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400"
                />

                <motion.div
                  animate={{
                    scale: [1, 2.8],
                    opacity: [0.25, 0],
                  }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    delay: 1.4,
                    ease: "easeOut",
                  }}
                  className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400"
                />

                {/* Pin */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative flex h-16 w-16 items-center justify-center rounded-full border border-cyan-300/50 bg-cyan-400/10 shadow-[0_0_50px_rgba(34,211,238,0.35)] backdrop-blur-md"
                >

                  <MapPin
                    size={30}
                    className="fill-cyan-300 text-cyan-300"
                  />

                </motion.div>

              </div>


              {/* Location info */}

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#050816] via-[#050816]/90 to-transparent p-6 pt-28">

                <div className="flex items-end justify-between gap-5">

                  <div>

                    <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cyan-300">
                      <Navigation size={13} />
                      Find us
                    </div>

                    <h3 className="text-2xl font-semibold">
                      Our Location
                    </h3>

                    <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">
                      ALLER Technologies
                      <br />
                      Bangalore, Karnataka, India
                    </p>

                  </div>


                  <motion.div
                    whileHover={{ rotate: 45 }}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors group-hover:bg-cyan-400 group-hover:text-black"
                  >
                    <ArrowUpRight size={21} />
                  </motion.div>

                </div>

                <div className="mt-5 flex items-center gap-2 text-xs text-cyan-300">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
                  Click to open in Google Maps
                </div>

              </div>

            </motion.a>


            {/* CONTACT DETAILS */}

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">

              {/* Email */}
              <ContactInfo
                icon={<Mail size={21} />}
                title="Email us"
                value="info@aller.in"
                href="mailto:info@aller.in"
              />

              {/* Phone */}
              <ContactInfo
                icon={<Phone size={21} />}
                title="Call us"
                value="+91 XXXXX XXXXX"
                href="tel:+91XXXXXXXXXX"
              />

              {/* Working hours */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl"
              >

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-400/10 text-violet-300">
                  <Clock3 size={20} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Working hours
                  </p>

                  <p className="mt-1 text-sm font-medium text-white">
                    Mon – Fri · 9:00 AM – 6:00 PM
                  </p>
                </div>

              </motion.div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}

      <section className="relative px-5 pb-20 sm:px-8 lg:px-16">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-cyan-400/10 bg-gradient-to-br from-cyan-400/[0.08] via-blue-500/[0.04] to-violet-500/[0.08] p-8 text-center sm:p-12 lg:p-16"
        >

          <div className="absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[100px]" />

          <div className="relative">

            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-300">
              Your next big idea
            </p>

            <h2 className="text-3xl font-semibold sm:text-5xl">
              Let's make it
              <span className="text-cyan-300"> happen.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-slate-400">
              Great products start with great conversations.
              Tell us what you have in mind.
            </p>

          </div>

        </motion.div>

      </section>

    </main>
  );
};


/* ============================================================
   PREMIUM INPUT
============================================================ */

const PremiumInput = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
}) => {
  return (
    <div className="group relative">

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder=" "
        className="peer w-full rounded-2xl border border-white/10 bg-black/20 px-5 pb-4 pt-7 text-sm text-white outline-none transition-all duration-300 focus:border-cyan-400/60 focus:bg-cyan-400/[0.03] focus:shadow-[0_0_30px_rgba(34,211,238,0.08)]"
      />

      <label className="pointer-events-none absolute left-5 top-5 origin-left text-sm text-slate-500 transition-all duration-300 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-cyan-300 peer-not-placeholder-shown:-translate-y-3 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:text-cyan-300">
        {label}
      </label>

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-cyan-400 transition-all duration-500 peer-focus:w-[80%]" />

    </div>
  );
};


/* ============================================================
   CONTACT INFO
============================================================ */

const ContactInfo = ({ icon, title, value, href }) => {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.03]"
    >

      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300 transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-400/20">
        {icon}
      </div>

      <div className="min-w-0">

        <p className="text-xs uppercase tracking-wider text-slate-500">
          {title}
        </p>

        <p className="mt-1 truncate text-sm font-medium text-white">
          {value}
        </p>

      </div>

      <ArrowUpRight
        size={17}
        className="ml-auto text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300"
      />

    </motion.a>
  );
};

export default Contact;