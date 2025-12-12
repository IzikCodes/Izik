import { motion } from "framer-motion";

export default function Projects() {
const projects = [
  {
    title: "DailyBlog",
    desc: "A community blogging platform where words find their home. Built with PHP and MySQL, designed for engagement and scalability.",
    img: "/images/blog.jpeg",
    type: "project",
    comingSoon: true,
    link: "http://localhost/dailyblog/index.php",
  },
  {
    title: "SCFUK",
    desc: "A donation platform for the Sickle Cell Foundation UK, designed for seamless contributions with responsive layouts and secure payments.",
    img: "/images/scfukhome.jpeg",
    type: "code",
    link: "https://github.com/izikcodes/scfuk",
  },
  {
    title: "ZEOrbit",
    desc: "ZEOrbit is a clean, responsive front-end interface for a modern one-touch payment solution, crafted to help businesses strengthen their revenue systems and scale with confidence.",
    img: "/images/ZEOrbit.jpeg",
    type: "code",
    link: "https://github.com/izikcodes/ZEOrbit",
  },
];

return (
  <>
  {/* Projects Section */}
<motion.section
  className="max-w-6xl mx-auto mt-24 px-6 md:px-12 text-center md:text-left"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  {/* Section Header */}
  <motion.div
    className="text-center mb-14"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-300 bg-clip-text text-transparent">
      Projects Done
    </h2>
    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
      A curated selection of projects built with precision, scalability, and user-focused design.  
      Each project reflects our commitment to clean code, innovation, and thoughtful engineering.
    </p>

    <motion.div
      className="mt-4 mx-auto h-[2px] w-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
      initial={{ width: 0 }}
      whileInView={{ width: "6rem" }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    />
  </motion.div>

  {/* Projects Grid */}
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
    {projects.map((project, i) => (
      <motion.a
        key={i}
        href={!project.comingSoon ? project.link : undefined}
        target={project.comingSoon ? undefined : "_blank"}
        rel="noopener noreferrer"
        className="block bg-gray-800/60 border border-gray-700 rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(59,130,246,0.25)] transition-all duration-500 hover:-translate-y-1"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: i * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ scale: project.comingSoon ? 1.0 : 1.02 }}
      >
        {/* Project Image */}
        <div className="h-56 w-full overflow-hidden">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-2 text-blue-400">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
            {project.desc}
          </p>

          {project.comingSoon ? (
            <motion.span
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-gray-500 italic font-medium inline-flex items-center"
            >
              🚧 Coming Soon
            </motion.span>
          ) : (
            <span className="text-blue-500 hover:text-blue-400 font-medium inline-flex items-center">
              {project.type === "code" ? "View Code →" : "View Project →"}
            </span>
          )}
        </div>
      </motion.a>
    ))}
  </div>
</motion.section>

  {/* Guiding Words Section */}
<motion.section className="mt-32 text-center">
  <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-300 bg-clip-text text-transparent">
    Guiding Words
  </h2>
  <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed mb-12">
    Principles we live by — short, intentional, and timeless.  
    Every project, every line of code, every experience is shaped by these values.
  </p>

  <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
    {[
      {
        title: "Precision",
        text: "Every line of code, every interface, crafted with deliberate intention.",
        color: "from-blue-400 via-indigo-500 to-cyan-500",
        glow: "shadow-[0_0_40px_rgba(59,130,246,0.25)]",
      },
      {
        title: "Clarity",
        text: "Designs that speak, experiences that flow — simplicity at every touchpoint.",
        color: "from-pink-400 via-fuchsia-500 to-purple-600",
        glow: "shadow-[0_0_40px_rgba(236,72,153,0.25)]",
      },
      {
        title: "Innovation",
        text: "Tradition meets the future in every solution, delivering timeless, forward-ready systems.",
        color: "from-teal-400 via-cyan-500 to-blue-400",
        glow: "shadow-[0_0_40px_rgba(45,212,191,0.25)]",
      },
    ].map((card, i) => (
      <motion.div
        key={i}
        className={`relative block p-10 rounded-2xl border border-gray-700 bg-gray-800/50 overflow-hidden transition-all duration-700 group ${card.glow}`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: i * 0.15 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.03, y: -4 }}
      >
        {/* Glow background */}
        <motion.div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-20 blur-2xl`}></motion.div>
        <motion.div
          className="absolute inset-0"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Card Content */}
        <div className="relative z-10">
          <h3 className="text-2xl font-semibold mb-2 text-blue-400 group-hover:text-blue-300 transition-colors duration-500">
            {card.title}
          </h3>
          <p className="text-gray-400 text-sm italic leading-relaxed">
            {card.text}
          </p>
        </div>

        {/* Subtle Border Light */}
        <div
          className={`absolute inset-0 rounded-2xl border border-transparent group-hover:border-[1px] group-hover:border-blue-500/40 transition-all duration-500`}
        ></div>
      </motion.div>
    ))}
  </div>
</motion.section>
</>
  );
}