import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    // IntersectionObserver to detect visible section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1));
          }
        });
      },
      { threshold: 0.6 } // 60% of section must be visible
    );

    navigation.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-premium ${isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-elegant' : 'bg-transparent'
        }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-premium bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Samayu Solutions
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative transition-smooth font-semibold ${activeTab === item.name
                    ? 'bg-gradient-premium bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]'
                    : 'text-foreground hover:text-primary'
                  }`}
              >
                {item.name}
                {activeTab === item.name && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-premium rounded-full"></span>
                )}
              </a>
            ))}
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:shadow-glow hover:bg-gradient-premium hover:border-transparent"
            >
              Sign In
            </Button>
            <Button className="bg-gradient-premium text-primary-foreground hover:shadow-glow transition-premium">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            className="md:hidden"
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 px-4 rounded-xl bg-background/95 backdrop-blur-sm shadow-elegant border border-border">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`relative transition-smooth font-semibold ${activeTab === item.name
                      ? 'bg-gradient-premium bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]'
                      : 'text-foreground hover:text-primary'
                    }`}
                >
                  {item.name}
                  {activeTab === item.name && (
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-premium rounded-full"></span>
                  )}
                </a>
              ))}
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:shadow-glow hover:bg-premium hover:border-transparent w-full"
              >
                Sign In
              </Button>
              <Button className="bg-gradient-premium text-primary-foreground hover:shadow-glow transition-premium w-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
