/* Generated from SiteSpec */
import SimpleCentered from "@/sections/SimpleCentered";
import OffsetWithFeatureList from "@/sections/OffsetWithFeatureList";
import ThreeTiers from "@/sections/ThreeTiers";
import WithTestimonial from "@/sections/WithTestimonial";

export default function home(){
  return (<main>
    <SimpleCentered {...{
  headline: "Welcome to GreenLeaf Cleaning!",
  subhead: "Your trusted partner for a spotless home.",
  imageUrl: "https://example.com/cleaning-image.jpg",
  primaryCta: {
    text: "Get Your Free Quote",
    href: "/contact"
  },
  secondaryCta: {
    text: "Learn More About Our Services",
    href: "/services"
  }
}} />
    <OffsetWithFeatureList {...{
  title: "Our Top Cleaning Services",
  subtitle: "Tailored solutions for a spotless environment.",
  items: [
    {
      title: "Residential Cleaning",
      body: "Experience a fresh and clean home with our thorough residential cleaning services.",
      icon: "home"
    },
    {
      title: "Commercial Cleaning",
      body: "Keep your business environment pristine with our reliable commercial cleaning solutions.",
      icon: "briefcase"
    },
    {
      title: "Eco-Friendly Products",
      body: "We use environmentally safe products to ensure a healthy space for you and the planet.",
      icon: "leaf"
    },
    {
      title: "Deep Cleaning",
      body: "Our deep cleaning service tackles every corner, ensuring a comprehensive clean.",
      icon: "broom"
    }
  ]
}} />
    <ThreeTiers {...{
  title: "Affordable Pricing Plans",
  subtitle: "Choose the perfect plan for your cleaning needs",
  tiers: [
    {
      name: "Basic Clean",
      id: "basic-clean",
      href: "/pricing/basic-clean",
      priceMonthly: "$99",
      description: "Ideal for light cleaning and maintenance.",
      features: [
        "Weekly cleaning",
        "Dusting and vacuuming",
        "Kitchen and bathroom sanitization"
      ],
      mostPopular: false
    },
    {
      name: "Standard Clean",
      id: "standard-clean",
      href: "/pricing/standard-clean",
      priceMonthly: "$149",
      description: "Comprehensive cleaning for a fresh home.",
      features: [
        "Bi-weekly cleaning",
        "Deep cleaning of all rooms",
        "Window cleaning"
      ],
      mostPopular: true
    },
    {
      name: "Premium Clean",
      id: "premium-clean",
      href: "/pricing/premium-clean",
      priceMonthly: "$199",
      description: "Ultimate cleaning experience with added services.",
      features: [
        "Weekly cleaning",
        "Carpet and upholstery cleaning",
        "Post-event cleanup"
      ],
      mostPopular: false
    }
  ]
}} />
    <WithTestimonial {...{
  headline: "Hear from Our Happy Customers!",
  subhead: "Discover why GreenLeaf Cleaning is the trusted choice.",
  imageUrl: "https://example.com/testimonial-image.jpg",
  primaryCta: {
    text: "Read More Testimonials",
    href: "/testimonials"
  },
  secondaryCta: {
    text: "Get Your Free Quote",
    href: "/contact"
  }
}} />
  </main>);
}
