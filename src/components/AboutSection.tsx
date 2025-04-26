
const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-brand-orange">Us</span>
          </h2>
          <p className="text-brand-gray max-w-2xl mx-auto mb-8">
            Your trusted partner in logistics and supply chain solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-brand-dark">Our Story</h3>
            <p className="text-brand-gray">
              Founded with a vision to revolutionize the logistics industry, Saitracksolution Hub has grown 
              to become a leading provider of comprehensive logistics solutions. Our journey began with a 
              simple mission: to make delivery services more efficient, reliable, and accessible for businesses 
              of all sizes.
            </p>
            <p className="text-brand-gray">
              Today, we proudly serve a diverse portfolio of clients, from small local businesses to major 
              corporations, delivering excellence in every package we handle.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-brand-dark">Our Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Reliability</h4>
                <p className="text-brand-gray">Consistent, dependable service you can count on</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Innovation</h4>
                <p className="text-brand-gray">Embracing technology for better solutions</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Excellence</h4>
                <p className="text-brand-gray">Commitment to superior service quality</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Integrity</h4>
                <p className="text-brand-gray">Honest, transparent business practices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
