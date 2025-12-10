import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Home() {
// Typewriter Code Display
const codeLines = [
  '<span class="text-blue-400">const</span> developer = <span class="text-yellow-300">"Ikeogu Zikora"</span>;',
  '<span class="text-blue-400">const</span> craft = <span class="text-green-400">"Software Solutions"</span>;',
  '<span class="text-purple-400">function</span> envisionAndBuild() {',
  '  <span class="text-pink-400">return</span> <span class="text-yellow-300">"Systems shaped with precision"</span>;',
  '}',
  '<span class="text-gray-400">console.log</span>(<span class="text-orange-400">"Where tradition guides the code, and the future waits to run..."</span>);',
];
const [displayedLines, setDisplayedLines] = useState<string[]>([]);
const [currentLine, setCurrentLine] = useState("");
const [lineIndex, setLineIndex] = useState(0);

useEffect(() => {
  let timer: ReturnType<typeof setTimeout>;
    if (lineIndex < codeLines.length) {
      const currentText = codeLines[lineIndex];
        const nextCharIndex = currentLine.length;
        if (nextCharIndex < currentText.length) {
        timer = setTimeout(() => {
        setCurrentLine(currentText.slice(0, nextCharIndex + 1));
        }, 50);
        } else {
        timer = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, currentText]);
        setCurrentLine("");
        setLineIndex((prev) => prev + 1);
        }, 500);
        }
        } else {
        timer = setTimeout(() => {
        setDisplayedLines([]);
        setCurrentLine("");
        setLineIndex(0);
      }, 3000);
    }
  return () => clearTimeout(timer);
}, [currentLine, lineIndex, codeLines]);

// Compass, Weather, and Location
const [direction, setDirection] = useState("N/A");
const [weather, setWeather] = useState({ temp: null, desc: "Loading..." });
const [location, setLocation] = useState({ city: "Unknown", country: "" });

// Compass
useEffect(() => {
  if (window.DeviceOrientationEvent) {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      const alpha = event.alpha;
        if (alpha !== null) {
        const dirs = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
        const index = Math.round(alpha / 45) % 8;
        setDirection(dirs[index]);
        }
        };
        window.addEventListener("deviceorientationabsolute", handleOrientation, true);
        window.addEventListener("deviceorientation", handleOrientation, true);
        return () => {
        window.removeEventListener("deviceorientationabsolute", handleOrientation);
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }
}, []);

// Weather and Location
useEffect(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
        const locationRes = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        );
        const locationData = await locationRes.json();
        setLocation({
        city: locationData.city || locationData.locality || "Unknown",
        country: locationData.countryName || "",
        });

        const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
        );
        const weatherData = await weatherRes.json();
        const { temperature, weathercode } = weatherData.current_weather;

        const conditions: Record<number, string> = {
        0: "Clear Sky",
        1: "Mainly Clear",
        2: "Partly Cloudy",
        3: "Overcast",
        45: "Fog",
        51: "Drizzle",
        61: "Rain",
        71: "Snow",
        80: "Rain Showers",
        95: "Thunderstorm",
        };

        setWeather({
        temp: temperature,
        desc: conditions[weathercode] || "Unknown",
      });
    });
  }
}, []);

// Testimonials
const testimonials = [
  {
    quote: "Izik crafted my project with a sence of peace and rhyme — structured, scalable, elegant, and profoundly thoughtful.",
    author: "Mr. Nnaemeka Achor.",
    role: "Happy Client",
    img: "/images/anchor.jpg",
  },
  {
    quote: "DailyBlog shows not just technical mastery, but empathy for the user — every page feels intentional.",
    author: "Progress Iwhyn.",
    role: "Ghost Writer",
    img: "/images/schoolgirl.png",
  },
  {
    quote: "A rare blend of artistry and logic. Izik doesn’t just envision — he brings it to life.",
    author: "Agustine Chidozie.",
    role: "Creative Director",
    img: "/images/ert.PNG",
  },
  {
    quote: "Every detail in DailyBlog speaks — structure, rhythm, and quiet intent and thought. His designs breathe refinement.",
    author: "Clara Ijeoma.",
    role: "Pro Blogger",
    img: "/images/cfp3.jpg",
  },
  {
    quote: "After contacting Izik for my site — the later surprise was more like wow to see that what was built, was my dream.",
    author: "Tochukwu Godfery.",
    role: "Happy Client",
    img: "/images/teacher.jpeg",
  },
];

