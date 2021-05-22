import React from 'react';
import stylesheet from '../styling/About.module.css'

function About() {
	return (
		<div className={stylesheet.container}>
			<div className={stylesheet.section}>
				<div className={stylesheet.content}>
					<h1>This is About page</h1>
				</div>
			</div>
		</div>
	)
}

export default About;