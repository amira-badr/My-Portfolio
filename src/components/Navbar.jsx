import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Certificates", path: "/certificates" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-800 shadow-lg shadow-cyan-950/20"
    >
      <div className="max-w-7xl mx-auto h-20 px-6 sm:px-10 lg:px-16 flex items-center">

        {/* Logo & Name (Mona Badr Ali) */}
        <NavLink
          to="/"
          className="flex items-center gap-4 shrink-0"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 via-sky-500 to-slate-900 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-cyan-500/30">
            MB
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-cyan-400 tracking-wide">
              Mona Badr Ali
            </h2>
            <p className="text-xs text-sky-400">
              Full Stack Developer
            </p>
          </div>
        </NavLink>

        {/* Desktop Links: أضفنا ml-auto و mr-12 عشان يدفع اللينكات يمين بالشكل المطلوب بالضبط */}
        <ul className="hidden md:flex items-center gap-12  ml-auto mr-20">
          {links.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `font-medium transition-all duration-300 ${
                    isActive
                      ? "text-cyan-400 font-semibold"
                      : "text-slate-300 hover:text-cyan-400"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none ml-auto"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-slate-900 border-t border-slate-800 overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-6 py-6">
              {links.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "text-cyan-400 font-semibold"
                        : "text-slate-300 hover:text-cyan-400 transition-colors duration-300"
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;