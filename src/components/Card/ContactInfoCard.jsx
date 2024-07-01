import { Asset } from "../../helpers/AssetHelper.js";
import useHover from "../../hooks/HoverHook.jsx";
import { UserData } from "../../helpers/links.js";

const backgroundImage = "bg-image-17";
const transitionDuration = "duration-500";
const backgroundPosition = "bg-top-left";

export default function ContactInfoCard() {
  const { onEnter, onLeave } = useHover();
  return (
    <>
      <div
        className="w-full p-[1px] rounded-xl relative bg-gradient-to-r from-[rgba(255,255,255,0.6)]"
        onMouseOver={onEnter}
        onMouseOut={onLeave}
      >
        <div
          className={`${backgroundImage} bg-cover h-full rounded-l-xl rounded-r-2xl ${backgroundPosition}`}
        >
          <div
            className={`w-[calc(100% - 2px)] min-h-[400px] h-full rounded-xl bg-background text-onsurface flex gap-5 p-10 flex-col items-center justify-center transition ${transitionDuration} hover:bg-transparent`}
          >
            <div className="flex flex-row w-full px-10">
              <div className="flex flex-col gap-3 flex-1 justify-center">
                <span className="text-4xl font-semibold">
                  Looking to collaborate or find out more?
                </span>
                <span className="text-4xl text-content font-semibold">
                  Let’s get in touch!
                </span>
                <span className="text-2xl mt-5">CONTACT ME HERE</span>
                <span className="font-semibold text-2xl">
                  <a href={"mailto:" + UserData.email}>{UserData.email}</a>
                </span>
              </div>
              <img
                src={Asset.persona}
                className="w-[250px]"
                alt="Alif persona"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