const [current, setCurrent] = useState(0);
const nextTestimonial = () => setCurrent((prev) => (prev + 1) % testimonials.length);
const prevTestimonial = () =>
setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
return (
<>

{/* Introduction Section */}
<motion.section
    className="flex flex-col md:flex-row items-center justify-between min-h-[90vh] px-6 md:px-10 lg:px-16 overflow-hidden"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    viewport={{ once: true }}
>

{/* Text Section */}
<motion.div
  className="flex-1 text-center md:text-left space-y-4"
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
  viewport={{ once: true }}
  >
  <h1 className="text-5xl font-bold">
    Welcome to <span className="text-blue-500">Izik</span>
  </h1>
  <p className="text-gray-300 text-lg max-w-xl mx-auto md:mx-0">
    A development space dedicated to crafting robust, scalable web systems — delivering
    clean, maintainable engineering rooted in proven standards, while steadily
    advancing toward comprehensive software and IT solutions through disciplined,
    forward-thinking craftsmanship.
  </p>

  <Link to="/projects">
    <motion.button
      className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      >
      View Projects
    </motion.button>
  </Link>
</motion.div>

{/* Glowing Animated Code Orbit */}
<motion.div
    className="flex-1 flex justify-center mt-10 md:mt-0 relative"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
    viewport={{ once: true }}
>

{/* Rotating Glow */}
<motion.div
  className="absolute inset-0 flex justify-center items-center hidden md:flex"
  animate={{ rotate: 360 }}
  transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
>
  <div className="w-[22rem] h-[22rem] sm:w-[26rem] sm:h-[26rem] lg:w-[28rem] lg:h-[28rem] rounded-full bg-gradient-to-tr from-blue-600 via-purple-700 to-pink-600 blur-3xl opacity-40"></div>
</motion.div>

{/* Code Container */}
<div
    className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 
    bg-[#0a0f1a]/90 rounded-full flex flex-col items-center justify-center 
    shadow-[0_0_40px_rgba(0,0,50,0.6)] border-4 border-blue-600/70 text-sm sm:text-base md:text-lg 
    font-mono overflow-hidden p-6 leading-relaxed text-center backdrop-blur-sm"
>

{/* Terminal Lights */}
<div className="absolute top-3 left-4 flex gap-2">
    <span className="w-3 h-3 bg-red-500 rounded-full shadow-red-500/50 shadow-md"></span>
    <span className="w-3 h-3 bg-yellow-500 rounded-full shadow-yellow-500/50 shadow-md"></span>
    <span className="w-3 h-3 bg-green-500 rounded-full shadow-green-500/50 shadow-md"></span>
</div>

{/* Centered Code Lines */}
<div className="flex flex-col items-center justify-center w-full h-full text-green-400">
  {displayedLines.map((line, i) => (
    <div
    key={i}
    dangerouslySetInnerHTML={{ __html: line }}
    className="text-green-400"
    />
    ))}
    <div
    dangerouslySetInnerHTML={{ __html: currentLine + '|' }}
    className="text-green-400"
  />
</div>
</div>
</motion.div>
</motion.section>

{/* Mission & Vision Section */}
<motion.section
    className="mt-20 px-6 md:px-16 py-16 text-center md:text-left"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
>
<div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-12">

{/* Mission */}
<motion.div
    className="flex-1"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.9, delay: 0.2 }}
    viewport={{ once: true }}
