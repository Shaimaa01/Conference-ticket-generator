import "./App.css";
import backgroundDesktop from "/assets/images/background-desktop.png";
import backgroundMobile from "/public/assets/images/background-mobile.png";
import backgroundTablet from "/public/assets/images/background-tablet.png";
import BackgroundParts from "./components/BackgroundParts";
import Logo from "./components/Logo";
import Text from "./components/Text";
import FormContainer from "./components/FormContainer";
import { useState, useEffect } from "react";

function App() {
 const [backgroundImage, setBackGroundImage] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setBackGroundImage(backgroundDesktop);
      } else if (window.innerWidth >= 640) {
        setBackGroundImage(backgroundTablet);
      } else {
        setBackGroundImage(backgroundMobile);
      }
    };

    handleResize(); // Set initial background image
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <main
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className="relative overflow-hidden w-full lg:h-[1100px] bg-cover max-lg:h-[1080px] max-sm:h-[995px] "
      >
        <BackgroundParts />
        <Logo />
        <Text />
        <FormContainer />
      </main>
    </>
  );
}

export default App;
