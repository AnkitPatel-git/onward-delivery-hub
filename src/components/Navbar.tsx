
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Partners", href: "#partners" },
  { label: "Tracking", href: "#tracking" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${
        scrolled || isMenuOpen
          ? "bg-white shadow-lg"
          : "bg-transparent shadow-none"
      }`}
    >
      <div className="container relative mx-auto h-full px-4">
        <div className="flex h-full w-full items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/saitrack-logo.png"
              alt="SaiTrackSolutions"
              className="h-12 object-contain"
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-brand-dark transition-colors duration-200 hover:bg-orange-50 hover:text-brand-orange"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-5 py-2 bg-brand-orange text-white text-sm font-semibold rounded-lg hover:bg-orange-600 transition-colors shadow-md shadow-orange-500/20"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="rounded-lg p-2 text-brand-dark transition-colors hover:bg-gray-100 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute left-4 right-4 top-full z-50 mt-2 rounded-2xl border border-gray-100 bg-white py-4 shadow-xl animate-fade-in md:hidden">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-6 py-3 text-brand-dark hover:text-brand-orange hover:bg-orange-50 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-6 pt-3 mt-1 border-t border-gray-100">
                <a
                  href="#contact"
                  className="block text-center px-5 py-2.5 bg-brand-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
