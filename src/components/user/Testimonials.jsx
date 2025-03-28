import { AnimatedTestimonials } from "../ui/animated-testimonials";

// import partner1 from "../../assets/image/partners/edentu.dental.learning.app.png";
import partner2 from "../../assets/image/partners/malabar.dental.college.png";
import partner3 from "../../assets/image/partners/levalor.health.png";
import partner4 from "../../assets/image/partners/eranad.knowledge.city.png";
import partner5 from "../../assets/image/partners/levalor.resort.png";

export function Testimonials() {
  const testimonials = [
    // {
    //   quote:
    //     "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    //   name: "Edentu Dental Learning App",
    //   designation: "Learning App",
    //   src: partner1,
    // },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Malabar Dental College",
      designation: "Dental College",
      src: partner2,
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Levalor Health",
      designation: "Hospital",
      src: partner3,
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "Eranad Knowledge City",
      designation: "City Complex",
      src: partner4,
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Levalor Resort",
      designation: "Resort",
      src: partner5,
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
