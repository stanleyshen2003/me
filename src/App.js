import React from "react";
import AppRouter from "./app/router/AppRouter";
import "./app.css";

function App() {
	return React.createElement(
		"div",
		{ className: "App" },
		React.createElement(AppRouter)
	);
}

export default App;
