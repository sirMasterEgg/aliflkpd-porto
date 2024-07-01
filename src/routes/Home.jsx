import Navbar from "../components/Navbar.jsx";
import Banner from "../components/Banner.jsx";
import Service from "../components/Service.jsx";
import Experience from "../components/Experience.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import ScrollNotification from "../components/Animation/ScrollNotification.jsx";

export default function Home() {
  return (
    <>
      <div className="bg-base-background overflow-x-hidden">
        <Navbar />
        <Banner />
        <Service />
        <Experience />
        <Contact />
        <Footer />
        <ScrollNotification />
      </div>
    </>
  );
}
