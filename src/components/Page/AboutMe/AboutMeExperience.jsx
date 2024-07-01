import SkillsCard from "../../Card/SkillsCard.jsx";
import EducationCard from "../../Card/EducationCard.jsx";
import WorkingToolsCard from "../../Card/WorkingToolsCard.jsx";
import LanguagesCard from "../../Card/LanguagesCard.jsx";
import GradientCard from "../../Card/GradientCard.jsx";
import { certificationData, workData } from "../../../helpers/data.jsx";

export default function AboutMeExperience() {
  return (
    <div className="px-5">
      <div className="grid grid-cols-3 text-onsurface px-24 my-5 gap-16">
        <div className="flex flex-col col-span-2">
          <div className="flex flex-col gap-5">
            <h2 className="text-xl font-bold">Working History</h2>
            {workData.map((data, index) => (
              <GradientCard
                key={data.title + "-" + index}
                backgroundImage="bg-image-3"
              >
                <div className="flex flex-col gap-4 p-5">
                  {data.logo}
                  <h2 className="font-bold">{data.title}</h2>
                  <h3 className="text-subtext">
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
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5">
              <EducationCard />
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
        <div className="col-span-3">
          <h2 className="text-xl font-bold">Certifications</h2>
          <div className="grid grid-cols-3 gap-5 my-5">
            {certificationData.map((data, index) => (
              <GradientCard
                key={data.title + "-" + index}
                backgroundImage="bg-image-8"
                backgroundPosition="bg-left-bottom"
              >
                <div className="flex flex-col gap-3 p-5">
                  {data.logo}
                  <h3 className="font-bold">{data.title}</h3>
                  <p>
                    {data.date} | {data.issuer}
                  </p>
                </div>
              </GradientCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
