import PropTypes from "prop-types";
import useHover from "../../hooks/HoverHook.jsx";

export default function ServiceCard({
  title,
  description,
  image,
  imageHover,
  altText,
  backgroundImage,
  iconSize = "w-36 h-36",
  transitionDuration = "duration-500",
  backgroundPosition = "bg-center",
  dataAos = "fade-up",
}) {
  const { isHovered, onEnter, onLeave } = useHover();

  return (
    <div
      data-aos={dataAos}
      className="w-full p-[1px] rounded-xl relative bg-gradient-to-r from-[rgba(255,255,255,0.6)]"
      onMouseOver={onEnter}
      onMouseOut={onLeave}
    >
      <div
        className={`${backgroundImage} h-full rounded-l-xl rounded-r-2xl ${backgroundPosition}`}
      >
        <div
          className={`w-[calc(100% - 2px)] h-full rounded-xl bg-background text-onsurface flex gap-5 p-10 flex-col items-center justify-center transition ${transitionDuration} hover:bg-transparent`}
        >
          <div className={iconSize}>
            <img
              src={image}
              className={`absolute ${iconSize} transition ${transitionDuration} ${
                isHovered ? "opacity-0" : "opacity-100"
              }`}
              alt={altText + " Solid"}
            />
            <img
              src={imageHover}
              className={`absolute ${iconSize} transition ${transitionDuration} ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
              alt={altText}
            />
          </div>
          <h1 className="text-4xl font-bold text-center">{title}</h1>
          <p className="text-left text-xl">{description}</p>
        </div>
      </div>
    </div>
  );
}
ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageHover: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  iconSize: PropTypes.string,
  transitionDuration: PropTypes.string,
  backgroundPosition: PropTypes.string,
  dataAos: PropTypes.string,
};
