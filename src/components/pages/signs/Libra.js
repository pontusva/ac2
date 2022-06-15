import { useContext, useState } from "react";
import { apiContext } from "../../contexts/ApiContext";
import Navbar from "../../Navbar";
import libraPic from "../../assets/zodiacSigns/Libra.png";
import {motion} from 'framer-motion';

const Libra = () => {
	const { libra, libraTomorrow } = useContext(apiContext);

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
			className="grid md:grid-cols-2 grid-cols-1 justify-items-center bg-zinc-50  md:h-screen h-full w-full content-center">
				<h1 className="text-center font-anton uppercase text-8xl md:hidden pb-10">
					libra
				</h1>
				<img
					src={libraPic}
					alt="/"
					className="md:pl-10 md:w-fit md:h-fit h-5/6 w-5/6 object-contain"
				/>
				<div className="text-sm text-justify pl-10 pr-10">
					<h1 className="text-center font-anton uppercase text-8xl hidden md:block text-amber-500">
						libra
					</h1>
					<span className="font-anton">Current Date:</span>{" "}
					{libra.current_date} <br />
					<span className="font-anton">Compatibility:</span>{" "}
					{libra.compatibility} <br />
					<span className="font-anton">Lucky Number:</span>{" "}
					{libra.lucky_number} <br />
					<span className="font-anton">Lucky Time:</span>{" "}
					{libra.lucky_time} <br />
					<span className="font-anton">Color:</span>{" "}
					{libra.color} <br />
					<span className="font-anton">Date Range:</span>{" "}
					{libra.date_range} <br />
					<span className="font-anton">Mood:</span> {libra.mood}{" "}
					<br />
					<span className="font-anton">Description:</span>{" "}
					{libra.description} <br />
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
						{libraTomorrow.current_date} <br />
						<span className="font-anton">
							Compatibility:
						</span>{" "}
						{libraTomorrow.compatibility} <br />
						<span className="font-anton">
							Lucky Number:
						</span>{" "}
						{libraTomorrow.lucky_number} <br />
						<span className="font-anton">
							Lucky Time:
						</span>{" "}
						{libraTomorrow.lucky_time} <br />
						<span className="font-anton">Color:</span>{" "}
						{libraTomorrow.color} <br />
						<span className="font-anton">
							Date Range:
						</span>{" "}
						{libraTomorrow.date_range} <br />
						<span className="font-anton">Mood:</span>{" "}
						{libraTomorrow.mood} <br />
						<span className="font-anton">
							Description:
						</span>{" "}
						{libraTomorrow.description} <br />
					</div>
				</div>
			</motion.div>
		</>
	);
};

export default Libra;
