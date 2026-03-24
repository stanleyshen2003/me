import React, { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ReactGA from "react-ga4";

import { TRACKING_ID } from "../../data/tracking";

const Homepage = lazy(() => import("../../pages/homepage"));
const About = lazy(() => import("../../pages/about"));
const Projects = lazy(() => import("../../pages/projects"));
const Articles = lazy(() => import("../../pages/articles"));
const ReadArticle = lazy(() => import("../../pages/readArticle"));
const Albums = lazy(() => import("../../pages/albums"));
const ReadAlbum = lazy(() => import("../../pages/readAlbum"));
const NotFound = lazy(() => import("../../pages/404"));

const AppRouter = () => {
	useEffect(() => {
		if (TRACKING_ID) {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<Suspense fallback={<div />}>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/articles" element={<Articles />} />
				<Route path="/article/:slug" element={<ReadArticle />} />
				<Route path="/albums" element={<Albums />} />
				<Route path="/album/:slug" element={<ReadAlbum />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Suspense>
	);
};

export default AppRouter;
