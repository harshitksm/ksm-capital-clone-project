import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  subtitle: string;
  backgroundImage: string;
  href: string;
}

const ServiceCard = ({ title, description, subtitle, backgroundImage, href }: ServiceCardProps) => {
  return (
    <Card className="group relative overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 bg-card">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 group-hover:opacity-20 transition-opacity duration-500"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      
      <div className="relative z-10 p-8 h-full flex flex-col justify-between min-h-[400px]">
        <div>
          <h3 className="font-serif text-3xl font-bold text-primary mb-4">{title}</h3>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">{description}</p>
        </div>
        
        <div>
          <p className="font-semibold text-primary mb-4">{subtitle}</p>
          <Button 
            variant="outline" 
            className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
          >
            Learn More
          </Button>
        </div>
      </div>
      
      {/* Decorative Element */}
      <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-ksm-gold/20 to-ksm-gold-muted/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </Card>
  );
};

export default ServiceCard;