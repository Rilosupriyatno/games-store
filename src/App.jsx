// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { Carousel } from "flowbite-react";
import "./App.css";
import List from "./components/list/List";

function App() {
	// const [count, setCount] = useState(0);

	return (
		<>
			<div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
				<Carousel slide={true}>
					<img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
					<img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
					<img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
					<img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
					<img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
				</Carousel>
			</div>
			<List />
		</>
	);
}

export default App;
