import { useContext, useState } from "react";
import { apiContext } from "../../contexts/ApiContext";
import Navbar from "../../Navbar";
import piscesPic from "../../assets/zodiacSigns/Pisces.png";
import {motion} from 'framer-motion';

const Pisces = () => {
	// get the data from the App component sent via the context api..
	const { pisces, piscesTomorrow } = useContext(apiContext);

	// state for the mobile menu..
	const [active, setActive] = useState(false);

	// updates the state on the mobile menu..
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
					pisces
				</h1>
				<img
					src={piscesPic}
					alt="/"
					className="md:pl-10 h-5/6 w-5/6 object-contain"
				/>
				<div className="text-sm text-justify pl-10 pr-10">
					<h1 className="text-center font-anton uppercase text-8xl hidden md:block text-amber-500">
						pisces
					</h1>
					<span className="font-anton">Current Date:</span>{" "}
					{pisces.current_date} <br />
					<span className="font-anton">Compatibility:</span>{" "}
					{pisces.compatibility} <br />
					<span className="font-anton">Lucky Number:</span>{" "}
					{pisces.lucky_number} <br />
					<span className="font-anton">Lucky Time:</span>{" "}
					{pisces.lucky_time} <br />
					<span className="font-anton">Color:</span>{" "}
					{pisces.color} <br />
					<span className="font-anton">Date Range:</span>{" "}
					{pisces.date_range} <br />
					<span className="font-anton">Mood:</span> {pisces.mood}{" "}
					<br />
					<span className="font-anton">Description:</span>{" "}
					{pisces.description} <br />
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
						{piscesTomorrow.current_date} <br />
						<span className="font-anton">
							Compatibility:
						</span>{" "}
						{piscesTomorrow.compatibility} <br />
						<span className="font-anton">
							Lucky Number:
						</span>{" "}
						{piscesTomorrow.lucky_number} <br />
						<span className="font-anton">
							Lucky Time:
						</span>{" "}
						{piscesTomorrow.lucky_time} <br />
						<span className="font-anton">Color:</span>{" "}
						{piscesTomorrow.color} <br />
						<span className="font-anton">
							Date Range:
						</span>{" "}
						{piscesTomorrow.date_range} <br />
						<span className="font-anton">Mood:</span>{" "}
						{piscesTomorrow.mood} <br />
						<span className="font-anton">
							Description:
						</span>{" "}
						{piscesTomorrow.description} <br />
					</div>
				</div>
			</motion.div>
		</>
	);
};

export default Pisces;
