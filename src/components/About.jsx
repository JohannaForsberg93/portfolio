import React from 'react';
import stylesheet from '../styling/About.module.css';
import portrait from '../styling/foto.jpg';
import cats from '../styling/cats.jpg';
// import test from '../styling/linkedin.svg';

function About() {
	return (
		<div className={stylesheet.container}>

			<div className={stylesheet.section}>
				<div className={stylesheet.flex} >
					<h1>Vem är jag?</h1>
				</div>

				<div className={stylesheet.grid}>
					<div>
						<p>Jag heter Johanna och är 27 år gammal och bor i Floda. Jag har precis utbildat mig till frontendutvecklare på EC Utbildning i Göteborg där jag gick en 2-årig YH-utbildning. Jag tog examen den 18 maj i år och söker nu efter mitt första jobb som frontendutvecklare. <br></br><br></br> Förutom att koda så tycker jag om att baka och mysa med mina två katter Tessan och Lilo.</p>
					</div>


					<div className={stylesheet.flipCard}>
						<div className={stylesheet.flipCardInner}>

							<div className={stylesheet.flipCardFront}>
								<img src={portrait} alt={"Profilbild"} width="500" height="400" />
							</div>

							<div className={stylesheet.flipCardBack}>
								<img src={cats} alt={"Katter"} width="350" height="500" />
							</div>

						</div>

					</div>

					{/* <div className={stylesheet.grid2}>
						<img src={cats} alt={"Katter"} width="500" height="700" />
					</div>
					<div className={stylesheet.grid2}>
						<img src={portrait} alt={"Profilbild"} width="550" height="500" />
					</div> */}
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