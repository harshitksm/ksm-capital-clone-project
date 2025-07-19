import { Card } from "@/components/ui/card";

interface NewsCardProps {
  category: string;
  date: string;
  title: string;
  href: string;
}

const NewsCard = ({ category, date, title, href }: NewsCardProps) => {
  return (
    <Card className="group hover:shadow-card transition-all duration-300 bg-card border border-border/50">
      <div className="p-6">
        <div className="mb-4">
          <span className="text-ksm-teal font-semibold text-sm uppercase tracking-wider">
            {category}
          </span>
          <span className="text-muted-foreground text-sm ml-2">
            {date}
          </span>
        </div>
        
        <h3 className="font-semibold text-card-foreground leading-snug group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-0.5 bg-ksm-gold"></div>
        </div>
      </div>
    </Card>
  );
};

export default NewsCard;