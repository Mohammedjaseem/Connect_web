import UserLayout from "../../components/layout/UserLayout";
import { BackgroundGradientAnimation } from "../../components/ui/background-gradient-animation";
import { Features } from "../../components/user/Features";
import HeroContent from "../../components/user/HeroContent";
import { Journey } from "../../components/user/Journey";
import { Projects } from "../../components/user/Projects";
// import { StickyScrollReveal } from "../../components/user/StickyScrollReveal";
import { Testimonials } from "../../components/user/Testimonials";

import { Typography } from "antd";

const { Title } = Typography;

function Home() {
  return (
    <UserLayout>
      <BackgroundGradientAnimation>
        <HeroContent />
      </BackgroundGradientAnimation>
      <Title level={2} className="ml-20 mt-20">
        What we do?
      </Title>
      <Features />
      {/* <StickyScrollReveal /> */}
      <Title level={2} className="ml-20 mt-20">
        Testimonials
      </Title>
      <Testimonials />
      <Title level={2} className="ml-20 mt-20">
        What We Offer!
      </Title>
      <Projects />
      <Journey />
    </UserLayout>
  );
}

export default Home;
