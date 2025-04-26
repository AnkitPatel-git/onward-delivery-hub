
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Operations Manager, E-commerce Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    quote: "Onward Delivery has transformed our logistics operations. Their reliable pickup and delivery services have reduced our operational costs by 30% while improving customer satisfaction. The real-time tracking feature is a game-changer for our business.",
    stars: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Supply Chain Director, Retail Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    quote: "We've been partnering with Onward Delivery for two years, and they've consistently exceeded our expectations. Their warehousing solutions and last-mile delivery services have enabled us to scale our operations efficiently.",
    stars: 5
  },
  {
    id: 3,
    name: "Rebecca Torres",
    title: "Logistics Coordinator, Tech Innovations",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    quote: "The level of professionalism and attention to detail from the Onward Delivery team is impressive. Their logistics management solutions have helped us streamline our operations and focus on our core business.",
    stars: 4
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-16 bg-brand-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-brand-orange">Clients</span> Say
          </h2>
          <p className="text-brand-gray max-w-2xl mx-auto">
            Discover why businesses trust us for their logistics needs.
            Read testimonials from our satisfied partners and clients.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6 md:p-10 relative">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/4">
                <img 
                  src={currentTestimonial.image} 
                  alt={currentTestimonial.name}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mx-auto"
                />
              </div>
              
              <div className="md:w-3/4 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < currentTestimonial.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                
                <blockquote className="text-lg italic mb-4">
                  "{currentTestimonial.quote}"
                </blockquote>
                
                <div>
                  <h4 className="font-bold text-lg">{currentTestimonial.name}</h4>
                  <p className="text-brand-gray">{currentTestimonial.title}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-4">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={prevTestimonial}
                className="h-10 w-10 rounded-full border-brand-gray/30"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              <div className="flex gap-2 items-center">
                {testimonials.map((_, i) => (
                  <div 
                    key={i}
                    className={`h-2 w-2 rounded-full ${i === currentIndex ? 'bg-brand-orange' : 'bg-gray-300'}`}
                  ></div>
                ))}
              </div>
              
              <Button 
                variant="outline" 
                size="icon" 
                onClick={nextTestimonial}
                className="h-10 w-10 rounded-full border-brand-gray/30"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
