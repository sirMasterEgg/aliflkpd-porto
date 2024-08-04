import useHover from "../../../hooks/HoverHook.jsx";
import { Asset } from "../../../helpers/AssetHelper.js";
import PropTypes from "prop-types";
import { RouteList } from "../../../routes/route-list.js";
import { lmsTools } from "../../Page/Experience/LmsUndiknas.jsx";

export default function ExperienceUndiknasCard({
  backgroundImage,
  transitionDuration = "duration-500",
  backgroundPosition = "bg-center",
}) {
  const { isHovered, onEnter, onLeave } = useHover();

  return (
    <div
      data-aos="fade-up"
      className={`lg:col-span-2 w-full p-[1px] rounded-xl relative bg-gradient-to-r from-[rgba(255,255,255,0.6)]`}
      onMouseOver={onEnter}
      onMouseOut={onLeave}
    >
      <div
        className={`${backgroundImage} h-full rounded-l-xl rounded-r-2xl bg-cover lg:bg-auto ${backgroundPosition}`}
      >
        <div
          className={`w-[calc(100% - 2px)] min-h-[700px] h-full rounded-xl bg-background text-onsurface flex gap-2 p-10 lg:gap-8 lg:py-5 lg:px-20 flex-col lg:flex-row items-center justify-center transition ${transitionDuration} hover:bg-transparent`}
        >
          <div className="w-full lg:w-1/2 relative flex items-center justify-center">
            <div className="relative w-full lg:w-[440px]">
              <img
                src={Asset.undiknasMockup}
                className="w-28 lg:w-[200px] scale-90"
                alt="Experience Undiknas Mockup"
              />
              <div
                className={`absolute border border-red-600 rounded-full w-6 h-6 top-28 -left-[75px] lg:top-[212px] lg:left-0 transition duration-1000 ${
                  isHovered ? "opacity-100 translate-x-40" : "opacity-0"
                }`}
              ></div>
              <img
                src={Asset.arrowUndiknas}
                className={`w-[85px] lg:w-[100px] absolute top-[80px] -left-[70px] lg:top-[173px] lg:left-[10px] transition duration-1000 ${
                  isHovered ? "opacity-100 translate-x-40" : "opacity-0"
                }`}
                alt="Arrow"
              />
              <img
                src={Asset.undiknasMobile}
                className={`w-28 lg:w-[200px] scale-95 absolute top-4 left-12 transition duration-1000 ${
                  isHovered ? "translate-x-full" : ""
                }`}
                alt="Experience Undiknas Mobile"
              />
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col gap-5 py-10">
            <h1 className="text-3xl font-bold mb-2">LMS UNDIKNAS REDESIGN</h1>
            <p className="text-xl text-left">
              After conducting a research on why Lecturers and Students decline
              to use the LMS of UNDIKNAS, it turns out to have a bad UX which
              are confusing flow & navigation, lack of features, application
              wasn’t usable on other device due to it’s bad interface, and hard
              to read content. The project development was using Double Diamond
              Method so that we can focus more on the exist problems. We used 3
              research methods for user research, those are group survey,
              concept testing, & usability testing.
            </p>
            <div className="flex gap-5 flex-col">
              <span className="font-bold text-xl">Tools Used</span>
              <div className="flex justify-between items-end lg:items-start h-full">
                <span className="w-1/2 lg:w-auto inline-flex flex-wrap gap-3">
                  {lmsTools.map((tool, index) => (
                    <img
                      key={index}
                      src={tool.icon}
                      title={tool.name}
                      alt={tool.name}
                    />
                  ))}
                </span>
                <a
                  href={RouteList.experience.lmsUndiknas}
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

ExperienceUndiknasCard.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  transitionDuration: PropTypes.string,
  backgroundPosition: PropTypes.string,
};
