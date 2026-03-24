import SEO from "../data/seo";

export const DEFAULT_SEO = {
	description: "",
	keywords: [],
};

export const getSeoForPage = (page) =>
	SEO.find((item) => item.page === page) ?? DEFAULT_SEO;
