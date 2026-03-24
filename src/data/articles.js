import computerAssembly from "./myArticles/computerAssembly.jsx";
import ASML from "./myArticles/asml.jsx";
import HCISPaper from "./myArticles/hcispaper.jsx";

const articleEntries = [
	{ slug: "computer-assembly", source: computerAssembly },
	{ slug: "asml-intern-journey", source: ASML },
	{ slug: "hcis-paper-and-research", source: HCISPaper },
];

const myArticles = articleEntries.map((entry) => () => ({
	...entry.source(),
	slug: entry.slug,
}));

export const getArticleBySlug = (slug) =>
	myArticles.find((article) => article().slug === slug);

export default myArticles;
