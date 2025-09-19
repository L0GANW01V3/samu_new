import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@Samayu Solutions.com',
      description: 'Send us an email anytime',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: '24/7 premium support',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'New York, NY 10001',
      description: 'Our headquarters',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your
            <span className="bg-gradient-premium bg-clip-text text-transparent [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"> Journey?</span>
          </h2>
          <p className="text-xl text-secondary-foreground max-w-2xl mx-auto">
            Let's discuss how we can transform your vision into reality with our premium solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="scroll-reveal">
            <Card className="bg-gradient-card border-border shadow-elegant">
              <CardContent className="p-8">
                <div className="absolute -top-6 -left-10 w-36 h-36 bg-gradient-premium rounded-full opacity-30 -z-10"></div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Send us a message
                </h3>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        First Name
                      </label>
                      <Input
                        className="bg-input border-border focus:ring-primary"
                        placeholder="John"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-36 h-36 bg-gradient-premium rounded-full opacity-30 -z-10"></div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Last Name
                      </label>
                      <Input
                        className="bg-input border-border focus:ring-primary"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Email
                    </label>
                    <Input
                      type="email"
                      className="bg-input border-border focus:ring-primary"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Message
                    </label>
                    <Textarea
                      className="bg-input border-border focus:ring-primary min-h-32"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button
                    size="lg"
                    className="bg-gradient-premium text-primary-foreground hover:shadow-glow transition-premium w-full hover-lift"
                  >
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="scroll-reveal">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Get in touch
                </h3>
                <p className="text-secondary-foreground text-lg leading-relaxed">
                  We're here to help you succeed. Reach out to our team of experts
                  and let's create something extraordinary together.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="bg-gradient-card border-border hover-lift group"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-premium rounded-full flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-premium">
                          <info.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">
                            {info.title}
                          </h4>
                          <p className="text-primary font-medium mb-1">
                            {info.details}
                          </p>
                          <p className="text-sm text-secondary-foreground">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;