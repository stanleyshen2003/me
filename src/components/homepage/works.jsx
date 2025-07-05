import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src={`${process.env.PUBLIC_URL}/asml.webp`}
								alt="asml"
								className="work-image"
							/>
							<div className="work-title">ASML</div>
							<div className="work-subtitle">
								Software Engineer Intern
							</div>
							<div className="work-duration">2025 Jan. - 2025 Jul.</div>
						</div>
						
						<div className="work">
							<img
								src={`${process.env.PUBLIC_URL}/cloudmile.webp`}
								alt="cloudmile"
								className="work-image"
							/>
							<div className="work-title">CloudMile</div>
							<div className="work-subtitle">
								Techinical Account Manager Intern
							</div>
							<div className="work-duration">2024 Jul. - 2024 Dec.</div>
						</div>

					</div>
				}
			/>
		</div>
	);
};

export default Works;
