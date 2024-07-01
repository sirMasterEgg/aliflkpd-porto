import PropTypes from "prop-types";

export default function NavbarPill({ imageLogo, children }) {
  return (
    <nav className="flex justify-between">
      <img loading="lazy" src={imageLogo} alt="Logo" />
      <ul className="flex items-center gap-3">{children}</ul>
    </nav>
  );
}
NavbarPill.propTypes = {
  imageLogo: PropTypes.string.isRequired,
  children: PropTypes.node,
};
