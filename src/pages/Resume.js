import React from 'react';
import '../style/Resume.css';
import resume from '../assets/luiz-resume.pdf';

export default function Resume() {
	return (
		<div className="resume">
			<div className="skill_set">
				<h2>Technical Proficiencies</h2>
				<div>
					<ul className ="list-container">
						<li className="skills-list">
							<abbr>MERN</abbr> Development
						</li>
						<li className="skills-list">
							Java / Java programming
						</li>
						<li className="skills-list">Project Planning & Development</li>
						<li className="skills-list">Full Stack Development</li>
						<li className="skills-list">UX/UI</li>
						<li className="skills-list">Clean Coding</li>
						<li className="skills-list">Agile / Scrum Development</li>
						<li className="skills-list">Testing & Troubleshooting</li>
						<li className="skills-list">Database Development</li>
						<li className="skills-list">Multi-threaded Programs</li>
						<li className="skills-list">Performance optimization</li>
						<li className="skills-list">Team Management and Collaboration</li>
					</ul>
				</div>
			</div>

			<div className="technologies_container">
				<h3>Skill Set</h3>
				<ul>
					<li className="technologies_li">
						<span className="technologies">FrontEnd:</span><span>  React, HTML, CSS, Graphql,{' '}
						<abbr title="Representational State Transfer">REST</abbr>, Fetch,
						JQuery</span> 
					</li>
					<li className="technologies_li">
						<span className="technologies">BackEnd: </span><span> Express, Node, Sequelize, Mongoose & Axios</span>
					</li>
					<li className="technologies_li">
						<span className="technologies"> Databases:</span><span> SQL, MySQL, MongoDB</span>
					</li>
					<li className="technologies_li">
						<span className="technologies">Tools:</span><span> GitHub, Git, VS Code, Eclipse, Insomnia, MongoDB Compass,</span>
					</li>
				</ul>
			</div>
			<div className="download_Link">
				<a className="download_aTag" href={resume} download>
					Download Resume
				</a>
			</div>
		</div>
	);
}