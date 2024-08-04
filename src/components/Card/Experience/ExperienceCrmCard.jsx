import PropTypes from "prop-types";
import useHover from "../../../hooks/HoverHook.jsx";
import { Asset } from "../../../helpers/AssetHelper.js";

export default function ExperienceCrmCard({
  backgroundImage,
  transitionDuration = "duration-500",
  backgroundPosition = "bg-center",
}) {
  const { onEnter, onLeave } = useHover();

  return (
    <div
      data-aos="fade-left"
      className={`w-full p-[1px] rounded-xl relative bg-gradient-to-r from-[rgba(255,255,255,0.6)]`}
      onMouseOver={onEnter}
      onMouseOut={onLeave}
    >
      <div
        className={`${backgroundImage} h-full rounded-l-xl rounded-r-2xl bg-cover lg:bg-auto ${backgroundPosition}`}
      >
        <div
          className={`w-[calc(100% - 2px)] h-full rounded-xl bg-background text-onsurface flex flex-col gap-3 p-10 lg:gap-8 lg:py-20 lg:px-20 items-center justify-center transition ${transitionDuration} hover:bg-transparent`}
        >
          <div className="relative flex items-center justify-center">
            <div className="relative">
              <img
                src={Asset.clientConnectCrmLaptop}
                className="w-[400px]"
                alt="Experience CRM Laptop"
              />
              <img
                src={Asset.clientConnectCrmMobile}
                className="w-4/12 lg:w-[120px] scale-95 lg:scale-100 absolute top-1 lg:top-2 -right-5"
                alt="Experience CRM Mobile"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 py-5">
            <h1 className="text-3xl font-bold mb-2">
              CLIENT CONNECT CRM DESIGN
            </h1>
            <p className="text-xl text-left">
              The project goal was to enhance customer engagement and streamline
              sales and customer service processes for businesses. The app
              focuses on managing customer information, tracking sales leads,
              providing customer support, and analyzing customer interactions.
              Therefore, the target audience is Sales Professionals and Business
              Executives.
            </p>
            <div className="flex gap-5 flex-col">
              <span className="font-bold text-xl">Tools Used</span>
              <div className="flex justify-between items-end lg:items-start h-full">
                <span className="lg:w-auto flex-wrap inline-flex gap-3">
                  <img src={Asset.figma} title="Figma" alt="Icon figma" />
                  <img
                    src={Asset.ai}
                    title="Adobe Illustrator"
                    alt="Icon adobe illustrator"
                  />
                  <img src={Asset.maze} title="Maze" alt="Icon maze" />
                </span>
                {/*<a
                  href={RouteList.experience.clientConnectCrm}
                  className="flex items-center justify-center border border-base-color rounded-full px-6 hover:bg-onsurface hover:text-background transition duration-300"
                >
                  View More
                </a>*/}
                <span className="w-2/3 lg:w-auto h-fit text-center py-1 flex items-center cursor-default uppercase justify-center border border-base-color bg-icon-border text-onsurface rounded-full px-6">
                  On Progress
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ExperienceCrmCard.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  transitionDuration: PropTypes.string,
  backgroundPosition: PropTypes.string,
};
