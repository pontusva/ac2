import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const KeywordsOne = ({ drawing, show }) => {
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
                        drawing[0].keywords.map((keywords, index) => {
                            return (
							<motion.div
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

export default KeywordsOne;
