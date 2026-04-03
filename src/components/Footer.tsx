
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Partners", href: "#partners" },
  { label: "Tracking", href: "#tracking" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Air Cargo",
  "Surface Cargo",
  "Rail Cargo",
  "Pickup Services",
  "Warehouse Services",
  "Last-Mile Delivery",
];

const socials = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Instagram, href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white">
      {/* Top CTA band */}
      <div className="bg-brand-orange">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white font-semibold text-lg text-center sm:text-left">
            Ready to streamline your logistics? Let's talk.
          </p>
          <a
            href="#contact"
            className="flex items-center gap-2 bg-white text-brand-orange font-bold px-6 py-2.5 rounded-xl hover:bg-orange-50 transition-colors flex-shrink-0"
          >
            Get a Free Quote <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="space-y-5">
            <img
              src="/Saitrack Solutions LOGO.png"
              alt="Saitrack Solutions"
              className="h-14 w-auto object-contain brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional PAN India courier &amp; cargo solutions since 2018 — delivering excellence, reliability, and efficiency.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors duration-200"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-brand-orange transition-colors text-sm flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-5">Our Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-gray-400 text-sm flex items-center gap-1.5 group">
                    <ArrowRight className="h-3 w-3 text-brand-orange opacity-60" />
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div className="space-y-5">
            <h3 className="font-bold text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <MapPin className="h-4 w-4 text-brand-orange mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm leading-snug">
                  Balaji Complex, Near Pandharpuri Tea Shop,<br />
                  Bhatale Vehele Village, Mankoli Naka,<br />
                  Bhiwandi, Thane — 421302
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="h-4 w-4 text-brand-orange flex-shrink-0" />
                <span className="text-gray-400 text-sm">+91 8828834134 (Laxmi Singh)</span>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="h-4 w-4 text-brand-orange flex-shrink-0" />
                <span className="text-gray-400 text-sm">laxmi@saitracksolutions.com</span>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-400 mb-2">Subscribe for updates</p>
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/10 border-none text-white placeholder:text-gray-500 focus-visible:ring-brand-orange rounded-xl text-sm flex-1 h-9"
                />
                <Button
                  type="submit"
                  size="sm"
                  className="bg-brand-orange hover:bg-orange-600 text-white rounded-xl h-9 px-3 flex-shrink-0"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-500">
          <p>© 2025 Saitrack Solutions. All rights reserved.</p>
          <p>Bhiwandi, Thane — Maharashtra, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
