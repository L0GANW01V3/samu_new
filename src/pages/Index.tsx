import { useScrollReveal } from '@/hooks/useScrollReveal';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Stats from '@/components/Stats';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <Features />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
