import Navbar from "../components/Page/Home/Navbar.jsx";
import Footer from "../components/Page/Home/Footer.jsx";
import ScrollNotification from "../components/Animation/ScrollNotification.jsx";
import AboutMeBanner from "../components/Page/AboutMe/AboutMeBanner.jsx";
import AboutMeContact from "../components/Page/AboutMe/AboutMeContact.jsx";
import AboutMeExperience from "../components/Page/AboutMe/AboutMeExperience.jsx";

export default function About() {
  return (
    <>
      <div className="bg-base-background overflow-x-hidden">
        <Navbar />
        <AboutMeBanner />
        <AboutMeExperience />
        <AboutMeContact />
        <Footer />
        <ScrollNotification />
      </div>
    </>
  );
}
