import Navbar from "../components/Page/Home/Navbar.jsx";
import Banner from "../components/Page/Home/Banner.jsx";
import Service from "../components/Page/Home/Service.jsx";
import Experience from "../components/Page/Home/Experience.jsx";
import Contact from "../components/Page/Home/Contact.jsx";
import Footer from "../components/Page/Home/Footer.jsx";
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
