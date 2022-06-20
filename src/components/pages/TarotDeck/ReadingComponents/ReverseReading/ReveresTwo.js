import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const ReveresTwo = ({ show, drawing }) => {
	const variants = {
		initial: {
			opacity: 0,
			transition: {
				duration: 2,
			},
		},
		animate: {
			opacity: [0, 1],
		},
		exit: {
			opacity: 0,
			scale: 0.75,
			transition: {
				duration: 2,
			},
		},
	};

	return (
		<>
			<div>
				<AnimatePresence>
					{show && (
						<div>
							<motion.p
								variants={variants}
								initial="initial"
								animate="animate"
								exit="exit"
							>
								{drawing[1].reversed === true
									? "Yes"
									: "No"}
							</motion.p>
						</div>
					)}
				</AnimatePresence>
			</div>
		</>
	);
};

export default ReveresTwo;
