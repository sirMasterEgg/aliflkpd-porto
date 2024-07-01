import { Asset } from "../helpers/AssetHelper.js";
import NavbarFuturistic from "./Navbar/NavbarFuturistic.jsx";

export default function Navbar() {
  return (
    <>
      <div className="fixed w-full z-20 top-0">
        <div className="relative pt-3 px-2">
          <div className="border-animation-wrapper nav-content">
            <div className="border-animation-inner">
              {/*<NavbarPill imageLogo={Asset.logo}>
                <NavbarMenuItems link="#" text="Home" />
                <NavbarMenuItems link="#" text="About Me" />
              </NavbarPill>*/}
              <NavbarFuturistic imageLogo={Asset.logo} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
