import React from "react";
import { Sparkles, FolderGit2 } from "lucide-react";
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

function Projects() {
  const projectsList = [
    // 1. Shop World - في المقدمة
    {
      title: "Shop World",
      description: "A smart e-commerce application utilizing TanStack Query for efficient server-state management, client-side caching, real-time keyword search, paginated product listings, and dynamic product details pages.",
      techStack: [
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      ],
    },
    // 2. Country Data Explorer - ثاني مشروع
    {
      title: "Country Data Explorer",
      description: "An application designed to display country information such as population, flag design, currency, and capital by simply typing the country name in the search bar via REST API.",
      techStack: [
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      ],
    },
    // 3. CareerGraph - ثالث مشروع
    {
      title: "CareerGraph",
      description: "An interactive full-stack web application designed to visualize career paths and skill relationships through an interactive graph database architecture.",
      techStack: [
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-slate-300" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      ],
    },
    // باقي المشاريع السابقة بنفس ترتيبها وتصميمها
    {
      title: "Prime Market",
      description: "A complete full-stack multi-vendor e-commerce platform built with React and Node.js to efficiently manage multiple sellers and store operations.",
      techStack: [
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-slate-300" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      ],
    },
    {
      title: "React Store",
      description: "An interactive e-commerce web application developed using JavaScript and React, utilizing a Fake API to fetch and display products seamlessly.",
      techStack: [
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
      ],
    },
    {
      title: "Digital Product Landing Page",
      description: "A professional and engaging landing page tailored for a digital product, designed with a modern layout to highlight key features.",
      techStack: [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      ],
    },
    {
      title: "React Admin Dashboard",
      description: "An administrative dashboard built in React that allows users to add, edit, and delete products, manage prices and product status, with data persistence via Local Storage.",
      techStack: [
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      ],
    },
    {
      title: "CRUD Articles System",
      description: "An article management system that enables users to add, update, and delete posts similar to social media platforms like Facebook.",
      techStack: [
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
      ],
    },
    {
      title: "Real Estate Website",
      description: "A specialized landing page for real estate, beautifully designed to showcase property listings and real estate projects attractively.",
      techStack: [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      ],
    },
    {
      title: "Real Essence",
      description: "An elegant and sophisticated landing page dedicated to luxury perfumes, showcasing fragrance details in a captivating style.",
      techStack: [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      ],
    },
  ];

  return (
    <section className="relative min-h-screen bg-slate-950 py-20 text-slate-100">
      
      <div className="absolute top-1/4 left-10 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs tracking-widest uppercase backdrop-blur-md mb-3 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
            <Sparkles size={14} className="animate-spin" />
            My Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-100">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-light">
            Explore a collection of web applications and projects built with clean code and modern technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-7 rounded-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-md shadow-xl hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-5 text-cyan-400 group-hover:scale-110 transition-transform">
                  <FolderGit2 size={24} />
                </div>

                <h3 className="text-xl font-semibold text-slate-100 mb-2 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-300 text-xs font-medium"
                    >
                      {tech.icon}
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;