import PropTypes from "prop-types";
import { RouteList } from "../../routes/route-list.js";
import { useLocation } from "react-router-dom";
import DrawerButton from "../Button/DrawerButton.jsx";

export default function NavbarFuturistic({ imageLogo }) {
  const location = useLocation();
  return (
    <nav className="flex p-3 lg:p-0 lg:justify-center">
      <ul className="hidden lg:flex items-center gap-3">
        <li>
          <a
            href={RouteList.home}
            className={`navbar-underline ${
              location.pathname === RouteList.home
                ? "navbar-underline-active"
                : ""
            }`}
          >
            Home
          </a>
        </li>
        <li className="relative bg-background trapezoid h-[66px] w-[160px] flex items-center justify-center">
          <img loading="eager" className="h-1/2" src={imageLogo} alt="Logo" />
          <svg
            className="absolute opacity-0 transition duration-500 hover:opacity-100 w-[241px] md:w-[258px] h-[66px] z-[2]"
            viewBox="0 0 260 66"
          >
            <path
              d="M0,0 L260,0 L210,66 L50,66z"
              fill="transparent"
              strokeWidth="1"
              stroke="#9DFFFF"
            />
          </svg>
        </li>
        <li>
          <a
            href={RouteList.about}
            className={`navbar-underline ${
              location.pathname === RouteList.about
                ? "navbar-underline-active"
                : ""
            }`}
          >
            About Me
          </a>
        </li>
      </ul>
      <ul className="lg:hidden flex flex-row justify-between w-full">
        <li className="h-[36px]">
          <a href={RouteList.home}>
            <img loading="eager" src={imageLogo} alt="Logo" />
          </a>
        </li>
        <li className="max-h-[36px]">
          <DrawerButton />
        </li>
      </ul>
    </nav>
  );
}

NavbarFuturistic.propTypes = {
  imageLogo: PropTypes.string.isRequired,
};
