import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function About() {
  const faqData = [
    {
      question: "How do we approach a project?",
      answer:
        "We begin by understanding your goals, defining clear requirements, and crafting solutions with deliberate attention to clarity, efficiency, and user experience.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Timelines vary depending on complexity, but we prioritize delivering quality solutions within agreed-upon milestones while keeping communication transparent.",
    },
    {
      question: "Do you provide ongoing support after delivery?",
      answer:
        "Absolutely. We offer maintenance, updates, and guidance to ensure that your systems continue to perform seamlessly after launch.",
    },
    {
      question: "Which technologies do you specialize in?",
      answer:
        "We focus on modern web and software development stacks including React, Tailwind, PHP, MySQL, and productivity tools that streamline operations and collaboration.",
    },
    {
      question: "How do you ensure the solution fits my business needs?",
      answer:
        "Each solution is carefully designed with your objectives in mind. We blend strategy, usability, and aesthetics to create impactful, future-ready systems.",
    },
  ];

  // State for which FAQ is open
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      className="relative max-w-4xl mx-auto mt-24 px-6 md:px-10 text-gray-300 leading-relaxed overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-300 bg-clip-text text-transparent">
          About
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          A <span className="text-blue-400">software solutions studio</span>{" "}
          crafting digital experiences — where design meets code, and tradition
          meets the future. Our work rests on balance: clarity over excess, calm
          over chaos, and systems that quietly perform with precision.
        </p>
        <motion.div
          className="mt-4 mx-auto h-[2px] w-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Image & CV Buttons */}
      <motion.div
        className="flex flex-wrap justify-center items-center gap-6 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Link
          to="/showroom"
          className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-medium shadow-lg hover:shadow-[0_0_25px_rgba(147,51,234,0.5)] transition-all duration-500 text-center min-w-[140px] sm:min-w-[160px]"
        >
          Gallery
        </Link>

        <a
          href="/cv/Ikeogu Zikora.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-full border border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400 transition-all duration-500 text-center min-w-[140px]"
        >
          Download CV
        </a>
      </motion.div>

      {/* Philosophy */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <h3 className="text-2xl font-semibold text-blue-400 mb-6">The Method</h3>
        <div className="space-y-3 text-gray-400 text-base">
          <p>We believe in designing with restraint — because calm brings clarity.</p>
          <p>Every interface is approached with intention — function before flourish.</p>
          <p>
            We honor timeless principles: proportion, rhythm, and balance — now
            expressed in code and digital experiences.
          </p>
        </div>
      </motion.div>

      {/* Studios Overview */}
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {[
          {
            name: "Core Utility",
            desc: "The essential purpose behind every interface — built for clarity, efficiency, and seamless performance.",
            color: "from-purple-500 via-fuchsia-500 to-pink-400",
          },
          {
            name: "Principles",
            desc: "Guiding rules that ensure every design is intuitive, consistent, and user-centered.",
            color: "from-sky-400 via-blue-500 to-indigo-600",
          },
          {
            name: "Restraint",
            desc: "Elegance in simplicity — delivering solutions that are deliberate, balanced, and future-ready.",
            color: "from-teal-400 via-cyan-400 to-blue-400",
          },
        ].map((studio, i) => (
          <motion.div
            key={i}
            className="relative p-8 rounded-2xl border border-gray-700 bg-gray-800/40 text-center overflow-hidden backdrop-blur-sm group transition-all duration-500"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${studio.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-700`}
              animate={{
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
            <div className="relative z-10">
              <h4 className="text-xl font-semibold text-blue-400 mb-2">{studio.name}</h4>
              <p className="text-gray-400 text-sm italic">{studio.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Reflection */}
      <motion.div
        className="text-center max-w-2xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-gray-400 italic">
          Away from the screen, I observe the play of light and the rhythm of digital spaces —  
          because both code and thoughtful design begin in stillness.
        </p>
        <p className="text-gray-400 italic mt-4">
          Code and design are not merely tasks — they’re philosophies.  
          I work within them, attuned to their subtle patterns, shaping each experience with care.
        </p>
        <p className="text-gray-400 italic mt-6">
          To create — whether in logic or layout — is to honor what endures.  
          I believe impact lies not in invention alone, but in the quiet continuity between vision and execution.
        </p>
      </motion.div>

  {/* FAQ Section */}
    <motion.div
      className="max-w-4xl mx-auto mt-24 px-6 md:px-10 text-gray-300 mb-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold mb-10 text-center text-blue-400">
        Frequently Asked Questions
      </h3>

      <div className="space-y-6">
        {faqData.map((faq, i) => {
          const isOpen = i === openIndex;
          return (
            <motion.div
              key={i}
              className="relative bg-gray-800/50 border border-gray-700 rounded-2xl p-5 cursor-pointer overflow-hidden"
              onClick={() => toggleFaq(i)}
            >
              {/* Glow Layer */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-0 blur-xl pointer-events-none"
                animate={{ opacity: [0.05, 0.2, 0.05] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative z-10 flex justify-between items-center">
                <h4
                  className={`font-medium text-lg transition-colors duration-300 ${
                    isOpen ? "text-blue-400" : "text-gray-300"
                  }`}
                >
                  {faq.question}
                </h4>

                {/* SVG Arrow */}
                <motion.svg
                  className="w-5 h-5 text-blue-400 ml-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M10 14a1 1 0 01-.707-.293l-4-4a1 1 0 011.414-1.414L10 11.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 14z"
                    clipRule="evenodd"
                  />
                </motion.svg>
              </div>

              <motion.div
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                initial={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden mt-2 text-gray-400 text-sm leading-relaxed"
              >
                {faq.answer}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>

      {/* Contact */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <p className="text-gray-400 mb-6">
          If you’d like to build something meaningful in the digital space, I’d be glad to hear from you.
        </p>
        <Link
          to="/contact"
          className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-medium shadow-lg hover:shadow-[0_0_25px_rgba(147,51,234,0.5)] transition-all duration-500"
        >
          Let’s Connect
        </Link>
      </motion.div>
    </motion.section>
  );
}