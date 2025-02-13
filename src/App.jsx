import "./App.css";
import backgroundDesktop from "/assets/images/background-desktop.png";
import BackgroundParts from "./components/BackgroundParts";
import Logo from "./components/Logo";
import Text from "./components/Text";
import Form from "./components/Form";

function App() {
  return (
    <>
      <main
        style={{ backgroundImage: `url(${backgroundDesktop})` }}
        className="relative overflow-hidden w-full h-[1100px] bg-cover "
      >
        <BackgroundParts />
        <Logo />
        <Text />
        <Form/>
      </main>
    </>
  );
}

export default App;
