import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const quickActions = [
  {
    label: "Our Services",
    message: "Tell me about your services",
  },
  {
    label: "Get a Quote",
    message: "I would like to get a quote",
  },
  {
    label: "Our Technologies",
    message: "What technologies do you work with?",
  },
  {
    label: "Contact Team",
    message: "I want to speak with your team",
  },
];

const initialMessages = [
  {
    id: 1,
    sender: "bot",
    text: "Hello! 👋",
  },
  {
    id: 2,
    sender: "bot",
    text: "I'm Aller AI. How can I help you today?",
  },
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  /* --------------------------------
     AUTO SCROLL
  -------------------------------- */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  /* --------------------------------
     FOCUS INPUT
  -------------------------------- */
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 400);
    }
  }, [isOpen]);

  /* --------------------------------
     SEND MESSAGE
  -------------------------------- */
  const sendMessage = async (text = input) => {
  const message = text.trim();

  if (!message || isTyping) return;

  const userMessage = {
    id: Date.now(),
    sender: "user",
    text: message,  
  };

  // Show user message immediately
  setMessages((prev) => [...prev, userMessage]);

  setInput("");
  setIsTyping(true);

  try {
    const response = await fetch(
      "http://localhost:5000/api/chat",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          message,

          conversation: messages.map((item) => ({
            role:
              item.sender === "user"
                ? "user"
                : "assistant",

            content: item.text,
          })),
        }),
      }
    );

  

    const data = await response.json();

    const botMessage = {
      id: Date.now() + 1,
      sender: "bot",
      text:
        data.reply ||
        "Sorry, I couldn't generate a response.",
    };

    setMessages((prev) => [
      ...prev,
      botMessage,
    ]);
  } catch (error) {
    console.error("AI Chat Error:", error);

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now() + 1,
        sender: "bot",
        text:
          "I'm having trouble connecting to Aller AI right now. Please try again in a moment.",
      },
    ]);
  } finally {
    setIsTyping(false);
  }
};

  useEffect(() => {
  const openChat = () => {
    setIsOpen(true);
  };

  window.addEventListener("open-chatbot", openChat);

  return () => {
    window.removeEventListener("open-chatbot", openChat);
  };
}, []);

  return (
    <>
      {/* =========================================================
          CHATBOT LAUNCHER
      ========================================================== */}

      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 30 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            onClick={() => setIsOpen(true)}
            className="
              fixed
              bottom-6
              right-6
              z-[999]
              w-16
              h-16
              rounded-full
              flex
              items-center
              justify-center
              bg-gradient-to-br
              from-cyan-400
              via-blue-500
              to-indigo-600
              shadow-[0_0_40px_rgba(34,211,238,0.45)]
              hover:scale-110
              transition-transform
              duration-300
              group
            "
            aria-label="Open Aller AI"
          >
            {/* Outer pulse */}

            <span
              className="
                absolute
                inset-0
                rounded-full
                border
                border-cyan-300/50
                animate-ping
                opacity-40
              "
            />

            {/* Inner glow */}

            <span
              className="
                absolute
                inset-[5px]
                rounded-full
                bg-gradient-to-br
                from-white/20
                to-transparent
              "
            />

            {/* AI Icon */}

            <div className="relative z-10 text-white">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M12 3a7 7 0 0 0-7 7v4a4 4 0 0 0 4 4h1" />

                <path d="M12 3a7 7 0 0 1 7 7v4a4 4 0 0 1-4 4h-1" />

                <path d="M8 13v-2" />

                <path d="M12 13v-3" />

                <path d="M16 13v-2" />

                <path d="M9 20h6" />
              </svg>
            </div>

            {/* Online indicator */}

            <span
              className="
                absolute
                top-1
                right-1
                w-3
                h-3
                rounded-full
                bg-emerald-400
                border-2
                border-[#030712]
              "
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* =========================================================
          CHAT WINDOW
      ========================================================== */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
              y: 40,
              transformOrigin: "bottom right",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.85,
              y: 40,
            }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 22,
            }}
            className="
              fixed
              z-[1000]
              bottom-5
              right-5
              w-[390px]
              max-w-[calc(100vw-24px)]
              h-[600px]
              max-h-[calc(100vh-30px)]
              overflow-hidden
              rounded-[28px]
              border
              border-white/10
              bg-[#050b16]/95
              backdrop-blur-2xl
              shadow-[0_30px_100px_rgba(0,0,0,0.65)]
              flex
              flex-col
            "
          >
            {/* =====================================================
                BACKGROUND GLOW
            ====================================================== */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div
                className="
                  absolute
                  -top-32
                  -right-20
                  w-72
                  h-72
                  rounded-full
                  bg-cyan-500/10
                  blur-[90px]
                "
              />

              <div
                className="
                  absolute
                  bottom-0
                  -left-20
                  w-64
                  h-64
                  rounded-full
                  bg-blue-600/10
                  blur-[90px]
                "
              />

              {/* Grid */}

              <div
                className="
                  absolute
                  inset-0
                  opacity-[0.025]
                  bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
                  bg-[size:30px_30px]
                "
              />
            </div>

            {/* =====================================================
                HEADER
            ====================================================== */}

            <div
              className="
                relative
                z-10
                flex
                items-center
                justify-between
                px-5
                py-4
                border-b
                border-white/10
              "
            >
              <div className="flex items-center gap-3">
                {/* AI Avatar */}

                <div className="relative">
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 10px rgba(34,211,238,0.2)",
                        "0 0 25px rgba(34,211,238,0.55)",
                        "0 0 10px rgba(34,211,238,0.2)",
                      ],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                    }}
                    className="
                      w-11
                      h-11
                      rounded-2xl
                      bg-gradient-to-br
                      from-cyan-400
                      to-blue-600
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <span className="text-white font-bold text-lg">
                      A
                    </span>
                  </motion.div>

                  <span
                    className="
                      absolute
                      -right-1
                      -bottom-1
                      w-3
                      h-3
                      rounded-full
                      bg-emerald-400
                      border-2
                      border-[#050b16]
                    "
                  />
                </div>

                <div>
                  <h3 className="text-white font-semibold">
                    Aller AI
                  </h3>

                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />

                    <span className="text-xs text-gray-400">
                      Online • Ready to help
                    </span>
                  </div>
                </div>
              </div>

              {/* Header buttons */}

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setMessages(initialMessages)}
                  className="
                    w-9
                    h-9
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    text-gray-400
                    hover:text-white
                    hover:bg-white/5
                    transition
                  "
                  title="New conversation"
                >
                  ↻
                </button>

                <button
                  onClick={() => setIsOpen(false)}
                  className="
                    w-9
                    h-9
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    text-gray-400
                    hover:text-white
                    hover:bg-white/5
                    transition
                  "
                  title="Close"
                >
                  ×
                </button>
              </div>
            </div>

            {/* =====================================================
                MESSAGES
            ====================================================== */}

            <div
              className="
                relative
                z-10
                flex-1
                overflow-y-auto
                px-4
                py-5
                space-y-4
                scrollbar-thin
                scrollbar-thumb-white/10
              "
            >
              {/* Welcome */}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-5"
              >
                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-3
                    py-1.5
                    rounded-full
                    bg-cyan-400/5
                    border
                    border-cyan-400/10
                    text-[11px]
                    text-cyan-300
                  "
                >
                  ✦ AI Assistant
                </span>
              </motion.div>

              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{
                    opacity: 0,
                    y: 12,
                    scale: 0.96,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className={`flex ${
                    message.sender === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`
                      max-w-[82%]
                      px-4
                      py-3
                      rounded-2xl
                      text-sm
                      leading-relaxed
                      ${
                        message.sender === "user"
                          ? `
                            bg-gradient-to-r
                            from-cyan-500
                            to-blue-600
                            text-white
                            rounded-br-md
                          `
                          : `
                            bg-white/[0.055]
                            border
                            border-white/[0.08]
                            text-gray-200
                            rounded-bl-md
                          `
                      }
                    `}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}

              {/* =================================================
                  TYPING INDICATOR
              ================================================== */}

              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex justify-start"
                  >
                    <div
                      className="
                        flex
                        items-center
                        gap-1.5
                        px-4
                        py-3
                        rounded-2xl
                        rounded-bl-md
                        bg-white/[0.055]
                        border
                        border-white/[0.08]
                      "
                    >
                      {[0, 1, 2].map((item) => (
                        <motion.span
                          key={item}
                          animate={{
                            y: [0, -4, 0],
                            opacity: [0.4, 1, 0.4],
                          }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            delay: item * 0.15,
                          }}
                          className="
                            w-1.5
                            h-1.5
                            rounded-full
                            bg-cyan-400
                          "
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={messagesEndRef} />
            </div>

            {/* =====================================================
                QUICK ACTIONS
            ====================================================== */}

            <div
              className="
                relative
                z-10
                px-4
                pb-3
              "
            >
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
                {quickActions.map((action) => (
                  <button
                    key={action.label}
                    onClick={() => sendMessage(action.message)}
                    className="
                      whitespace-nowrap
                      px-3
                      py-2
                      rounded-xl
                      text-[11px]
                      font-medium
                      text-gray-300
                      bg-white/[0.04]
                      border
                      border-white/[0.08]
                      hover:border-cyan-400/30
                      hover:bg-cyan-400/10
                      hover:text-cyan-300
                      transition-all
                      duration-300
                    "
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            </div>

            {/* =====================================================
                INPUT
            ====================================================== */}

            <div
              className="
                relative
                z-10
                p-4
                border-t
                border-white/10
                bg-[#040913]/80
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-2
                  p-2
                  rounded-2xl
                  bg-white/[0.045]
                  border
                  border-white/[0.08]
                  focus-within:border-cyan-400/40
                  focus-within:shadow-[0_0_25px_rgba(34,211,238,0.08)]
                  transition-all
                "
              >
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      sendMessage();
                    }
                  }}
                  placeholder="Ask Aller AI anything..."
                  className="
                    flex-1
                    min-w-0
                    bg-transparent
                    outline-none
                    text-sm
                    text-white
                    placeholder:text-gray-500
                    px-2
                  "
                />

                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => sendMessage()}
                  disabled={!input.trim() || isTyping}
                  className="
                    w-10
                    h-10
                    flex
                    items-center
                    justify-center
                    rounded-xl
                    bg-gradient-to-r
                    from-cyan-400
                    to-blue-500
                    text-black
                    font-bold
                    disabled:opacity-30
                    disabled:cursor-not-allowed
                    transition
                  "
                >
                  →
                </motion.button>
              </div>

              <p className="text-center text-[9px] text-gray-600 mt-2">
                Aller AI • Your digital assistant
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}