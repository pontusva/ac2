import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const CardNameThree = ({ drawing, show }) => {
    const name = drawing[2].name;

    if (drawing.length === 1) {
        return <h1>loading....</h1>;
    }

    	const variants = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: [0,1],
			transition: {
				duration: 2,
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
						<motion.h1
							className="text-5xl underline text-center uppercase pt-10 font-anton"
                            variants={variants}
							initial='inital'
							animate='animate'
							exit='exit'
						>
							{name}
						</motion.h1>
					)}
				</AnimatePresence>
			</div>
		</>
    );
};

export default CardNameThree;
