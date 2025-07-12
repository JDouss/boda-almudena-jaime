
import { Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import fotoPedida from '@/assets/fotoPedida.jpg'



const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={fotoPedida} // Changed to use your imported image
        alt="Almudena y Jaime" // More descriptive alt text for accessibility
        className="absolute inset-0 w-full h-full object-cover object-position-center" // Added object-position-center
        style={{ zIndex: -1 }} // Places image behind other content
      />
      
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="font-serif text-6xl md:text-8xl font-bold mb-6 tracking-wide">
          Almudena <span className="text-cream-200">y</span> Jaime
        </h1>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 text-lg">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-cream-200" />
            <span>18 de Octubre, 2025</span>
          </div>
          <div className="hidden md:block w-1 h-1 bg-cream-200 rounded-full"></div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-cream-200" />
            <span>Madrid, España</span>
          </div>
        </div>
        

      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-white/30 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
