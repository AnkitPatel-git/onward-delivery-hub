
import { Package, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Package className="h-8 w-8 text-brand-orange" />
              <span className="text-xl font-bold">
                Onward<span className="text-brand-orange">Delivery</span>
              </span>
            </div>
            <p className="text-gray-300">
              Professional logistics services for businesses of all sizes.
              We deliver excellence, reliability, and efficiency.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-brand-orange transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-brand-orange transition-colors">Services</a></li>
              <li><a href="#partners" className="text-gray-300 hover:text-brand-orange transition-colors">Partners</a></li>
              <li><a href="#tracking" className="text-gray-300 hover:text-brand-orange transition-colors">Tracking</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-brand-orange transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-orange transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-orange transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <MapPin className="h-5 w-5 text-brand-orange" />
                <span className="text-gray-300">
                  123 Logistics Way, Suite 500<br />
                  New York, NY 10001
                </span>
              </div>
              <div className="flex gap-3 items-start">
                <Phone className="h-5 w-5 text-brand-orange" />
                <span className="text-gray-300">+1 (800) 123-4567</span>
              </div>
              <div className="flex gap-3 items-start">
                <Mail className="h-5 w-5 text-brand-orange" />
                <span className="text-gray-300">info@onwarddelivery.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="space-y-2">
              <Input 
                type="email" 
                placeholder="Your email address"
                className="bg-white/10 border-none text-white placeholder:text-gray-400 focus-visible:ring-brand-orange"
              />
              <Button className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-400">
          <p>&copy; 2025 Onward Delivery Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
