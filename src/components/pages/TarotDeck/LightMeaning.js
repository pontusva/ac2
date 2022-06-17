import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Light from './Light';
import Dark from './Dark';

const LightMeaning = ({ show, cardDraw }) => {
	const light = "Light";
	const shadow = "Shadow";
	// if (cardDraw.length === 0) {
	// 	return <h1>Loading...</h1>;
	// }
	return (
		<>
			<div className="w-screen bg-slate-50 items-start flex justify-around ">
				<div className='flex flex-col'
				  key="light">
					<AnimatePresence>
						{show && (
							<motion.button
								className="text-5xl font-anton underline uppercase"
								inital={{ opacity: 0 }}
								animate={{ opacity: [0, 1] }}
								exit={{ opacity: 0 }}
							>
								{light}
							</motion.button>
						)}
					</AnimatePresence>
					<Light show={show} cardDraw={cardDraw}/>
				</div>

				<div
				className='flex flex-col'
				>
					<AnimatePresence>
						{show && (
							<motion.button
								key="shadowButton"
								className="text-5xl font-anton underline uppercase"
								inital={{ opacity: 0 }}
								animate={{ opacity: [0, 1] }}
								exit={{ opacity: 0 }}
							>
								{shadow}
							</motion.button>
						)}
					</AnimatePresence>
					<Dark show={show} cardDraw={cardDraw}/>
					
				</div>
			</div>
		</>
	);
};

export default LightMeaning;
