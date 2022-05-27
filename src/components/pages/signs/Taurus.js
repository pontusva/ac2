import { useContext, useState } from "react";
import { apiContext } from "../../contexts/ApiContext";
import Navbar from "../../Navbar";
import taurusPic from "../../assets/zodiacSigns/Taurus.png";

const Taurus = () => {
	const { taurus, taurusTomorrow } = useContext(apiContext);

	const [active, setActive] = useState(false);

	const showMenu = () => {
		setActive(!active);
	};

	return (
		<>
			<Navbar />
			<div className="grid md:grid-cols-2 grid-cols-1 justify-items-center bg-zinc-50  md:h-screen h-full w-full content-center">
				<h1 className="text-center font-anton uppercase text-8xl md:hidden pb-10">
					taurus
				</h1>
				<img
					src={taurusPic}
					alt="/"
					className="md:pl-10 w-4/6 h-4/6 object-contain"
				/>
				<div className="text-sm text-justify pl-10 pr-10">
					<h1 className="text-center font-anton uppercase text-8xl hidden md:block text-amber-500">
						taurus
					</h1>
					<span className="font-anton">Current Date:</span>{" "}
					{taurus.current_date} <br />
					<span className="font-anton">Compatibility:</span>{" "}
					{taurus.compatibility} <br />
					<span className="font-anton">Lucky Number:</span>{" "}
					{taurus.lucky_number} <br />
					<span className="font-anton">Lucky Time:</span>{" "}
					{taurus.lucky_time} <br />
					<span className="font-anton">Color:</span>{" "}
					{taurus.color} <br />
					<span className="font-anton">Date Range:</span>{" "}
					{taurus.date_range} <br />
					<span className="font-anton">Mood:</span> {taurus.mood}{" "}
					<br />
					<span className="font-anton">Description:</span>{" "}
					{taurus.description} <br />
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
						{taurusTomorrow.current_date} <br />
						<span className="font-anton">
							Compatibility:
						</span>{" "}
						{taurusTomorrow.compatibility} <br />
						<span className="font-anton">
							Lucky Number:
						</span>{" "}
						{taurusTomorrow.lucky_number} <br />
						<span className="font-anton">
							Lucky Time:
						</span>{" "}
						{taurusTomorrow.lucky_time} <br />
						<span className="font-anton">Color:</span>{" "}
						{taurusTomorrow.color} <br />
						<span className="font-anton">
							Date Range:
						</span>{" "}
						{taurusTomorrow.date_range} <br />
						<span className="font-anton">Mood:</span>{" "}
						{taurusTomorrow.mood} <br />
						<span className="font-anton">
							Description:
						</span>{" "}
						{taurusTomorrow.description} <br />
					</div>
				</div>
			</div>
		</>
	);
};

export default Taurus;
