
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Dedicated account managers for seamless communication",
  "API integration with your existing systems",
  "Custom reporting and analytics dashboards",
  "Flexible pricing models based on your volume",
  "Real-time tracking and proof of delivery",
];

const partners = [
  { name: "AMAZON", year: "2018" },
  { name: "BLUE DART", year: "2019" },
  { name: "DELHIVERY", year: "2020" },
  { name: "EKART", year: "2021" },
  { name: "XPRESSBEES", year: "2021" },
  { name: "DTDC", year: "2022" },
];

const PartnersSection = () => {
  return (
    <section id="partners" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-orange-100 text-brand-orange text-sm font-semibold px-4 py-1 rounded-full mb-4 uppercase tracking-wider">
            Our Network
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Partner With Us for{" "}
            <span className="text-brand-orange">Seamless</span> Logistics
          </h2>
          <p className="text-brand-gray max-w-2xl mx-auto">
            Join industry leaders who trust our logistics expertise for reliable, scalable, and cost-effective delivery solutions across India.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Benefits */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-brand-dark mb-6">Why Partner With SaiTrackSolutions?</h3>
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-brand-orange flex-shrink-0 mt-0.5" />
                <p className="text-brand-gray leading-snug">{benefit}</p>
              </div>
            ))}
            <div className="pt-4">
              <Button
                className="bg-brand-orange hover:bg-orange-600 text-white shadow-md shadow-orange-500/20 transition-all"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Become a Partner <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right: Partner logos grid */}
          <div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-lg font-bold text-brand-dark mb-6 text-center">Trusted By Industry Leaders</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {partners.map((partner, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col items-center justify-center py-5 px-3 hover:border-brand-orange hover:shadow-md transition-all duration-200 group"
                  >
                    <span className="font-extrabold text-base text-brand-dark group-hover:text-brand-orange transition-colors tracking-tight text-center">
                      {partner.name}
                    </span>
                    <span className="text-xs text-brand-gray mt-1">Since {partner.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
