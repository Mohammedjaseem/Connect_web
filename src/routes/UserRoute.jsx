import { lazy, Suspense } from "react";
import { userPath } from "./routeConfig";
import NotFound from "../pages/error/NotFound";
import { Routes, Route } from "react-router-dom";
import ServerError from "../pages/error/ServerError";
import Fallback from "../components/common/Fallback";

const Home = lazy(() => import("../pages/user/Home"));
const About = lazy(() => import("../pages/user/About"));
const Service = lazy(() => import("../pages/user/Service"));
const Contact = lazy(() => import("../pages/user/Contact"));
const Careers = lazy(() => import("../pages/user/Careers"));

function UserRoute() {
  return (
    <Routes>
      <Route path="/*" element={<NotFound />} />
      <Route path="error" element={<ServerError />} />
      <Route path={userPath.home} element={<Home />} />
      <Route path={userPath.aboutPage} element={<About />} />
      <Route path={userPath.servicePage} element={<Service />} />
      <Route path={userPath.careersPage} element={<Careers />} />
      <Route path={userPath.contactPage} element={<Contact />} />
    </Routes>
  );
}

export default function UserRouteWithSuspense() {
  return (
    <Suspense fallback={<Fallback />}>
      <UserRoute />
    </Suspense>
  );
}
