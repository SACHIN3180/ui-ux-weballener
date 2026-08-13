import { useState } from "react";
import { NavLink } from "react-router-dom";
import allerLogo from "../assets/logo_new.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50 bg-[#050b16]/90 backdrop-blur-xl border-b border-white/10
 shadow-xl shadow-black/20  " >

        {/* Animated top line */}
        <div
          className="
            absolute
            top-0
            left-0
            w-full
            h-[2px]

            bg-gradient-to-r
            from-transparent
            via-cyan-400
            to-transparent

            animate-pulse
          "
        />

        <div className="max-w-7xl mx-auto px-6">

          <div className="h-20 flex items-center justify-between">


            {/* ================================================= */}
            {/* LOGO */}
            {/* ================================================= */}

            <NavLink
              to="/"
              className="
    flex
    items-center
    group
    animate-[fadeIn_0.8s_ease-out]
  "
            >
              {/* Logo */}
              <div
                className="
      relative
      w-40
      h-16
      flex
      items-center
      justify-center
      transition-all
      duration-500
      group-hover:scale-110
    "
              >
                <img
                  src={allerLogo}
                  alt="Aller Technologies"
                  className="
        w-full
        h-full
        object-contain
        transition-all
        duration-500
        group-hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]
      "
                />
              </div>
            </NavLink>


            {/* ================================================= */}
            {/* DESKTOP NAVIGATION */}
            {/* ================================================= */}

            <div
              className="
                hidden
                md:flex
                items-center
                gap-8
              "
            >

              {navItems.map((item, index) => (

                <NavLink
                  key={item.name}
                  to={item.path}

                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}

                  className={({ isActive }) =>
                    `
                    relative
                    group

                    py-2
                    px-1

                    text-sm
                    font-medium

                    animate-[navItem_0.6s_ease-out_both]

                    transition-all
                    duration-300

                    ${isActive
                      ? "text-cyan-400"
                      : "text-gray-300"
                    }

                    hover:text-white
                    `
                  }
                >

                  {item.name}


                  {/* Animated underline */}

                  <span
                    className="
                      absolute

                      left-1/2
                      bottom-0

                      h-[2px]

                      w-0

                      -translate-x-1/2

                      rounded-full

                      bg-gradient-to-r
                      from-cyan-400
                      to-blue-500

                      transition-all
                      duration-500

                      group-hover:w-full
                    "
                  />


                  {/* Glow */}

                  <span
                    className="
                      absolute

                      left-1/2
                      bottom-0

                      w-0
                      h-2

                      -translate-x-1/2

                      bg-cyan-400/40

                      blur-md

                      transition-all
                      duration-500

                      group-hover:w-full
                    "
                  />

                </NavLink>

              ))}

            </div>


            {/* ================================================= */}
            {/* LET'S TALK */}
            {/* ================================================= */}

            <button
              onClick={() => {
                window.dispatchEvent(new Event("open-chatbot"));
              }}
              className="
    hidden
    md:flex
    relative
    overflow-hidden
    items-center
    gap-2
    px-6
    py-3
    rounded-full
    border
    border-cyan-400/40
    bg-cyan-400/5
    text-cyan-400
    text-sm
    font-semibold
    transition-all
    duration-300
    hover:bg-cyan-400
    hover:text-black
    hover:-translate-y-1
    hover:shadow-lg
    hover:shadow-cyan-400/40
    group
  "
            >
              <span
                className="
      absolute
      top-0
      -left-20
      w-10
      h-full
      bg-white/30
      skew-x-[-20deg]
      group-hover:left-[120%]
      transition-all
      duration-700
    "
              />

              <span className="relative z-10">
                Let's Talk
              </span>

              <span
                className="
      relative
      z-10
      transition-transform
      duration-300
      group-hover:translate-x-1
    "
              >
                →
              </span>
            </button>


            {/* ================================================= */}
            {/* MOBILE BUTTON */}
            {/* ================================================= */}

            <button
              onClick={() => setMenuOpen(!menuOpen)}

              className="
                md:hidden

                relative

                w-11
                h-11

                rounded-xl

                border
                border-white/10

                bg-white/5

                flex
                flex-col
                items-center
                justify-center

                gap-1.5

                transition-all
                duration-300

                hover:border-cyan-400/40
                hover:bg-cyan-400/10
              "
            >

              <span
                className={`
                  w-5
                  h-[2px]

                  bg-white

                  rounded-full

                  transition-all
                  duration-300

                  ${menuOpen
                    ? "rotate-45 translate-y-2"
                    : ""
                  }
                `}
              />

              <span
                className={`
                  w-5
                  h-[2px]

                  bg-white

                  rounded-full

                  transition-all
                  duration-300

                  ${menuOpen
                    ? "opacity-0"
                    : ""
                  }
                `}
              />

              <span
                className={`
                  w-5
                  h-[2px]

                  bg-white

                  rounded-full

                  transition-all
                  duration-300

                  ${menuOpen
                    ? "-rotate-45 -translate-y-2"
                    : ""
                  }
                `}
              />

            </button>

          </div>


          {/* ================================================= */}
          {/* MOBILE MENU */}
          {/* ================================================= */}

          <div
            className={`
              md:hidden

              overflow-hidden

              transition-all
              duration-500

              ${menuOpen
                ? "max-h-[500px] opacity-100 pb-5"
                : "max-h-0 opacity-0"
              }
            `}
          >

            <div
              className="
                p-3

                rounded-2xl

                border
                border-white/10

                bg-[#08111f]

                shadow-2xl
              "
            >

              {navItems.map((item, index) => (

                <NavLink
                  key={item.name}
                  to={item.path}

                  onClick={() => setMenuOpen(false)}

                  style={{
                    animationDelay: `${index * 80}ms`,
                  }}

                  className={({ isActive }) =>
                    `
                    flex
                    items-center
                    justify-between

                    px-4
                    py-3

                    rounded-xl

                    text-sm

                    animate-[navItem_0.4s_ease-out_both]

                    transition-all
                    duration-300

                    ${isActive
                      ? "bg-cyan-400/10 text-cyan-400"
                      : "text-gray-300 hover:bg-white/5 hover:text-cyan-400"
                    }
                    `
                  }
                >

                  {item.name}

                  <span
                    className="
                      text-cyan-400
                      transition-transform
                      duration-300
                    "
                  >
                    →
                  </span>

                </NavLink>

              ))}


              {/* Mobile CTA */}

              <NavLink
                to="/chatbot"

                onClick={() => setMenuOpen(false)}

                className="
                  flex
                  items-center
                  justify-center

                  mt-3

                  py-3

                  rounded-xl

                  bg-gradient-to-r
                  from-cyan-400
                  to-blue-500

                  text-black

                  font-semibold
                  text-sm

                  transition-all
                  duration-300

                  hover:shadow-lg
                  hover:shadow-cyan-400/30
                "
              >
                Let's Talk →
              </NavLink>

            </div>

          </div>

        </div>

      </nav>


      {/* ===================================================== */}
      {/* CUSTOM ANIMATIONS */}
      {/* ===================================================== */}

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }

            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes navItem {
            from {
              opacity: 0;
              transform: translateY(-15px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </>
  );
}