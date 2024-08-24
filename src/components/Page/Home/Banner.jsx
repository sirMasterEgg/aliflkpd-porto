import VantaBackground from "../../Vanta/VantaBackground.jsx";
import { Asset } from "../../../helpers/AssetHelper.js";
import IconButton from "../../Button/IconButton.jsx";
import { UserData } from "../../../helpers/links.js";

export default function Banner() {
  return (
    <VantaBackground>
      <div
        data-aos="fade-in"
        className="min-h-screen flex items-center justify-center flex-col"
      >
        <h1 className="text-4xl lg:text-7xl text-onsurface font-bold flex flex-col items-center justify-center gap-4">
          <span>Product Designer</span>
          <span>& UX Designer</span>
        </h1>
        <h2 className="text-onsurface lg:text-3xl mt-4 font-light flex flex-col items-center justify-center gap-2">
          <span>“Design isn’t only how it looks like. Design</span>
          <span>is how it works.”</span>
        </h2>

        <div className="flex items-center justify-center gap-2 mt-4">
          <IconButton
            link={UserData.linksLinkedin}
            icon={Asset.linkedinSolidIcon}
            hoveredIcon={Asset.linkedinIcon}
            altText="Logo LinkedIn"
          />
          <IconButton
            link={UserData.linksDribbl}
            icon={Asset.dribbblSolidIcon}
            hoveredIcon={Asset.dribbblIcon}
            altText="Logo Dribbbl"
            className="cursor-icon"
          />
          <IconButton
            link={UserData.linksBehance}
            icon={Asset.behanceSolidIcon}
            hoveredIcon={Asset.behanceIcon}
            altText="Logo Behance"
          />
          <IconButton
            link={UserData.linksInstagram}
            icon={Asset.instagramSolidIcon}
            hoveredIcon={Asset.instagramIcon}
            altText="Logo Instagram"
          />
        </div>
      </div>
    </VantaBackground>
  );
}
