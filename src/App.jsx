// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import List from "./components/list/List";
import Navbar from "./components/navbar/Navbar";
import Foot from "./components/footer/foot";
import About from "./components/pages/about";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/" element={<List />}/>
        <Route path="/abt" element={<About />}/>
      </Routes>
    <Foot />
    </>
  );
}

export default App;
