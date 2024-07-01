import VantaBackground from "./Vanta/VantaBackground.jsx";
import { Asset } from "../helpers/AssetHelper.js";
import IconButton from "./Button/IconButton.jsx";

export default function Banner() {
  return (
    <VantaBackground>
      <div className="min-h-screen flex items-center justify-center flex-col">
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
            link={"#"}
            icon={Asset.instagramSolidIcon}
            hoveredIcon={Asset.instagramIcon}
            altText="Logo Instagram"
          />
          <IconButton
            link={"#"}
            icon={Asset.dribblSolidIcon}
            hoveredIcon={Asset.dribblIcon}
            altText="Logo Dribbl"
          />
          <IconButton
            link={"#"}
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
