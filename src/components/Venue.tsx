
import { MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Venue = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl text-sage-800 mb-6">The Venue</h2>
          <div className="w-24 h-1 bg-terracotta-400 mx-auto mb-8"></div>
          <p className="text-sage-600 text-xl max-w-3xl mx-auto">
            Join us at the stunning Hacienda San Rafael, a historic estate nestled in the heart of Andalusia
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-scale-in">
            <img 
              src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80"
              alt="Hacienda San Rafael"
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
            />
          </div>
          
          <div className="space-y-6 animate-fade-in">
            <h3 className="font-serif text-3xl text-sage-800">Hacienda San Rafael</h3>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-terracotta-500 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sage-700 font-medium">Calle de la Esperanza, 42</p>
                <p className="text-sage-600">41001 Seville, Spain</p>
              </div>
            </div>
            
            <p className="text-sage-700 leading-relaxed">
              This 18th-century estate features beautiful Moorish architecture, lush gardens filled 
              with orange trees, and stunning courtyards perfect for our celebration. The venue 
              combines traditional Spanish elegance with modern amenities, creating the perfect 
              backdrop for our special day.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-terracotta-200 animate-scale-in">
            <CardContent className="p-6 text-center">
              <h4 className="font-serif text-xl text-sage-800 mb-3">Ceremony</h4>
              <p className="text-sage-600 mb-2">Garden Courtyard</p>
              <p className="text-sage-500 text-sm">5:00 PM</p>
            </CardContent>
          </Card>
          
          <Card className="border-terracotta-200 animate-scale-in">
            <CardContent className="p-6 text-center">
              <h4 className="font-serif text-xl text-sage-800 mb-3">Cocktail Hour</h4>
              <p className="text-sage-600 mb-2">Orange Grove Terrace</p>
              <p className="text-sage-500 text-sm">6:00 PM</p>
            </CardContent>
          </Card>
          
          <Card className="border-terracotta-200 animate-scale-in">
            <CardContent className="p-6 text-center">
              <h4 className="font-serif text-xl text-sage-800 mb-3">Reception</h4>
              <p className="text-sage-600 mb-2">Main Ballroom</p>
              <p className="text-sage-500 text-sm">7:30 PM</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Venue;
