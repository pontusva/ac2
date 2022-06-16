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
import {motion, AnimatePresence} from 'framer-motion';




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
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className="md:gap-x-8 z-10 bg-zinc-50 grid md:grid-cols-3 grid-cols-2 md:pb-24 md:p-24 md:pt-24 pt-5 justify-items-center md:gap-8 w-full h-[100%] text-center font-anton text-4xl text-yellow-400"
				>
					<div className="relative md:w-48 md:h-48 w-36 h-36  rounded-full overflow-hidden">
						<img
							src={aquarius}
							alt="aquarius constellation"
							className="object-contain cursor-pointer"
							onClick={() => setAquariusModal(!false)}
						/>

						<div className="absolute w-full py-5 bottom-0 inset-x-0  text-xl text-center leading-4">
							<button
								className="openModalBtn text-jonquil"
								onClick={() => setAquariusModal(!false)}
							>
								Aquarius
							</button>
							<AnimatePresence>
								{aquariusModal && (
									<AquariusModal
										closeModal={setAquariusModal}
									/>
								)}
							</AnimatePresence>
						</div>
					</div>

					<div className="relative md:w-48 md:h-48 w-36 h-36 rounded-full overflow-hidden">
						<img
							src={aries}
							className="object-contain cursor-pointer"
							onClick={() => setAquariusModal(!false)}
							alt="aries constellation"
						/>
						<div className="absolute w-full py-5 bottom-0 inset-x-0  text-xl text-center leading-4">
							<button
								className="openModalBtn  text-jonquil"
								onClick={() => setAriesModal(!false)}
							>
								Aries
							</button>
							<AnimatePresence>
								{ariesModal && (
									<AriesModal
										closeModalAries={
											setAriesModal
										}
									/>
								)}
							</AnimatePresence>
						</div>
					</div>

					<div className="relative md:w-48 md:h-48 w-36 h-36 rounded-full overflow-hidden">
						<img
							src={cancer}
							className="object-contain cursor-pointer"
							onClick={() => setAquariusModal(!false)}
							alt="cancer constellation"
						/>
						<div className="absolute w-full py-5 bottom-0 inset-x-0  text-xl text-center leading-4">
							<button
								className="openModalBtn text-jonquil"
								onClick={() => setCancerModal(!false)}
							>
								Cancer
							</button>
							<AnimatePresence>
								{cancerModal && (
									<CancerModal
										closeModalCancer={
											setCancerModal
										}
									/>
								)}
							</AnimatePresence>
						</div>
					</div>

					<div className="relative md:w-48 md:h-48 w-36 h-36 rounded-full overflow-hidden">
						<img
							className="object-contain cursor-pointer"
							onClick={() => setAquariusModal(!false)}
							src={capricorn}
							alt=""
						/>
						<div className="absolute w-full py-5 bottom-0 inset-x-0  text-xl text-center leading-4">
							<button
								className="openModalBtn text-jonquil"
								onClick={() =>
									setCapricornModal(!false)
								}
							>
								Capricorn
							</button>
							<AnimatePresence>
								{capricornModal && (
									<CapricornModal
										closeModalCapricorn={
											setCapricornModal
										}
									/>
								)}
							</AnimatePresence>
						</div>
					</div>

					<div className="relative md:w-48 md:h-48 w-36 h-36 rounded-full overflow-hidden">
						<img
							className="object-contain cursor-pointer"
							onClick={() => setAquariusModal(!false)}
							src={gemini}
							alt="gemini constellation"
						/>
						<div className="absolute w-full py-5 bottom-0 inset-x-0  text-xl text-center leading-4">
							<button
								className="openModalBtn text-jonquil"
								onClick={() => setGeminiModal(!false)}
							>
								Gemini
							</button>
							<AnimatePresence>
								{geminiModal && (
									<GeminiModal
										closeModalGemini={
											setGeminiModal
										}
									/>
								)}
							</AnimatePresence>
						</div>
					</div>

					<div className="relative md:w-48 md:h-48 w-36 h-36 rounded-full overflow-hidden">
						<img
							className="object-contain cursor-pointer"
							onClick={() => setAquariusModal(!false)}
							src={leo}
							alt="leo constellation"
						/>
						<div className="absolute w-full py-5 bottom-0 inset-x-0  text-xl text-center leading-4">
							<button
								className="openModalBtn text-jonquil"
								onClick={() => setLeoModal(!false)}
							>
								Leo
							</button>
							<AnimatePresence>
								{leoModal && (
									<LeoModal
										closeModalLeo={setLeoModal}
									/>
								)}
							</AnimatePresence>
						</div>
					</div>

					<div className="relative md:w-48 md:h-48 w-36 h-36 rounded-full overflow-hidden">
						<img
							className="object-contain cursor-pointer"
							onClick={() => setAquariusModal(!false)}
							src={libra}
							alt="libra constellation"
						/>
						<div className="absolute w-full py-5 bottom-0 inset-x-0  text-xl text-center leading-4">
							<button
								className="openModalBtn text-jonquil"
								onClick={() => setLibraModal(!false)}
							>
								Libra
							</button>
							<AnimatePresence>
								{libraModal && (
									<LibraModal
										closeModalLibra={
											setLibraModal
										}
									/>
								)}
							</AnimatePresence>
						</div>
					</div>

					<div className="relative md:w-48 md:h-48 w-36 h-36 rounded-full overflow-hidden">
						<img
							className="object-contain cursor-pointer"
							onClick={() => setAquariusModal(!false)}
							src={pisces}
							alt="pisces constellation"
						/>
						<div className="absolute w-full py-5 bottom-0 inset-x-0  text-xl text-center leading-4">
							<button
								className="openModalBtn text-jonquil"
								onClick={() => setLibraModal(!false)}
							>
								Pisces
							</button>
							<AnimatePresence>
								{piscesModal && (
									<PiscesModal
										closeModalPisces={
											setPiscesModal
										}
									/>
								)}
							</AnimatePresence>
						</div>
					</div>

					<div className="relative md:w-48 md:h-48 w-36 h-36 rounded-full overflow-hidden">
						<img
							className="object-contain cursor-pointer"
							onClick={() => setAquariusModal(!false)}
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
							<AnimatePresence>
								{sagittariusModal && (
									<SagittariusModal
										closeModalSagittarius={
											setSagittariusModal
										}
									/>
								)}
							</AnimatePresence>
						</div>
					</div>

					<div className="relative md:w-48 md:h-48 w-36 h-36 rounded-full overflow-hidden">
						<img
							className="object-contain cursor-pointer"
							onClick={() => setAquariusModal(!false)}
							src={scorpio}
							alt="scorpio constellation"
						/>
						<div className="absolute w-full py-5 bottom-0 inset-x-0  text-xl text-center leading-4">
							<button
								className="openModalBtn text-jonquil"
								onClick={() => setScorpioModal(!false)}
							>
								Scorpio
							</button>
							<AnimatePresence>
								{scorpioModal && (
									<ScorpioModal
										closeModalScorpio={
											setScorpioModal
										}
									/>
								)}
							</AnimatePresence>
						</div>
					</div>

					<div className="relative md:w-48 md:h-48 w-36 h-36 rounded-full overflow-hidden">
						<img
							className="object-contain cursor-pointer"
							onClick={() => setAquariusModal(!false)}
							src={taurus}
							alt=""
						/>
						<div className="absolute w-full py-5 bottom-0 inset-x-0  text-xl text-center leading-4">
							<button
								className="openModalBtn text-jonquil"
								onClick={() => setTaurusModal(!false)}
							>
								Taurus
							</button>
							<AnimatePresence>
								{taurusModal && (
									<TaurusModal
										closeModalTaurus={
											setTaurusModal
										}
									/>
								)}
							</AnimatePresence>
						</div>
					</div>

					<div className="relative md:w-48 md:h-48 w-36 h-36 rounded-full overflow-hidden">
						<img
							className="object-contain cursor-pointer"
							onClick={() => setAquariusModal(!false)}
							src={virgo}
							alt="virgo constellation"
						/>
						<div className="absolute w-full py-5 bottom-0 inset-x-0  text-xl text-center leading-4">
							<button
								className="openModalBtn text-jonquil"
								onClick={() => setVirgoModal(!false)}
							>
								Virgo
							</button>
							<AnimatePresence>
								{virgoModal && (
									<VirgoModal
										closeModalVirgo={
											setVirgoModal
										}
									/>
								)}
							</AnimatePresence>
						</div>
					</div>
				</motion.div>
			</section>
		</>
	);
};

export default Zodiac;
