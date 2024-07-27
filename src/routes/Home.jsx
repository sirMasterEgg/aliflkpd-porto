import Navbar from "../components/Page/Home/Navbar.jsx";
import Banner from "../components/Page/Home/Banner.jsx";
import ScrollNotification from "../components/Animation/ScrollNotification.jsx";
import { lazy } from "react";

const Service = lazy(() => import("../components/Page/Home/Service.jsx"));
const Experience = lazy(() => import("../components/Page/Home/Experience.jsx"));
const Contact = lazy(() => import("../components/Page/Home/Contact.jsx"));
const Footer = lazy(() => import("../components/Page/Home/Footer.jsx"));

export default function Home() {
  return (
    <>
      <div className="bg-base-background overflow-x-hidden">
        <Navbar />
        <Banner />
        <ScrollNotification />
        <Service />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
