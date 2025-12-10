import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaCompass,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaPinterest,
  FaGithub,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const currentTime = new Date().toLocaleString();

    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value;
    const firstLetter = name.charAt(0).toUpperCase();

    emailjs
      .send(
        "service_cdw3bba",
        "template_e9g4nbt",
        { name, email, message, time: currentTime, firstLetter },
        "GuJVC9WteISRrexWC"
      )
      .then(() => {
        setSent(true);
        setSending(false);
        form.reset();
        setTimeout(() => setSent(false), 3000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert(`Something went wrong: ${error.text || error.message}`);
        setSending(false);
      });
  };

  return (
    <motion.section
      className="min-h-screen relative flex flex-col items-center justify-center text-gray-300 overflow-hidden bg-[#0a0f1a]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Aurora Glow Gradient */}
      <motion.div
        className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "400% 400%" }}
      />

      {/* Animated Wave Background */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-[40vh]"
        >
          <path
            fill="url(#grad)"
            fillOpacity="0.4"
            d="M0,192L48,202.7C96,213,192,235,288,240C384,245,480,235,576,224C672,213,768,203,864,197.3C960,192,1056,192,1152,186.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
          <defs>
            <linearGradient id="grad" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="50%" stopColor="#7e22ce" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Header */}
      <motion.div
        className="relative inline-block mb-10 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 className="text-3xl font-semibold tracking-wide text-center">
          Get In Touch
        </motion.h2>
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        ></motion.div>
      </motion.div>

      <p className="text-gray-400 mt-3 text-lg z-10 text-center">
        Every great journey begins with a message — let’s start ours.
      </p>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl mt-10 z-10">
        {/* Contact Form */}
        <motion.form
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#0d1220]/60 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-blue-600/30"
        >
          <div className="mb-5">
            <label className="block text-gray-400 mb-2">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              required
              className="w-full bg-[#0a0f1a] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition-all text-gray-200"
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-400 mb-2">Email</label>
            <input
              name="email"
              type="email"
              placeholder="your@email.com"
              required
              className="w-full bg-[#0a0f1a] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition-all text-gray-200"
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-400 mb-2">Message</label>
            <textarea
              name="message"
              required
              placeholder="Write your message here..."
              className="w-full bg-[#0a0f1a] border border-gray-700 rounded-lg px-4 py-2 h-32 resize-none focus:outline-none focus:border-blue-500 transition-all text-gray-200"
            ></textarea>
          </div>

          <input type="hidden" name="time" />

          {/* Aurora Send Button */}
          <motion.button
            whileHover={!sent ? { scale: 1.05 } : {}}
            whileTap={!sent ? { scale: 0.95 } : {}}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            disabled={sending}
            className={`w-full py-3 rounded-lg font-medium text-white relative overflow-hidden ${
              sent
                ? "bg-green-600"
                : "bg-gradient-to-r from-blue-600 via-purple-700 to-cyan-600"
            } transition-all duration-300 border border-blue-500/30`}
            style={{ cursor: sending ? "not-allowed" : "pointer" }}
          >
            {sent && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 opacity-30"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              />
            )}
            <span className="relative z-10">
              {sending ? "Sending..." : sent ? "Sent ✓" : "Send Message"}
            </span>
          </motion.button>
        </motion.form>

        {/* Contact Info + Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6 flex flex-col justify-center"
        >
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-blue-500 text-2xl" />
            <div>
              <h3 className="text-white font-semibold">Address</h3>
              <p className="text-gray-400">Port Harcourt, Nigeria</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-blue-500 text-2xl" />
            <div>
              <h3 className="text-white font-semibold">Email</h3>
              <a
                href="mailto:izikdev101@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                izikdev101@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-blue-500 text-2xl" />
            <div>
              <h3 className="text-white font-semibold">Phone</h3>
              <p className="text-gray-400">+234 807 500 5248</p>
            </div>
          </div>

    {/* Social Links */}
    <div className="pt-4 border-t border-gray-700/50">
      <h3 className="text-white font-semibold mb-3">Follow</h3>
      <div className="flex space-x-5 text-2xl">
        {[
          { href: "https://linkedin.com/in/izikdev", icon: <FaLinkedin />, color: "#2563eb" },
          { href: "https://twitter.com/@izik_4545", icon: <FaTwitter />, color: "#38bdf8" },
          { href: "https://instagram.com/izikcharles", icon: <FaInstagram />, color: "#ec4899" },
          { href: "https://wa.me/2348075005248", icon: <FaWhatsapp />, color: "#22c55e" },
          { href: "https://pinterest.com/izikcharles45", icon: <FaPinterest />, color: "#ef4444" },
          { href: "https://github.com/izik-dev101", icon: <FaGithub />, color: "#9ca3af" },
        ].map((social, i) => (
        <motion.a
          key={i}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.2,
            textShadow: `0 0 10px ${social.color}, 0 0 20px ${social.color}`,
            color: social.color,
          }}
          transition={{ type: "spring", stiffness: 250, damping: 15 }}
          className="text-gray-400 hover:text-current transition-all"
        >
          {social.icon}
        </motion.a>
      ))}
      </div>
    </div>
    </motion.div>
    </div>

    {/* Floating Compass */}
    <motion.div
      className="absolute bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600 via-purple-700 to-cyan-500 opacity-60 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,50,0.5)] z-10"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
    >
      <FaCompass className="text-white text-2xl" />
    </motion.div>
</motion.section>
  );
}