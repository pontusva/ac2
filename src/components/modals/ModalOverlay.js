import React from "react";
import {motion} from 'framer-motion';

const ModalOverlay = ({children}) => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0 }}
			className="z-10 text-black w-screen h-screen fixed left-0 right-0 bottom-0 items-center flex justify-center bg-black/50 backdrop-blur-xl text-sm md:text-lg md:px-0 px-10"
		>
			{children}
		</motion.div>
	);
};

export default ModalOverlay;
