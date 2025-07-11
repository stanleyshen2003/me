import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Article from "../components/articles/article";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/articles.css";

const Articles = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "articles");
	const [selectedCategory, setSelectedCategory] = useState("All");

	const categories = ["All", "Family", "School", "Work", "Others"];

	const categoryColors = {
		All: "#acddde",
		Family: "#caf1de",
		School: "#e1f8dc",
		Work: "#fef8dd",
		Others: "#ffe7c7",
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Articles | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="articles" />
				<div className="content-wrapper">
					<div className="articles-logo-container">
						<div className="articles-logo">
							<Logo width={40} />
						</div>
					</div>

					<div className="articles-main-container">
						<div className="title articles-title">
							{INFO.articles.title}
						</div>

						<div className="subtitle articles-subtitle">
							{INFO.articles.description}
						</div>

						<div class="category-row">
							{categories.map((category) => (
								<button
									key={category}
									style={ selectedCategory === category ? {} : {backgroundColor: categoryColors[category], border: `4px solid ${categoryColors[category]}` }}
									className={`category-button ${selectedCategory === category ? "selected" : ""}`}
									onClick={() => setSelectedCategory(category)}
								>
									{category}
								</button>
							))}
						</div>

						<div className="articles-container">
							<div className="articles-wrapper">
								{myArticles
									.filter((article) =>
										selectedCategory === "All" || article().type === selectedCategory
									)
									.reverse()
									.map((article, index) => {
        								// Calculate original index before reverse
										const originalIndex = myArticles.filter((art) =>
											selectedCategory === "All" || art().type === selectedCategory
										).length - index - 1;
										
										return (
											<div
												className="articles-article"
												key={(originalIndex + 1).toString()}
											>
												<Article
													date={article().date}
													title={article().title}
													description={article().description}
													link={"/article/" + (originalIndex + 1)}
												/>
											</div>
										);
									})
								}
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Articles;
