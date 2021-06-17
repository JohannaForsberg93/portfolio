import React from 'react';
import stylesheet from '../styling/Projects.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faUserFriends } from '@fortawesome/free-solid-svg-icons';


function Projects() {
	return (
		<div className={stylesheet.container}>
			<div className={stylesheet.section}>
				<div className={stylesheet.flex}>
					<h1>Skolarbeten</h1>
				</div>
				<div className={stylesheet.grid}>

					<a href="https://johannaforsberg93.github.io/starwars/" target="_blank" rel="noreferrer" rel="noopener">
						<div className={stylesheet.card}>
							<h5>Star Wars</h5>
							<span>React</span><span>JavaScript</span>
							<p>En SPA-app där man kan söka på Star Wars-karaktärer. Syftet var att öva på React och använda ett befintligt API.</p>
							<div className={stylesheet.icon}><FontAwesomeIcon icon={faArrowRight} /></div>
						</div>
					</a>

					<a href="https://imprex92.github.io/I-Love-Movies/" target="_blank" rel="noreferrer" rel="noopener">
						<div className={stylesheet.card}>
							<h5>I love movies</h5>
							<span>React</span><span>JavaScript</span>
							<div><FontAwesomeIcon icon={faUserFriends} /></div>
							<p> En SPA-app där man kan bläddra bland filmer och lägga till i en lista. Vi använde React som ramverk och ett befintligt API. Syftet med övningen var att träna på att jobba agilt från planering till färdig produkt.</p>
							<div className={stylesheet.icon}><FontAwesomeIcon icon={faArrowRight} /></div>
						</div>
					</a>



					<a href="https://johannaforsberg93.github.io/code-snippets/" target="_blank" rel="noreferrer" rel="noopener">
						<div className={stylesheet.card}>
							<h5>Code snippets</h5>
							<span>Vue</span><span>JavaScript</span>
							<p>En app där användaren kan lägga upp små code snippets via ett befintligt API. Syftet med övningen var att öva på Vue och AJAX requests.</p>
							<div className={stylesheet.icon}><FontAwesomeIcon icon={faArrowRight} /></div>
						</div>
					</a>
					<a href="https://johannaforsberg93.github.io/Saloon/" target="_blank" rel="noreferrer" rel="noopener">
						<div className={stylesheet.card}>
							<h5>Saloon</h5>
							<span>Angular</span><span>TypeScript</span>
							<p>En app som simulerar en Saloon, en western-inspirerad bar. Syftet med övningen var att öva på Angular och TypeScript där det även skulle ingå en Service.</p>
							<div className={stylesheet.icon}><FontAwesomeIcon icon={faArrowRight} /></div>
						</div>
					</a>
					<a href="https://johannaforsberg93.github.io/bakbloggen/" target="_blank" rel="noreferrer" rel="noopener">
						<div className={stylesheet.card}>
							<h5>Bakbloggen</h5>
							<span>Angular</span><span>TypeScript</span>
							<div><FontAwesomeIcon icon={faUserFriends} /></div>
							<p>En blogg-inspirerad sida där man kan lägga till egna recept. Syftet var att öva på Angular där vi skulle använda Form validation, Service, Routing och Observable.</p>
							<div className={stylesheet.icon}><FontAwesomeIcon icon={faArrowRight} /></div>
						</div>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Projects;