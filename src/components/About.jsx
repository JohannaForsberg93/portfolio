import React from 'react';
import stylesheet from '../styling/About.module.css';
import portrait from '../styling/hej.jpg';
// import test from '../styling/linkedin.svg';

function About() {
	return (
		<div className={stylesheet.container}>

			<div className={stylesheet.section}>
				<div className={stylesheet.flex} >
					<h1>VEM ÄR JAG?</h1>
				</div>

				<div className={stylesheet.content}>
					<div className={stylesheet.grid1}>
						<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br /><br />

							Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

						{/* <p>Mitt namn är Johanna och jag har precis gått en 2-årig utbildning inom frontend på EC Utbildning i Göteborg. I utbildningen ingick en 24 veckors lång LIA där jag fick vara ute på arbetsplats och skaffa mig värdefull kunskap och erfarenhet från arbetslivet. Jag tog min examen den 18:e maj 2021 och är nu redo för jobb. <br></br><br />

						Just nu söker jag mitt första jobb som frontendutvecklare samtidigt som jag arbetar på min portfolio. Jag jobbar även i kassan på ICA sen 5 år tillbaka men söker aktivt efter andra jobb.  <br></br><br />

						Förutom att koda och vara kreativ så gillar jag att baka och mysa med mina två katter Tessan och Lilo.
						</p> */}
					</div>

					<div className={stylesheet.grid2}>
						<img src={portrait} alt={"Profile picture"} width="550" height="500" />
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