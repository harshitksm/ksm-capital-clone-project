import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/95"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal text-foreground leading-[0.9] mb-12 tracking-tight">
            For more than seven generations, we have grown and evolved alongside members of the KSM family, pursuing{" "}
            <span className="block text-primary font-medium mt-4">extraordinary possibilities.</span>
          </h1>
          
          <div className="mt-16">
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent border-2 border-foreground text-foreground hover:bg-foreground hover:text-background text-base px-8 py-4 font-medium tracking-wide"
            >
              Who We Are
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;