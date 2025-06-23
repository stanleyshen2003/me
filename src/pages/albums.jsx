import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Album from "../components/albums/album";

import INFO from "../data/user";
import SEO from "../data/seo";
import myAlbums from "../data/albums";

import "./styles/albums.css";

const Albums = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "albums");


	return (
		<React.Fragment>
			<Helmet>
				<title>{`Albums | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="albums" />
				<div className="content-wrapper">
					<div className="albums-logo-container">
						<div className="albums-logo">
							<Logo width={40} />
						</div>
					</div>

					<div className="albums-main-container">
						<div className="title albums-title">
							{INFO.albums.title}
						</div>

						<div className="subtitle albums-subtitle">
							{INFO.albums.description}
						</div>

						<div className="albums-container">
							<div className="albums-wrapper">
								{myAlbums
									.map((album, index) => (
										<div
											className="albums-album"
											key={(index + 1).toString()}
										>
											<Album
												title={album().title}
												description={album().description}
												link={"/album/" + (index + 1)}
												representativeImage={album().representative}
											/>
										</div>
									))
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

export default Albums;
