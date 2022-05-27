import { useContext, useState } from "react";
import { apiContext } from "../../contexts/ApiContext";
import Navbar from "../../Navbar";
import sagittariusPic from "../../assets/zodiacSigns/Sagittarius.png";

const Sagittarius = () => {
	const { sagittarius, sagittariusTomorrow } = useContext(apiContext);

	const [active, setActive] = useState(false);

	const showMenu = () => {
		setActive(!active);
	};

	return (
		<>
			<Navbar />
			<div className="grid md:grid-cols-2 grid-cols-1 justify-items-center bg-zinc-50  md:h-screen h-full w-full content-center">
				<h1 className="text-center font-anton uppercase text-7xl md:hidden pb-10">
					sagittarius
				</h1>
				<img
					src={sagittariusPic}
					alt="/"
					className="md:pl-10 h-5/6 w-5/6 object-contain"
				/>
				<div className="text-sm text-justify pl-10 pr-10">
					<h1 className="text-center font-anton uppercase text-8xl hidden md:block text-amber-500">
						sagittarius
					</h1>
					<span className="font-anton">Current Date:</span>{" "}
					{sagittarius.current_date} <br />
					<span className="font-anton">Compatibility:</span>{" "}
					{sagittarius.compatibility} <br />
					<span className="font-anton">Lucky Number:</span>{" "}
					{sagittarius.lucky_number} <br />
					<span className="font-anton">Lucky Time:</span>{" "}
					{sagittarius.lucky_time} <br />
					<span className="font-anton">Color:</span>{" "}
					{sagittarius.color} <br />
					<span className="font-anton">Date Range:</span>{" "}
					{sagittarius.date_range} <br />
					<span className="font-anton">Mood:</span>{" "}
					{sagittarius.mood} <br />
					<span className="font-anton">Description:</span>{" "}
					{sagittarius.description} <br />
					<div className="pt-10 flex flex-col justify-center">
						<p className="uppercase font-anton pb-2 text-center text-2xl">
							click the button to show tomorrows horosocpe
						</p>
						<button
							onClick={showMenu}
							className="border-2 border-black p-3 text-black rounded-full w-full "
						>
							Tomorrow
						</button>
					</div>
					<div className={active ? "visible p-5" : "hidden"}>
						<span className="font-anton">
							Tomorrow's Date:
						</span>{" "}
						{sagittariusTomorrow.current_date} <br />
						<span className="font-anton">
							Compatibility:
						</span>{" "}
						{sagittariusTomorrow.compatibility} <br />
						<span className="font-anton">
							Lucky Number:
						</span>{" "}
						{sagittariusTomorrow.lucky_number} <br />
						<span className="font-anton">
							Lucky Time:
						</span>{" "}
						{sagittariusTomorrow.lucky_time} <br />
						<span className="font-anton">Color:</span>{" "}
						{sagittariusTomorrow.color} <br />
						<span className="font-anton">
							Date Range:
						</span>{" "}
						{sagittariusTomorrow.date_range} <br />
						<span className="font-anton">Mood:</span>{" "}
						{sagittariusTomorrow.mood} <br />
						<span className="font-anton">
							Description:
						</span>{" "}
						{sagittariusTomorrow.description} <br />
					</div>
				</div>
			</div>
		</>
	);
};

export default Sagittarius;
