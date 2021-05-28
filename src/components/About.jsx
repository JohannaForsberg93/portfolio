import React from 'react';
import stylesheet from '../styling/About.module.css';
// import test from '../styling/linkedin.svg';

function About() {
	return (
		<div className={stylesheet.container}>

			<div className={stylesheet.section}>
				<h1>VEM ÄR JAG?</h1>
				<div className={stylesheet.content}>
					<div className={stylesheet.grid1}>
						<p>Mitt namn är Johanna och jag har precis gått en 2-årig utbildning inom frontend på EC Utbildning i Göteborg. I utbildningen ingick en 24 veckors lång LIA där jag fick vara ute på arbetsplats och skaffa mig värdefull kunskap och erfarenhet från arbetslivet. Jag tog min examen den 18:e maj 2021 och är nu redo för jobb. <br></br><br />

						Just nu söker jag mitt första jobb som frontendutvecklare samtidigt som jag arbetar på min portfolio. Jag jobbar även i kassan på ICA sen 5 år tillbaka men söker aktivt efter andra jobb.  <br></br><br />

						Förutom att koda och vara kreativ så gillar jag att baka och mysa med mina två katter Tessan och Lilo.
						</p>
					</div>

					<div className={stylesheet.grid2}>
						<img src="https://cdn.shopify.com/s/files/1/0148/6268/0118/products/marmeladkulor_2048x.jpg?v=1617300005" alt="gooodis" width="500" height="500" />
					</div>
				</div>
				{/* <h3>Vill du veta mer om mig? Hör av dig till mig!</h3>
				<div className={stylesheet.contact}>

					<a href="https://www.linkedin.com/in/johanna-forsberg-3261591a3/" target="_blank" rel="noopener noreferrer">
						<img src={test} alt="linkedIn logga" />
					</a>
					<p>johanna_forsberg@outlook.com</p>
				</div> */}
			</div>
		</div>
	)
}

export default About;