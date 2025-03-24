import Footer from "../user/Footer";
import { userPath } from "../../routes/routeConfig";
import { FloatingNav } from "../ui/floating-navbar";
import {
  CustomerServiceOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  MessageOutlined,
} from "@ant-design/icons";

const UserLayout = ({ children, showFooter = false }) => {
  const navItems = [
    {
      name: "Home",
      link: userPath.home,
      icon: (
        <HomeOutlined className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Service",
      link: userPath.service,
      icon: (
        <CustomerServiceOutlined className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "About",
      link: userPath.about,
      icon: (
        <InfoCircleOutlined className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: userPath.contact,
      icon: (
        <MessageOutlined className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      <FloatingNav navItems={navItems} />
      <main className="min-h-[150vh]">{children}</main>
      {showFooter && <Footer />}
    </div>
  );
};

export default UserLayout;
