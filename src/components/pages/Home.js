import React from "react";
import Navbar from "../Navbar";
import bear from "../assets/bear.png";

const Home = () => {
	return (
		<>
			<nav>
				<Navbar />
			</nav>
			<section>
				<div className="bg-zinc-50 flex md:flex-row flex-col md:w-full w-full justify-center text-justify md:space-x-36 md:fixed md:h-full h-screen pt-36">
					<div className="bg-zinc-50">
						<img
							src={bear}
							alt="/"
							className="object-contain md:w-80 w-full h-80"
						/>
					</div>
					<div className="md:w-96 h-96 w-full text-sm lg:text-sm md:px-3 p-5 bg-zinc-50 font-roboto">
						<p>
							<span className='font-bold'>Welcome to Astrological Calling.</span>{" "}
							This site is all about curiosity and I am
							very glad to meet you. Here you can explore
							your horoscope and find information about the
							zodiac signs. The purpose of this website is
							to give you an insight to yours and other's
							zodiac signs, but also as a personal project
							for me to showcase to future employers. I
							really hope you enjoy your stay, and if you
							have any questions head over to the about
							page and you will find the information you
							need. To wrap things up, below is a quote by
							Marilyn Monroe I really like.
						</p>
						<br />
						<q className="">
							Imperfection is beauty, madness is genius and
							it's better to be absolutely ridiculous than
							absolutely boring.
						</q>
						<div className="w-full text-right">
							― Marilyn Monroe
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
