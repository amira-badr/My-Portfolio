import React from "react";
import { Heart } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/80 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* الجزء الأيسر: الحقوق */}
        <div className="text-center md:text-right">
          <p className="text-sm font-light">
            © {currentYear} <span className="text-slate-200 font-medium">Mona Badr Ali</span>. All rights reserved.
          </p>
        </div>

        {/* الجزء الأوسط: صناعة بحب */}
        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-light">
          <span>Built with</span>
          <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
          <span>using React & Tailwind CSS</span>
        </div>

        {/* الجزء الأيمن: روابط سريعة مصغرة */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/amira-badr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/amira-badr-2171263a9"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-blue-500/50 transition-all"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://wa.me/201105808821"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-green-400 hover:border-green-500/50 transition-all"
          >
            <FaWhatsapp size={18} />
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;