
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PartnersSection = () => {
  return (
    <section id="partners" className="py-16 bg-brand-light-gray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Partner With Us for <span className="text-brand-orange">Seamless</span> Logistics
            </h2>
            <p className="text-brand-gray">
              Join industry leaders like Amazon and Blue Dart who trust our logistics expertise.
              We provide tailored solutions that integrate with your existing systems to 
              enhance efficiency and reduce operational costs.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="min-w-6 h-6 rounded-full bg-brand-light-orange flex items-center justify-center mt-1">
                  <span className="text-brand-orange font-medium">✓</span>
                </div>
                <p>Dedicated account managers for seamless communication</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="min-w-6 h-6 rounded-full bg-brand-light-orange flex items-center justify-center mt-1">
                  <span className="text-brand-orange font-medium">✓</span>
                </div>
                <p>API integration with your existing systems</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="min-w-6 h-6 rounded-full bg-brand-light-orange flex items-center justify-center mt-1">
                  <span className="text-brand-orange font-medium">✓</span>
                </div>
                <p>Custom reporting and analytics dashboards</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="min-w-6 h-6 rounded-full bg-brand-light-orange flex items-center justify-center mt-1">
                  <span className="text-brand-orange font-medium">✓</span>
                </div>
                <p>Flexible pricing models based on your volume</p>
              </div>
            </div>
            <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white">
              Become a Partner
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-6">Trusted By Industry Leaders</h3>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col items-center gap-4 p-4 border border-gray-100 rounded-lg">
                  <div className="h-16 w-32 bg-gray-100 rounded flex items-center justify-center">
                    <span className="font-bold text-xl text-brand-gray">AMAZON</span>
                  </div>
                  <span className="text-sm text-brand-gray">Since 2018</span>
                </div>
                
                <div className="flex flex-col items-center gap-4 p-4 border border-gray-100 rounded-lg">
                  <div className="h-16 w-32 bg-gray-100 rounded flex items-center justify-center">
                    <span className="font-bold text-xl text-brand-gray">BLUE DART</span>
                  </div>
                  <span className="text-sm text-brand-gray">Since 2019</span>
                </div>
                
                <div className="flex flex-col items-center gap-4 p-4 border border-gray-100 rounded-lg">
                  <div className="h-16 w-32 bg-gray-100 rounded flex items-center justify-center">
                    <span className="font-bold text-xl text-brand-gray">DHL</span>
                  </div>
                  <span className="text-sm text-brand-gray">Since 2020</span>
                </div>
                
                <div className="flex flex-col items-center gap-4 p-4 border border-gray-100 rounded-lg">
                  <div className="h-16 w-32 bg-gray-100 rounded flex items-center justify-center">
                    <span className="font-bold text-xl text-brand-gray">FEDEX</span>
                  </div>
                  <span className="text-sm text-brand-gray">Since 2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
