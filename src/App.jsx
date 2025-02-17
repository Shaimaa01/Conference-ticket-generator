import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import backgroundDesktop from "/assets/images/background-desktop.png";
import backgroundMobile from "/public/assets/images/background-mobile.png";
import backgroundTablet from "/public/assets/images/background-tablet.png";
import BackgroundParts from "./components/BackgroundParts";
import Logo from "./components/Logo";
import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import TicketPage from "./pages/TicketPage";

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
    <Router>
      <main
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className="relative overflow-hidden w-full lg:h-[1100px] bg-cover max-lg:h-[1080px] max-sm:h-[995px] "
      >
        <BackgroundParts />
        <Logo />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ticket" element={<TicketPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
