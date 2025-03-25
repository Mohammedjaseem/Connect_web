import { cn } from "../../lib/utils";
import SchoolIcon from "@mui/icons-material/School";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import HotelIcon from "@mui/icons-material/Hotel";
import BusinessIcon from "@mui/icons-material/Business";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import SecurityIcon from "@mui/icons-material/Security";
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

export function Features() {
  const features = [
    {
      title: "School & College Management",
      description:
        "Attendance tracking, staff & student management, gate pass system, leave management.",
      icon: <SchoolIcon />,
    },
    {
      title: "Hospital & Healthcare Solutions",
      description:
        "Surgery scheduler, patient records management, doctor appointment system.",
      icon: <LocalHospitalIcon />,
    },
    {
      title: "Resort & Hospitality Management",
      description: "Room booking, guest check-in/check-out, staff management.",
      icon: <HotelIcon />,
    },
    {
      title: "Business Management Software",
      description:
        "CRM, accounting, inventory management, and payroll solutions.",
      icon: <BusinessIcon />,
    },
    {
      title: "Multi-Tenant SaaS Solutions",
      description:
        "Cloud-based platforms for multiple businesses under one system.",
      icon: <CloudDoneIcon />,
    },
    {
      title: "Advanced Security & Access Control",
      description:
        "Role-based access control, visitor tracking, secure login systems.",
      icon: <SecurityIcon />,
    },
    {
      title: "AI-Powered Insights & Analytics",
      description: "Business intelligence dashboards and predictive analysis.",
      icon: <TipsAndUpdatesIcon />,
    },
    {
      title: "24/7 Customer Support & Uptime Guarantee",
      description: "Reliable, round-the-clock AI-powered customer assistance.",
      icon: <SupportAgentIcon />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 relative z-10 pb-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
