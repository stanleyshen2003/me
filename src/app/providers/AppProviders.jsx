import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

const AppProviders = ({ children }) => {
	return (
		<React.StrictMode>
			<HelmetProvider>
				<BrowserRouter basename={import.meta.env.BASE_URL}>
					{children}
				</BrowserRouter>
			</HelmetProvider>
		</React.StrictMode>
	);
};

export default AppProviders;
