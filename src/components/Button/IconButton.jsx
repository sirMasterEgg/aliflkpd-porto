import PropTypes from "prop-types";
import useHover from "../../hooks/HoverHook.jsx";

export default function IconButton({
  icon,
  hoveredIcon,
  link,
  altText,
  iconSize = "w-6 h-6",
  transitionDuration = "duration-500",
  className = "",
}) {
  const { isHovered, onEnter, onLeave } = useHover();

  return (
    <a
      href={link}
      target="_blank"
      onMouseOver={onEnter}
      onMouseOut={onLeave}
      className={`rounded-full border border-icon-border hover:bg-onsurface p-3 transition ${transitionDuration} ${className}`}
    >
      <div className={iconSize}>
        <img
          src={icon}
          className={`absolute ${iconSize} transition ${transitionDuration} ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
          alt={altText + " Solid"}
        />
        <img
          src={hoveredIcon}
          className={`absolute ${iconSize} transition ${transitionDuration} ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          alt={altText}
        />
      </div>
    </a>
  );
}

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  hoveredIcon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  altText: PropTypes.string,
  iconSize: PropTypes.string,
  transitionDuration: PropTypes.string,
  className: PropTypes.string,
};
