import { React, useContext, useState } from "react";
import capricorn from "../../assets/zodiacSigns/Capricorn.png";
import { apiContext } from "../../contexts/ApiContext";
import Navbar from "../../Navbar";
import {motion} from 'framer-motion';

const Capricorn = () => {
	const { capricornSign, capricornTomorrow } = useContext(apiContext);

	const [active, setActive] = useState(false);

	const showMenu = () => {
		setActive(!active);
	};

	return (
		<>
			<Navbar />
			<motion.div 
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			exit={{opacity: 0}}
			className="grid md:grid-cols-2 grid-cols-1 justify-items-center bg-zinc-50  md:h-screen h-full w-full content-center  ">
				<h1 className="text-center font-anton uppercase text-7xl md:hidden pb-10">
					capricorn
				</h1>
				<img
					src={capricorn}
					alt="/"
					className="md:pl-10 object-contain w-5/6 h-5/6"
				/>
				<div className="text-sm text-justify pl-10 pr-10">
					<h1 className="text-center font-anton uppercase md:text-8xl text-6xl hidden md:block text-amber-500">
						capricorn
					</h1>
					<span className="font-anton">Current Date:</span>{" "}
					{capricornSign.current_date} <br />
					<span className="font-anton">Compatibility:</span>{" "}
					{capricornSign.compatibility} <br />
					<span className="font-anton">Lucky Number:</span>{" "}
					{capricornSign.lucky_number} <br />
					<span className="font-anton">Lucky Time:</span>{" "}
					{capricornSign.lucky_time} <br />
					<span className="font-anton">Color:</span>{" "}
					{capricornSign.color} <br />
					<span className="font-anton">Date Range:</span>{" "}
					{capricornSign.date_range} <br />
					<span className="font-anton">Mood:</span>{" "}
					{capricornSign.mood} <br />
					<span className="font-anton">Description:</span>{" "}
					{capricornSign.description} <br />
					<div className="pt-10 flex flex-col justify-center">
						<p className="uppercase font-anton pb-2 text-center text-2xl">
							click the button to show tomorrows horosocpe
						</p>
						<button
							onClick={showMenu}
							className="border-2 border-black p-3 text-black rounded-full w-full"
						>
							Tomorrow
						</button>
					</div>
					<div className={active ? "visible p-5" : "hidden"}>
						<span className="font-anton">
							Tomorrow's Date:
						</span>{" "}
						{capricornTomorrow.current_date} <br />
						<span className="font-anton">
							Compatibility:
						</span>{" "}
						{capricornTomorrow.compatibility} <br />
						<span className="font-anton">
							Lucky Number:
						</span>{" "}
						{capricornTomorrow.lucky_number} <br />
						<span className="font-anton">
							Lucky Time:
						</span>{" "}
						{capricornTomorrow.lucky_time} <br />
						<span className="font-anton">Color:</span>{" "}
						{capricornTomorrow.color} <br />
						<span className="font-anton">
							Date Range:
						</span>{" "}
						{capricornTomorrow.date_range} <br />
						<span className="font-anton">Mood:</span>{" "}
						{capricornTomorrow.mood} <br />
						<span className="font-anton">
							Description:
						</span>{" "}
						{capricornTomorrow.description} <br />
					</div>
				</div>
			</motion.div>
		</>
	);
};

export default Capricorn;
