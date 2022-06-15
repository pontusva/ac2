import { useContext, useState } from "react";
import { apiContext } from "../../contexts/ApiContext";
import Navbar from "../../Navbar";
import scorpius from "../../assets/zodiacSigns/Scorpius.png";
import {motion} from 'framer-motion';

const Scorpio = () => {
	const { scorpio, scorpioTomorrow } = useContext(apiContext);

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
				<h1 className="text-center font-anton uppercase text-7xl md:hidden pb-10">
					scorpio
				</h1>
				<img
					src={scorpius}
					alt="/"
					className="md:pl-10 h-5/6 w-5/6"
				/>
				<div className="text-sm text-justify pl-10 pr-10">
					<h1 className="text-center font-anton uppercase text-8xl hidden md:block text-amber-500">
						scorpio
					</h1>
					<span className="font-anton">Current Date:</span>{" "}
					{scorpio.current_date} <br />
					<span className="font-anton">Compatibility:</span>{" "}
					{scorpio.compatibility} <br />
					<span className="font-anton">Lucky Number:</span>{" "}
					{scorpio.lucky_number} <br />
					<span className="font-anton">Lucky Time:</span>{" "}
					{scorpio.lucky_time} <br />
					<span className="font-anton">Color:</span>{" "}
					{scorpio.color} <br />
					<span className="font-anton">Date Range:</span>{" "}
					{scorpio.date_range} <br />
					<span className="font-anton">Mood:</span>{" "}
					{scorpio.mood} <br />
					<span className="font-anton">Description:</span>{" "}
					{scorpio.description} <br />
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
						{scorpioTomorrow.current_date} <br />
						<span className="font-anton">
							Compatibility:
						</span>{" "}
						{scorpioTomorrow.compatibility} <br />
						<span className="font-anton">
							Lucky Number:
						</span>{" "}
						{scorpioTomorrow.lucky_number} <br />
						<span className="font-anton">
							Lucky Time:
						</span>{" "}
						{scorpioTomorrow.lucky_time} <br />
						<span className="font-anton">Color:</span>{" "}
						{scorpioTomorrow.color} <br />
						<span className="font-anton">
							Date Range:
						</span>{" "}
						{scorpioTomorrow.date_range} <br />
						<span className="font-anton">Mood:</span>{" "}
						{scorpioTomorrow.mood} <br />
						<span className="font-anton">
							Description:
						</span>{" "}
						{scorpioTomorrow.description} <br />
					</div>
				</div>
			</motion.div>
		</>
	);
};

export default Scorpio;
