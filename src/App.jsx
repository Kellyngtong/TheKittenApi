import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CatFact from "./components/CatFact";
import CatImg from "./components/CatImg";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CatImg />
      <CatFact />
    </>
  );
}

export default App;