>
    <h2 className="text-4xl font-bold mb-4">Mission</h2>
    <p className="text-gray-300 text-lg leading-relaxed">
      To craft digital experiences that feel intuitive and reliable — blending precision and
      purpose, where every line of code serves clarity, efficiency, and impact.
    </p>
</motion.div>

{/* Golden Divider */}
<motion.div
    className="hidden md:block w-px bg-gradient-to-b from-yellow-400 via-amber-500 to-yellow-400 self-stretch rounded-full"
    initial={{ scaleY: 0 }}
    whileInView={{ scaleY: 1 }}
    transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
    viewport={{ once: true }}
    style={{ transformOrigin: "center" }}
/>

{/* Vision */}
<motion.div
    className="flex-1 text-center md:text-right"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.9, delay: 0.4 }}
    viewport={{ once: true }}
>
    <h2 className="text-4xl font-bold mb-4">Vision</h2>
    <p className="text-gray-300 text-lg leading-relaxed">
      To build lasting, innovative solutions where modern technology honors
      proven principles — shaping a future of scalable, user-focused systems
      without losing sight of the standards that sustain them.
    </p>
</motion.div>
</div>
</motion.section>

{/* Craft Section */}
<motion.section
    className="mt-16 px-6 md:px-16 text-center"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    viewport={{ once: true }}
>

{/* Title with Animated Underline */}
<motion.div
    className="relative inline-block mb-10"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
>
<motion.h3
    className="text-3xl font-semibold tracking-wide"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
>
    Crafts
</motion.h3>

<motion.div
    className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
    initial={{ width: 0 }}
    whileInView={{ width: "100%" }}
    transition={{ duration: 1.2, ease: "easeInOut" }}
></motion.div>
</motion.div>

{/* Craft Cards */}
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
{[
  {
    title: "Software Solutions",
    desc: "Crafting production-grade systems tailored to real-world needs, built for longevity and reliability.",
    icon: "fa-solid fa-laptop-code",
  },
  {
    title: "Web Development",
    desc: "From concept to deployment, we build responsive, dynamic experiences designed to perform and scale.",
    icon: "fa-solid fa-code",
  },
  {
    title: "Optimization",
    desc: "Refining performance to its peak — fast, efficient, and precise.",
    icon: "fa-solid fa-gauge-high",
  },
  {
    title: "UI / UX Design",
    desc: "Interfaces that speak clearly — intuitive, user-centered, and seamless in flow.",
    icon: "fa-solid fa-palette",
  },
].map((craft, index) => (
<motion.div
    key={index}
    className="bg-gray-800/50 rounded-2xl p-6 text-center border border-gray-700 
      hover:border-blue-500 hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] 
      transition-all duration-300"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
>
    <i className={`${craft.icon} text-4xl text-blue-500 mb-4`}></i>
    <h4 className="text-xl font-semibold mb-2">{craft.title}</h4>
    <p className="text-gray-400 text-sm">{craft.desc}</p>
</motion.div>
))}
</div>
</motion.section>

{/* My Works Section */}
<motion.section
    className="mt-24 px-6 md:px-16 text-center md:text-left relative"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
>

{/* Section Heading */}
<motion.div
    className="text-center mb-14"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
>
    <h2 className="text-4xl font-bold mb-3">Works</h2>
    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
      A showcase of digital solutions we’ve crafted —  
      each project built with precision, scalability, and user-focused design,  
      where technology meets thoughtful engineering to create seamless experiences.
    </p>

{/* Soft Underline Animation */}
<motion.div
  className="mt-4 mx-auto h-[2px] w-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
  initial={{ width: 0 }}
  whileInView={{ width: "6rem" }}
  transition={{ duration: 1.2, ease: "easeInOut" }}
/>
</motion.div>

