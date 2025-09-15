import { useLocation } from "react-router-dom";


const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Menú semanal", href: "/menu-semanal" },
    { name: "Cafetería", href: "/cafeteria" },
    { name: "Sobre nosotros", href: "/sobre-nosotros" },
    { name: "Contacto", href: "/contacto" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-transparent backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex-shrink-0 flex items-center">
            <img 
              src="public/logo la mansa.jpg"
              alt="La Mansa Paraguay" 
              className="h-16 w-auto"
            />
          </a>
          {/* Nav Buttons */}
          <div className="flex space-x-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-inter px-4 py-2 text-lg font-medium rounded-lg transition-colors duration-200 ${
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:text-primary hover:bg-secondary/50"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;