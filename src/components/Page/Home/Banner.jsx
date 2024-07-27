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
        <h1 className="text-7xl text-onsurface font-bold flex flex-col items-center justify-center gap-4">
          <span>Product Designer</span>
          <span>& UX Designer</span>
        </h1>
        <h2 className="text-onsurface text-3xl mt-4 font-light flex flex-col items-center justify-center gap-2">
          <span>“a Product is succeed if it’s equal for </span>
          <span>everyone”</span>
        </h2>

        <div className="flex items-center justify-center gap-2 mt-4">
          <IconButton
            link={UserData.linksInstagram}
            icon={Asset.instagramSolidIcon}
            hoveredIcon={Asset.instagramIcon}
            altText="Logo Instagram"
          />
          <IconButton
            link={UserData.linksDribbl}
            icon={Asset.dribbblSolidIcon}
            hoveredIcon={Asset.dribbblIcon}
            altText="Logo Dribbbl"
          />
          <IconButton
            link={UserData.linksLinkedin}
            icon={Asset.linkedinSolidIcon}
            hoveredIcon={Asset.linkedinIcon}
            altText="Logo LinkedIn"
            className="cursor-icon"
          />
        </div>
      </div>
    </VantaBackground>
  );
}
