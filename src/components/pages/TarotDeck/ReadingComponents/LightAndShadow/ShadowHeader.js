import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const ShadowHeader = ({ show }) => {
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
				duration: 6,
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
							Shadow
						</motion.p>
					)}
				</AnimatePresence>
			</div>
		</>
	);
};

export default ShadowHeader;
