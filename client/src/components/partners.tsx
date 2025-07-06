export default function Partners() {
  const stats = [
    { number: "30+", label: "Trusted Clients" },
    { number: "150M+", label: "Combined Reach" },
    { number: "5+", label: "Years of Excellence" }
  ];

  return (
    <section id="partners" className="bg-black py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-white">Our Impact</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Delivering exceptional marketing solutions that drive real results across various industries 
            in the Egyptian market.
          </p>
        </div>
        
        {/* Partnership Stats */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold font-playfair mb-2 text-white">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
