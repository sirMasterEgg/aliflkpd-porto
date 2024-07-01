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
    name: "Trello",
    icon: Asset.trelloIcon,
  },
  {
    name: "Maze",
    icon: Asset.maze,
  },
  {
    name: "Illustrator",
    icon: Asset.ai,
  },
];

export const workData = [
  {
    logo: (
      <>
        <img
          src={Asset.lakipadadaLogo}
          className="w-52"
          alt="Logo Lakipadada Digital Agency"
        />
      </>
    ),
    title: "CEO & Founder",
    company: "Lakipadada Digital Agency",
    time: "Oct 2023 - Present",
    description: [
      "Building & maintaining relation with communities & companies",
      "Analyzing clients problems, needs, competitor as their first step before stating their product requirement",
      "Project planning ; define the scope, budget, risks, objectives, timelines and deliverables",
      "Development ; help team to identify the best available tech stack/tools for the targeted project, ensuring the team have the necessary tools and support in completing the project, and lastly is to make sure that projects are archived for future reference",
      "Establish the project quality standard while ensuring the project meets them by reviewing the deliverables and user experience testing.",
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
      "Prepare learning material for the course participants",
      "Teaching & guiding participants to finish their course for UI UX Path",
      "Help building a cleaner and usable design system",
      "Designing several web/app designs for a client request or for a project template oriented to offer to companies",
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
      "Helping professional to switch their career path into UI UX by guiding them to finish the course and building a decent portfolio",
      "Facilitating and communicating with partisipants to finish their course through WhatsApp Community",
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
      "Conduct competitive/market analysis to identify audience segments and develop user journeys that reflect the needs and pain points of those segments.",
      "Deliver compelling insights, stories and artefacts to help drive evidence-based product and design decisions.",
      "Contributes actionable suggestions based on user needs and usability best practices.",
      "Deliver user-focused designs that highlight product and brand characteristics.",
      "Conducted User Research using A/B testing method and Forum Group Discussions to point out users need and problem when using the sub-businesses unit applications of PT. Hadji Kalla.",
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
      "Conducted user experience research using interview and group method to analyze the reasons of less usage of UNDIKNAS Learning Management System",
      "Designed mock up and high fidelity prototype for UNDIKNAS Learning Management System for both students and lecturer side",
      "Conducted concept testing to test out 2 different concept for the main page",
      "Conducted Usability Testing to get feedbacks for the latest modified prototype from last testing",
      "Deliver and communicate with the senior developer",
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
