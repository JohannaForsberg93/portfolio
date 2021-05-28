import React from 'react';
import stylesheet from '../styling/Skills.module.css';

function Skills() {
	return (
		<div className={stylesheet.container}>
			<div className={stylesheet.section}>
				<h1>Skills</h1>
				<p>Tekniker och verktyg jag fått lära mig i skolan och ute på praktik</p>
				<div className={stylesheet.grid}>

					<div className={stylesheet.card}>JavaScript</div>
					<div className={stylesheet.card}>TypeScript</div>
					<div className={stylesheet.card}>HTML</div>
					<div className={stylesheet.card}>CSS</div>
					<div className={stylesheet.card}>Bootstrap</div>
					<div className={stylesheet.card}>SASS</div>
					<div className={stylesheet.card}>React</div>
					<div className={stylesheet.card}>Aurelia</div>
					<div className={stylesheet.card}>Vue</div>
					<div className={stylesheet.card}>Angular</div>
					<div className={stylesheet.card}>Figma</div>
					<div className={stylesheet.card}>Azure DevOps</div>
					<div className={stylesheet.card}>MongoDB</div>
					<div className={stylesheet.card}>Express</div>
					<div className={stylesheet.card}>Node</div>
					<div className={stylesheet.card}>Mongoose</div>
					<div className={stylesheet.card}>Git</div>

				</div>
			</div>
		</div>
	)
}

export default Skills;