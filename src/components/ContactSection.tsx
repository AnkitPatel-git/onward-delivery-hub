
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    title: "Our Office",
    lines: [
      "Balaji Complex, Near Pandharpuri Tea Shop,",
      "Bhatale Vehele Village, Mankoli Naka,",
      "Bhiwandi, Thane — 421302",
    ],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 8828834134", "Laxmi Singh"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["laxmi@saitracksolutions.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Mon – Fri: 9:00 AM – 6:00 PM", "Saturday: 10:00 AM – 4:00 PM", "Sunday: Closed"],
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-orange-100 text-brand-orange text-sm font-semibold px-4 py-1 rounded-full mb-4 uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact <span className="text-brand-orange">Us</span>
          </h2>
          <p className="text-brand-gray max-w-2xl mx-auto">
            Have a question or need a quote? Our team is ready to help you with any logistics requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Contact info cards — left col */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {contactDetails.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex gap-4 hover:border-brand-orange transition-colors duration-200"
              >
                <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-orange-50 flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-brand-orange" />
                </div>
                <div>
                  <p className="font-semibold text-brand-dark text-sm mb-1">{item.title}</p>
                  {item.lines.map((line, j) => (
                    <p key={j} className="text-brand-gray text-sm leading-snug">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact form — right col */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h3 className="text-xl font-bold text-brand-dark mb-6">Send Us a Message</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Full Name
                  </label>
                  <Input id="name" placeholder="Your full name" className="rounded-xl" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Phone Number
                  </label>
                  <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" className="rounded-xl" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email Address
                </label>
                <Input id="email" type="email" placeholder="your@email.com" className="rounded-xl" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help?" className="rounded-xl" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent resize-none text-sm"
                  placeholder="Tell us about your logistics requirements..."
                />
              </div>

              <Button className="w-full bg-brand-orange hover:bg-orange-600 text-white rounded-xl py-6 text-base font-semibold shadow-md shadow-orange-500/20 transition-all">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
