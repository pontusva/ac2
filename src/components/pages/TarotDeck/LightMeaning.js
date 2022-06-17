import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { drawCard, drawReading } from "tarot-deck";
import Light from './Light';

const LightMeaning = ({ show, update }) => {
	const light = "Light";
	const shadow = "Shadow";
	// if (cardDraw.length === 0) {
	// 	return <h1>Loading...</h1>;
	// }
	return (
		<>
			<div className=" h-screen bg-slate-50 items-start flex justify-around ">
				<div  key="light">
					<AnimatePresence>
						{show && (
							<motion.button
								className="text-8xl"
								inital={{ opacity: 0 }}
								animate={{ opacity: [0, 1] }}
								exit={{ opacity: 0 }}
							>
								{light}
							</motion.button>
						)}
					</AnimatePresence>
				</div>

				<div>
					<AnimatePresence>
						{show && (
							<motion.button
								key="shadowButton"
								className="text-8xl"
								inital={{ opacity: 0 }}
								animate={{ opacity: [0, 1] }}
								exit={{ opacity: 0 }}
							>
								{shadow}
							</motion.button>
						)}
					</AnimatePresence>
					<Light show={show} />
				</div>
			</div>
		</>
	);
};

export default LightMeaning;
