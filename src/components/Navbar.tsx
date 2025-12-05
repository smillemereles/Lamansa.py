import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  BookOpen,
  Coffee,
  Info,
  Phone,
  Menu as MenuIcon,
  X as CloseIcon,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { name: "Inicio", href: "/", icon: Home },
  { name: "Menú general", href: "/menu-general", icon: BookOpen },
  { name: "Cafetería", href: "/cafeteria", icon: Coffee },
  { name: "Especial de Navidad", href: "/navidad", icon: BookOpen },
  { name: "Sobre nosotros", href: "/sobre-nosotros", icon: Info },
  { name: "Contacto", href: "/contacto", icon: Phone },
];

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out
        ${scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-md"
          : "bg-white/60 backdrop-blur-md shadow-sm"}
      `}
    >
      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          to="/"
          className="flex-shrink-0 flex items-center"
          tabIndex={0}
          style={{ minWidth: 48 }}
        >
          <motion.img
            src="/lamansatrans.png"
            alt="La Mansa Paraguay"
            className="h-14 w-auto object-contain"
            whileHover={{ scale: 1.06, opacity: 0.92 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ verticalAlign: "middle" }}
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-4 lg:gap-8 ml-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <li key={item.name} className="relative inline-flex items-center">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <Link
                    to={item.href}
                    className={`inline-flex items-center gap-2 font-inter text-base font-medium px-3 py-1 rounded-full transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c0165a]
                      ${active
                        ? "bg-[#c0165a] text-white"
                        : "text-[#222] hover:text-[#c0165a] hover:bg-[#c0165a]/10"
                      }
                    `}
                    aria-current={active ? "page" : undefined}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                </motion.div>
                {/* Hover underline */}
                <motion.div
                  layout
                  className="absolute left-0 right-0 -bottom-1 h-[2px] rounded bg-[#c0165a]"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={active ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ transformOrigin: "center" }}
                />
                {/* Active indicator */}
                {active && (
                  <motion.div
                    layoutId="navIndicator"
                    className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-2 h-2 rounded-full bg-[#c0165a]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center ml-2">
          <Sheet>
            <SheetTrigger asChild>
              <button
                aria-label="Abrir menú"
                className="p-2 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c0165a]"
              >
                <MenuIcon className="h-7 w-7 text-[#c0165a]" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0 bg-white/95">
              <nav className="flex flex-col gap-2 pt-8 px-6">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.href);
                  return (
                    <motion.div
                      key={item.name}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      <Link
                        to={item.href}
                        className={`flex items-center gap-3 px-4 py-3 rounded-full font-inter text-lg font-medium transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c0165a]
                          ${active
                            ? "bg-[#c0165a] text-white"
                            : "text-[#222] hover:text-[#c0165a] hover:bg-[#c0165a]/10"
                          }
                        `}
                      >
                        <Icon className="h-6 w-6" />
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;