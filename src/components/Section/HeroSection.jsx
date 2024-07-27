import { Asset } from "../../helpers/AssetHelper.js";
import PropTypes from "prop-types";

export default function HeroSection({ title, heroBanner }) {
  return (
    <div className="flex flex-col text-onsurface w-full justify-between">
      <div className="inline-flex justify-start items-center px-24 mb-5">
        <h1 className="text-4xl font-bold">{title}</h1>
        <img src={Asset.paint} className="w-20" alt="Icon palette and brush" />
      </div>
      <div className="w-full">
        <img src={heroBanner} className="w-full" alt="hero" />
      </div>
      {/*<div className="w-full flex justify-evenly gap-5 bg-image-10-darken p-10">
              <div className="flex flex-row gap-5">
                {kallaBannerImagesBefore.map((item, index) => {
                  return (
                    <img
                      key={index}
                      src={item}
                      className="w-48 aspect-9/20 rounded-xl"
                      alt="Kalla Toyota DMS Sales Redesign"
                    />
                  );
                })}
              </div>
              <img
                src={AssetExperience.kalla.arrowKallaExperience}
                alt="Arrow"
              />
              <div className="flex flex-row gap-5">
                {kallaBannerImagesAfter.map((item, index) => {
                  return (
                    <img
                      key={index}
                      src={item}
                      className="w-48 aspect-9/20 rounded-xl"
                      alt="Kalla Toyota DMS Sales Redesign"
                    />
                  );
                })}
              </div>
            </div>*/}
    </div>
  );
}
HeroSection.propTypes = {
  title: PropTypes.string,
  heroBanner: PropTypes.string,
};
