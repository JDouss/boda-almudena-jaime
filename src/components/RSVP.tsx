import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const RSVP = () => {
  return (
    <section className="py-20 bg-sage-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl text-sage-800 mb-6">RSVP</h2>
          <div className="w-24 h-1 bg-terracotta-400 mx-auto mb-8"></div>
          <p className="text-sage-600 text-xl">
            Please let us know if you'll be joining us for our special day
          </p>
        </div>
        
        <Card className="border-terracotta-200 shadow-xl animate-scale-in">
          <CardHeader className="bg-cream-100 rounded-t-lg">
            <CardTitle className="text-center font-serif text-2xl text-sage-800">
              We Hope You Can Join Us
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <p className="text-center text-sage-700">
              Our online RSVP form is currently under construction. Please check back soon!
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RSVP;
