import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechVision Inc.',
      content: 'The level of professionalism and quality delivered exceeded all our expectations. Our digital transformation has been remarkable.',
      rating: 5,
      avatar: 'SJ',
    },
    {
      name: 'Michael Chen',
      role: 'Founder, StartupHub',
      content: 'Working with this team was a game-changer. They understood our vision and brought it to life with incredible precision.',
      rating: 5,
      avatar: 'MC',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director, GrowthCorp',
      content: 'The attention to detail and premium quality of work is unmatched. Our ROI increased by 300% within the first quarter.',
      rating: 5,
      avatar: 'ER',
    },
    {
      name: 'David Thompson',
      role: 'CTO, Innovation Labs',
      content: 'Their technical expertise and creative approach solved complex challenges we thought were impossible to overcome.',
      rating: 5,
      avatar: 'DT',
    },
    {
      name: 'Lisa Park',
      role: 'Product Manager, FutureScale',
      content: 'The collaborative process and end-to-end support made this the smoothest project launch we have ever experienced.',
      rating: 5,
      avatar: 'LP',
    },
    {
      name: 'James Wilson',
      role: 'Director, GlobalTech',
      content: 'Premium quality work with exceptional results. The team goes above and beyond to ensure complete satisfaction.',
      rating: 5,
      avatar: 'JW',
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Client 
            <span className="bg-gradient-premium bg-clip-text text-transparent [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"> Success Stories</span>
          </h2>
          <p className="text-xl text-secondary-foreground max-w-2xl mx-auto">
            Hear from the industry leaders who trust us with their most important projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border hover-lift scroll-reveal group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="absolute top-6 right-6 opacity-20">
                  <Quote className="h-8 w-8 text-primary" />
                </div>
                
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-secondary-foreground mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-premium rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-secondary-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-premium opacity-0 group-hover:opacity-5 transition-premium rounded-lg"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;