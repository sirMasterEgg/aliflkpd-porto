import useHover from "../../../hooks/HoverHook.jsx";
import { Asset } from "../../../helpers/AssetHelper.js";
import PropTypes from "prop-types";
import { RouteList } from "../../../routes/route-list.js";
import { realNFakeTools } from "../../Page/Experience/RealNFake.jsx";

export default function ExperienceRealAndFakeCard({
  backgroundImage,
  transitionDuration = "duration-500",
  backgroundPosition = "bg-center",
}) {
  const { onEnter, onLeave } = useHover();

  return (
    <div
      data-aos="fade-right"
      className={`w-full p-[1px] rounded-xl relative bg-gradient-to-r from-[rgba(255,255,255,0.6)]`}
      onMouseOver={onEnter}
      onMouseOut={onLeave}
    >
      <div
        className={`${backgroundImage} h-full rounded-l-xl rounded-r-2xl ${backgroundPosition}`}
      >
        <div
          className={`w-[calc(100% - 2px)] h-full rounded-xl bg-background text-onsurface flex flex-col p-10 gap-3 lg:gap-8 lg:py-20 lg:px-20 items-center justify-start transition ${transitionDuration} hover:bg-transparent`}
        >
          <div className="relative flex items-center justify-center">
            <div className="relative w-full">
              <img
                src={Asset.realNFakeLaptop}
                className="w-11/12 lg:w-[400px]"
                alt="Experience Real and Fake Laptop"
              />
              <img
                src={Asset.realNFakeMobile}
                className="w-6/12 -top-12 -right-6 lg:w-[200px] absolute lg:-top-16 lg:-right-20 scale-50 rotate-[-11deg]"
                alt="Experience Real and Fake Mobile"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 py-5">
            <h1 className="text-3xl font-bold mb-2">REALnFAKE DEVELOPMENT</h1>
            <p className="text-xl text-left">
              Rebrand and redesign of thriftex.id into REALnFAKE, a free Legit
              Check platform that allows user to check a product’s authenticity
              within a quick step and 24 hours availability. REALnFAKE platform
              offers a legit check for several brands including local brand
              (Indonesia)
            </p>
            <div className="flex gap-5 flex-col">
              <span className="font-bold text-xl">Tools Used</span>
              <div className="flex justify-between items-end lg:items-start h-full">
                <span className="w-1/2 lg:w-auto flex-wrap inline-flex gap-3">
                  {realNFakeTools.map((tool, index) => (
                    <img
                      key={index}
                      src={tool.icon}
                      title={tool.name}
                      alt={`Icon ${tool.name}`}
                    />
                  ))}
                </span>
                <a
                  href={RouteList.experience.realNFake}
                  className="h-fit text-center py-1 flex items-center justify-center border border-base-color rounded-full px-6 hover:bg-onsurface hover:text-background transition duration-300"
                >
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ExperienceRealAndFakeCard.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  transitionDuration: PropTypes.string,
  backgroundPosition: PropTypes.string,
};
