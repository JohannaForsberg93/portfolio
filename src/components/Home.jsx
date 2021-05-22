import React from 'react';
import stylesheet from '../styling/Home.module.css';

function Home() {
	return (
		<div className={stylesheet.container}>
			<div className={stylesheet.section}>
				<div className={stylesheet.content}>
					<h1>This is Home page</h1>
				</div>
			</div>
		</div>
	)
}

export default Home;