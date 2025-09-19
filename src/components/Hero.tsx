import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto scroll-reveal">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Elevate Your
            <span className="bg-gradient-premium bg-clip-text text-transparent block [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Digital Presence
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-secondary-foreground mb-8 max-w-2xl mx-auto">
            Premium solutions that transform your business with cutting-edge technology
            and unparalleled elegance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-premium text-primary-foreground hover:shadow-glow transition-premium text-lg px-8 py-4 hover-lift"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-premium text-lg px-8 py-4"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-premium rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-primary/30 rounded-full opacity-40 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
    </section>
  );
};

export default Hero;