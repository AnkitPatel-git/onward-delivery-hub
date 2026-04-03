
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact <span className="text-brand-orange">Us</span>
          </h2>
          <p className="text-brand-gray max-w-2xl mx-auto">
            Get in touch with our team for any inquiries or support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <Input id="name" placeholder="Your full name" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help?" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <Button className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white">
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-brand-orange" />
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-brand-gray">Balaji Complex, Near Pandharpuri Tea Shop,<br />Bhatale Vehele Village, Mankoli Naka,<br />Bhiwandi, Thane - 421302</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-brand-orange" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-brand-gray">+1 (800) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-brand-orange" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-brand-gray">info@saitracksolution.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-2">
                <p className="text-brand-gray">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-brand-gray">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-brand-gray">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
