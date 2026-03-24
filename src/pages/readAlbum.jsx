import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import myAlbums, { getAlbumBySlug } from "../content/albums";
import withBase from "../shared/utils/asset";

// import "./styles/notion.css"
import "./styles/readAlbum.css";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

const ReadAlbum = () => {
	const navigate = useNavigate();
	let { slug } = useParams();

	const album =
		getAlbumBySlug(slug) ??
		(Number.isInteger(Number(slug)) ? myAlbums[Number(slug) - 1] : null);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [album]);

	useEffect(() => {
		if (!album) {
			navigate("/albums");
		}
	}, [album, navigate]);

	if (!album) {
		return null;
	}


	return (
		<React.Fragment>
			<Helmet>
				<title>{`${album().title} | ${INFO.main.title}`}</title>
				<meta name="description" content={album().description} />
				<meta name="keywords" content={album().keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar active="albums" />

				<div className="content-wrapper">
					<div className="read-album-logo-container">
						<div className="read-album-logo">
							<Logo width={40} />
						</div>
					</div>

					<div className="read-album-container">
						<div className="read-album-back">
							<img
								src={withBase("back-button.webp")}
								alt="back"
								className="read-album-back-button"
								onClick={() => navigate(`/albums`)}
							/>
						</div>

						<div className="read-album-wrapper">
							<div className="read-album-date-container">
								<div className="read-album-date">
									{album().date}
								</div>
							</div>

							<div className="title read-album-title">
								{album().title}
							</div>

							<div className="subtitle read-album-subtitle">
								{album().description}
							</div>

							<div className="read-album-body">
								<RowsPhotoAlbum photos={album().photos} />
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

export default ReadAlbum;
