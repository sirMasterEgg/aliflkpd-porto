import Navbar from "../Home/Navbar.jsx";
import ScrollNotification from "../../Animation/ScrollNotification.jsx";
import { Asset } from "../../../helpers/AssetHelper.js";
import HeroSection from "../../Section/HeroSection.jsx";
import DetailsProjectSection from "../../Section/DetailsProjectSection.jsx";
import DesignProcessSection from "../../Section/DesignProcessSection.jsx";
import StepSection from "../../Section/StepSection.jsx";
import ResultSection from "../../Section/ResultSection.jsx";
import ConclusionSection from "../../Section/ConclusionSection.jsx";
import DesignDocumentationImage from "../../Section/DesignDocumentation/DesignDocumentationImage.jsx";
import AboutMeContact from "../AboutMe/AboutMeContact.jsx";
import Footer from "../Home/Footer.jsx";
import { AssetExperience } from "../../../helpers/AssetExperienceHelper.js";

export const kallaTools = [
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
  {
    name: "Maze",
    icon: Asset.maze,
  },
  {
    name: "Excel",
    icon: Asset.excelIcon,
  },
  {
    name: "G-Form",
    icon: Asset.googleForm,
  },
];

export default function KallaToyotaDmsSalesRedesign() {
  return (
    <>
      <div className="bg-base-background overflow-x-hidden">
        <Navbar />
        <div
          data-aos="fade-in"
          className="bg-image-18 bg-cover bg-no-repeat bg-center pt-32"
        >
          <HeroSection
            title="KALLA Toyota DMS Sales Redesign"
            heroBanner={AssetExperience.kalla.kallaHero}
          />
        </div>
        <DetailsProjectSection
          role="UX Researcher Lead | UI Designer"
          projectDate="Sep 2023 - Nov 2023"
          toolsUsed={kallaTools}
          overview="One of Kalla Group Companies sub business unit, Kalla toyota requested for a redesign on their applications. The request is due to users (especially salesman) weren’t able to maximize the uses of the app and still choose to use paper for documenting their sales data. The objective of the redesign was to optimize the user experience by creating a more intuitive interface while also using a fresh style looking components. As someone with the only experience and knowledges of UX Research, i was given the opportunity to lead the research team."
          challenge="There were several challenge on the project, those were ; to create a data list view without using table for easier access through smartphone, reduce the required input data for leads, prospects, and SPK while still keeping the most important data for the business purpose."
        />
        <DesignProcessSection>
          <div className="flex flex-col lg:grid grid-cols-5 w-full gap-10 lg:gap-5">
            <div className="flex flex-col">
              <span className="blue-bullet">Discover</span>
              <ul className="dotted-outside pl-4">
                <li>Quantitative Survey</li>
                <li>Group Interviews</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <span className="blue-bullet">Define</span>
              <ul className="dotted-outside pl-4">
                <li>User Personas</li>
                <li>User Journey Map</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <span className="blue-bullet">Ideate</span>
              <ul className="dotted-outside pl-4">
                <li>User Flow</li>
                <li>Brainstorming</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <span className="blue-bullet">Design</span>
              <ul className="dotted-outside pl-4">
                <li>Old Design Review</li>
                <li>Hi-Fi Redesigns</li>
                <li>Prototype</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <span className="blue-bullet">Testing</span>
              <ul className="dotted-outside pl-4">
                <li>A/B Testing</li>
                <li>FGD</li>
                <li>Deliver</li>
              </ul>
            </div>
          </div>
        </DesignProcessSection>
        <StepSection>
          <div data-aos="fade-right" className="row-start-1 step-card">
            <h1 className="text-xl text-content">1. Quantitative Survey</h1>
            <ul className="dashed-2">
              <li>Conducted online survey with a quantitative method,</li>
              <li>
                Gathered insights to list user problems and required features
                for a more effective Dealer Management System.
              </li>
            </ul>
            <div className="relative w-fit max-w-[500px]">
              <img
                src={AssetExperience.kalla.image75}
                className="rounded-xl border border-base-color"
                alt="quantitative survey"
              />
              <img
                src={Asset.calculator}
                className="absolute bottom-0 left-0 scale-x-[-1] -translate-x-1/2 translate-y-1/2 w-32"
                alt="calculator icon"
              />
            </div>
          </div>
          <div data-aos="fade-left" className="row-start-2 step-card">
            <h1 className="text-xl text-content">2. User Research</h1>
            <ul className="dashed-2">
              <li>
                Conducted group interviews with Kalla Toyota Salesman to
                understand their struggles in using DMS Sales for their daily
                work,
              </li>
              <li>
                Discovered problems that most of the Salesman felt when using
                the application which are :
              </li>
              <ul className="dotted-outside pl-[15px]">
                <li>
                  too many unnecessary input which makes it difficult to use,
                </li>
                <li>
                  Unmodern and un-intuitive interface (Small text, Icon doesn’t
                  match their purpose),
                </li>
                <li>The interface are too desktop focused</li>
              </ul>
            </ul>
            <div className="relative w-fit max-w-[500px]">
              <img
                src={AssetExperience.kalla.image76}
                className="rounded-xl border border-base-color"
                alt="user research"
              />
              <img
                src={Asset.magnifierV2}
                className="absolute bottom-0 right-0 translate-x-10 translate-y-10 w-32"
                alt="magnifier icon"
              />
            </div>
          </div>
          <div data-aos="fade-right" className="row-start-3 step-card">
            <h1 className="text-xl text-content">3. Persona Development</h1>
            <ul className="dashed-2">
              <li>
                Created detailed salesman personas based on user research to
                represent different salesman position scenarios,
              </li>
              <li>
                Personas are based on salesman position and their dealer branch.
              </li>
            </ul>
            <div className="relative w-fit max-w-[500px]">
              <img
                src={AssetExperience.kalla.userPersona}
                className="rounded-xl border border-base-color"
                alt="user persona"
              />
              <img
                src={Asset.person}
                className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/4 w-32"
                alt="person icon"
              />
            </div>
          </div>
          <div data-aos="fade-left" className="row-start-4 step-card">
            <h1 className="text-xl text-content">4. Defining Solution</h1>
            <ul className="dashed-2">
              <li>Defined solutions based on user problems and needs</li>
              <li>
                Developed wireframes using Figma to outline the web layout,
                focusing on intuitive user journeys,
              </li>
              <li>
                Collaborated with developers to ensure technical feasibility.
              </li>
            </ul>
            <div className="relative w-fit max-w-[500px]">
              <img
                src={AssetExperience.kalla.image77}
                className="rounded-xl border border-base-color"
                alt="defining solution wireframe"
              />
              <img
                src={Asset.trusted}
                className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-20"
                alt="shield icon"
              />
            </div>
          </div>
          <div data-aos="fade-right" className="row-start-5 step-card">
            <h1 className="text-xl text-content">5. Prototyping</h1>
            <ul className="dashed-2">
              <li>
                Created interactive prototypes with Figma for testing purpose
                after design phase is done,
              </li>
              <li>
                Separate the old design prototype and new design prototypes into
                it’s each menu section
              </li>
            </ul>
            <div className="relative w-fit max-w-[500px]">
              <img
                src={AssetExperience.kalla.image78}
                className="rounded-xl border border-base-color"
                alt="prototyping wireframe"
              />
              <img
                src={Asset.image}
                className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-20"
                alt="picture icon"
              />
            </div>
          </div>
          <div data-aos="fade-left" className="row-start-6 step-card">
            <h1 className="text-xl text-content">6. User Testing</h1>
            <ul className="dashed-2">
              <li>
                Conducted UX Research using A/B Testing Method to compare the
                usability score between old and new design,
              </li>
              <li>
                Conducted a Forum Group Discussion after A/B Testing for a deep
                understanding on participants experience while taking the test
                and to gain better feedbacks.
              </li>
            </ul>
            <div className="relative w-fit max-w-[500px]">
              <img
                src={AssetExperience.kalla.image79}
                className="rounded-xl border border-base-color"
                alt="user testing"
              />
              <img
                src={Asset.loveTooltip}
                className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-20"
                alt="love tooltip icon"
              />
            </div>
          </div>
          <div data-aos="fade-right" className="row-start-7 step-card">
            <h1 className="text-xl text-content">7. Deliver</h1>
            <ul className="dashed-2">
              <li>
                Presenting the result of the UX Research and also the modified
                redesigned interface to Stakeholders,
              </li>
              <li>
                Delivering the latest result to developers to start developing
                the new design.
              </li>
            </ul>
            <div className="relative w-fit max-w-[500px]">
              <img
                src={AssetExperience.kalla.image80}
                className="rounded-xl border border-base-color"
                alt="deliver process"
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
            "Worked closely with Business Research Team as intermediary between Developer Team and Kalla Toyota.",
            "Provided every tools and script for the user testing.",
          ]}
          rightPoints={[
            "Conducted user testing during development phases to gather feedback.",
            "Modified the redesigned interface after getting feedbacks from user testing.",
          ]}
        />
        <ConclusionSection
          details={
            "The redesigned interface has proven some significant improved compared to the old ones, which are:"
          }
          conclusionPoints={[
            {
              title: "Faster Utilization",
              details:
                "With the new design, user spent a lot less time compared to the old design because of the simplified data input.",
            },
            {
              title: "Feature Reduction",
              details:
                "Instead of adding more features, user actually claim that some of the features or menu existence are unnecessary.",
            },
            {
              title: "More Intuitive",
              details:
                "With the bigger font size and better iconography, users can read and understand contents easier compared to the old design.",
            },
            {
              title: "One Time Save",
              details:
                "On the old design, user had to save the edited data on every client information menu tab which makes them spend more time. With the new design, they can save more time by only saving the data once they’re done with the editing.",
            },
          ]}
        />
        <div className="p-10 lg:p-20 flex flex-col gap-5 bg-background">
          <h1 className="text-content text-3xl font-bold">
            Design Documentation
          </h1>
          <span className="text-onsurface">
            The web is already live but are only accessible for Kalla Toyota
            Salesman.
          </span>
          <DesignDocumentationImage
            image={AssetExperience.kalla.oldDesign}
            description="Old Kalla Toyota DMS Sales Interface"
            altImage="old design"
          >
            <img
              src={Asset.thumbsDown}
              className="w-16 lg:w-32 absolute right-0 top-0 -translate-y-1/2 translate-x-1/2"
              alt="thumbs down icon"
            />
          </DesignDocumentationImage>
          <DesignDocumentationImage
            image={AssetExperience.kalla.newDesign}
            description="Redesigned Kalla Toyota DMS Sales Interface"
            altImage="new design"
          >
            <img
              src={Asset.thumbsUp}
              className="w-16 lg:w-32 absolute left-0 top-0 -translate-y-1/2 -translate-x-1/2"
              alt="thumbs down icon"
            />
          </DesignDocumentationImage>
        </div>
        <ScrollNotification />
        <AboutMeContact />
        <Footer />
      </div>
    </>
  );
}
