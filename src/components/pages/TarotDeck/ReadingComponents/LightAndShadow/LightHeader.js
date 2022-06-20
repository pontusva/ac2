import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const LightHeader = ({ show }) => {
	const variants = {
		initial: {
			opacity: 0,
			transition: {
				duration: 2,
			},
		},
		animate: {
			opacity: [0, 1],
			transition: {
				duration: 5,
			},
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
						<motion.p
							className="text-5xl underline text-center uppercase pt-10 font-anton"
							variants={variants}
							initial="initial"
							animate="animate"
							exit="exit"
						>
							ligth
						</motion.p>
					)}
				</AnimatePresence>
			</div>
		</>
	);
};

export default LightHeader;
