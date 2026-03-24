import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";

test("renders main navigation links", () => {
	render(
		<HelmetProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</HelmetProvider>
	);
	expect(screen.getByText(/Projects/i)).toBeInTheDocument();
});
