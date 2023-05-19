// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { Routes } from "react-router-dom";
// import "./App.css";
import List from "./components/list/List";
import { Route } from "react-router-dom";
import Homepage from "./components/Homepage";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <>
      <Homepage />
      {/* <Routes>
        <Route path="/Homepage" element={Homepage} />
      </Routes> */}
    </>
  );
}

export default App;
