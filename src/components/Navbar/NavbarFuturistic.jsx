import PropTypes from "prop-types";

export default function NavbarFuturistic({ imageLogo }) {
  return (
    <nav className="flex justify-center">
      <ul className="flex items-center gap-3">
        <a href="#" className="navbar-underline">
          <li>Home</li>
        </a>
        <span className="relative bg-background trapezoid h-[66px] w-[160px] flex items-center justify-center">
          <img loading="lazy" className="h-1/2" src={imageLogo} alt="Logo" />
          <svg
            className="absolute opacity-0 transition duration-500 hover:opacity-100 w-[258px] h-[66px] z-[2]"
            viewBox="0 0 260 66"
          >
            <path
              d="M0,0 L260,0 L210,66 L50,66z"
              fill="transparent"
              strokeWidth="1"
              stroke="#9DFFFF"
            />
          </svg>
        </span>
        <a href="#">
          <li>About</li>
        </a>
      </ul>
    </nav>
  );
}

NavbarFuturistic.propTypes = {
  imageLogo: PropTypes.string.isRequired,
};
