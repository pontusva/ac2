import React from "react";
import Navbar from "../Navbar";
import bear from "../assets/bear.png";

const About = () => {
	return (
		<>
			<nav>
				<Navbar />
			</nav>
			<section>
				<div className="bg-zinc-50 flex md:flex-row flex-col md:w-full w-screen justify-center text-justify md:space-x-36 md:fixed md:h-full h-screen pt-36">
					<div className="md:w-96 h-96 w-full text-sm lg:text-sm md:px-3 p-5 bg-zinc-50 font-roboto">
						<h1 className="font-anton text-xl text-center">
							Welcome To The About Page at Astrological Calling
						</h1>
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
				<div>
					<h2>Special Thanks To</h2>
					
				</div>
			</section>
		</>
	);
};

export default About;
