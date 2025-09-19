import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const achievements = [
    'Over 10,000 satisfied clients worldwide',
    '99.9% uptime guaranteed',
    'Award-winning design team',
    '24/7 premium support',
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 rounded-[4rem] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="scroll-reveal relative">
            <div className="absolute -top-4 -left-4 w-36 h-36 bg-gradient-premium rounded-full opacity-30 -z-10"></div>

            {/* Heading */}
            <h2 className="text-4xl text-secondary md:text-5xl font-bold mb-6">
              Who We
              <span className="bg-gradient-premium bg-clip-text text-transparent [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"> Are</span>
            </h2>

            {/* Collage (mobile only) */}
            <div className="mb-8 lg:hidden relative">
              <div className="grid grid-cols-2 gap-4 relative">
                {/* Yellow Circle Animation */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full opacity-30 animate-ping"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-yellow-400 rounded-full opacity-30 animate-pulse"></div>

                <img
                  src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
                  alt="Team 1"
                  className="rounded-2xl shadow-lg object-cover w-full h-48 relative z-10"
                />
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                  alt="Team 2"
                  className="rounded-2xl shadow-lg object-cover w-full h-64 relative z-10"
                />
                <img
                  src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70"
                  alt="Team 3"
                  className="rounded-2xl shadow-lg object-cover w-full h-64 relative z-10"
                />
                <img
                  src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51"
                  alt="Team 4"
                  className="rounded-2xl shadow-lg object-cover w-full h-48 relative z-10"
                />
              </div>
            </div>

            {/* Paragraph */}
            <p className="text-lg text-secondary mb-8 leading-relaxed">
              We are a team of passionate professionals dedicated to delivering
              premium digital solutions that exceed expectations. Our commitment
              to quality and innovation has made us the trusted choice for
              businesses worldwide.
            </p>

            {/* Achievements */}
            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-secondary">{achievement}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button
              size="lg"
              className="bg-gradient-premium text-primary-foreground hover:shadow-glow transition-premium hover-lift"
            >
              Learn More About Us
            </Button>
          </div>

          {/* Right Side Collage (desktop only) */}
          <div className="scroll-reveal hidden lg:block relative">
            <div className="grid grid-cols-2 gap-4 relative">
              {/* Yellow Circle Animation */}
              <div className="absolute -top-10 -left-10 w-36 h-36 bg-yellow-500 rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-yellow-500 rounded-full opacity-30 animate-pulse"></div>

              <img
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
                alt="Team 1"
                className="rounded-2xl shadow-lg object-cover w-full h-48 relative z-10"
              />
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="Team 2"
                className="rounded-2xl shadow-lg object-cover w-full h-64 relative z-10"
              />
              <img
                src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70"
                alt="Team 3"
                className="rounded-2xl shadow-lg object-cover w-full h-64 relative z-10"
              />
              <img
                src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51"
                alt="Team 4"
                className="rounded-2xl shadow-lg object-cover w-full h-48 relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
