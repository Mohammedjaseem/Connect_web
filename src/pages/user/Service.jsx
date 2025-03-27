import UserLayout from "../../components/layout/UserLayout";
import { Projects } from "../../components/user/Projects";

function Service() {
  return (
    <UserLayout>
      <div className="pb-10">
        <h1 className="pt-10 text-center text-white text-4xl font-bold">
          What We Offer!
        </h1>
        <Projects />
      </div>
    </UserLayout>
  );
}

export default Service;
