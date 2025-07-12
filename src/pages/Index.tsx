
import Hero from '@/components/Hero';
import Venue from '@/components/Venue';
import RSVP from '@/components/RSVP';
import PhotoGallery from '@/components/PhotoGallery';
import Gifts from '@/components/Gifts'; // Import the new Gifts component
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Venue />
      <RSVP />
      <Gifts /> 
      <Footer />
    </div>
  );
};

export default Index;
