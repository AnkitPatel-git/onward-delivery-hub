
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const locations = [
  { id: 1, name: "New York Hub", address: "123 Logistics Way, New York, NY", lat: 40.7128, lng: -74.0060 },
  { id: 2, name: "Los Angeles Center", address: "456 Delivery Blvd, Los Angeles, CA", lat: 34.0522, lng: -118.2437 },
  { id: 3, name: "Chicago Warehouse", address: "789 Shipping St, Chicago, IL", lat: 41.8781, lng: -87.6298 },
  { id: 4, name: "Miami Distribution", address: "101 Freight Ave, Miami, FL", lat: 25.7617, lng: -80.1918 },
  { id: 5, name: "Seattle Depot", address: "202 Transport Rd, Seattle, WA", lat: 47.6062, lng: -122.3321 },
];

const MapSection = () => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-brand-orange">Coverage</span> Area
          </h2>
          <p className="text-brand-gray max-w-2xl mx-auto">
            With strategic locations across the country, we provide efficient and reliable services nationwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-4">Our Locations</h3>
            
            <div className="space-y-2">
              {locations.map((location) => (
                <Button
                  key={location.id}
                  variant="outline"
                  className={`w-full justify-start gap-2 mb-2 ${
                    selectedLocation.id === location.id
                      ? "bg-brand-light-orange/20 border-brand-orange text-brand-orange"
                      : "border-gray-200"
                  }`}
                  onClick={() => setSelectedLocation(location)}
                >
                  <MapPin className="h-4 w-4" />
                  {location.name}
                </Button>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t">
              <h4 className="font-bold">{selectedLocation.name}</h4>
              <p className="text-brand-gray text-sm mt-1">{selectedLocation.address}</p>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <Button variant="outline" size="sm">
                  Get Directions
                </Button>
                <Button variant="outline" size="sm">
                  Contact Hub
                </Button>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 bg-gray-100 rounded-xl shadow-md overflow-hidden h-[400px] relative">
            {/* This would be replaced with an actual map component in a real implementation */}
            <div className="absolute inset-0 bg-brand-light-gray">
              <div className="h-full flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin className="h-12 w-12 text-brand-orange mx-auto mb-4" />
                  <h4 className="text-xl font-bold">Interactive Map</h4>
                  <p className="text-brand-gray mt-2">
                    Currently showing: {selectedLocation.name}
                  </p>
                </div>
              </div>
              
              {/* Location markers (simplified) */}
              <div className="absolute h-3 w-3 bg-brand-orange rounded-full" style={{ top: '30%', left: '20%' }}></div>
              <div className="absolute h-3 w-3 bg-brand-orange rounded-full" style={{ top: '40%', left: '10%' }}></div>
              <div className="absolute h-3 w-3 bg-brand-orange rounded-full" style={{ top: '35%', left: '50%' }}></div>
              <div className="absolute h-3 w-3 bg-brand-orange rounded-full" style={{ top: '60%', left: '80%' }}></div>
              <div className="absolute h-3 w-3 bg-brand-orange rounded-full" style={{ top: '20%', left: '70%' }}></div>
              
              {/* Selected location */}
              <div className="absolute h-6 w-6 bg-brand-orange rounded-full animate-pulse flex items-center justify-center" 
                   style={{ top: `${30 + selectedLocation.id * 7}%`, left: `${(selectedLocation.id * 15) % 80 + 10}%` }}>
                <div className="h-3 w-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
