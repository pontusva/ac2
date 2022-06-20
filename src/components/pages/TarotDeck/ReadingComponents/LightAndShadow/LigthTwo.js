import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const LigthTwo = ({ drawing, show }) => {
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
					{show &&
						drawing[1].meanings.light.map((light, index) => {
							return (
								<motion.div
									key={index}
									variants={variants}
									initial="initial"
									animate="animate"
									exit="exit"
								>
									<ul>
										<li>{light}.</li>
									</ul>
								</motion.div>
							);
						})}
				</AnimatePresence>
			</div>
		</>
	);
};

export default LigthTwo;
