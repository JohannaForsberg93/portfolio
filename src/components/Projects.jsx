import React from 'react';
import stylesheet from '../styling/Projects.module.css'

function Projects() {
	return (
		<div className={stylesheet.container}>
			<div className={stylesheet.section}>
				<div className={stylesheet.flex}>
					<h1>Mina projekt från skolan</h1>
				</div>
				<div className={stylesheet.grid}>
					<div className={stylesheet.card}>
						<h5>Code snippets</h5>
						<p>Testing testing</p>
					</div>
					<div className={stylesheet.card}>
						<h5>Saloon</h5>
						<p>Testing testing</p>
					</div>
					<div className={stylesheet.card}>
						<h5>Bakbloggen</h5>
						<p>Testing testing</p>
					</div>
					<div className={stylesheet.card}>
						<h5>Star Wars</h5>
						<p>Testing testing</p>
					</div>
					<div className={stylesheet.card}>
						<h5>I love movies</h5>
						<p>Testing testing</p>
					</div>
					<div className={stylesheet.card}>
						<h5>La coffee</h5>
						<p>Testing testing</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Projects;