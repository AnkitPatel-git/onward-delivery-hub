
import { Package, Truck, MapPin, Warehouse, Calendar, Plane } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Air Cargo",
    description: "Swift and efficient air cargo solutions for perishable goods, electronics, pharmaceuticals, and oversized cargo with real-time status reports on all import and export shipments.",
    icon: Plane,
  },
  {
    title: "Pickup Services",
    description: "Scheduled pickup from multiple locations with real-time tracking and instant notifications.",
    icon: Package,
  },
  {
    title: "Drop Services",
    description: "Secure and timely delivery to various destinations with proof of delivery and digital signature.",
    icon: MapPin,
  },
  {
    title: "Last-Mile Delivery",
    description: "Efficient last-mile delivery solutions ensuring your packages reach end customers on time.",
    icon: Truck,
  },
  {
    title: "Warehousing",
    description: "State-of-the-art warehousing facilities with inventory management and distribution services.",
    icon: Warehouse,
  },
  {
    title: "Logistics Management",
    description: "End-to-end logistics management solutions with advanced analytics and reporting.",
    icon: Calendar,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core <span className="text-brand-orange">Services</span></h2>
          <p className="text-brand-gray max-w-2xl mx-auto">
            We provide comprehensive logistics solutions tailored to meet your specific business needs,
            ensuring efficiency, reliability, and cost-effectiveness.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="bg-brand-light-orange/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-brand-orange" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-brand-gray">{service.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 text-brand-orange hover:text-brand-orange hover:bg-transparent">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
