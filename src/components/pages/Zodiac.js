import React from "react";
import { useState } from "react";
import Navbar from "../Navbar";
import AquariusModal from "../modals/AquariusModal";
import AriesModal from "../modals/AriesModal";
import CancerModal from "../modals/CancerModal";
import CapricornModal from "../modals/CapricornModal";
import GeminiModal from "../modals/GeminiModal";
import LeoModal from "../modals/LeoModal";
import LibraModal from "../modals/LibraModal";
import PiscesModal from "../modals/PiscesModal";
import SagittariusModal from "../modals/SagittariusModal";
import ScorpioModal from "../modals/ScorpioModal";
import TaurusModal from "../modals/TaurusModal";
import VirgoModal from "../modals/VirgoModal";
import aquarius from "../assets/zodiac/aquarius.png";
import aries from "../assets/zodiac/aries.png";
import cancer from "../assets/zodiac/cancer.png";
import capricorn from "../assets/zodiac/capricorn.png";
import gemini from "../assets/zodiac/gemini.png";
import leo from "../assets/zodiac/leo.png";
import libra from "../assets/zodiac/libra.png";
import pisces from "../assets/zodiac/pisces.png";
import sagittarius from "../assets/zodiac/sagittarius.png";
import scorpio from "../assets/zodiac/scorpio.png";
import taurus from "../assets/zodiac/taurus.png";
import virgo from "../assets/zodiac/virgo.png";




