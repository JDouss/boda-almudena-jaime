// src/components/Gifts.tsx
import * as React from "react";

const Gifts = () => {
  return (
    <section className="py-20 bg-sage-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl text-sage-800 mb-6">Regalos</h2>
          <div className="w-24 h-1 bg-terracotta-400 mx-auto mb-8"></div>
          <p className="text-sage-600 text-xl leading-relaxed">
            Lo que más nos importa es compartir este día tan especial con vosotros. Si aún así queréis hacernos un regalo, os dejamos nuestro número de cuenta          </p>
          {/* IMPORTANT: Replace [YOUR ACCOUNT NUMBER HERE] with your actual account number */}
          <p className="text-sage-700 text-xl md:text-2xl font-semibold mt-8">
            ES7300496101132916153383
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gifts;
