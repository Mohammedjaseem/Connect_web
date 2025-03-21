import UserLayout from "../../components/layout/UserLayout";
import { BackgroundGradientAnimation } from "../../components/ui/background-gradient-animation";

function Home() {
  return (
    <UserLayout>
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            Welcome to Connect
          </p>
        </div>
      </BackgroundGradientAnimation>
    </UserLayout>
  );
}

export default Home;
