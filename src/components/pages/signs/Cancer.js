import { React, useContext, useState } from "react";
import cancer from "../../assets/zodiacSigns/Cancer.png";
import { apiContext } from "../../contexts/ApiContext";
import Navbar from "../../Navbar";
import {motion} from 'framer-motion';

const Cancer = () => {
	const { cancerSign, cancerTomorrow } = useContext(apiContext);

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
				<motion.div 
				initial={{opacity: 0}}
				animate={{opacity: 1}}
				exit={{opacity: 0}}
				className="grid md:grid-cols-2 grid-cols-1 justify-items-center bg-zinc-50  md:h-screen h-full w-full content-center ">
					<h1 className="text-center font-anton uppercase text-8xl md:hidden pb-10">
						cancer
					</h1>
					<img
						src={cancer}
						alt="/"
						className="md:pl-10 md:w-fit h-5/6 w-5/6 object-contain "
					/>
					<div className="text-sm text-justify pl-10 pr-10">
						<h1 className="text-center font-anton uppercase text-8xl hidden md:block text-amber-500">
							cancer
						</h1>
						<span className="font-anton">Current Date:</span>{" "}
						{cancerSign.current_date} <br />
						<span className="font-anton">
							Compatibility:
						</span>{" "}
						{cancerSign.compatibility} <br />
						<span className="font-anton">
							Lucky Number:
						</span>{" "}
						{cancerSign.lucky_number} <br />
						<span className="font-anton">
							Lucky Time:
						</span>{" "}
						{cancerSign.lucky_time} <br />
						<span className="font-anton">Color:</span>{" "}
						{cancerSign.color} <br />
						<span className="font-anton">
							Date Range:
						</span>{" "}
						{cancerSign.date_range} <br />
						<span className="font-anton">Mood:</span>{" "}
						{cancerSign.mood} <br />
						<span className="font-anton">
							Description:
						</span>{" "}
						{cancerSign.description} <br />
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
							{cancerTomorrow.current_date} <br />
							<span className="font-anton">
								Compatibility:
							</span>{" "}
							{cancerTomorrow.compatibility} <br />
							<span className="font-anton">
								Lucky Number:
							</span>{" "}
							{cancerTomorrow.lucky_number} <br />
							<span className="font-anton">
								Lucky Time:
							</span>{" "}
							{cancerTomorrow.lucky_time} <br />
							<span className="font-anton">
								Color:
							</span>{" "}
							{cancerTomorrow.color} <br />
							<span className="font-anton">
								Date Range:
							</span>{" "}
							{cancerTomorrow.date_range} <br />
							<span className="font-anton">
								Mood:
							</span>{" "}
							{cancerTomorrow.mood} <br />
							<span className="font-anton">
								Description:
							</span>{" "}
							{cancerTomorrow.description} <br />
						</div>
					</div>
				</motion.div>
			</section>
		</>
	);
};

export default Cancer;
