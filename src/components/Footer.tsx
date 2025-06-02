
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sage-800 text-white py-12">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <div className="mb-8 animate-fade-in">
          <h3 className="font-serif text-3xl mb-4">Isabella & Miguel</h3>
          <p className="text-sage-200 text-lg mb-6">
            September 15, 2024 • Seville, Spain
          </p>
          <div className="flex items-center justify-center gap-2 text-terracotta-300">
            <Heart className="w-5 h-5 fill-current" />
            <span className="text-sm tracking-wide">WITH LOVE</span>
            <Heart className="w-5 h-5 fill-current" />
          </div>
        </div>
        
        <div className="border-t border-sage-600 pt-8 text-sage-300 text-sm">
          <p>For questions, please contact us at hello@isabellaumiguel.com</p>
          <p className="mt-2">We can't wait to celebrate with you in beautiful Spain!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
