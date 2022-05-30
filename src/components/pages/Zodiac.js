import React from "react";
import {useState} from 'react';
import Navbar from "../Navbar";
import AquariusModal from "../modals/AquariusModal";
import AriesModal from '../modals/AriesModal';
import CancerModal from '../modals/CancerModal'
import CapricornModal from '../modals/CapricornModal';
import GeminiModal from "../modals/GeminiModal";
import LeoModal from "../modals/LeoModal";
import LibraModal from '../modals/LibraModal';
import PiscesModal from "../modals/PiscesModal";
import SagittariusModal from "../modals/SagittariusModal";
import ScorpioModal from "../modals/ScorpioModal";
import TaurusModal from "../modals/TaurusModal";
import VirgoModal from '../modals/VirgoModal'



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
			<Navbar />
			<div className="gap-x-2 z-10 bg-zinc-50 grid grid-cols-3 md:pb-24 p-3 pt-10 justify-items-center gap-8 bg-cover bg-center w-full h-screen text-center font-anton text-4xl text-yellow-400">
				<div className="">
					<button
						className="openModalBtn"
						onClick={() => setAquariusModal(!false)}
					>
						Aquarius
					</button>
					{aquariusModal && (
						<AquariusModal closeModal={setAquariusModal} />
					)}
				</div>

				<div className="">
					<button
						className="openModalBtn"
						onClick={() => setAriesModal(!false)}
					>
						Aries
					</button>
					{ariesModal && (
						<AriesModal closeModalAries={setAriesModal} />
					)}
				</div>

				<div className="">
					<button
						className="openModalBtn"
						onClick={() => setCancerModal(!false)}
					>
						Cancer
					</button>
					{cancerModal && (
						<CancerModal closeModalCancer={setCancerModal} />
					)}
				</div>

				<div className="">
					<button
						className="openModalBtn"
						onClick={() => setCapricornModal(!false)}
					>
						Capricorn
					</button>
					{capricornModal && (
						<CapricornModal
							closeModalCapricorn={setCapricornModal}
						/>
					)}
				</div>

				<div className="">
					<button
						className="openModalBtn"
						onClick={() => setGeminiModal(!false)}
					>
						Gemini
					</button>
					{geminiModal && (
						<GeminiModal closeModalGemini={setGeminiModal} />
					)}
				</div>

				<div className="">
					<button
						className="openModalBtn"
						onClick={() => setLeoModal(!false)}
					>
						Leo
					</button>
					{leoModal && <LeoModal closeModalLeo={setLeoModal} />}
				</div>

				<div className="">
					<button
						className="openModalBtn"
						onClick={() => setLibraModal(!false)}
					>
						Libra
					</button>
					{libraModal && (
						<LibraModal closeModalLibra={setLibraModal} />
					)}
				</div>

				<div className="">
					<button
						className="openModalBtn"
						onClick={() => setLibraModal(!false)}
					>
						Pisces
					</button>
					{piscesModal && (
						<PiscesModal closeModalPisces={setPiscesModal} />
					)}
				</div>

				<div className="">
					<button
						className="openModalBtn"
						onClick={() => setSagittariusModal(!false)}
					>
						Sagittarius
					</button>
					{sagittariusModal && (
						<SagittariusModal
							closeModalSagittarius={setSagittariusModal}
						/>
					)}
				</div>

				<div className="">
					<button
						className="openModalBtn"
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

				<div className="">
					<button
						className="openModalBtn"
						onClick={() => setTaurusModal(!false)}
					>
						Taurus
					</button>
					{taurusModal && (
						<TaurusModal closeModalTaurus={setTaurusModal} />
					)}
				</div>

				<div className="">
					<button
						className="openModalBtn"
						onClick={() => setVirgoModal(!false)}
					>
						Virgo
					</button>
					{virgoModal && (
						<VirgoModal closeModalVirgo={setVirgoModal} />
					)}
				</div>
			</div>
		</>
	);
};

export default Zodiac;
