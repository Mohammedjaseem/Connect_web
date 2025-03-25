import { useEffect, useRef } from "react";
import UserLayout from "../../components/layout/UserLayout";
import { BackgroundGradientAnimation } from "../../components/ui/background-gradient-animation";
import ContactForm from "../../components/user/ContactForm";
import { Features } from "../../components/user/Features";
import HeroContent from "../../components/user/HeroContent";
import { Journey } from "../../components/user/Journey";
import { Projects } from "../../components/user/Projects";
import { Testimonials } from "../../components/user/Testimonials";
import AboutSection from "../../components/user/AboutSection";

function Home() {
  // Create refs for each section
  const featuresRef = useRef(null);
  const testimonialsRef = useRef(null);
  const projectsRef = useRef(null);
  const journeyRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1); // Remove the #

      // Scroll to the appropriate section
      switch (hash) {
        case "features":
          featuresRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "about":
          featuresRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "testimonials":
          testimonialsRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "projects":
          projectsRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "journey":
          journeyRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "contact":
          contactRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        default:
          // Handle default case or scroll to top
          break;
      }
    };

    // Check hash on initial load
    handleHashChange();

    // Add event listener for hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <UserLayout>
      <BackgroundGradientAnimation>
        <HeroContent />
      </BackgroundGradientAnimation>

      <div ref={featuresRef} id="about">
        <AboutSection />
      </div>

      <div className="pt-24" ref={featuresRef} id="features">
        <h1 className="text-center text-white text-4xl font-bold">
          What we do?
        </h1>
        <Features />
      </div>

      <div ref={testimonialsRef} id="testimonials">
        <h1 className="pt-24 text-center text-white text-4xl font-bold">
          Testimonials
        </h1>
        <Testimonials />
      </div>

      <div ref={projectsRef} id="projects">
        <h1 className="pt-24 text-center text-white text-4xl font-bold">
          What We Offer!
        </h1>
        <Projects />
      </div>

      <div ref={journeyRef} id="journey">
        <Journey />
      </div>

      <div ref={contactRef} id="contact">
        <div className="flex justify-center items-center py-10">
          <ContactForm />
        </div>
      </div>
    </UserLayout>
  );
}

export default Home;
