import SkillsCard from "../../Card/SkillsCard.jsx";
import EducationCard from "../../Card/EducationCard.jsx";
import WorkingToolsCard from "../../Card/WorkingToolsCard.jsx";
import LanguagesCard from "../../Card/LanguagesCard.jsx";
import GradientCard from "../../Card/GradientCard.jsx";
import { certificationData, workData } from "../../../helpers/data.jsx";
import { useState } from "react";
import OrganizationCard from "../../Card/OrganizationCard.jsx";

export default function AboutMeExperience() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [hoveredIndexCertificate, setHoveredIndexCertificate] = useState(-1);

  return (
    <div className="px-5">
      <div className="flex flex-col lg:grid grid-cols-3 text-onsurface px-5 lg:px-24 my-5 gap-5 lg:gap-16">
        <div className="flex flex-col col-span-2">
          <div className="flex flex-col gap-5">
            <h2 className="text-xl font-bold">Working Experience</h2>
            {workData.map((data, index) => (
              <div key={data.title + "-" + index} data-aos="fade-right">
                <GradientCard
                  backgroundImage="bg-image-3"
                  hoverStateCallback={(hovered) =>
                    hovered ? setHoveredIndex(index) : setHoveredIndex(-1)
                  }
                >
                  <div className="flex flex-col gap-4 p-5">
                    {data.logo}
                    <h2 className="font-bold">{data.title}</h2>
                    <h3
                      className={`transform duration-500 ${
                        hoveredIndex === index ? "text-white" : "text-subtext"
                      }`}
                    >
                      {data.company} | {data.time}
                    </h3>
                    <ul className="dashed pl-[18px]">
                      {data.description.map((desc, index) => (
                        <li key={desc + "-" + index + "-" + data.title}>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </GradientCard>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5">
              <EducationCard />
            </div>
            <div className="flex flex-col gap-5">
              <OrganizationCard />
            </div>
            <div className="flex flex-col gap-5">
              <SkillsCard />
            </div>
            <div className="flex flex-col gap-5">
              <WorkingToolsCard />
            </div>
            <div className="flex flex-col gap-5">
              <LanguagesCard />
            </div>
          </div>
        </div>
        <h2 className="text-xl font-bold col-span-3">Certifications</h2>
        {certificationData.map((data, index) => (
          <GradientCard
            dataAos="zoom-in"
            key={data.title + "-" + index}
            backgroundImage="bg-image-8"
            backgroundPosition="bg-left-bottom"
            hoverStateCallback={(hovered) =>
              hovered
                ? setHoveredIndexCertificate(index)
                : setHoveredIndexCertificate(-1)
            }
          >
            <div className="flex flex-col gap-3 p-5">
              {data.logo}
              <h3 className="font-bold">{data.title}</h3>
              <p
                className={`transform duration-500 ${
                  hoveredIndexCertificate === index
                    ? "text-white"
                    : "text-subtext"
                }`}
              >
                {data.date} | {data.issuer}
              </p>
            </div>
          </GradientCard>
        ))}
      </div>
    </div>
  );
}
