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
								<FontAwesomeIcon icon={faStar} className="star-icon" /> Co-founding Engineer Backend developer - ByteHive.
							</div>
							<div className="work-subtitle">
							small start-up software company , Working as back-end developer using Python
							</div>
							<div className="work-duration">Dec 1, 2024  - Current</div>
						</div>
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
								<FontAwesomeIcon icon={faStar} className="star-icon" />Co-lead Backend Department - GDG BNU
							</div>
							<div className="work-subtitle">
							Co-leading backend development, mentoring teams, and building scalable solutions with Python.
							</div>
							<div className="work-duration">Sep 1, 2024  to Current </div>
						</div>
						<div className="work">
							<div className="work-title">
								<FontAwesomeIcon icon={faStar} className="star-icon" />Head of Mentors & Instructors - ICPC BNU
							</div>
							<div className="work-subtitle">
							Mentored peers and led training sessions.
							</div>
							<div className="work-duration">May 1, 2023  to Nov 15, 2024 </div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;