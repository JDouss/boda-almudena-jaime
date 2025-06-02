
const AboutCouple = () => {
  return (
    <section className="py-20 bg-cream-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl text-sage-800 mb-6">Our Love Story</h2>
          <div className="w-24 h-1 bg-terracotta-400 mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-scale-in">
            <img 
              src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80"
              alt="Isabella and Miguel"
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
            />
          </div>
          
          <div className="space-y-6 animate-fade-in">
            <p className="text-sage-700 text-lg leading-relaxed">
              We met on a warm summer evening in Madrid, where Miguel was studying architecture 
              and Isabella was pursuing her passion for art history. What started as a chance 
              encounter at a local café turned into late-night conversations about life, dreams, 
              and our shared love for Spain's rich culture.
            </p>
            
            <p className="text-sage-700 text-lg leading-relaxed">
              After five beautiful years together, Miguel proposed during a sunset walk through 
              the gardens of Alcázar of Seville - the same city where we'll say "I do" surrounded 
              by our loved ones.
            </p>
            
            <p className="text-sage-700 text-lg leading-relaxed">
              We can't wait to celebrate this new chapter of our lives with all of you in the 
              magical setting of Andalusia, where every corner tells a story of love and tradition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCouple;
