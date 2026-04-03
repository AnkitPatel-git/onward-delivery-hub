
const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-brand-orange">Us</span>
          </h2>
          <p className="text-brand-gray max-w-3xl mx-auto">
            Your trusted partner in PAN India Courier & Cargo solutions since 2018.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-brand-dark">Who We Are</h3>
            <p className="text-brand-gray leading-relaxed">
              Saitrack Solutions has been offering PAN India Courier & Cargo solutions since 2018, designed to optimize the distribution process from pickup to delivery globally. We are an organization structured to provide services related to an "end-to-end" logistics concept, enabling us to provide our clients & partners a one-stop platform.
            </p>
            <p className="text-brand-gray leading-relaxed">
              Our expertise spans a broad range of industries including Infrastructure, Automobile, Iron & Steel, Wind Power, Consumer Durable, Agro Products, Aviation, and Ceramics.
            </p>
            <p className="text-brand-gray leading-relaxed">
              The company came into existence as a result of the owners' vision of providing affordable couriers and logistics services to corporate as well as individual retail customers. We have created a niche in the Indian markets for the last 7+ years primarily because of our innovative and uncompromising services.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-brand-dark">Our Strength</h3>
            <p className="text-brand-gray leading-relaxed">
              With our 7+ years of team experience, we have built a strong network of trusted partners and vendors, enabling us to offer comprehensive logistics services tailored to the unique needs of our clients. We believe in delivering excellence in every aspect of our operations, and our track record speaks for itself.
            </p>
            <p className="text-brand-gray leading-relaxed">
              Our comprehensive range of services includes transportation, warehousing, inventory management, customs clearance, and supply chain consulting. Whether you require domestic or international logistics support, we have the knowledge and resources to ensure your goods reach their destination safely and on time.
            </p>
            <p className="text-brand-gray leading-relaxed">
              The real attribute to the success of Saitrack Solutions is its willingness to upgrade the systems with changing times and also to incorporate fresh and innovative ideas to make its presence felt.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="p-6 bg-gray-50 rounded-lg text-center">
            <h4 className="text-3xl font-bold text-brand-orange mb-1">7+</h4>
            <p className="text-brand-gray text-sm">Years of Experience</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg text-center">
            <h4 className="text-3xl font-bold text-brand-orange mb-1">PAN</h4>
            <p className="text-brand-gray text-sm">India Coverage</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg text-center">
            <h4 className="text-3xl font-bold text-brand-orange mb-1">8+</h4>
            <p className="text-brand-gray text-sm">Industries Served</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg text-center">
            <h4 className="text-3xl font-bold text-brand-orange mb-1">E2E</h4>
            <p className="text-brand-gray text-sm">Logistics Solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
