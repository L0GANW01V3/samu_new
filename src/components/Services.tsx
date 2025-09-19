import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Palette as PaletteIcon, 
  TrendingUp, 
  Lock 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Bespoke software solutions tailored to your unique business requirements.',
      price: 'From $5,000',
      features: ['Custom Architecture', 'Scalable Solutions', 'Modern Tech Stack'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description: 'Premium mobile experiences that engage users across all devices.',
      price: 'From $8,000',
      features: ['iOS & Android', 'Cross Platform', 'App Store Ready'],
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Robust cloud solutions that scale with your growing business needs.',
      price: 'From $3,000',
      features: ['Auto Scaling', '99.9% Uptime', 'Global CDN'],
    },
    {
      icon: PaletteIcon,
      title: 'Premium Design',
      description: 'Luxurious designs that captivate audiences and drive conversions.',
      price: 'From $4,000',
      features: ['Brand Identity', 'UI/UX Design', 'Design Systems'],
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Strategic marketing campaigns that amplify your brand presence.',
      price: 'From $2,500',
      features: ['SEO Optimization', 'Social Media', 'Analytics'],
    },
    {
      icon: Lock,
      title: 'Security Audits',
      description: 'Comprehensive security assessments to protect your digital assets.',
      price: 'From $6,000',
      features: ['Penetration Testing', 'Compliance', 'Risk Assessment'],
    },
  ];

  return (
    <section id="services" className="py-24 bg-white rounded-bl-[4rem] rounded-br-[4rem]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
            Premium 
            <span className="bg-gradient-premium bg-clip-text text-transparent [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"> Services</span>
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Comprehensive solutions designed to elevate your business to new heights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border hover-lift scroll-reveal group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-premium rounded-full flex items-center justify-center mb-6 group-hover:shadow-glow transition-premium">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {service.title}
                </h3>
                
                <p className="text-secondary-foreground mb-6">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-secondary-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    {service.price}
                  </span>
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-premium"
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
              
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-premium opacity-0 group-hover:opacity-5 transition-premium"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;