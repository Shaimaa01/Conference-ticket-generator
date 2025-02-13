import patternLines from "/assets/images/pattern-lines.svg";
import patternSquigglyLineBottomDesktop from "/assets/images/pattern-squiggly-line-bottom-desktop.svg";
import patternSquigglyLineTop from "/assets/images/pattern-squiggly-line-top.svg";
import patternCircle from "/assets/images/pattern-circle.svg";
function BackgroundParts() {
  return (
    <>
      <img src={patternLines} alt="pattern-Lines" className="absolute top-0 " />
      <img
        src={patternSquigglyLineBottomDesktop}
        alt="pattern-Squiggly-Line-Bottom-Desktop"
        className="absolute bottom-0"
      />
      <img
        src={patternSquigglyLineTop}
        alt="pattern-Squiggly-Line-Top "
        className="absolute top-[55.51px] right-[-18.01px]"
      />
      <img
        src={patternCircle}
        alt="pattern-circle"
        className="absolute top-[-85px] left-[44px]"
      />
      <img
        src={patternCircle}
        alt="pattern-circle"
        className="absolute top-[534px] left-[938px]"
      />
    </>
  );
}

export default BackgroundParts;