const Zodiac = () => {
	const [aquariusModal, setAquariusModal] = useState(false);
	const [ariesModal, setAriesModal] = useState(false);
	const [cancerModal, setCancerModal] = useState(false);
	const [capricornModal, setCapricornModal] = useState(false);
	const [geminiModal, setGeminiModal] = useState(false);
	const [leoModal, setLeoModal] = useState(false);
	const [libraModal, setLibraModal] = useState(false);
	const [piscesModal, setPiscesModal] = useState(false);
	const [sagittariusModal, setSagittariusModal] = useState(false);
	const [scorpioModal, setScorpioModal] = useState(false);
	const [taurusModal, setTaurusModal] = useState(false);
	const [virgoModal, setVirgoModal] = useState(false);

	return (
		<>
			<nav>
				<Navbar />
			</nav>
			<div className="hidden text-center z-10 w-full font-anton tracking-wide md:text-xl text-sm h-full pt-5 bg-zinc-50">
				<p>Click to read about the Zodiac...</p>
			</div>

			<section className="h-[100%] bg-zinc-50">
				<div className="md:gap-x-8 z-10 bg-zinc-50 grid md:grid-cols-3 grid-cols-2 md:pb-24 md:p-24 md:pt-24 pt-5 justify-items-center md:gap-8 w-full h-[100%] text-center font-anton text-4xl text-yellow-400">
					<div className="relative md:w-48 md:h-48 w-36 h-36  rounded-full overflow-hidden">
						<img
							src={aquarius}
							alt="aquarius constellation"
							className="object-contain"
						/>

						<div className="absolute w-full py-5 bottom-0 inset-x-0  text-xl text-center leading-4">
							<button
								className="openModalBtn text-jonquil"
								onClick={() => setAquariusModal(!false)}
							>
								Aquarius
							</button>
							{aquariusModal && (
								<AquariusModal
									closeModal={setAquariusModal}
								/>
							)}
						</div>
					</div>

					<div className="relative md:w-48 md:h-48 w-36 h-36 rounded-full overflow-hidden">
						<img src={aries} alt="aries constellation" />
						<div className="absolute w-full py-5 bottom-0 inset-x-0  text-xl text-center leading-4">
							<button
								className="openModalBtn  text-jonquil"
								onClick={() => setAriesModal(!false)}
							>
								Aries
							</button>
							{ariesModal && (
								<AriesModal
									closeModalAries={setAriesModal}
								/>
							)}
						</div>
					</div>

					<div className="relative md:w-48 md:h-48 w-36 h-36 rounded-full overflow-hidden">
						<img src={cancer} alt="cancer constellation" />
						<div className="absolute w-full py-5 bottom-0 inset-x-0  text-xl text-center leading-4">
							<button
								className="openModalBtn text-jonquil"
								onClick={() => setCancerModal(!false)}
							>
								Cancer
							</button>
							{cancerModal && (
								<CancerModal
									closeModalCancer={setCancerModal}
								/>
							)}
						</div>
					</div>

					<div className="relative md:w-48 md:h-48 w-36 h-36 rounded-full overflow-hidden">
						<img src={capricorn} alt="" />
						<div className="absolute w-full py-5 bottom-0 inset-x-0  text-xl text-center leading-4">
							<button
								className="openModalBtn text-jonquil"
								onClick={() =>
									setCapricornModal(!false)
								}
							>
								Capricorn
							</button>
							{capricornModal && (
								<CapricornModal
									closeModalCapricorn={
										setCapricornModal
									}
								/>
							)}
						</div>
					</div>

					<div className="relative md:w-48 md:h-48 w-36 h-36 rounded-full overflow-hidden">
						<img src={gemini} alt="gemini constellation" />
						<div className="absolute w-full py-5 bottom-0 inset-x-0  text-xl text-center leading-4">
							<button
								className="openModalBtn text-jonquil"
								onClick={() => setGeminiModal(!false)}
							>
								Gemini
							</button>
							{geminiModal && (
								<GeminiModal
									closeModalGemini={setGeminiModal}
								/>
							)}
						</div>
					</div>

					<div className="relative md:w-48 md:h-48 w-36 h-36 rounded-full overflow-hidden">
						<img src={leo} alt="leo constellation" />
						<div className="absolute w-full py-5 bottom-0 inset-x-0  text-xl text-center leading-4">
							<button
								className="openModalBtn text-jonquil"
								onClick={() => setLeoModal(!false)}
							>
								Leo
							</button>
							{leoModal && (
								<LeoModal closeModalLeo={setLeoModal} />
							)}
						</div>
					</div>

					<div className="relative md:w-48 md:h-48 w-36 h-36 rounded-full overflow-hidden">
						<img src={libra} alt="libra constellation" />
						<div className="absolute w-full py-5 bottom-0 inset-x-0  text-xl text-center leading-4">
							<button
								className="openModalBtn text-jonquil"
								onClick={() => setLibraModal(!false)}
							>
								Libra
							</button>
							{libraModal && (
								<LibraModal
									closeModalLibra={setLibraModal}
								/>
							)}
						</div>
					</div>

					<div className="relative md:w-48 md:h-48 w-36 h-36 rounded-full overflow-hidden">
						<img src={pisces} alt="pisces constellation" />
						<div className="absolute w-full py-5 bottom-0 inset-x-0  text-xl text-center leading-4">
							<button
								className="openModalBtn text-jonquil"
								onClick={() => setLibraModal(!false)}
							>
								Pisces
							</button>
							{piscesModal && (
								<PiscesModal
									closeModalPisces={setPiscesModal}
								/>
							)}
						</div>
					</div>

					<div className="relative md:w-48 md:h-48 w-36 h-36 rounded-full overflow-hidden">
						<img
							src={sagittarius}
							alt="sagittarius constellation"
						/>
						<div className="absolute w-full py-5 bottom-0 inset-x-0  text-xl text-center leading-4">
							<button
								className="openModalBtn text-jonquil"
								onClick={() =>
									setSagittariusModal(!false)
								}
							>
								Sagittarius
							</button>
							{sagittariusModal && (
								<SagittariusModal
									closeModalSagittarius={
										setSagittariusModal
									}
								/>
							)}
						</div>
					</div>

					<div className="relative md:w-48 md:h-48 w-36 h-36 rounded-full overflow-hidden">
						<img src={scorpio} alt="scorpio constellation" />
						<div className="absolute w-full py-5 bottom-0 inset-x-0  text-xl text-center leading-4">
							<button
								className="openModalBtn text-jonquil"
								onClick={() => setScorpioModal(!false)}
							>
								Scorpio
							</button>
							{scorpioModal && (
								<ScorpioModal
									closeModalScorpio={setScorpioModal}
								/>
							)}
						</div>
					</div>

					<div className="relative md:w-48 md:h-48 w-36 h-36 rounded-full overflow-hidden">
						<img src={taurus} alt="" />
						<div className="absolute w-full py-5 bottom-0 inset-x-0  text-xl text-center leading-4">
							<button
								className="openModalBtn text-jonquil"
								onClick={() => setTaurusModal(!false)}
							>
								Taurus
							</button>
							{taurusModal && (
								<TaurusModal
									closeModalTaurus={setTaurusModal}
								/>
							)}
						</div>
					</div>

					<div className="relative md:w-48 md:h-48 w-36 h-36 rounded-full overflow-hidden">
						<img src={virgo} alt="virgo constellation" />
						<div className="absolute w-full py-5 bottom-0 inset-x-0  text-xl text-center leading-4">
							<button
								className="openModalBtn text-jonquil"
								onClick={() => setVirgoModal(!false)}
							>
								Virgo
							</button>
							{virgoModal && (
								<VirgoModal
									closeModalVirgo={setVirgoModal}
								/>
							)}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Zodiac;
