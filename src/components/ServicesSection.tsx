
import { Package, Truck, MapPin, Warehouse, BarChart3, Plane, TrainFront, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Air Cargo",
    description: "Swift air cargo solutions for perishable goods, electronics, pharmaceuticals, and oversized cargo with real-time status reports on all import and export shipments.",
    icon: Plane,
  },
  {
    title: "Surface Cargo",
    description: "Road transportation connecting all major Indian cities. Reliable door-to-door solutions with online tracking, supported by our own fleet of trucks, trailers, and container LCVs.",
    icon: Truck,
  },
  {
    title: "Rail Cargo",
    description: "Bulk consignment transport via Indian Railways — dedicated freight corridors, container services, and parcel services, with last-mile delivery through our local fleet.",
    icon: TrainFront,
  },
  {
    title: "Pickup Services",
    description: "Scheduled pickup from multiple locations with real-time tracking and instant notifications at every stage of the journey.",
    icon: Package,
  },
  {
    title: "Drop Services",
    description: "Secure and timely delivery to various destinations with proof of delivery, digital signature, and end-to-end visibility.",
    icon: MapPin,
  },
  {
    title: "Warehouse Services",
    description: "Modern warehousing across India with inventory management, real-time stock monitoring, cargo loading/unloading, labeling, packing, distribution, POD reporting, and CCTV coverage.",
    icon: Warehouse,
  },
  {
    title: "Last-Mile Delivery",
    description: "Efficient last-mile delivery ensuring your packages reach end customers on time, every time — with live tracking right to the doorstep.",
    icon: Truck,
  },
  {
    title: "Logistics Management",
    description: "End-to-end supply chain management with advanced analytics, custom reporting, and strategic consulting to optimise your distribution operations.",
    icon: BarChart3,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-orange-100 text-brand-orange text-sm font-semibold px-4 py-1 rounded-full mb-4 uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Core <span className="text-brand-orange">Services</span>
          </h2>
          <p className="text-brand-gray max-w-2xl mx-auto">
            Comprehensive logistics solutions tailored to meet your specific business needs — ensuring efficiency, reliability, and cost-effectiveness across India.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Top accent */}
              <div className="h-1 w-full bg-gradient-to-r from-brand-orange to-orange-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="p-6 flex flex-col flex-1">
                {/* Icon */}
                <div className="mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 group-hover:bg-brand-orange flex items-center justify-center transition-colors duration-300">
                    <service.icon className="h-7 w-7 text-brand-orange group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-brand-dark mb-3 group-hover:text-brand-orange transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-brand-gray text-sm leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* Footer link */}
                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-1 text-sm font-semibold text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
