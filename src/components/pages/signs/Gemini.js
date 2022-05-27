import { useContext, useState } from "react";
import { apiContext } from "../../contexts/ApiContext";
import Navbar from "../../Navbar";
import geminiPic from "../../assets/zodiacSigns/Gemini.png";

const Gemini = () => {
	const { gemini, geminiTomorrow } = useContext(apiContext);

	const [active, setActive] = useState(false);

	const showMenu = () => {
		setActive(!active);
	};

	return (
		<>
			<Navbar />
			<div className="grid md:grid-cols-2 grid-cols-1 justify-items-center bg-zinc-50  md:h-screen h-full w-full content-center ">
				<h1 className="text-center font-anton uppercase text-8xl md:hidden pb-10">
					gemini
				</h1>
				<img
					src={geminiPic}
					alt="/"
					className="md:pl-10  h-5/6 w-5/6 object-contain"
				/>
				<div className="text-sm text-justify pl-10 pr-10">
					<h1 className="text-center font-anton uppercase text-8xl hidden md:block text-amber-500">
						gemini
					</h1>
					<span className="font-anton">Current Date:</span>{" "}
					{gemini.current_date} <br />
					<span className="font-anton">Compatibility:</span>{" "}
					{gemini.compatibility} <br />
					<span className="font-anton">Lucky Number:</span>{" "}
					{gemini.lucky_number} <br />
					<span className="font-anton">Lucky Time:</span>{" "}
					{gemini.lucky_time} <br />
					<span className="font-anton">Color:</span>{" "}
					{gemini.color} <br />
					<span className="font-anton">Date Range:</span>{" "}
					{gemini.date_range} <br />
					<span className="font-anton">Mood:</span> {gemini.mood}{" "}
					<br />
					<span className="font-anton">Description:</span>{" "}
					{gemini.description} <br />
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
						{geminiTomorrow.current_date} <br />
						<span className="font-anton">
							Compatibility:
						</span>{" "}
						{geminiTomorrow.compatibility} <br />
						<span className="font-anton">
							Lucky Number:
						</span>{" "}
						{geminiTomorrow.lucky_number} <br />
						<span className="font-anton">
							Lucky Time:
						</span>{" "}
						{geminiTomorrow.lucky_time} <br />
						<span className="font-anton">Color:</span>{" "}
						{geminiTomorrow.color} <br />
						<span className="font-anton">
							Date Range:
						</span>{" "}
						{geminiTomorrow.date_range} <br />
						<span className="font-anton">Mood:</span>{" "}
						{geminiTomorrow.mood} <br />
						<span className="font-anton">
							Description:
						</span>{" "}
						{geminiTomorrow.description} <br />
					</div>
				</div>
			</div>
		</>
	);
};

export default Gemini;
