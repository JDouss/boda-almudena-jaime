
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    attendance: '',
    dietary: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "RSVP Submitted!",
      description: "Thank you for your response. We can't wait to celebrate with you!",
    });
    setFormData({ name: '', email: '', guests: '1', attendance: '', dietary: '' });
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
                  <Label htmlFor="name" className="text-sage-700 font-medium">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="border-sage-300 focus:border-terracotta-400"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sage-700 font-medium">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="border-sage-300 focus:border-terracotta-400"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label className="text-sage-700 font-medium">Number of Guests</Label>
                  <Select value={formData.guests} onValueChange={(value) => setFormData({...formData, guests: value})}>
                    <SelectTrigger className="border-sage-300 focus:border-terracotta-400">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Guest</SelectItem>
                      <SelectItem value="2">2 Guests</SelectItem>
                      <SelectItem value="3">3 Guests</SelectItem>
                      <SelectItem value="4">4 Guests</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-sage-700 font-medium">Will you attend?</Label>
                  <Select value={formData.attendance} onValueChange={(value) => setFormData({...formData, attendance: value})}>
                    <SelectTrigger className="border-sage-300 focus:border-terracotta-400">
                      <SelectValue placeholder="Please select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes, I'll be there!</SelectItem>
                      <SelectItem value="no">Sorry, can't make it</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="dietary" className="text-sage-700 font-medium">Dietary Restrictions</Label>
                <Input
                  id="dietary"
                  value={formData.dietary}
                  onChange={(e) => setFormData({...formData, dietary: e.target.value})}
                  placeholder="Any allergies or special dietary needs?"
                  className="border-sage-300 focus:border-terracotta-400"
                />
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
