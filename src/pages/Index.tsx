
import Hero from '@/components/Hero';
import AboutCouple from '@/components/AboutCouple';
import Venue from '@/components/Venue';
import RSVP from '@/components/RSVP';
import PhotoGallery from '@/components/PhotoGallery';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Venue />
      <PhotoGallery />
      <RSVP />
      <Footer />
    </div>
  );
};

export default Index;
