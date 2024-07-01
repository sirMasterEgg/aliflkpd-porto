import BIRDS from "vanta/dist/vanta.birds.min.js";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

export default function VantaBackground({ children }) {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,

          backgroundColor: "#0D1117",
          color1: "#1B1E23",
          color2: "#13A9D9",
          quantity: 4,
          birdSize: 1.3,
          // quantity: 2,
          // birdSize: 4,
          speedLimit: 1.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return <div ref={vantaRef}>{children}</div>;
}
VantaBackground.propTypes = {
  children: PropTypes.node,
};
