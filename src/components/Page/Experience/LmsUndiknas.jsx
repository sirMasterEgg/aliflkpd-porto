import Navbar from "../Home/Navbar.jsx";
import HeroSection from "../../Section/HeroSection.jsx";
import { Asset } from "../../../helpers/AssetHelper.js";
import DetailsProjectSection from "../../Section/DetailsProjectSection.jsx";
import DesignProcessSection from "../../Section/DesignProcessSection.jsx";
import StepSection from "../../Section/StepSection.jsx";
import ResultSection from "../../Section/ResultSection.jsx";
import ConclusionSection from "../../Section/ConclusionSection.jsx";
import DesignDocumentationImage from "../../Section/DesignDocumentation/DesignDocumentationImage.jsx";
import ScrollNotification from "../../Animation/ScrollNotification.jsx";
import AboutMeContact from "../AboutMe/AboutMeContact.jsx";
import Footer from "../Home/Footer.jsx";
import { AssetExperience } from "../../../helpers/AssetExperienceHelper.js";

export const lmsTools = [
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

export default function LmsUndiknas() {
  return (
    <>
      <div className="bg-base-background overflow-x-hidden">
        <Navbar />
        <div
          data-aos="fade-in"
          className="bg-image-18 bg-cover bg-no-repeat bg-center pt-32"
        >
          <HeroSection
            title="UNDIKNAS LMS Redesign"
            heroBanner={AssetExperience.lmsUndiknas.undiknasHero}
          />
        </div>
        <DetailsProjectSection
          role="UX Researcher | UI Designer"
          projectDate="Dec 2023 - March 2024"
          toolsUsed={lmsTools}
          overview="Awhile after taking intern as a UI UX Designer at UNDIKNAS, i was asked to do a redesign focused on Mobile Interface for UNDIKNAS Learning Management System, and on the top of it, they also offered me the project as my bachelor’s thesis. I took the chance, and turns out, we found that the reason why not even students or lecturers were using the LMS is because of how bad the user experience was. The design was only accessible for desktop user and even had a very confusing navigation, and on the very top of that, the application itself were lacking a lot of features to support remote learning."
          challenge="The main challenge of the project was how to build an equal experiences with so many users characteristic between 2 end user category that is Students and Lecturers. For this project, i used Double Diamond method for an iterative process to solve problems based on priority scale."
        />
        <DesignProcessSection title="Double Diamond Design Process">
          <div className="flex flex-col lg:grid grid-cols-3">
            <div className="lg:order-1 relative">
              <span className="absolute top-0 lg:left-0 left-3 lg:text-2xl font-bold -translate-x-1/2 -translate-y-1/2">
                1ST Cycle
              </span>
              <table className="w-full h-full table-fixed border border-base-color">
                <thead>
                  <tr>
                    <th className="border border-base-color" colSpan={2}>
                      RESEARCH
                    </th>
                  </tr>
                  <tr>
                    <th className="border border-base-color">Discover</th>
                    <th className="border border-base-color">Define</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="w-1/2 border border-base-color px-5 align-top">
                      <ul className="dotted-outside">
                        <li>Online Survey</li>
                        <li>Direct Observation</li>
                        <li>Empathy Map</li>
                      </ul>
                    </td>
                    <td className="w-1/2 border border-base-color px-5 align-top">
                      <ul className="dotted-outside">
                        <li>User Personas</li>
                        <li>Pain & Gain Point</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="lg:order-2">
              <div className="hidden lg:inline-flex items-center justify-center h-full w-full">
                <img src={AssetExperience.lmsUndiknas.arrow} alt="arrow" />
              </div>
              <div className="lg:hidden w-full h-full inline-flex items-center justify-center p-5">
                <img
                  src={AssetExperience.lmsUndiknas.arrowVertical}
                  className=""
                  alt="arrow"
                />
              </div>
            </div>
            <div className="lg:order-3">
              <table className="w-full h-full table-fixed border border-base-color">
                <thead>
                  <tr>
                    <th className="border border-base-color" colSpan={2}>
                      DESIGN
                    </th>
                  </tr>
                  <tr>
                    <th className="border border-base-color">Develop</th>
                    <th className="border border-base-color">Deliver</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="w-1/2 border border-base-color px-5 align-top">
                      <ul className="dotted-outside">
                        <li>Paper Wireframe</li>
                        <li>Low Fidelity Prototype</li>
                      </ul>
                    </td>
                    <td className="w-1/2 border border-base-color px-5 align-top">
                      <ul className="dotted-outside">
                        <li>Concept Testing</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="lg:order-4 col-span-3 col-end-6">
              <div className="w-full h-full inline-flex items-center justify-center p-5">
                <img
                  src={AssetExperience.lmsUndiknas.arrowVertical}
                  className=""
                  alt="arrow"
                />
              </div>
            </div>
            <div className="lg:order-7 relative">
              <span className="absolute top-0 right-0 lg:text-2xl font-bold translate-x-1/4 -translate-y-1/2">
                2ND Cycle
              </span>
              <table className="w-full h-full table-fixed border border-base-color">
                <thead>
                  <tr>
                    <th className="border border-base-color" colSpan={2}>
                      RESEARCH
                    </th>
                  </tr>
                  <tr>
                    <th className="border border-base-color">Define</th>
                    <th className="border border-base-color">Discover</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="w-1/2 border border-base-color px-5 align-top">
                      <ul className="dotted-outside">
                        <li>Affinity Diagram</li>
                        <li>Insight Priority Scale</li>
                      </ul>
                    </td>
                    <td className="w-1/2 border border-base-color px-5 align-top">
                      <ul className="dotted-outside">
                        <li>Concept Testing Result Review</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="lg:order-6">
              <div className="hidden w-full h-full lg:inline-flex items-center justify-center">
                <img
                  src={AssetExperience.lmsUndiknas.arrow}
                  className="rotate-180"
                  alt="arrow"
                />
              </div>
              <div className="lg:hidden w-full h-full inline-flex items-center justify-center p-5">
                <img
                  src={AssetExperience.lmsUndiknas.arrowVertical}
                  className=""
                  alt="arrow"
                />
              </div>
            </div>
            <div className="lg:order-5">
              <table className="w-full h-full table-fixed border border-base-color order-1">
                <thead>
                  <tr>
                    <th className="border border-base-color" colSpan={2}>
                      DESIGN
                    </th>
                  </tr>
                  <tr>
                    <th className="border border-base-color">Deliver</th>
                    <th className="border border-base-color">Develop</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="w-1/2 border border-base-color px-5 align-top">
                      <ul className="dotted-outside">
                        <li>Usability Testing</li>
                        <li>Deliver to Developer</li>
                      </ul>
                    </td>
                    <td className="w-1/2 border border-base-color px-5 align-top">
                      <ul className="dotted-outside">
                        <li>Mock Up</li>
                        <li>High Fidelity Prototype</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td
                      className="border border-base-color bg-icon-border text-center"
                      colSpan={2}
                    >
                      Finish
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </DesignProcessSection>
        <StepSection>
          <div data-aos="fade-right" className="row-start-1 step-card">
            <h1 className="text-xl text-content">1. Online Survey</h1>
            <ul className="dashed-2">
              <li>
                Conducted online survey with a hybrid (quantitative &
                qualitative method,
              </li>
              <li>Collecting the feedback data from survey into a sheet</li>
            </ul>
            <div className="relative w-fit max-w-[500px]">
              <img
                src={AssetExperience.lmsUndiknas.undiknasImage83}
                className="rounded-xl border border-base-color"
                alt="online survey"
              />
              <img
                src={Asset.calculator}
                className="absolute bottom-0 left-0 scale-x-[-1] -translate-x-2/3 translate-y-1/2 w-32"
                alt="calculator icon"
              />
            </div>
          </div>
          <div data-aos="fade-left" className="row-start-2 step-card">
            <h1 className="text-xl text-content">2. Direct Observation</h1>
            <ul className="dashed-2">
              <li>
                To understand and validate user experience and feedbacks, i also
                try to observe the application by myself,
              </li>
              <li>
                After doing direct observation, i used the data i collected from
                online survey and my own experience to turn them into empathy
                map, both students and lecturers has their own.
              </li>
            </ul>
            <div className="relative w-fit max-w-[500px]">
              <img
                src={AssetExperience.lmsUndiknas.undiknasImage84}
                className="rounded-xl border border-base-color"
                alt="direct observation"
              />
              <img
                src={Asset.magnifierV2}
                className="absolute bottom-0 right-0 translate-x-10 translate-y-10 w-32"
                alt="magnifier icon"
              />
            </div>
          </div>
          <div data-aos="fade-right" className="row-start-3 step-card">
            <h1 className="text-xl text-content">3. Defining Problems</h1>
            <ul className="dashed-2">
              <li>
                Separated user persona into 2 group of end user, Students &
                Lecturers,
              </li>
              <li>
                Created Pain and Gain as a solution for the 2 group end user.{" "}
              </li>
            </ul>
            <div className="relative w-fit max-w-[500px]">
              <img
                src={AssetExperience.lmsUndiknas.undiknasUser}
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
            <h1 className="text-xl text-content">4. Ideate</h1>
            <ul className="dashed-2">
              <li>
                Designing paper wireframe to get an accurate idea for the design
                concept based on the solution gained solution from pain & gain,
              </li>
              <li>Used 8 Crazy idea for the brainstorming method.</li>
            </ul>
            <div className="relative w-fit max-w-[500px]">
              <img
                src={AssetExperience.lmsUndiknas.undiknasImage85}
                className="rounded-xl border border-base-color"
                alt="ideate process"
              />
              <img
                src={Asset.trusted}
                className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-20"
                alt="shield icon"
              />
            </div>
          </div>
          <div data-aos="fade-right" className="row-start-5 step-card">
            <h1 className="text-xl text-content">5. Low Fidelity Prototype</h1>
            <ul className="dashed-2">
              <li>
                Designed wireframe based on the existing flowchart of the app
                and the selected concept from crazy 8,
              </li>
              <li>
                Designed low fidelity prototype for concept testing purpose.
              </li>
            </ul>
            <div className="relative w-fit max-w-[500px]">
              <img
                src={AssetExperience.lmsUndiknas.undiknasImage86}
                className="rounded-xl border border-base-color"
                alt="low fidelity prototype"
              />
              <img
                src={Asset.image}
                className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-20"
                alt="picture icon"
              />
            </div>
          </div>
          <div data-aos="fade-left" className="row-start-6 step-card">
            <h1 className="text-xl text-content">6. Concept Testing</h1>
            <ul className="dashed-2">
              <li>
                Conducted a concept testing to test out either the end users can
                actually understand the new concept design or not, and also to
                pick 2 different concepts for the academic page.
              </li>
            </ul>
            <div className="relative w-fit max-w-[500px]">
              <img
                src={AssetExperience.lmsUndiknas.undiknasImage87}
                className="rounded-xl border border-base-color"
                alt="concept testing"
              />
              <img
                src={Asset.loveTooltip}
                className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-20"
                alt="love tooltip icon"
              />
            </div>
          </div>
          <div data-aos="fade-right" className="row-start-7 step-card">
            <h1 className="text-xl text-content">
              7. CT Priority Scale Insights
            </h1>
            <ul className="dashed-2">
              <li>
                Gathering the feedbacks from concept testing into an affinity
                diagram with 3 themes, interface, performance, and features.
              </li>
              <li>
                Processed the affinity diagram into a priority scaled insight.
              </li>
            </ul>
            <div className="relative w-fit max-w-[500px]">
              <img
                src={AssetExperience.lmsUndiknas.undiknasImage88}
                className="rounded-xl border border-base-color"
                alt="ct priority scale insights"
              />
              <img
                src={Asset.lamp}
                className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-20"
                alt="lamp icon"
              />
            </div>
          </div>
          <div data-aos="fade-left" className="row-start-8 step-card">
            <h1 className="text-xl text-content">8. High Fidelity Prototype</h1>
            <ul className="dashed-2">
              <li>
                Designed UNDIKNAS Design System for a more cohesive and
                efficient development process for now and the long term. The
                Design System is based on the gathered insights and also WCAG.
              </li>
              <li>
                Designing mock ups based on the highest priority scale insights,
                which are P0 and P1
              </li>
              <li>
                Implemented Aesthetic - Usability Effect law, and Proximity Law
                for designing the final interface,
              </li>
              <li>
                Designed a high fidelity prototype as one of the required
                material to conduct a usability testing
              </li>
            </ul>
            <div className="relative w-fit max-w-[500px]">
              <img
                src={AssetExperience.lmsUndiknas.undiknasImage89}
                className="rounded-xl border border-base-color"
                alt="high fidelity prototype"
              />
              <img
                src={Asset.paintRoller}
                className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-24"
                alt="paint roller icon"
              />
            </div>
          </div>
          <div data-aos="fade-right" className="row-start-9 step-card">
            <h1 className="text-xl text-content">9. Usability Testing</h1>
            <ul className="dashed-2">
              <li>
                Based on the concept testing, there were several issues that we
                gathered from the feedbacks, such as the confusing task for the
                testing script, and that offline testing are less efficient in
                this case since participant will most likely ask help from the
                team.
              </li>
              <li>
                As a solution, we improved the task script for Usability Testing
                and conducted it on a full online method to allow user to be
                more independent in completing the testing.
              </li>
              <li>
                Results show that the user experience has improved significantly
                through a modified design and improved task.{" "}
              </li>
              <li>
                The received feedback this time was only about the shifting of
                some features from UNDIKNAS ADMISSION Platform to UNDIKNAS LMS
                Platform.
              </li>
            </ul>
            <div className="relative w-fit max-w-[500px]">
              <img
                src={AssetExperience.lmsUndiknas.undiknasImage90}
                className="rounded-xl border border-base-color"
                alt="usable testing"
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
            "Ensured the application met the WCAG as a standard for accessibility purpose,",
            "Worked directly with developers to ensure the possibility of developing the designed interface.",
          ]}
          rightPoints={[
            "As an extra solution, we conducted a workshop for the lecturers to anticipate their confusion in using LMS,",
            "There are a minor change on the UI after usability testing to allow a better implementation on both mobile and desktop interface.",
          ]}
        />
        <ConclusionSection
          details={
            "The new design has showed that the implementation of accessibility along with UX Laws has solved user problems in using LMS UNDIKNAS."
          }
          conclusionPoints={[
            {
              title: "WCAG (Web Content Accessibility Guideline",
              details:
                "Designing based on WCAG has helped users in the term of visual and understanding. Users can scan and read the content better while also understanding the components better with a good button placement and naming.",
            },
            {
              title: "Law of Proximity",
              details:
                "By organizing the UI along with it’s component with a clear grouping, making elements close together with space between sections, users can scan and understand the content easier",
            },
            {
              title: "Usability - Aesthetic Effect Law",
              details:
                "With an easy and simple to use interface, it shows that attractive design are seen to be more intuitive.",
            },
          ]}
        />
        <div className="p-10 lg:p-20 flex flex-col gap-5 bg-background">
          <h1 className="text-content text-3xl font-bold">
            Design Documentation
          </h1>
          <span className="text-onsurface inline-flex flex-col">
            The web is already live but are only accessible for UNDIKNAS Student
            and Lecturers at
            <a
              href="https://www.lms.undiknas.ac.id"
              target="_blank"
              className="text-content after:bg-content underline-animation w-fit"
            >
              https://www.lms.undiknas.ac.id
            </a>
          </span>
          <DesignDocumentationImage
            image={AssetExperience.lmsUndiknas.DocumentationUndiknas1}
            description="Student Portal Interface"
            altImage="student portal interface"
          >
            <img
              src={Asset.thumbsUp}
              className="w-16 lg:w-32 absolute left-0 top-0 -translate-y-1/2 -translate-x-1/2"
              alt="thumbs down icon"
            />
          </DesignDocumentationImage>
          <DesignDocumentationImage
            image={AssetExperience.lmsUndiknas.DocumentationUndiknas2}
            description="Lecturer’s Portal Interface"
            altImage="lecturer's portal interface"
          />
          <DesignDocumentationImage
            image={AssetExperience.lmsUndiknas.DocumentationUndiknas3}
            description="UI Kits"
            altImage="UI kits"
          />
          <DesignDocumentationImage
            image={AssetExperience.lmsUndiknas.DocumentationUndiknas4}
            description="Visual Elements"
            altImage="Visual Elements"
          />
        </div>
        <ScrollNotification />
        <AboutMeContact />
        <Footer />
      </div>
    </>
  );
}
