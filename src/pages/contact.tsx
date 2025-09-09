/* Generated from SiteSpec */
import Centered from "@/sections/Centered";

export default function contact(){
  return (<main>
    <Centered {...{
  headline: "Get in Touch with Us!",
  subhead: "We're here to help with all your cleaning needs.",
  imageUrl: "https://example.com/contact-image.jpg",
  primaryCta: {
    text: "Contact Us Now",
    href: "/contact-form"
  },
  secondaryCta: {
    text: "Learn More About Our Services",
    href: "/services"
  }
}} />
  </main>);
}
