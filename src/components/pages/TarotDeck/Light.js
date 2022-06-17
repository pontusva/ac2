import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { drawCard, drawReading } from "tarot-deck";

const Light = ({ show }) => {
	const lol = "tba";
	return (
		<>
			<div>
				<div>
					<AnimatePresence>
						{show && (
							<motion.p
								inital={{ opacity: 0 }}
								animate={{ opacity: [0, 1] }}
								exit={{ opacity: 0 }}
							>
								{lol}
							</motion.p>
						)}
					</AnimatePresence>
				</div>
			</div>
		</>
	);
};

export default Light;