{/* Projects Grid */}
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
{[
    {
      title: "SCFUK",
      desc: "A donation platform for the Sickle Cell Foundation UK, designed for seamless contributions with responsive layouts, secure payments, and intuitive navigation.",
      img: "/images/scfukhome.jpeg",
      link: "https://github.com/Izik-dev101/SCFUK",
      type: "code",
    },
    {
      title: "ZEOrbit",
      desc: "ZEOrbit is a clean, responsive front-end interface for a modern one-touch payment solution, crafted to help businesses strengthen their revenue systems and scale with confidence.",
      img: "/images/ZEOrbit.jpeg",
      link: "https://github.com/Izik-dev101/ZEOrbit",
      type: "code",
    },
    {
      title: "DailyBlog",
      desc: "A community blogging platform built with PHP and MySQL, designed for seamless content creation, sharing, and engagement.",
      img: "/images/blog.jpeg",
      link: "#",
      type: "comingSoon",
    },
].map((project, i) => (
<motion.a
    key={i}
    href={project.type !== "comingSoon" ? project.link : undefined}
    target={project.type !== "comingSoon" ? "_blank" : undefined}
    rel="noopener noreferrer"
    className="block bg-gray-800/60 border border-gray-700 rounded-2xl overflow-hidden hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all duration-500"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: i * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ scale: project.type === "comingSoon" ? 1.0 : 1.02 }}
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
  <h3 className="text-2xl font-semibold mb-2 text-blue-400">{project.title}</h3>
  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.desc}</p>

  {project.type === "comingSoon" ? (
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

{/* Philosophy, Tools, and Testimonials */}
<motion.section
    className="relative mt-24 px-6 md:px-16 py-20 bg-gradient-to-b from-[#0a0f1a] via-[#101622] to-[#0a0f1a] rounded-2xl overflow-hidden text-center md:text-left"
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, ease: "easeOut" }}
    viewport={{ once: true }}
>
<motion.div
    className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.15)_0%,_transparent_70%)]"
    animate={{ scale: [1, 1.1, 1] }}
    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
/>
<div className="relative z-10 max-w-6xl mx-auto space-y-20">

{/* Philosophy Text */}
<motion.div
    className="text-center max-w-3xl mx-auto"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
>
  <h2 className="text-4xl font-bold mb-6 text-blue-400">Philosophy</h2>
  <p className="text-gray-300 text-lg leading-relaxed">
    Our work is a dialogue between <span className="text-blue-500">tradition and technology</span> —  
    between proven engineering principles and the evolving demands of the digital world.  
    In every project, we seek harmony —  
    code that performs, systems that endure, and experiences that feel seamless for every user.
  </p>
</motion.div>

{/* Tools of the Trade */}
<motion.div 
    className="text-center"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, delay: 0.2 }}
    viewport={{ once: true }}
>
<h3 className="text-3xl font-semibold text-blue-400 mb-10">Tools of the Trade</h3>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-gray-300">
{[
    // Coding
    { name: "HTML5", icon: "fa-brands fa-html5" },
    { name: "CSS3", icon: "fa-brands fa-css3-alt" },
    { name: "JavaScript", icon: "fa-brands fa-js" },
    { name: "React", icon: "fa-brands fa-react" },
    { name: "PHP", icon: "fa-brands fa-php" },
    { name: "MySQL", icon: "fa-solid fa-database" },
    { name: "GitHub", icon: "fa-brands fa-github" },

    // Design
    { name: "Tailwind CSS", icon: "fa-solid fa-wind" },
    { name: "Bootstrap", icon: "fas fa-b" },
    { name: "Figma", icon: "fab fa-figma" },
    { name: "Canva", icon: "fas fa-c" },

    // Productivity
    { name: "PowerPoint", icon: "fas fa-file-powerpoint" },
    { name: "Excel", icon: "fas fa-file-excel", desc: "A dependable grid for logic and clarity — perfect for data analysis, records, and well-structured planning." },
    { name: "Microsoft Teams", icon: "fas fa-users", desc: "Collaboration hub for meetings, teamwork, and unified communication." },
    { name: "Google Docs", icon: "fab fa-google", desc: "Collaborative document editing and content creation." },
    { name: "Google Sheets", icon: "fab fa-google", desc: "Cloud-based spreadsheets for data management and analysis." },
    { name: "Google Slides", icon: "fab fa-google", desc: "Presentation tool for polished and shareable slides." },

    // AI / Assistant
    { 
      name: "ChatGPT", 
      icon: "fa-solid fa-robot", 
      desc: "AI-assisted development for brainstorming, debugging, and generating ideas." 
    },
].map((tool, i) => (
<motion.div
    key={i}
    className="flex flex-col items-center justify-center bg-gray-800/40 border border-gray-700 rounded-xl py-6 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all duration-300"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: i * 0.05 }}
>
    <i className={`${tool.icon} text-3xl text-blue-400 mb-3`}></i>
    <p className="text-sm font-medium">{tool.name}</p>
    {tool.desc && <p className="text-xs text-gray-400 mt-1 max-w-[120px]">{tool.desc}</p>}
</motion.div>
))}
</div>
</motion.div>

