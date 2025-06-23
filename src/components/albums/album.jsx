import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./style/album.css";

const Album = (props) => {
	const { date, title, description, link } = props;

	return (
		<React.Fragment>
			<div className="album">
				<div className="album-left-side">
					<div className="album-date">{date}</div>
				</div>

				<Link to={link}>
					<div className="album-right-side">
						<div className="album-title">{title}</div>
						<div className="album-description">{description}</div>
						<div className="album-link">
							Read Album{" "}
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={faChevronRight}
							/>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Album;
