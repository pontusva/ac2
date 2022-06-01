import React from "react";
import Navbar from "../Navbar";
import bear from "../assets/bear.png";

const About = () => {
	return (
		<>
			<nav>
				<Navbar />
			</nav>
			<section className="h-screen bg-zinc-50">
				<div className="bg-zinc-50 flex md:flex-row flex-col md:w-full w-full justify-center text-justify md:space-x-36 pt-36">
					<div className="md:w-96 h-96 w-full text-sm lg:text-sm md:px-3 p-5 bg-zinc-50 font-roboto">
						<h1 className="font-anton text-xl text-center">
							The About Page at Astrological
							Calling
						</h1>
						<br />
						<p className="leading-6">
							This is a project I have been working on to
							show some of my web-dev abilities. I am a
							passionate programmer that also is very into
							astrology. I am also in need of some help to
							make this website even better. So if you want
							and have some knowledge we could help each
							other out. We need information about the
							Zodiac Signs. If you know, or know anybody
							that knows about the signs please contact me
							at{" "}
							<span className="font-bold">
								pontusabrahamsson92@gmail.com
							</span>
							, Name your Email "Astrological Calling" and
							I will get back to you asap. If you are
							interested in working with me, Please use the
							same Email and Naming on the email!
						</p>
					</div>
					<div className="bg-zinc-50">
						<img
							src={bear}
							alt="/"
							className="object-contain md:w-80 w-full h-80"
						/>
					</div>
				</div>
				<div className="md:pt-0 pt-5 bg-zinc-50 text-center font-roboto">
					<h2>Special Thanks To</h2>
					<br />
					<div className="flex flex-col ">
						<p>
							<a
								className="font-anton underline"
								href="https://pixabay.com/sv/users/openclipart-vectors-30363/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=160494"
							>
								OpenClipart-Vectors
							</a>{" "}
							from{" "}
							<a
								className="font-anton underline"
								href="https://pixabay.com/sv/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=160494"
							>
								Pixabay
							</a>
						</p>
						<p>
							<a
								className="font-anton underline"
								href="https://pixabay.com/sv/users/davidrockdesign-2595351/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1468009"
							>
								DavidRockDesign
							</a>{" "}
							from{" "}
							<a
								className="font-anton underline"
								href="https://pixabay.com/sv/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1468009"
							>
								Pixabay
							</a>
						</p>
						<p>
							<a
								className="font-anton underline"
								href="https://pixabay.com/sv/users/teacherbingo-18391860/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6834518"
							>
								Harald Eicher
							</a>{" "}
							from{" "}
							<a
								className="font-anton underline"
								href="https://pixabay.com/sv/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6834518"
							>
								Pixabay
							</a>
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
