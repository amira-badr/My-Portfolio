import React from "react";
import { Sparkles, Mail, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiVercel } from "react-icons/si";

function Contact() {
  const contactInfo = [
    {
      title: "Email",
      value: "apadr7167@gmail.com",
      link: "mailto:apadr7167@gmail.com",
      icon: <Mail className="text-cyan-400" size={24} />,
      color: "group-hover:border-cyan-400/50",
    },
    {
      title: "WhatsApp",
      value: "01105808821",
      link: "https://wa.me/201105808821",
      icon: <FaWhatsapp className="text-green-400" size={24} />,
      color: "group-hover:border-green-400/50",
    },
    {
      title: "GitHub",
      value: "github.com/amira-badr",
      link: "https://github.com/amira-badr",
      icon: <FaGithub className="text-slate-200" size={24} />,
      color: "group-hover:border-slate-400/50",
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/mona-badr-ali-mohamed-2171263a9",
      link: "https://www.linkedin.com/in/mona-badr-ali-mohamed-2171263a9/",
      icon: <FaLinkedin className="text-blue-400" size={24} />,
      color: "group-hover:border-blue-400/50",
    },
    {
      title: "Vercel",
      value: "vercel.com/amira-badr1",
      link: "https://vercel.com/amira-badr1",
      icon: <SiVercel className="text-slate-100" size={24} />,
      color: "group-hover:border-slate-200/50",
    },
  ];

  return (
    <section className="relative min-h-screen bg-slate-950 py-20 text-slate-100 flex items-center">
      
      {/* تأثيرات الإضاءة الخلفية */}
      <div className="absolute top-1/4 left-10 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* عنوان الصفحة */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs tracking-widest uppercase backdrop-blur-md mb-3 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
            <Sparkles size={14} className="animate-spin" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-100">
            Contact <span className="text-cyan-400">Me</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-light">
            Feel free to reach out through any of the platforms below. I'm always open to discussing new projects and opportunities.
          </p>
        </div>

        {/* شبكة وسائل التواصل */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col justify-between p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-md shadow-xl transition-all duration-300 hover:-translate-y-2 group ${item.color}`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-100 mb-1 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm font-light break-all mb-4">
                  {item.value}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-cyan-400 text-xs font-medium pt-3 border-t border-slate-800/80 group-hover:translate-x-1 transition-transform">
                <span>Connect Now</span>
                <ExternalLink size={14} />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Contact;