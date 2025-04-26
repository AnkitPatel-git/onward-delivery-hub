
import { useState } from "react";
import { Package, Truck, MapPin, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const TrackingSection = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isTracking, setIsTracking] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  const handleTracking = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!trackingNumber.trim()) return;
    
    setIsTracking(true);
    setTimeout(() => {
      setIsTracking(false);
      setShowDemo(true);
    }, 1500);
  };

  const resetDemo = () => {
    setTrackingNumber("");
    setShowDemo(false);
  };

  return (
    <section id="tracking" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real-Time <span className="text-brand-orange">Tracking</span>
          </h2>
          <p className="text-brand-gray max-w-2xl mx-auto">
            Track your shipments in real-time with our advanced tracking system.
            Enter your tracking number below to see a demo.
          </p>
        </div>

        {!showDemo ? (
          <div className="max-w-md mx-auto">
            <form onSubmit={handleTracking} className="flex gap-4 mb-4">
              <Input 
                type="text" 
                placeholder="Enter tracking number" 
                value={trackingNumber} 
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="flex-1"
              />
              <Button 
                type="submit" 
                className="bg-brand-orange hover:bg-brand-orange/90 text-white min-w-24"
                disabled={isTracking}
              >
                {isTracking ? "Tracking..." : "Track"}
              </Button>
            </form>
            <p className="text-sm text-brand-gray text-center">
              Try demo: ODH12345678
            </p>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="font-bold text-lg">Tracking Number: {trackingNumber}</h3>
                <p className="text-brand-gray">Estimated Delivery: April 28, 2025</p>
              </div>
              <Button variant="outline" onClick={resetDemo}>
                Track Another
              </Button>
            </div>
            
            <div className="relative mb-8">
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-200">
                <div className="absolute top-0 left-0 h-full bg-brand-orange" style={{ width: '75%' }}></div>
              </div>
              
              <div className="flex justify-between mt-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center">
                    <Package className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xs mt-2 text-center">Picked Up</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center">
                    <Truck className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xs mt-2 text-center">In Transit</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xs mt-2 text-center">Out for Delivery</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <Check className="h-5 w-5 text-gray-400" />
                  </div>
                  <span className="text-xs mt-2 text-center">Delivered</span>
                </div>
              </div>
            </div>
            
            <div className="bg-brand-light-gray/50 rounded-lg p-4 mb-6">
              <h4 className="font-medium mb-2">Latest Update</h4>
              <div className="flex gap-4 items-start">
                <div className="bg-brand-light-orange/30 p-2 rounded">
                  <Truck className="h-5 w-5 text-brand-orange" />
                </div>
                <div>
                  <p className="font-medium">Package is out for delivery</p>
                  <p className="text-sm text-brand-gray">April 26, 2025 - 10:30 AM</p>
                  <p className="text-sm">Your package is on its way to your delivery address.</p>
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg">
              <div className="p-4 border-b">
                <h4 className="font-medium">Delivery Details</h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
                <div className="p-4">
                  <p className="text-sm text-brand-gray">Ship From</p>
                  <p className="font-medium">Onward Central Warehouse</p>
                  <p className="text-sm">123 Logistics Ave, Industrial Zone</p>
                  <p className="text-sm">New York, NY 10001</p>
                </div>
                
                <div className="p-4">
                  <p className="text-sm text-brand-gray">Ship To</p>
                  <p className="font-medium">John Smith</p>
                  <p className="text-sm">456 Delivery St, Downtown</p>
                  <p className="text-sm">Boston, MA 02108</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TrackingSection;
