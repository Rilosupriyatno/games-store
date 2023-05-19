import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import About from "./components/pages/about";
import HomePage from "./components/Homepage";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/abt" element={<About />} />
			</Routes>
		</>
	);
}

export default App;
