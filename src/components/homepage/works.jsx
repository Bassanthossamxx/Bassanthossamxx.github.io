import React from "react";
import { faBriefcase, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../common/card";
import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Experience"
				body={
					<div className="works-body">
						<div className="work">
							<div className="work-title">
								<FontAwesomeIcon icon={faStar} className="star-icon" /> Front-End Developer Intern - Fotopia
							</div>
							<div className="work-subtitle">
								Worked on the Nuxeo project as a UI developer and Annotation tool using React.js.
							</div>
							<div className="work-duration">Jul 1, 2024 to Sep 10, 2024</div>
						</div>

						<div className="work">
							<div className="work-title">
								<FontAwesomeIcon icon={faStar} className="star-icon" /> Twitter
							</div>
							<div className="work-subtitle">Software Engineer</div>
							<div className="work-duration">2019 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;