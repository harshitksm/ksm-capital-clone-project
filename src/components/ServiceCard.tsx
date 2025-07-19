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
    <Card className="group relative overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 bg-card border-0">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 group-hover:opacity-30 transition-opacity duration-500"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      
      <div className="relative z-10 p-10 h-full flex flex-col justify-between min-h-[500px]">
        <div>
          <h3 className="font-serif text-4xl font-medium text-foreground mb-6 leading-tight">{title}</h3>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">{description}</p>
        </div>
        
        <div>
          <p className="font-medium text-foreground mb-6 text-lg">{subtitle}</p>
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            Learn More
          </Button>
        </div>
      </div>
      
      {/* Decorative Element */}
      <div className="absolute top-6 right-6 w-20 h-20 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </Card>
  );
};

export default ServiceCard;