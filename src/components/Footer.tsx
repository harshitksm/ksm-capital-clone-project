import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <div className="border-b border-primary-foreground/20">
        <div className="container mx-auto px-6 py-16 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            We're inspired that you're here.
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Explore a network of opportunities not commonly found elsewhere.
          </p>
          <Button 
            variant="outline"
            size="lg"
            className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            Request an Introduction
          </Button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-serif font-bold">K</span>
              </div>
              <span className="font-serif text-xl font-bold">KSM Capital</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Professional wealth management, asset management, and investment banking services with personalized client care.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#wealth" className="hover:text-primary-foreground transition-colors">Wealth Management</a></li>
              <li><a href="#assets" className="hover:text-primary-foreground transition-colors">Asset Management</a></li>
              <li><a href="#banking" className="hover:text-primary-foreground transition-colors">Investment Banking</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#about" className="hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#values" className="hover:text-primary-foreground transition-colors">Our Values</a></li>
              <li><a href="#history" className="hover:text-primary-foreground transition-colors">History</a></li>
              <li><a href="#people" className="hover:text-primary-foreground transition-colors">Leadership</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#contact" className="hover:text-primary-foreground transition-colors">Get in Touch</a></li>
              <li><a href="#locations" className="hover:text-primary-foreground transition-colors">Office Locations</a></li>
              <li><a href="#careers" className="hover:text-primary-foreground transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/70">
          <p>&copy; 2025 KSM Capital. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
            <a href="#disclosures" className="hover:text-primary-foreground transition-colors">Disclosures</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;