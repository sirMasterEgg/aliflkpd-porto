import { Asset } from "./AssetHelper.js";

export const skillsData = [
  "Problem Analyze",
  "HTML, CSS, JS, DART",
  "Project Management",
  "Competitive Audit",
  "Design System",
  "UI Design",
  "UX Research",
  "SaaS Apps Design",
  "Mobile Apps Design",
  "Web Design",
];

export const workingTools = [
  {
    name: "Figma",
    icon: Asset.figma,
  },
  {
    name: "Adobe XD",
    icon: Asset.adobeXdIcon,
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

export const workData = [
  {
    logo: (
      <>
        <img
          src={Asset.lakipadadaLogo}
          className="w-32"
          alt="Logo Lakipadada Digital Agency"
        />
      </>
    ),
    title: "Founder - Product Designer",
    company: "Elkipidi Studio Lab",
    time: "Oct 2023 - Present",
    description: [
      "Analyzing clients problems, needs, market competitor before defining a product's objectives and goals",
      "Analyzing clients problems, needs, market competitor as their first step before defining project objectives, and goals.",
      "Define the scope, budget, risks, objectives, timelines and deliverables",
      "Help my team to identify the best available tech stack/tools for the targeted project, ensuring the team have the necessary tools and support in completing the project, and lastly is to make sure that projects are archived for future reference",
      "Designed design system for a more cohesive and efficient developing progress for the long term",
      "Documenting every finished project as reference for another upcoming projects in the future.",
    ],
  },
  {
    logo: (
      <>
        <img
          src={Asset.saranatechLogo}
          className="w-32"
          alt="Logo Sarana Tech"
        />
      </>
    ),
    title: "UX/UI Designer & Mentor (Part Time)",
    company: "Sarana Tech",
    time: "June 2024 - September 2024",
    description: [
      "Helps analyzing problems and needs for client's companies and for Sarana Tech's Product itself",
      "Helps designing several system management website, such as logistic tracking, point of sale, and finance system",
      "Improved the accessibility of Sarana Tech's company profile by adjusting the old color into a whole new color design system",
      "Prepared learning materials from beginner level to mastery to teach participants",
    ],
  },
  {
    logo: (
      <>
        <img
          src={Asset.dicodingLogo}
          className="w-14 rounded-full"
          alt="Logo Dicoding"
        />
      </>
    ),
    title: "UX Design Google Professional Facillitator (Part Time)",
    company: "Dicoding",
    time: "April 2024 - July 2024",
    description: [
      "Helping professionals to switch their career path into UI/UX by guiding them to finish the course and building a decent portfolio",
      "Facilitating and communicating with participants to finish their course through WhatsApp Community",
      "Maintaining a good studying environment on live session course",
    ],
  },
  {
    logo: (
      <>
        <img src={Asset.kallaLogo} className="w-20" alt="Logo Kalla Group" />
      </>
    ),
    title: "UX/UI Designer Intern",
    company: "Kalla Group",
    time: "August 2023 - January 2024",
    description: [
      "Successfully increased Kalla Toyota DMS Sales User Experience by running a quantitative survey to initiate a redesign, then conducted A/B Testing and Forum Group Discussions to to compare old and new design and get a deep feedback on the new redesigned interface",
      "Designed several projects for Kalla's sub-business unit system management which are: Design System for Kalla Toyota, Kalla Toyota Dealer Management Sales System, Kalla Toyota Used Car Sales System, QHSE Dashboard, Kalla Lines (Vessel), ETC",
      "Contributes actionable suggestions based on user needs and usability best practices.",
      "Deliver user-focused designs that highlight product and brand characteristics.",
    ],
  },
  {
    logo: (
      <>
        <img src={Asset.undiknasLogo} className="w-20" alt="Logo Undiknas" />
      </>
    ),
    title: "UX/UI Designer Intern",
    company: "UNDIKNAS IT Support Team",
    time: "June 2023 - August 2023",
    description: [
      "Conducted pre-design survey to define users problem for the minimum usage of the current LMS Interface,",
      "Created design system to ease up developers and next UI UX Designer for the LMS Application of UNDIKNAS,",
      "Designed new design concept, mock-up, and prototypes,",
      "Conducted concept testing to test out users understanding on the new design concept,",
      "Conducted usability testing to test out the latest prototype's usability and user experience improvements.",
    ],
  },
];

export const certificationData = [
  {
    logo: (
      <>
        <img src={Asset.googleLogo} className="w-24" alt="Logo google" />
      </>
    ),
    title: "Google UX Design Speciliazation",
    date: "May 2023",
    issuer: "Google Grow With Coursera",
  },
  {
    logo: (
      <div className="flex flex-row items-center gap-3">
        <img src={Asset.kominfoLogo} className="w-10" alt="Logo Kominfo" />
        x
        <img src={Asset.googleLogo} className="w-20" alt="Logo google" />
      </div>
    ),
    title: "Google UX Design Facilitator",
    date: "July 2024",
    issuer: "KOMINFO Indonesia & Google",
  },
  {
    logo: (
      <>
        <img
          src={Asset.dicodingLogo}
          className="w-10 rounded-full"
          alt="Logo google"
        />
      </>
    ),
    title: "Flutter Developer Expert",
    date: "November 2022",
    issuer: "Dicoding",
  },
];
