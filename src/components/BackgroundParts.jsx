import patternLines from "/assets/images/pattern-lines.svg";
import patternSquigglyLineBottomDesktop from "/assets/images/pattern-squiggly-line-bottom-desktop.svg";
import patternSquigglyLineBottomMobileTablet from "/assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg";
import patternSquigglyLineTop from "/assets/images/pattern-squiggly-line-top.svg";
import patternCircle from "/assets/images/pattern-circle.svg";
import { useState, useEffect } from "react";
function BackgroundParts() {
  const [patternSquigglyLineBottom, SetPatternSquigglyLineBottom] = useState();
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        SetPatternSquigglyLineBottom(patternSquigglyLineBottomDesktop);
      } else {
        SetPatternSquigglyLineBottom(patternSquigglyLineBottomMobileTablet);
      }
    };

    handleResize(); // Set initial background image
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="pointer-events-none">
      <img
        src={patternLines}
        alt="pattern-Lines"
        className="absolute top-0 lg:w-[1846px] max-lg:w-[1404px] max-sm:w-[1266px] lg:h-[1100px] max-lg:h-[778px] lg:left-[-212px] max-lg:left-[-318px] max-sm:left-[-446px] max-w-[none]"
      />
      <img
        src={patternSquigglyLineBottom}
        alt="pattern-Squiggly-Line-Bottom-Desktop"
        className="absolute bottom-0 max-lg:w-[396px] max-lg:h-[276.2px] max-sm:w-[301px] max-sm:h-[209.9px]  "
      />
      <img
        src={patternSquigglyLineTop}
        alt="pattern-Squiggly-Line-Top "
        className="absolute top-[55.51px] right-[-18.01px] max-lg:w-[232px] max-sm:w-[112px] max-md:h-[108.2px] max-sm:h-[52.2px] max-lg:top-[88px] max-sm:top-[23.86px] max-lg:left-[calc(100% -232px )] max-sm:left-[calc(100%-112px)]"
      />
      <img
        src={patternCircle}
        alt="pattern-circle"
        className="absolute top-[-85px] left-[44px] max-lg:top-[-87px] max-lg:left-[-27px] max-sm:w-[107px] max-sm:h-[107px] max-sm:top-[-30px] max-sm:left-[-20px]"
      />
      <img
        src={patternCircle}
        alt="pattern-circle"
        className="absolute top-[534px] max-lg:top-[552px] left-[938px] max-lg:left-[669px] max-sm:w-[107px] max-sm:h-[107px] max-sm:top-[548px] max-sm:left-[calc(100%-63px)]"
      />
    </section>
  );
}

export default BackgroundParts;
