import React from "react";

function Hero() {
	return (
		<section className="hero_section" id="hero">
			<div className="container hero">
				<div className="hero-image">
					<img
						src="../assets/atanda remilekun.webp"
						alt="atanda remilekun"
						loading="eager"
						width={"100%"}
						height={"100%"}
						// className="w-full h-full"
					/>
				</div>

				<div className="hero-text">
					<h1>
						Nice to meet you!
						<br />
						I'm {""}
						<span className="name">Remilekun.</span>
					</h1>

					<p>
						A front-end engineer passionate about building acessible,
						responsive and aesthetically pleasing web apps / web sites
						that users love.
					</p>

					<a href="#contact" className="contact">
						Contact Me
					</a>
				</div>
			</div>
		</section>
	);
}

export default Hero;
