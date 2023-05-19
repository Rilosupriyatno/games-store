import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import List from "./components/list/List";
import Detail from "./components/detail/Detail";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/detail/:id",
		element: <Detail />,
	},
]);
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
