import React from 'react';
import stylesheet from '../styling/Home.module.css';
import portrait from '../styling/hej.jpg';


function Home() {
	return (
		<div className={stylesheet.container}>
			<div className={stylesheet.flex}>
				<h1>JOHANNA FORSBERG</h1>
				<p>Nybakad frontendutvecklare</p>
			</div>
		</div>
	)
}

export default Home;