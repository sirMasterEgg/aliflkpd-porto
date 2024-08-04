import { useEffect, useRef } from "react";
import useScrollBlock from "../../hooks/useScrollBlock.js";
import { useDrawer } from "../../hooks/useDrawer.js";

const DrawerButton = () => {
  const { isOpen, open, close } = useDrawer();
  const anim1Ref = useRef(null);
  const anim2Ref = useRef(null);
  const anim3Ref = useRef(null);
  const [allowScroll, blockScroll] = useScrollBlock();

  useEffect(() => {
    if (isOpen) {
      blockScroll();
    }
    if (!isOpen) {
      allowScroll();
    }
    anim1Ref.current.beginElement();
    anim2Ref.current.beginElement();
    anim3Ref.current.beginElement();
  }, [isOpen]);

  const handleOpenDrawer = () => {
    open();
  };
  const handleCloseDrawer = () => {
    close();
  };

  const handleToggle = () => {
    if (!isOpen) {
      handleOpenDrawer();
    }
    if (isOpen) {
      handleCloseDrawer();
    }
  };

  return (
    <>
      <button
        onClick={handleToggle}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
      >
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
                dur="1.0s"
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
                dur="1.0s"
                values={isOpen ? "M5 12H19;M12 12H12" : "M12 12H12;M5 12H19"}
              />
            </path>
            <path d="M5 19L12 12L19 19">
              <animate
                ref={anim3Ref}
                fill="freeze"
                attributeName="d"
                dur="1.0s"
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
    </>
  );
};

export default DrawerButton;
