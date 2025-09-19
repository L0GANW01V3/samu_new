import { Card, CardContent } from '@/components/ui/card';
import { Zap, Shield, Palette, Rocket, Globe, Crown } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance that delivers results at the speed of light.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security protocols to protect your valuable data.',
    },
    {
      icon: Palette,
      title: 'Premium Design',
      description: 'Crafted with attention to detail and luxurious aesthetics.',
    },
    {
      icon: Rocket,
      title: 'Scalable Solutions',
      description: 'Built to grow with your business, from startup to enterprise.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide infrastructure ensuring optimal performance everywhere.',
    },
    {
      icon: Crown,
      title: 'VIP Support',
      description: 'White-glove support from our team of expert professionals.',
    },
  ];

  return (
    <section id="features" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Premium 
            <span className="bg-gradient-premium bg-clip-text text-transparent [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"> Features</span>
          </h2>
          <p className="text-xl text-secondary-foreground max-w-2xl mx-auto">
            Discover the exceptional capabilities that set us apart from the competition.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border hover-lift scroll-reveal group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-premium rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-premium">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-secondary-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;