
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

  const steps = [
    { label: "Picked Up", icon: Package, done: true },
    { label: "In Transit", icon: Truck, done: true },
    { label: "Out for Delivery", icon: MapPin, done: true },
    { label: "Delivered", icon: Check, done: false },
  ];

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
              Try demo: <span
                className="text-brand-orange font-semibold cursor-pointer hover:underline"
                onClick={() => setTrackingNumber("ODH12345678")}
              >ODH12345678</span>
            </p>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="bg-brand-orange px-6 py-4 flex justify-between items-center">
              <div>
                <p className="text-white/80 text-sm">Tracking ID</p>
                <h3 className="font-bold text-white text-lg">{trackingNumber}</h3>
              </div>
              <div className="text-right">
                <p className="text-white/80 text-sm">Est. Delivery</p>
                <p className="text-white font-semibold">6 April 2025</p>
              </div>
            </div>

            <div className="p-6">
              {/* Progress bar */}
              <div className="relative mb-8 pt-2">
                <div className="absolute top-[18px] left-5 right-5 h-1 bg-gray-200 z-0">
                  <div className="absolute top-0 left-0 h-full bg-brand-orange transition-all duration-700" style={{ width: "75%" }} />
                </div>
                <div className="flex justify-between relative z-10">
                  {steps.map((step, i) => (
                    <div key={i} className="flex flex-col items-center gap-2">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow ${step.done ? "bg-brand-orange" : "bg-gray-200"}`}>
                        <step.icon className={`h-5 w-5 ${step.done ? "text-white" : "text-gray-400"}`} />
                      </div>
                      <span className={`text-xs text-center max-w-[60px] ${step.done ? "text-brand-dark font-medium" : "text-gray-400"}`}>{step.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Latest update */}
              <div className="bg-orange-50 rounded-xl p-4 mb-6 border border-orange-100">
                <h4 className="font-semibold text-brand-dark mb-2">Latest Update</h4>
                <div className="flex gap-3 items-start">
                  <div className="bg-brand-orange/10 p-2 rounded-lg">
                    <Truck className="h-5 w-5 text-brand-orange" />
                  </div>
                  <div>
                    <p className="font-medium text-brand-dark">Package is out for delivery</p>
                    <p className="text-sm text-brand-gray">5 April 2025 — 10:30 AM</p>
                    <p className="text-sm text-brand-gray mt-1">Your package is on its way to the delivery address in Pune, Maharashtra.</p>
                  </div>
                </div>
              </div>

              {/* Ship details */}
              <div className="border border-gray-100 rounded-xl overflow-hidden mb-5">
                <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
                  <h4 className="font-semibold text-brand-dark">Delivery Details</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                  <div className="p-4">
                    <p className="text-xs text-brand-gray uppercase tracking-wide mb-1">Ship From</p>
                    <p className="font-semibold text-brand-dark">Saitrack Solutions</p>
                  <p className="text-sm text-brand-gray">Balaji Complex, Mankoli Naka</p>
                  <p className="text-sm text-brand-gray">Bhiwandi, Thane — 421302</p>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-brand-gray uppercase tracking-wide mb-1">Ship To</p>
                    <p className="font-semibold text-brand-dark">Rahul Sharma</p>
                    <p className="text-sm text-brand-gray">Survey No. 22, Baner Road</p>
                    <p className="text-sm text-brand-gray">Pune, Maharashtra — 411045</p>
                  </div>
                </div>
              </div>

              <Button variant="outline" onClick={resetDemo} className="w-full border-brand-orange text-brand-orange hover:bg-orange-50">
                Track Another Shipment
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TrackingSection;
