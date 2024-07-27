import GradientCard from "./GradientCard.jsx";
import { Asset } from "../../helpers/AssetHelper.js";

export default function EducationCard() {
  return (
    <>
      <h2 className="text-xl font-bold">Education</h2>
      <div data-aos="fade-left">
        <GradientCard
          backgroundPosition="bg-left-bottom"
          backgroundImage="bg-image-8"
          className="p-11"
        >
          <div className="flex flex-col gap-3">
            <img
              src={Asset.undiknasLogo}
              className="w-16 h-16"
              alt="Logo Undiknas"
            />
            <h3 className="font-bold">Computer Science Bachelor</h3>
            <p className="inline-flex flex-col text-sm">
              Universitas Pendidikan Nasional
              <span className="text-sm">(3.80/4.00 GPA)</span>
            </p>
            <p>October 2020 - February 2024</p>
          </div>
        </GradientCard>
      </div>
    </>
  );
}
