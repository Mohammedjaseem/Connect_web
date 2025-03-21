import Footer from "../user/Footer";
import { userPath } from "../../routes/routeConfig";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FloatingNav } from "../ui/floating-navbar";

const UserLayout = ({ children, showFooter = true }) => {
  const navItems = [
    {
      name: "Home",
      link: userPath.home,
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Service",
      link: userPath.service,
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: userPath.about,
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: userPath.contact,
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      <FloatingNav navItems={navItems} />
      <main className="container mx-auto min-h-[85vh]">{children}</main>
      {showFooter && <Footer />}
    </div>
  );
};

export default UserLayout;
