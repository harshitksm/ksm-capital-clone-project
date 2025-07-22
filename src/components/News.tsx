import NewsCard from "./NewsCard";

const News = () => {
  const newsItems = [
    {
      category: "IN THE NEWS",
      date: "July 23, 2025",
      title: "\"Resilience and Uncertainty:\" KSM CEO Joins Bloomberg to Unpack Investor Sentiment Amid a Turbulent Environment",
      href: "#news1"
    },
    {
      category: "IN THE NEWS", 
      date: "July 17, 2025",
      title: "KSM Global Family Office Welcomes New York-Based Entrepreneurs Group to Private Wealth Platform",
      href: "#news2"
    },
    {
      category: "IN THE NEWS",
      date: "July 16, 2025", 
      title: "Investment Director Discusses Market Dynamics and Cyclical Opportunities on CNBC's Closing Bell",
      href: "#news3"
    },
    {
      category: "IN THE NEWS",
      date: "July 10, 2025",
      title: "KSM CEO Joins CNBC to Discuss Economic Tailwinds, Investor Trends, and Fiscal Responsibility",
      href: "#news4"
    },
    {
      category: "IN THE NEWS",
      date: "July 2, 2025",
      title: "On Bloomberg's The Close, Portfolio Manager Weighs Impact of Policy Changes and Market Dynamics",
      href: "#news5"
    },
    {
      category: "IN THE NEWS",
      date: "June 30, 2025",
      title: "Fixed Income Specialist Joins Bloomberg's The Close to Discuss Market Outlook",
      href: "#news6"
    }
  ];

  // Duplicate the array to create seamless loop
  const duplicatedItems = [...newsItems, ...newsItems];

  return (
    <section id="news" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            In Good Company
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We have always distinguished ourselves by doing things not only well, but differently. 
            We seek to deliver the future of financial services to our clients, made possible by our historic success.
          </p>
        </div>

        {/* Continuous scrolling container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-left space-x-6">
            {duplicatedItems.map((item, index) => (
              <div key={index} className="flex-shrink-0 w-80">
                <NewsCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;