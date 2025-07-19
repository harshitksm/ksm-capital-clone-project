import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Who We Are", href: "#about" },
    { name: "Wealth Management", href: "#wealth" },
    { name: "Asset Management", href: "#assets" },
    { name: "Investment Banking", href: "#banking" },
    { name: "News", href: "#news" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-serif font-bold text-2xl">K</span>
            </div>
            <div>
              <h1 className="font-serif text-2xl font-medium text-foreground">KSM Capital</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium text-sm tracking-wide"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Request Introduction
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button variant="default" className="bg-ksm-teal hover:bg-ksm-teal-light text-primary-foreground w-full">
                Request Introduction
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;