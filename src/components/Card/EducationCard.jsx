import GradientCard from "./GradientCard.jsx";
import { Asset } from "../../helpers/AssetHelper.js";

export default function EducationCard() {
  return (
    <>
      <h2 className="text-xl font-bold">Education</h2>
      <GradientCard
        backgroundPosition="bg-left-bottom"
        backgroundImage="bg-image-8"
      >
        <div className="flex flex-col gap-3">
          <img
            src={Asset.undiknasLogo}
            className="w-16 h-16"
            alt="Logo Undiknas"
          />
          <h3 className="font-bold">Computer Science Bachelor</h3>
          <p>Universitas Pendidikan Nasional (3.80/4.00 GPA)</p>
          <p>October 2020 - February 2024</p>
        </div>
      </GradientCard>
    </>
  );
}
