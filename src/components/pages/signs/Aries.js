import { React, useContext, useState } from "react";
import { apiContext } from "../../contexts/ApiContext";
import Navbar from "../../Navbar";
import ariespic from "../../assets/zodiacSigns/Aries.png";

const Aries = () => {
	const { aries, ariesTomorrow } = useContext(apiContext);

	const [active, setActive] = useState(false);

	const showMenu = () => {
		setActive(!active);
	};

	return (
		<>
			<nav>
				<Navbar />
			</nav>
			<section>
				<div className="grid md:grid-cols-2 grid-cols-1 justify-items-center bg-zinc-50  md:h-screen h-full w-full content-center">
					<h1 className="text-center font-anton uppercase text-8xl md:hidden  pb-10">
						aries
					</h1>
					<img
						src={ariespic}
						alt="/"
						className="md:pl-10 w-5/6 h-5/6 object-contain"
					/>
					<div className="text-sm  text-justify pl-10 pr-10">
						<h1 className="text-center font-anton uppercase text-8xl hidden md:block text-amber-500">
							aries
						</h1>
						<span className="font-anton">Current Date:</span>{" "}
						{aries.current_date} <br />
						<span className="font-anton">
							Compatibility:
						</span>{" "}
						{aries.compatibility} <br />
						<span className="font-anton">
							Lucky Number:
						</span>{" "}
						{aries.lucky_number} <br />
						<span className="font-anton">
							Lucky Time:
						</span>{" "}
						{aries.lucky_time} <br />
						<span className="font-anton">Color:</span>{" "}
						{aries.color} <br />
						<span className="font-anton">
							Date Range:
						</span>{" "}
						{aries.date_range} <br />
						<span className="font-anton">Mood:</span>{" "}
						{aries.mood} <br />
						<span className="font-anton">
							Description:
						</span>{" "}
						{aries.description} <br />
						<div className="pt-10 flex flex-col justify-center">
							<p className="uppercase font-anton pb-2 text-center text-2xl">
								click the button to show tomorrows
								horosocpe
							</p>
							<button
								onClick={showMenu}
								className="border-2 border-black p-3 text-black rounded-full w-full"
							>
								Tomorrow
							</button>
						</div>
						<div
							className={active ? "visible p-5" : "hidden"}
						>
							<span className="font-anton">
								Tomorrow's Date:
							</span>{" "}
							{ariesTomorrow.current_date} <br />
							<span className="font-anton">
								Compatibility:
							</span>{" "}
							{ariesTomorrow.compatibility} <br />
							<span className="font-anton">
								Lucky Number:
							</span>{" "}
							{ariesTomorrow.lucky_number} <br />
							<span className="font-anton">
								Lucky Time:
							</span>{" "}
							{ariesTomorrow.lucky_time} <br />
							<span className="font-anton">
								Color:
							</span>{" "}
							{ariesTomorrow.color} <br />
							<span className="font-anton">
								Date Range:
							</span>{" "}
							{ariesTomorrow.date_range} <br />
							<span className="font-anton">
								Mood:
							</span>{" "}
							{ariesTomorrow.mood} <br />
							<span className="font-anton">
								Description:
							</span>{" "}
							{ariesTomorrow.description} <br />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Aries;
