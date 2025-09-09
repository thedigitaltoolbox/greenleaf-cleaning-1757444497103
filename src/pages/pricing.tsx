/* Generated from SiteSpec */
import ThreeTiersWithToggle from "@/sections/ThreeTiersWithToggle";

export default function pricing(){
  return (<main>
    <ThreeTiersWithToggle {...{
  title: "Choose Your Plan",
  subtitle: "Affordable cleaning solutions tailored for you.",
  showToggle: true,
  tiers: [
    {
      name: "Basic Plan",
      id: "basic-plan",
      href: "/pricing/basic",
      price: {
        monthly: "$29",
        annually: "$299"
      },
      description: "Essential cleaning services for small spaces.",
      features: [
        "Weekly cleaning",
        "Eco-friendly products",
        "Satisfaction guarantee"
      ],
      mostPopular: false
    },
    {
      name: "Standard Plan",
      id: "standard-plan",
      href: "/pricing/standard",
      price: {
        monthly: "$49",
        annually: "$499"
      },
      description: "Comprehensive cleaning for medium-sized homes.",
      features: [
        "Bi-weekly cleaning",
        "Deep cleaning options",
        "Flexible scheduling"
      ],
      mostPopular: true
    },
    {
      name: "Premium Plan",
      id: "premium-plan",
      href: "/pricing/premium",
      price: {
        monthly: "$79",
        annually: "$799"
      },
      description: "Luxury cleaning services for larger homes.",
      features: [
        "Weekly cleaning",
        "Specialized services",
        "Priority customer support"
      ],
      mostPopular: false
    }
  ]
}} />
  </main>);
}
