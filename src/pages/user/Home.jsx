import UserLayout from "../../components/layout/UserLayout";
import { BackgroundGradientAnimation } from "../../components/ui/background-gradient-animation";
import HeroContent from "../../components/user/HeroContent";
import { StickyScrollReveal } from "../../components/user/StickyScrollReveal";

function Home() {
  return (
    <UserLayout>
      <BackgroundGradientAnimation>
        <HeroContent />
      </BackgroundGradientAnimation>
      <StickyScrollReveal />
    </UserLayout>
  );
}

export default Home;
