import React from "react";
import { Sparkles, Award, Calendar, CheckCircle2, ExternalLink } from "lucide-react";

function Certificates() {
  const certificatesList = [
    {
      title: "Full-Stack Development Program",
      issuer: "MotiGraph Software Solutions",
      date: "15 / 03 / 2026",
      duration: "3 Months Intensive Program",
      description: "Successfully completed an intensive training program demonstrating strong skills, dedication, and qualification to work as a Full Stack Developer.",
      verificationId: "MG-2026-0315-003",
      fileUrl: "/motigraph.png", // اسم صورة شهادة موتيجراف في مجلد public
    },
    {
      title: "Full-Stack Development (Nodejs)",
      issuer: "MTEC - Modern Technology",
      date: "01 / 07 / 2026",
      duration: "84 Hours",
      description: "Successfully completed advanced training covering Node.js, Express.js, MongoDB, RESTful APIs, Authentication (JWT), and real-time applications using Socket.io.",
      verificationId: "02252",
      fileUrl: "/mtec.pdf", // اسم ملف الـ PDF لشهادة إم تك في مجلد public
    },
  ];

  return (
    <section className="relative min-h-screen bg-slate-950 py-20 text-slate-100">
      
      {/* تأثيرات الإضاءة الخلفية */}
      <div className="absolute top-1/4 left-10 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* عنوان السيكشن */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs tracking-widest uppercase backdrop-blur-md mb-3 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
            <Sparkles size={14} className="animate-spin" />
            My Achievements
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-100">
            Professional <span className="text-cyan-400">Certificates</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-light">
            A showcase of my accredited certifications, professional training, and continuous learning journey.
          </p>
        </div>

        {/* شبكة الشهادات */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificatesList.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-8 rounded-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-md shadow-xl hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div>
                {/* أيقونة الشهادة */}
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform">
                  <Award size={30} />
                </div>

                {/* اسم الشهادة والجهة */}
                <h3 className="text-xl font-bold text-slate-100 mb-1 group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-cyan-400 text-sm font-medium mb-4">
                  {cert.issuer}
                </p>

                {/* الوصف */}
                <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              <div>
                {/* تفاصيل إضافية (المدة وتاريخ الإصدار) */}
                <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-t border-b border-slate-800/80 mb-6 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={15} className="text-cyan-400" />
                    <span>{cert.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={15} className="text-green-400" />
                    <span>{cert.duration}</span>
                  </div>
                </div>

                {/* رقم التحقق */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-6">
                  <span className="font-light">Verification ID:</span>
                  <span className="font-mono text-slate-200 bg-slate-800/80 px-3 py-1 rounded-lg border border-slate-700/60">
                    {cert.verificationId}
                  </span>
                </div>

                {/* زرار عرض الشهادة الحقيقية */}
                <a
                  href={cert.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm font-medium hover:bg-cyan-500 hover:text-slate-950 transition-all duration-300 shadow-md group/btn"
                >
                  <span>View Original Certificate</span>
                  <ExternalLink size={16} className="group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certificates;