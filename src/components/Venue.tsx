import { MapPin, Clock, Bus } from 'lucide-react'; // Added Bus icon
import IglesiaICADEImage from '@/assets/IglesiaICADE.png';
import fotoTenadas from '@/assets/fotoTenadas.jpeg';

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
              {/* Ceremony Time */}
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-terracotta-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sage-700 font-medium">Ceremonia</p>
                  <p className="text-sage-600">12:30</p>
                </div>
              </div>
              {/* Bus info for Iglesia */}
              <div className="flex items-start gap-3">
                <Bus className="w-5 h-5 text-terracotta-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sage-600">Habrá autobuses para ir a la finca al finalizar la ceremonia </p>
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
                src={fotoTenadas}
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
              {/* Bus info for Las Tenadas */}
              <div className="flex items-start gap-3">
                <Bus className="w-5 h-5 text-terracotta-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sage-600">Los autobuses volverán a la zona de Bernabéu, concretaremos hora y sitio exacto a medida que se acerque la fecha</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Venue;
