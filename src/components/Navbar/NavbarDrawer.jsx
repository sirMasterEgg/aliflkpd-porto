import { useDrawer } from "../../hooks/useDrawer.js";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { RouteList } from "../../routes/route-list.js";
import { useSwipes } from "../../hooks/useSwipes.js";

export default function NavbarDrawer() {
  const { isOpen, close, open } = useDrawer();
  const anim1Ref = useRef(null);
  const anim2Ref = useRef(null);
  const anim3Ref = useRef(null);
  const location = useLocation();

  const { distance, isSwipedRight, isSwipedLeft } = useSwipes();

  useEffect(() => {
    anim1Ref.current.beginElement();
    anim2Ref.current.beginElement();
    anim3Ref.current.beginElement();
  }, [isOpen]);

  useEffect(() => {
    if (distance > 50 && isSwipedRight) {
      open();
    }
    if (distance > 50 && isSwipedLeft) {
      close();
    }
  }, [distance]);

  return (
    <div
      className={`${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } fixed transition duration-500 top-0 left-0 w-9/12 h-screen z-50 bg-base-background p-5 pt-7 flex flex-col text-onsurface`}
    >
      <div className="inline-flex justify-end">
        <button onClick={close} className="text-onsurface w-fit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth={2}
            >
              <path d="M5 5L12 12L19 5">
                <animate
                  ref={anim1Ref}
                  fill="freeze"
                  attributeName="d"
                  dur="0.5s"
                  values={
                    isOpen
                      ? "M5 5L12 5L19 5;M5 5L12 12L19 5"
                      : "M5 5L12 12L19 5;M5 5L12 5L19 5"
                  }
                />
              </path>
              <path d="M12 12H12">
                <animate
                  ref={anim2Ref}
                  fill="freeze"
                  attributeName="d"
                  dur="0.5s"
                  values={isOpen ? "M5 12H19;M12 12H12" : "M12 12H12;M5 12H19"}
                />
              </path>
              <path d="M5 19L12 12L19 19">
                <animate
                  ref={anim3Ref}
                  fill="freeze"
                  attributeName="d"
                  dur="0.5s"
                  values={
                    isOpen
                      ? "M5 19L12 19L19 19;M5 19L12 12L19 19"
                      : "M5 19L12 12L19 19;M5 19L12 19L19 19"
                  }
                />
              </path>
            </g>
          </svg>
        </button>
      </div>
      <ul className="flex flex-col gap-5 text-xl px-5">
        <li>
          <a
            href={RouteList.home}
            className={
              location.pathname === RouteList.home
                ? "border-b-2 border-b-onsurface"
                : ""
            }
          >
            Home
          </a>
        </li>
        <li>
          <a
            href={RouteList.about}
            className={
              location.pathname === RouteList.about
                ? "border-b-2 border-b-onsurface"
                : ""
            }
          >
            About
          </a>
        </li>
      </ul>
    </div>
  );
}
