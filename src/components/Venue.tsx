import { MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import TenadasImage from '@/assets/LasTenadas.png';
import IglesiaICADEImage from '@/assets/IglesiaICADE.png';

const Venue = () => {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl text-sage-800 mb-6">Iglesia</h2>
            <div className="w-24 h-1 bg-terracotta-400 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-scale-in">
              <img 
                src={IglesiaICADEImage}
                alt="Iglesia de la Inmaculada y San Pedro Claver"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
            
            <div className="space-y-6 animate-fade-in">
              <h3 className="font-serif text-3xl text-sage-800">Iglesia de la Inmaculada y San Pedro Claver</h3>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-terracotta-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sage-700 font-medium">C. de Sta. Cruz de Marcenado, 22b</p>
                  <p className="text-sage-600">28015 Madrid, España</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl text-sage-800 mb-6">Celebración</h2>
            <div className="w-24 h-1 bg-terracotta-400 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-scale-in">
              <img 
                src={TenadasImage}
                alt="Finca Las Tenadas"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
            
            <div className="space-y-6 animate-fade-in">
              <h3 className="font-serif text-3xl text-sage-800">Finca Las Tenadas</h3>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-terracotta-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sage-700 font-medium">Carretera Madrid - Burgos, KM 30</p>
                  <p className="text-sage-600">28770 Colmenar Viejo, Madrid</p>
                </div>
              </div>
            </div>
          </div>
          {/* Modified this div to use flexbox for centering */}
          <div className="flex flex-wrap justify-center gap-8">
            <Card className="border-terracotta-200 animate-scale-in">
              <CardContent className="p-6 text-center">
                <h4 className="font-serif text-xl text-sage-800 mb-3">Ceremonia</h4>
                <p className="text-sage-600 mb-2">Iglesia</p>
                <p className="text-sage-500 text-sm">12:30</p>
              </CardContent>
            </Card>
            
            <Card className="border-terracotta-200 animate-scale-in">
              <CardContent className="p-6 text-center">
                <h4 className="font-serif text-xl text-sage-800 mb-3">Cocktail</h4>
                <p className="text-sage-600 mb-2">Las Tenadas</p>
                <p className="text-sage-500 text-sm">15:00</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Venue;
