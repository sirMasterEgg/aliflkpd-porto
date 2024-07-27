import GradientCard from "./GradientCard.jsx";
import { Asset } from "../../helpers/AssetHelper.js";
import { useState } from "react";

export default function LanguagesCard() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <h2 className="text-xl font-bold">Languages</h2>
      <div data-aos="fade-left">
        <GradientCard
          backgroundPosition="bg-right"
          backgroundImage="bg-image-1"
          className="p-11"
          hoverStateCallback={(hovered) => setIsHovered(hovered)}
        >
          <div className="flex flex-col gap-5">
            <div className="flex justify-start items-center gap-3">
              <div className="rounded-full bg-background p-3 w-12 h-12 border-onsurface border">
                <img
                  src={Asset.indonesiaFlag}
                  className="w-full rounded-full object-cover"
                  alt="Indonesia flag"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold">Indonesia</span>
                <span
                  className={`transform duration-500 ${
                    isHovered ? "text-white" : "text-subtext"
                  }`}
                >
                  Native
                </span>
              </div>
            </div>
            <div className="flex justify-start items-center gap-3">
              <div className="rounded-full bg-background p-3 w-12 h-12 border-onsurface border">
                <img
                  src={Asset.ukFlag}
                  className="w-full rounded-full object-cover"
                  alt="United Kingdom flag"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold">English</span>
                <span
                  className={`transform duration-500 ${
                    isHovered ? "text-white" : "text-subtext"
                  }`}
                >
                  Professional
                </span>
              </div>
            </div>
            <div className="flex justify-start items-center gap-3">
              <div className="rounded-full bg-background p-3 w-12 h-12 border-onsurface border">
                <img
                  src={Asset.germanFlag}
                  className="w-full rounded-full object-cover"
                  alt="Germany flag"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold">Deutsch</span>
                <span
                  className={`transform duration-500 ${
                    isHovered ? "text-white" : "text-subtext"
                  }`}
                >
                  Beginner
                </span>
              </div>
            </div>
          </div>
        </GradientCard>
      </div>
    </>
  );
}
