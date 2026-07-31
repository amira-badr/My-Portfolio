import { motion } from "framer-motion";
import { Sparkles, Code2, Server, Layout, Database, Globe } from "lucide-react";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaFigma 
} from "react-icons/fa";
import { 
  SiTailwindcss, 
  SiBootstrap, 
  SiExpress, 
  SiMongodb, 
  SiNextdotjs, 
  SiPostman 
} from "react-icons/si";
import profile from "../assets/profile.jpg";

function About() {
  const skillsList = [
    {
      title: "Front-End Development",
      description: "Building responsive and interactive user interfaces using modern frameworks.",
      icon: <Layout className="text-cyan-400" size={26} />,
    },
    {
      title: "Back-End Development",
      description: "Developing robust server-side logic, routing, and APIs.",
      icon: <Server className="text-cyan-400" size={26} />,
    },
    {
      title: "Database Management",
      description: "Designing and handling secure data storage systems.",
      icon: <Database className="text-cyan-400" size={26} />,
    },
    {
      title: "MERN Stack Integration",
      description: "Connecting client-side apps seamlessly to back-end services.",
      icon: <Code2 className="text-cyan-400" size={26} />,
    },
  ];

  // اللغات والمكتبات بأيقوناتها الحقيقية والملونة
  const techStack = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-xl" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-xl" /> },
    { name: "React.js", icon: <FaReact className="text-cyan-400 text-xl animate-spin-slow" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white text-xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-xl" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500 text-xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-xl" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300 text-xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-xl" /> },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-600 text-xl" /> },
    { name: "Figma", icon: <FaFigma className="text-pink-500 text-xl" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500 text-xl" /> },
  ];

  return (
    <section className="relative min-h-screen bg-slate-950 py-16 text-slate-100">
      
      {/* تأثيرات الإضاءة الخلفية */}
      <div className="absolute top-1/4 left-10 w-[350px] h-[350px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* عنوان القسم */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs tracking-widest uppercase backdrop-blur-md mb-3 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
            <Sparkles size={14} className="animate-spin" />
            Get To Know Me
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-100">
            About <span className="text-cyan-400">Me</span>
          </h2>
        </div>

        {/* الجزء الأول: الصورة شمال والكارت الأصغر يمين */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">

          {/* قسم الصورة - على الشمال */}
          <div className="lg:col-span-4 flex justify-center items-center">
            <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] rounded-2xl border-4 border-cyan-400/80 overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.3)] bg-slate-900 group">
              <img
                src={profile}
                alt="Mona Badr Ali"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* قسم النص - على اليمين */}
          <div className="lg:col-span-8 flex flex-col items-end text-right">
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md shadow-xl hover:border-cyan-500/50 transition-all duration-300 w-full max-w-2xl">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4 ml-auto text-cyan-400">
                <Globe size={22} />
              </div>

              <p className="text-slate-200 text-sm sm:text-base font-light leading-relaxed">
                I am a passionate Full Stack Developer who enjoys turning ideas into real-world web applications. My journey into programming began with curiosity and determination, and through continuous learning and hands-on projects, I have developed strong skills in the MERN Stack. I love building modern, responsive, and user-friendly websites that solve real problems. My goal is not just to write code, but to create meaningful digital experiences while constantly improving my skills and exploring new technologies. I believe that consistency, patience, and passion are the foundation of growth, and I always strive to deliver my best in every project I build.
              </p>
            </div>

            <div className="pt-4 max-w-2xl w-full flex justify-end">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-cyan-400 text-slate-950 px-7 py-3 rounded-full font-medium text-sm sm:text-base hover:bg-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-300 hover:scale-105"
              >
                Let's Work Together
              </a>
            </div>
          </div>

        </div>

        {/* الجزء الثاني: بطاقات المهارات الأساسية */}
        <div className="pt-6 mb-16 border-t border-slate-800/80">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-semibold text-slate-100">
              Core <span className="text-cyan-400">Expertise</span>
            </h3>
            <p className="mt-2 text-slate-400 text-sm font-light">
              Areas of specialization in full-stack web development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsList.map((skill, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md shadow-lg hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h4 className="text-lg font-medium text-slate-100 mb-2">
                  {skill.title}
                </h4>
                <p className="text-slate-400 text-sm font-light leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* الجزء الثالث: شريط اللغات والمكتبات بالأيقونات الحقيقية */}
        <div className="pt-6 border-t border-slate-800/80">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-2xl sm:text-3xl font-semibold text-slate-100">
              Languages, Libraries & <span className="text-cyan-400">Tools</span>
            </h3>
            <p className="mt-2 text-slate-400 text-sm font-light">
              The technologies and tools I work with daily.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-400/50 shadow-md transition-all duration-300 hover:scale-105"
              >
                <span>{tech.icon}</span>
                <span className="text-slate-200 text-sm font-medium">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;