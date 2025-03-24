import UserLayout from "../../components/layout/UserLayout";
import { BackgroundGradientAnimation } from "../../components/ui/background-gradient-animation";
import { Features } from "../../components/user/Features";
import HeroContent from "../../components/user/HeroContent";
import { Journey } from "../../components/user/Journey";
import { Projects } from "../../components/user/Projects";
// import { StickyScrollReveal } from "../../components/user/StickyScrollReveal";
import { Testimonials } from "../../components/user/Testimonials";

function Home() {
  return (
    <UserLayout>
      <BackgroundGradientAnimation>
        <HeroContent />
      </BackgroundGradientAnimation>
      <Features />
      {/* <StickyScrollReveal /> */}
      <Testimonials />
      <Projects />
      <Journey />
    </UserLayout>
  );
}

export default Home;
