import ServiceCard from "./ServiceCard";
import wealthManagementBg from "@/assets/wealth-management-bg.jpg";
import assetManagementBg from "@/assets/asset-management-bg.jpg";
import investmentBankingBg from "@/assets/investment-banking-bg.jpg";

const Services = () => {
  const services = [
    {
      title: "Wealth Management",
      description: "Individualized service at every stage of wealth combined with the legacy that has guided successful families for more than seven generations.",
      subtitle: "KSM Global Family Office",
      backgroundImage: wealthManagementBg,
      href: "#wealth"
    },
    {
      title: "Asset Management",
      description: "Seeking to generate insights and outcomes not commonly found in the investment community to serve institutions, financial professionals, and other institutionally-minded investors.",
      subtitle: "KSM Asset Management",
      backgroundImage: assetManagementBg,
      href: "#assets"
    },
    {
      title: "Investment Banking",
      description: "Independent, strategic business advice and guidance for private and public companies through a team of senior investment bankers with a commitment to integrity.",
      subtitle: "KSM Global Investment Banking",
      backgroundImage: investmentBankingBg,
      href: "#banking"
    }
  ];

  return (
    <section id="services" className="py-32 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl md:text-6xl font-normal text-foreground mb-8 leading-tight">
            Distinct Solutions, Personal Service
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We serve families and individuals, institutional investors, and corporations across a 
            wide range of needs and objectives. We continue to learn from our heritage and seek out 
            new and innovative ways of working, using our past success to help us continue pioneering 
            the future of financial services.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;