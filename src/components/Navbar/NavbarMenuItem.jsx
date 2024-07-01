import PropTypes from "prop-types";

export default function NavbarMenuItems({ link, text }) {
  return (
    <a
      href={link}
      className="hover:bg-white hover:rounded-full hover:text-black px-4 py-1"
    >
      <li>{text}</li>
    </a>
  );
}

NavbarMenuItems.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
