import useHover from "../../hooks/HoverHook.jsx";
import PropTypes from "prop-types";
import { useEffect } from "react";

export default function GradientCard({
  backgroundImage,
  children,
  transitionDuration = "duration-500",
  backgroundPosition = "bg-center",
  hoverStateCallback = () => {},
  dataAos,
  className = "",
}) {
  const { isHovered, onEnter, onLeave } = useHover();

  useEffect(() => {
    hoverStateCallback(isHovered);
  }, [isHovered]);

  const containsPaddingClass = /\bp-\S+/g.test(className);

  return (
    <div
      data-aos={dataAos}
      className="w-full p-[1px] rounded-xl relative bg-gradient-to-r from-[rgba(255,255,255,0.6)]"
      onMouseOver={onEnter}
      onMouseOut={onLeave}
    >
      <div
        className={`${backgroundImage} h-full rounded-l-xl rounded-r-2xl bg-cover lg:bg-auto ${backgroundPosition}`}
      >
        <div
          className={`w-[calc(100% - 2px)] h-full rounded-xl bg-background text-onsurface flex gap-5 flex-col transition ${transitionDuration} hover:bg-transparent ${
            containsPaddingClass ? className : "p-5"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

GradientCard.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  transitionDuration: PropTypes.string,
  backgroundPosition: PropTypes.string,
  hoverStateCallback: PropTypes.func,
  dataAos: PropTypes.string,
  className: PropTypes.string,
};
