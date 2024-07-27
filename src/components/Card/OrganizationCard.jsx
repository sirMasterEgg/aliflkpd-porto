import GradientCard from "./GradientCard.jsx";
import { Asset } from "../../helpers/AssetHelper.js";

export default function OrganizationCard() {
  return (
    <>
      <h2 className="text-xl font-bold">Organization</h2>
      <div data-aos="fade-left">
        <GradientCard
          backgroundPosition="bg-left-bottom"
          backgroundImage="bg-image-8"
          className="p-11"
        >
          <div className="flex flex-col gap-3">
            <img src={Asset.uxIdLogo} className="w-16" alt="Logo UX Id" />
            <h3 className="font-bold">UXID Bali</h3>
            <p className="inline-flex flex-col text-sm">Community Manager</p>
            <p>July 2024 - Present</p>
          </div>
        </GradientCard>
      </div>
    </>
  );
}
