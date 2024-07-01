import { useState } from "react";

export default function useHover() {
  const [isHovered, setIsHovered] = useState(false);
  const onEnter = () => {
    setIsHovered(true);
  };
  const onLeave = () => {
    setIsHovered(false);
  };
  return { isHovered, onEnter, onLeave };
}
