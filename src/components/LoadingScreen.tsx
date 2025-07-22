import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onLoadingComplete, 300); // Wait for fade out animation
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 bg-background z-50 flex items-center justify-center transition-opacity duration-300 opacity-0 pointer-events-none">
        <div className="text-center">
          <div className="text-6xl font-serif font-bold text-primary mb-4 tracking-wider">
            KSM
          </div>
          <div className="text-xl text-muted-foreground font-light tracking-[0.2em]">
            CAPITAL
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center transition-opacity duration-300">
      <div className="text-center animate-fade-in">
        <div className="text-6xl font-serif font-bold text-primary mb-4 tracking-wider">
          KSM
        </div>
        <div className="text-xl text-muted-foreground font-light tracking-[0.2em]">
          CAPITAL
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;