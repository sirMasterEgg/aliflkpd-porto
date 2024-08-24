import { useEffect, useState } from "react";

export const useSwipes = () => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isSwipedRight, setIsSwipedRight] = useState(false);
  const [isSwipedLeft, setIsSwipedLeft] = useState(false);
  const [distance, setDistance] = useState(0);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const largeScreen = 1024;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    if (touchStart > 0 && touchStart < window.innerWidth * 0.75) {
      const distance = touchStart - touchEnd;
      const isLeftSwipe = distance > minSwipeDistance;
      const isRightSwipe = distance < -minSwipeDistance;

      setIsSwipedRight(isRightSwipe);
      setIsSwipedLeft(isLeftSwipe);
      setDistance(Math.abs(distance));
    }
  };

  const resetSwipe = () => {
    setTouchStart(null);
    setTouchEnd(null);
    setIsSwipedRight(false);
    setIsSwipedLeft(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < largeScreen) {
        document.addEventListener("touchstart", onTouchStart);
        document.addEventListener("touchmove", onTouchMove);
        document.addEventListener("touchend", onTouchEnd);
      } else {
        document.removeEventListener("touchstart", onTouchStart);
        document.removeEventListener("touchmove", onTouchMove);
        document.removeEventListener("touchend", onTouchEnd);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("resize", handleResize);
    };
  }, [touchStart, touchEnd]);

  return {
    isSwipedRight,
    isSwipedLeft,
    resetSwipe,
    distance,
  };
};
