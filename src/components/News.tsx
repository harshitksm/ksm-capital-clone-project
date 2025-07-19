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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {newsItems.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center space-x-2">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((page) => (
            <div 
              key={page}
              className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-200 ${
                page === 1 ? 'bg-primary' : 'bg-muted hover:bg-muted-foreground'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;