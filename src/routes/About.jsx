import Navbar from "../components/Page/Home/Navbar.jsx";
import ScrollNotification from "../components/Animation/ScrollNotification.jsx";
import AboutMeBanner from "../components/Page/AboutMe/AboutMeBanner.jsx";
import { lazy } from "react";

const AboutMeExperience = lazy(() =>
  import("../components/Page/AboutMe/AboutMeExperience.jsx")
);
const AboutMeContact = lazy(() =>
  import("../components/Page/AboutMe/AboutMeContact.jsx")
);
const Footer = lazy(() => import("../components/Page/Home/Footer.jsx"));

export default function About() {
  return (
    <>
      <div className="bg-base-background overflow-x-hidden">
        <Navbar />
        <AboutMeBanner />
        <ScrollNotification />
        <AboutMeExperience />
        <AboutMeContact />
        <Footer />
      </div>
    </>
  );
}
