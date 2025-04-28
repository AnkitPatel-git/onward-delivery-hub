import { useState } from "react";
import { Package, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center gap-2">
            <Package className="h-8 w-8 text-brand-orange" />
            <span className="text-xl font-bold text-brand-dark">
              Saitrack Solution
            </span>
          </a>
          
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-brand-dark hover:text-brand-orange transition-colors font-medium">Home</a>
            <a href="#services" className="text-brand-dark hover:text-brand-orange transition-colors font-medium">Services</a>
            <a href="#partners" className="text-brand-dark hover:text-brand-orange transition-colors font-medium">Partners</a>
            <a href="#tracking" className="text-brand-dark hover:text-brand-orange transition-colors font-medium">Tracking</a>
            <a href="#testimonials" className="text-brand-dark hover:text-brand-orange transition-colors font-medium">Testimonials</a>
            <a href="#about" className="text-brand-dark hover:text-brand-orange transition-colors font-medium">About</a>
            <a href="#contact" className="text-brand-dark hover:text-brand-orange transition-colors font-medium">Contact</a>
          </div>
          
          <button className="md:hidden text-brand-dark" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <a href="#home" className="text-brand-dark hover:text-brand-orange transition-colors font-medium" onClick={toggleMenu}>Home</a>
              <a href="#services" className="text-brand-dark hover:text-brand-orange transition-colors font-medium" onClick={toggleMenu}>Services</a>
              <a href="#partners" className="text-brand-dark hover:text-brand-orange transition-colors font-medium" onClick={toggleMenu}>Partners</a>
              <a href="#tracking" className="text-brand-dark hover:text-brand-orange transition-colors font-medium" onClick={toggleMenu}>Tracking</a>
              <a href="#testimonials" className="text-brand-dark hover:text-brand-orange transition-colors font-medium" onClick={toggleMenu}>Testimonials</a>
              <a href="#about" className="text-brand-dark hover:text-brand-orange transition-colors font-medium" onClick={toggleMenu}>About</a>
              <a href="#contact" className="text-brand-dark hover:text-brand-orange transition-colors font-medium" onClick={toggleMenu}>Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
