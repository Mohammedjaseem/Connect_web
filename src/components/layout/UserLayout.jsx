import { userPath } from "../../routes/routeConfig";
import { FloatingNav } from "../ui/floating-navbar";
import HomeIcon from "@mui/icons-material/Home";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import InfoIcon from "@mui/icons-material/Info";
import TryIcon from "@mui/icons-material/Try";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import RouteIcon from "@mui/icons-material/Route";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import Footer from "../user/Footer";

const UserLayout = ({ children }) => {
  const navItems = [
    {
      name: "Home",
      link: userPath.home,
      icon: <HomeIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: userPath.about,
      hash: "#about",
      icon: <InfoIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Features",
      link: userPath.features,
      hash: "#features",
      icon: (
        <FormatListBulletedIcon className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Testimonials",
      link: userPath.testimonials,
      hash: "#testimonials",
      icon: <TryIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: userPath.projects,
      hash: "#projects",
      icon: (
        <AccountTreeIcon className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Journey",
      link: userPath.journey,
      hash: "#journey",
      icon: <RouteIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: userPath.contact,
      hash: "#contact",
      icon: (
        <ContactMailIcon className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      <FloatingNav navItems={navItems} />
      <main className="min-h-[85vh]">{children}</main>
      <Footer />
    </div>
  );
};

export default UserLayout;
