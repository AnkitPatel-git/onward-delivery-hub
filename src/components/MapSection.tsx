
import { MapPin } from "lucide-react";

const hubs = [
  { city: "Mumbai", state: "Maharashtra", role: "Western Hub", color: "#f97316" },
  { city: "Delhi", state: "NCR", role: "Northern Hub", color: "#f97316" },
  { city: "Bengaluru", state: "Karnataka", role: "Southern Hub", color: "#f97316" },
  { city: "Kolkata", state: "West Bengal", role: "Eastern Hub", color: "#f97316" },
  { city: "Chennai", state: "Tamil Nadu", role: "South-East Hub", color: "#f97316" },
  { city: "Hyderabad", state: "Telangana", role: "Central-South Hub", color: "#f97316" },
  { city: "Ahmedabad", state: "Gujarat", role: "North-West Hub", color: "#f97316" },
  { city: "Pune", state: "Maharashtra", role: "Deccan Hub", color: "#f97316" },
  { city: "Jaipur", state: "Rajasthan", role: "North-West Depot", color: "#f97316" },
  { city: "Lucknow", state: "Uttar Pradesh", role: "North-Central Depot", color: "#f97316" },
  { city: "Bhopal", state: "Madhya Pradesh", role: "Central Depot", color: "#f97316" },
  { city: "Chandigarh", state: "Punjab/Haryana", role: "North Depot", color: "#f97316" },
];

const MapSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-brand-orange">Coverage</span> Area
          </h2>
          <p className="text-brand-gray max-w-2xl mx-auto">
            With strategic hubs across all major Indian cities, we provide efficient and reliable PAN India logistics services.
          </p>
        </div>

        {/* India SVG map placeholder with dots */}
        <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden mb-10 border border-gray-100">
          {/* Decorative header bar */}
          <div className="bg-brand-orange px-6 py-3 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-white" />
            <span className="text-white font-semibold text-sm">PAN India Network — {hubs.length} Active Hubs</span>
          </div>

          {/* City grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-0 divide-x divide-y divide-gray-100">
            {hubs.map((hub, i) => (
              <div
                key={i}
                className="group flex flex-col items-center justify-center p-5 hover:bg-orange-50 transition-colors duration-200 cursor-default"
              >
                <div className="relative mb-3">
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-brand-orange transition-colors duration-200">
                    <MapPin className="h-5 w-5 text-brand-orange group-hover:text-white transition-colors duration-200" />
                  </div>
                  <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-green-400 border-2 border-white animate-pulse" />
                </div>
                <p className="font-bold text-brand-dark text-sm text-center">{hub.city}</p>
                <p className="text-xs text-brand-gray text-center">{hub.state}</p>
                <p className="text-xs text-brand-orange font-medium text-center mt-1 opacity-0 group-hover:opacity-100 transition-opacity">{hub.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Cities Covered", value: "500+" },
            { label: "Active Hubs", value: "12" },
            { label: "States Served", value: "28+" },
            { label: "Daily Shipments", value: "10,000+" },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 text-center hover:border-brand-orange transition-colors duration-200">
              <p className="text-3xl font-bold text-brand-orange mb-1">{stat.value}</p>
              <p className="text-sm text-brand-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MapSection;
