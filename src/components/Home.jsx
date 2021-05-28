import React from 'react';
import stylesheet from '../styling/Home.module.css';

function Home() {
	return (
		<div className={stylesheet.container}>
			<div className={stylesheet.section}>
				<div className={stylesheet.content}>
					<h1>JOHANNA FORSBERG</h1>
					<p>Nybakad frontendutvecklare</p>
				</div>
			</div>
		</div>
	)
}

export default Home;