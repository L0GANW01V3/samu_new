const Stats = () => {
  const stats = [
    { number: '10K+', label: 'Happy Clients', suffix: '' },
    { number: '500+', label: 'Projects Completed', suffix: '' },
    { number: '99.9', label: 'Uptime Guarantee', suffix: '%' },
    { number: '24/7', label: 'Premium Support', suffix: '' },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden rounded-[4rem] -z-10">
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-premium rounded-full opacity-50 animate-float"></div>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl text-secondary md:text-5xl font-bold mb-6">
            Trusted by
            <span className="bg-gradient-premium bg-clip-text text-transparent [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"> Thousands</span>
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Our track record speaks for itself. Join the elite companies that trust us.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center scroll-reveal group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-premium bg-clip-text text-transparent [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mb-4 group-hover:scale-110 transition-premium">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-lg text-secondary">
                  {stat.label}
                </div>

                {/* Decorative line */}
                <div className="w-16 h-1 bg-gradient-premium mx-auto mt-4 rounded-full group-hover:w-24 transition-premium"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Background decorative elements */}
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-accent rounded-full opacity-50 animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary rounded-full opacity-50 animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
    </section>
  );
};

export default Stats;