{/* Testimonials Section */}
<motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    viewport={{ once: true }}
    className="text-center"
>
  <h3 className="text-3xl font-semibold text-blue-400 mb-8">
    Words from Others
  </h3>
  <div className="relative max-w-xl mx-auto">
<AnimatePresence mode="wait">
<motion.div
    key={current}
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.6 }}
    className="bg-gray-800/60 border border-gray-700 rounded-2xl p-8 shadow-lg"
>
  <p className="text-gray-300 italic mb-6">
    “{testimonials[current].quote}”
  </p>
  <div className="flex items-center justify-center gap-3">
  <img
    src={testimonials[current].img}
    alt={testimonials[current].author}
    className="w-12 h-12 rounded-full object-cover border border-gray-600"
  />
    <div className="text-left">
      <p className="text-blue-400 font-semibold">
        {testimonials[current].author}
      </p>
      <p className="text-sm text-gray-500">
        {testimonials[current].role}
      </p>
    </div>
  </div>
</motion.div>
</AnimatePresence>

{/* Arrow Controls */}
<div className="absolute inset-y-0 left-0 flex items-center">
  <button
    onClick={prevTestimonial}
    className="p-2 rounded-full bg-gray-700/50 hover:bg-blue-600 transition"
  >
    <ArrowLeft size={20} />
  </button>
</div>
<div className="absolute inset-y-0 right-0 flex items-center">
  <button
    onClick={nextTestimonial}
    className="p-2 rounded-full bg-gray-700/50 hover:bg-blue-600 transition"
  >
    <ArrowRight size={20} />
  </button>
</div>
</div>
</motion.div>
</div>
</motion.section>

{/* Compass, Weather, and Location */}
<motion.section
    className="relative mt-20 px-6 md:px-16 py-16 text-center bg-gray-900/60 rounded-2xl overflow-hidden"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
>
  <h2 className="text-3xl font-semibold text-blue-400 mb-8">
    Compass, Weather & Location
  </h2>

  <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

{/* Compass */}
<motion.div
  className="flex flex-col items-center"
  animate={{ rotate: 360 }}
  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
>
  <i className="fas fa-compass text-4xl text-yellow-400 mb-4"></i>
  <p className="text-xl font-semibold text-white">{direction}</p>
  <p className="text-gray-400 text-sm">Direction</p>
</motion.div>

{/* Weather */}
<motion.div
    className="flex flex-col items-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2 }}
>
    <i className="fas fa-cloud-sun text-4xl text-blue-300 mb-4"></i>
    <p className="text-xl font-semibold text-white">
      {weather.temp ? `${weather.temp}°C` : "—"}
    </p>
    <p className="text-gray-400 text-sm">{weather.desc}</p>
</motion.div>

{/* Location */}
<motion.div
    className="flex flex-col items-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.4 }}
>
    <i className="fas fa-map-marker-alt text-4xl text-red-400 mb-4"></i>
    <p className="text-xl font-semibold text-white">
      {location.city}, {location.country}
    </p>
    <p className="text-gray-400 text-sm">Your Location</p>
</motion.div>
</div>
</motion.section>
</>
);
}