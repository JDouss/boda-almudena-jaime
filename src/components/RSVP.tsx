import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from '@/hooks/use-toast';

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    guests: '1',
    attendance: '',
    dietary: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfx-3R1YA_-Rlpefs9udCPYonnJRqk-bm6jhw8P07uSyQjp1Q/formResponse';

    const formDataToSubmit = new FormData();
    formDataToSubmit.append('entry.1424661284', formData.name);
    formDataToSubmit.append('entry.1498135098', formData.guests);
    formDataToSubmit.append('entry.877086558', formData.attendance);
    formDataToSubmit.append('entry.2606285', formData.dietary);

    try {
      await fetch(formUrl, {
        method: 'POST',
        body: formDataToSubmit,
        mode: 'no-cors'
      });

      toast({
        title: "RSVP Submitted!",
        description: "Thank you for your response. We can't wait to celebrate with you!",
      });
      setFormData({ name: '', guests: '1', attendance: '', dietary: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your RSVP. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-20 bg-sage-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl text-sage-800 mb-6">RSVP</h2>
          <div className="w-24 h-1 bg-terracotta-400 mx-auto mb-8"></div>
          <p className="text-sage-600 text-xl">
            Please let us know if you'll be joining us for our special day
          </p>
        </div>
        
        <Card className="border-terracotta-200 shadow-xl animate-scale-in">
          <CardHeader className="bg-cream-100 rounded-t-lg">
            <CardTitle className="text-center font-serif text-2xl text-sage-800">
              We Hope You Can Join Us
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-sage-700 font-medium">Nombre(s)</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="border-sage-300 focus:border-terracotta-400"
                  />
                </div>
                <div>
                  <Label htmlFor="guests" className="text-sage-700 font-medium">¿Cuántos seréis?</Label>
                  <Input
                    id="guests"
                    type="number"
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: e.target.value})}
                    required
                    min="1"
                    className="border-sage-300 focus:border-terracotta-400"
                  />
                </div>
              </div>
              
              <div>
                <Label className="text-sage-700 font-medium">¿Puedes asistir?</Label>
                <RadioGroup
                  value={formData.attendance}
                  onValueChange={(value) => setFormData({...formData, attendance: value})}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Sí, allí estaré" id="yes" />
                    <Label htmlFor="yes">Sí, allí estaré</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="No puedo, lo siento" id="no" />
                    <Label htmlFor="no">No puedo, lo siento</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div>
                <Label className="text-sage-700 font-medium">Restricciones alimenticias</Label>
                <RadioGroup
                  value={formData.dietary}
                  onValueChange={(value) => setFormData({...formData, dietary: value})}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Ninguna" id="none" />
                    <Label htmlFor="none">Ninguna</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Vegano" id="vegan" />
                    <Label htmlFor="vegan">Vegano</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Celiaco" id="celiac" />
                    <Label htmlFor="celiac">Celiaco</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-terracotta-500 hover:bg-terracotta-600 text-white py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
              >
                Send RSVP
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RSVP;
