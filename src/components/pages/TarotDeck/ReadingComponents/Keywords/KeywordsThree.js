import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const KeywordsThree = ({ show, drawing }) => {
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
						drawing[2].keywords.map((keywords, index) => {
							return (
								<motion.div
									key={index}
									variants={variants}
									initial="initial"
									animate="animate"
									exit="exit"
								>
									<ul>
										<li>{keywords}.</li>
									</ul>
								</motion.div>
							);
						})}
				</AnimatePresence>
			</div>
		</>
	);
};

export default KeywordsThree;