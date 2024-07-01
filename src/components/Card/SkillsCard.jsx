import GradientCard from "./GradientCard.jsx";
import { skillsData } from "../../helpers/data.jsx";

export default function SkillsCard() {
  return (
    <>
      <h2 className="text-xl font-bold">Skills</h2>
      <GradientCard backgroundPosition="bg-right" backgroundImage="bg-image-1">
        <div className="flex flex-col gap-3 px-5">
          <ul className="flex flex-col gap-3 list-circle">
            {skillsData.map((data, index) => (
              <li key={data + "-" + index}>{data}</li>
            ))}
          </ul>
        </div>
      </GradientCard>
    </>
  );
}
