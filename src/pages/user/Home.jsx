import UserLayout from "../../components/layout/UserLayout";
import { BackgroundGradientAnimation } from "../../components/ui/background-gradient-animation";
import ContactForm from "../../components/user/ContactForm";
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
      <Title level={1} className="ml-20 mt-20 text-center">
        What we do?
      </Title>
      <Features />
      {/* <StickyScrollReveal /> */}
      <Title level={1} className="ml-20 mt-20 text-center">
        Testimonials
      </Title>
      <Testimonials />
      <Title level={1} className="ml-20 mt-20 text-center">
        What We Offer!
      </Title>
      <Projects />
      <Journey />
      <div className="flex justify-center items-center py-10">  
      <ContactForm/>
      </div>
    </UserLayout>
  );
}

export default Home;
