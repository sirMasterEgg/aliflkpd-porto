import Navbar from "../Home/Navbar.jsx";
import HeroSection from "../../Section/HeroSection.jsx";
import { AssetExperience } from "../../../helpers/AssetExperienceHelper.js";
import DetailsProjectSection from "../../Section/DetailsProjectSection.jsx";
import DesignProcessSection from "../../Section/DesignProcessSection.jsx";
import StepSection from "../../Section/StepSection.jsx";
import { Asset } from "../../../helpers/AssetHelper.js";
import ResultSection from "../../Section/ResultSection.jsx";
import ConclusionSection from "../../Section/ConclusionSection.jsx";
import DesignDocumentationImage from "../../Section/DesignDocumentation/DesignDocumentationImage.jsx";
import ScrollNotification from "../../Animation/ScrollNotification.jsx";
import AboutMeContact from "../AboutMe/AboutMeContact.jsx";
import Footer from "../Home/Footer.jsx";

export const realNFakeTools = [
  {
    name: "Figma",
    icon: Asset.figma,
  },
  {
    name: "Illustrator",
    icon: Asset.aiIcon,
  },
  {
    name: "Trello",
    icon: Asset.trelloIcon,
  },
];

export default function RealNFake() {
  return (
    <>
      <div className="bg-base-background overflow-x-hidden">
        <Navbar />
        <div
          data-aos="fade-in"
          className="bg-image-18 bg-cover bg-no-repeat bg-center pt-32"
        >
          <HeroSection
            title="REAL n FAKE Development"
            heroBanner={AssetExperience.realNFake.realNFakeHero}
          />
        </div>
        <DetailsProjectSection
          role="Product Designer | Project Manager"
          projectDate="January 2024 - April 2024"
          toolsUsed={realNFakeTools}
          overview="For this project i was asked to help for client’s company for a rebrand and re-development of their platform in a fast paced timeline, it was also the first project handled by my Digital Agency. REALnFAKE is a legit check platform that allows user to check the authenticity of a product (mainly fashion) for free. It offers user to do a legit check within a quick time by connecting users with brand community to ensure the authenticity of a product."
          challenge="The challenge i went through on this project was having to manage the whole development team and it’s process as my first experience for being both a Project Manager and Product Designer. I had to manage the project plan, budget, risk, project standards, and tools, while also doing research and designing the product."
        />
        <DesignProcessSection>
          <div className="grid grid-cols-5 w-full gap-5">
            <div className="flex flex-col">
              <span className="blue-bullet">Discover</span>
              <ul className="dotted-outside pl-4">
                <li>Client Interview</li>
                <li>User Feedbacks & Review</li>
                <li>Direct Observation</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <span className="blue-bullet">Define</span>
              <ul className="dotted-outside pl-4">
                <li>User Personas</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <span className="blue-bullet">Ideate</span>
              <ul className="dotted-outside pl-4">
                <li>User Flow</li>
                <li>Solutions</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <span className="blue-bullet">Design</span>
              <ul className="dotted-outside pl-4">
                <li>Design System</li>
                <li>Hi-Fi Redesigns</li>
                <li>Prototype</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <span className="blue-bullet">Developing</span>
              <ul className="dotted-outside pl-4">
                <li>Development</li>
                <li>Quality Checking</li>
              </ul>
            </div>
          </div>
        </DesignProcessSection>
        <StepSection>
          <div data-aos="fade-right" className="row-start-1 step-card">
            <h1 className="text-xl text-content">1. Discovering Problems</h1>
            <ul className="dashed-2">
              <li>
                Interviewed client to gather information from the old website,
              </li>
              <li>
                Reviewed user feedbacks on the old website and turned them into
                insight,
              </li>
              <li>
                Doing direct observation to confirm the gathered insight from
                user feedbacks.
              </li>
            </ul>
            <div className="relative w-fit max-w-[500px]">
              <img
                src={AssetExperience.realNFake.realNFakeImage90}
                className="rounded-xl border border-base-color"
                alt="discovering problems"
              />
              <img
                src={Asset.magnifierV2}
                className="absolute bottom-0 left-0 scale-x-[-1] -translate-x-1/2 translate-y-1/3 w-32"
                alt="magnifier icon"
              />
            </div>
          </div>
          <div data-aos="fade-left" className="row-start-2 step-card">
            <h1 className="text-xl text-content">2. Persona Development</h1>
            <ul className="dashed-2">
              <li>
                Created persona for the 2 kind of users which are customer who
                wants to legit check and validators who are checking their
                uploaded product.
              </li>
              <li>
                User persona are created based on interview result and gathered
                insight from user feedbacks review
              </li>
            </ul>
            <div className="relative w-fit max-w-[500px]">
              <img
                src={AssetExperience.realNFake.realNFakeUser}
                className="rounded-xl border border-base-color"
                alt="persona development"
              />
              <img
                src={Asset.person}
                className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/4 w-32"
                alt="person icon"
              />
            </div>
          </div>
          <div data-aos="fade-right" className="row-start-3 step-card">
            <h1 className="text-xl text-content">3. User Flow</h1>
            <ul className="dashed-2">
              <li>
                Designed an easier and quicker flow for user to finish their
                task on the platform which is legit checking,
              </li>
              <li>
                Also designed the fuzzy flow for the back end logic to ease up
                my team in developing the project.
              </li>
            </ul>
            <div className="relative w-fit max-w-[500px]">
              <img
                src={AssetExperience.realNFake.realNFakeImage91}
                className="rounded-xl border border-base-color"
                alt="user flow"
              />
              <img
                src={Asset.calculator}
                className="absolute bottom-0 left-0 scale-x-[-1] -translate-x-1/2 translate-y-1/2 w-32"
                alt="calculator icon"
              />
            </div>
          </div>
          <div data-aos="fade-left" className="row-start-4 step-card">
            <h1 className="text-xl text-content">4. Defining Solution</h1>
            <ul className="dashed-2">
              <li>Define solutions based on user persona,</li>
              <li>
                Doing competitor analyst to analyze competitors strength,
                weakness, and also to define our own unique value propositions,
              </li>
              <li>
                Finding fashion themed design reference to sharpen our interface
                design idea,
              </li>
              <li>
                As one of the solution for the user problems, we also decided to
                create a switching language feature.
              </li>
            </ul>
            <div className="relative w-fit max-w-[500px]">
              <img
                src={AssetExperience.realNFake.realNFakeImage92}
                className="rounded-xl border border-base-color"
                alt="defining solution"
              />
              <img
                src={Asset.trusted}
                className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-20"
                alt="shield icon"
              />
            </div>
          </div>
          <div data-aos="fade-right" className="row-start-5 step-card">
            <h1 className="text-xl text-content">5. Designing</h1>
            <ul className="dashed-2">
              <li>
                Designed a Design System for a more cohesive and efficient
                development process for now and the long term of the company,
              </li>
              <li>
                Designed a responsive mock up for mobile and desktop and also an
                adaptive display for light and dark mode.
              </li>
            </ul>
            <div className="relative w-fit max-w-[500px]">
              <img
                src={AssetExperience.realNFake.realNFakeImage93}
                className="rounded-xl border border-base-color"
                alt="designing"
              />
              <img
                src={Asset.paintRoller}
                className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-24"
                alt="paint roller icon"
              />
            </div>
          </div>
          <div data-aos="fade-left" className="row-start-6 step-card">
            <h1 className="text-xl text-content">6. Developing & Launching</h1>
            <ul className="dashed-2">
              <li>Presenting the design to stakeholder,</li>
              <li>
                Delivering the design to my developer team while ensuring they
                have the required tools,{" "}
              </li>
              <li>
                Checking bugs and error through a manual web testing before
                launching the web to live production.
              </li>
            </ul>
            <div className="relative w-fit max-w-[500px]">
              <img
                src={AssetExperience.realNFake.realNFakeImage94}
                className="rounded-xl border border-base-color"
                alt="concept testing"
              />
              <img
                src={Asset.rocketV2}
                className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-32"
                alt="rocket icon"
              />
            </div>
          </div>
        </StepSection>
        <ResultSection
          leftTitle="Research and Implementation"
          rightTitle="Launch and Evaluation"
          leftPoints={[
            "Thriftex was the official name of the company but were rebranded to REALnFAKE after some consideration from the stakeholder,",
            "For the backend we only improved the old system which were using Codeigniter framework. And for frontend we used ReactJS and Tailwind for styling.",
          ]}
          rightPoints={[
            "Used VPS to host the web for a better control and performance, enhanced security and scalability for the long term,",
            "On the next plan, we are planning to immigrate the backend into ExpressJS for a better performance and real-time notifications.",
          ]}
        />
        <ConclusionSection
          details={
            "The web was successfully developed by my team and has given new experiences as a digital agency, which are :"
          }
          conclusionPoints={[
            {
              title: "VPS as Hosting",
              details:
                "at first, we thought that VPS was the only way to allow us building a NodeJS program on the hosting, turns out there are some hosting web that actually allow building a NodeJS program with their shared hosting service. On the other side, it has given us a faster performance and enhanced security.",
            },
            {
              title: "Minimalist Design’s Deficiency",
              details:
                "Using a minimalist design surely gives a timeless interface, but it’s not the best theme idea for a startup company since it limits the interface design in displaying more content and information to introduce the company and even the product the company offers. But due to the request of stakeholder, there is nothing we could do.",
            },
            {
              title: "VPS Configuration",
              details:
                "Configuration on VPS is more difficult since CPanel are not free in there due to some reasons. On the other side, we learned how to configure the web using SSH/Terminal.",
            },
          ]}
        />
        <div className="p-20 flex flex-col gap-5 bg-background">
          <h1 className="text-content text-3xl font-bold">
            Design Documentation
          </h1>
          <DesignDocumentationImage
            image={AssetExperience.realNFake.DocumentationThriftex1}
            description="Client Interface"
            altImage="client interface"
          >
            <img
              src={Asset.thumbsUp}
              className="w-32 absolute left-0 top-0 -translate-y-1/2 -translate-x-1/2"
              alt="thumbs down icon"
            />
          </DesignDocumentationImage>
          <DesignDocumentationImage
            image={AssetExperience.realNFake.DocumentationThriftex2}
            description="Brand Validators Dashboard"
            altImage="brand validators dashboard"
          />
        </div>
        <ScrollNotification />
        <AboutMeContact />
        <Footer />
      </div>
    </>
  );
}
