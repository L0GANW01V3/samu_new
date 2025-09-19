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
    <section id="about" className="py-24 bg-white rounded-[4rem]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="scroll-reveal">
            <div className="absolute -top-4 -left-4 w-36 h-36 bg-gradient-premium rounded-full opacity-30 -z-10"></div>
            <h2 className="text-4xl text-secondary md:text-5xl font-bold mb-6">
              Crafting
              <span className="bg-gradient-premium bg-clip-text text-transparent [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"> Excellence</span>
              <br />Since 2010
            </h2>

            <p className="text-lg text-secondary mb-8 leading-relaxed">
              We are a team of passionate professionals dedicated to delivering
              premium digital solutions that exceed expectations. Our commitment
              to quality and innovation has made us the trusted choice for
              businesses worldwide.
            </p>

            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-secondary">{achievement}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-gradient-premium text-primary-foreground hover:shadow-glow transition-premium hover-lift"
            >
              Learn More About Us
            </Button>
          </div>

          <div className="scroll-reveal">
            <div className="relative">
              <div className="bg-gradient-card p-8 rounded-2xl shadow-elegant">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">500+</div>
                    <div className="text-secondary-foreground">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">15+</div>
                    <div className="text-secondary-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">98%</div>
                    <div className="text-secondary-foreground">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-secondary-foreground">Support Available</div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-premium rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;