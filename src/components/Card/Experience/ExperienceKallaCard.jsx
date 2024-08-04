import useHover from "../../../hooks/HoverHook.jsx";
import { Asset } from "../../../helpers/AssetHelper.js";
import PropTypes from "prop-types";
import { RouteList } from "../../../routes/route-list.js";
import { kallaTools } from "../../Page/Experience/KallaToyotaDmsSalesRedesign.jsx";

export default function ExperienceKallaCard({
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
          <div className="lg:w-1/2 flex items-center justify-center">
            <div
              className={`relative flex flex-row gap-3 origin-bottom-left ${
                isHovered ? "scale-105" : "scale-90"
              } transition duration-1000`}
            >
              <img
                src={Asset.kallaLeadsOutstandingMobile}
                className="w-28 lg:w-[200px]"
                alt="Experience Kalla Leads Outstanding Mobile"
              />
              <img
                src={Asset.kallaProspectMobile}
                className="w-28 lg:w-[200px]"
                alt="Experience Kalla Prospect Mobile"
              />
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col gap-5 py-10">
            <h1 className="text-3xl font-bold mb-2">
              KALLA TOYOTA DMS SALES REDESIGN
            </h1>
            <p className="text-xl text-left">
              While on my contract at Kalla Group, Kalla Toyota as one of the
              Sub-Business Unit is said to have a bad user experience with one
              of their application, Kalla Toyota DMS Sales. As someone with user
              research experience, i was given the responsibility to lead the
              team in analyzing the problems and help to provide solution for
              the team. We used 2 methods for the the research phase,
              quantitative survey for pre-design, and A/B Testing and Forum
              Group Discussions for post-testing to gain feedback on the new
              interface.
            </p>
            <div className="flex gap-5 flex-col">
              <span className="font-bold text-xl">Tools Used</span>
              <div className="flex justify-between items-end lg:items-start h-full">
                <span className="w-1/2 lg:w-auto inline-flex flex-wrap gap-3">
                  {kallaTools.map((tool, index) => (
                    <img
                      key={index}
                      src={tool.icon}
                      title={tool.name}
                      alt={`Icon ${tool.name}`}
                    />
                  ))}
                </span>
                <a
                  href={RouteList.experience.kallaDms}
                  className="flex items-center h-fit py-1 text-center justify-center border border-base-color rounded-full px-6 hover:bg-onsurface hover:text-background transition duration-300"
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

ExperienceKallaCard.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  transitionDuration: PropTypes.string,
  backgroundPosition: PropTypes.string,
};
