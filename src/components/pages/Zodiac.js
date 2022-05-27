import React from "react";
import Navbar from "../Navbar";
import AquariusModal from "../modals/AquariusModal";

const Zodiac = () => {
	return (
		<>
			<Navbar />
			<div className="gap-x-2 z-10 bg-zinc-50 grid md:grid-cols-4 grid-cols-3 md:pb-24 p-3 pt-10 justify-items-center gap-8 bg-cover bg-center w-full h-screen text-center font-anton text-4xl text-yellow-400">
				<div>
					<button>Aquarius</button>
					<AquariusModal />
				</div>

				<button>Aries</button>
				<button>Cancer</button>
				<button>Capricorn</button>
				<button>Gemini</button>
				<button>Leo</button>
				<button>Libra</button>
				<button>Pisces</button>
				<button>Sagittaruis</button>
				<button>Scorpio</button>
				<button>Taurus</button>
				<button>Virgo</button>
			</div>
		</>
	);
};

export default Zodiac;
