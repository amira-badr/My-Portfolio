import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 py-24">
      
      {/* التدرج اللوني السماوي والأزرق */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/40 to-cyan-950/30 pointer-events-none"></div>

      {/* إضاءات الخلفية */}
      <div className="absolute top-1/4 left-10 w-[400px] h-[400px] rounded-full bg-cyan-500/20 blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full bg-blue-600/20 blur-[150px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* قسم النصوص */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs tracking-widest uppercase backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.15)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Welcome To My Portfolio
            </div>

            {/* الاسم المتحرك مع Hi, I'm */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-100 min-h-[1.2em] flex items-center">
              <span className="text-cyan-400 font-normal">
                <TypeAnimation
                  sequence={[
                    "Hi, I'm Mona Badr Ali",
                    3000,
                    "Hi, I'm",
                    1000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>

            {/* الوظيفة الأساسية - على سطر واحد */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-sky-300 to-blue-400 tracking-tight whitespace-nowrap">
              Full Stack Developer
            </h2>

            {/* المسميات الوظيفية المتحركة */}
            <div className="text-lg sm:text-2xl text-cyan-300/90 font-light h-10 flex items-center">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "Front-End Developer",
                  2000,
                  "React Developer",
                  2000,
                  "Node.js Developer",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>

            {/* الأزرار */}
            <div className="flex flex-wrap gap-5 pt-4">
              <Link
                to="/projects"
                className="flex items-center gap-3 bg-cyan-400 text-slate-950 px-8 py-3.5 rounded-full font-medium text-base hover:bg-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-300 hover:scale-105"
              >
                View Projects <ArrowRight size={20} />
              </Link>
              
              <a
                href="/Mona Badr Ali - EN.pdf"
                download="frontend/src/assets/Mona_Badr_Ali_Mohamed_Resume_ATS_Optimized.pdf"
                className="flex items-center gap-3 border border-cyan-400/40 text-cyan-300 px-8 py-3.5 rounded-full font-medium text-base hover:bg-cyan-400 hover:text-slate-950 transition-all duration-300 backdrop-blur-md hover:scale-105"
              >
                Download CV <Download size={20} />
              </a>
            </div>

          </div>

          {/* قسم الصورة بالحجم المتناسق */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-[230px] h-[230px] sm:w-[290px] sm:h-[290px] rounded-full border-4 border-cyan-400/80 overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.4)] bg-slate-900">
              <img
                src={profile}
                alt="Mona Badr Ali"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;