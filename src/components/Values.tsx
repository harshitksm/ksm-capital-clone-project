import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Values = () => {
  const values = [
    {
      title: "What We Believe In",
      description: "Our principles have been shaped by over 140 years working alongside successful families. Today, those principles guide our growth.",
      buttonText: "Our Values",
      href: "#values"
    },
    {
      title: "A Distinct Heritage", 
      description: "Our history is filled with moments that define us; not because of the past, but because of what they mean for our future.",
      buttonText: "Our History",
      href: "#history"
    },
    {
      title: "An Inspired Future",
      description: "We're nothing without our people. Our experienced and talented team approaches each challenge with energy, creativity, and care.",
      buttonText: "Our People", 
      href: "#people"
    }
  ];

  return (
    <section className="py-20 bg-ksm-cream/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="bg-card shadow-card hover:shadow-elegant transition-all duration-300 border-border/50">
              <div className="p-8 text-center">
                <div className="w-16 h-1 bg-ksm-gold mx-auto mb-6"></div>
                
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                  {value.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {value.description}
                </p>
                
                <Button 
                  variant="outline"
                  className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  {value.buttonText}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;