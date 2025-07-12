import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const RSVP = () => {
  return (
    <section className="py-20 bg-sage-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl text-sage-800 mb-6">RSVP</h2>
          <div className="w-24 h-1 bg-terracotta-400 mx-auto mb-8"></div>
          <p className="text-sage-600 text-xl">
            Por favor, responde el formulario para ayudarnos a planear!
          </p>
        </div>

        <Card className="border-terracotta-200 shadow-xl animate-scale-in">
          <CardHeader className="bg-cream-100 rounded-t-lg">
            <CardTitle className="text-center font-serif text-2xl text-sage-800">
              We Hope You Can Join Us
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfgHIMfGNq03plOJNQVk5HXSjLWigL7oB3AetIGl8X6qc2fzQ/viewform?embedded=true"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="RSVP Form"
            >
              Loading…
            </iframe>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RSVP;
