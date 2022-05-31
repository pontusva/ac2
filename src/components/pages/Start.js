import React from "react";
import { Link } from "react-router-dom";
import bear from "../assets/bearn.png";
import { motion } from "framer-motion";

const Start = () => {
	const buttonVariants = {
		hide: {
			opacity: 0,
		},
		visible: {
			opacity: [0, 1],
			transition: {
				duration: 3,
			},
		},
		hover: {
			scale: 1.1,
			boxShadow: "0px 0px 8px rgba(255, 255, 255)",
			transition: {
				repeat: Infinity,
				repeatType: "mirror",
				duration: 0.5,
				delay: 0.5,
			},
		},
		tap: {
			scale: 0.1,
		},
	};

	const daneVariants = {
		fadeIn: {
			opacity: [0, 1],
			transition: {
				duration: 3,
				delay: 1,
			},
		},
	};

	const bearVariants = {
		animation: {
			opacity: [0, 1],
			transition: {
				duration: 1.5,
			},
		},
	};

	return (
		<>
			<section>
				<div className="bg-cover bg-center fixed w-screen h-screen">
					<div className="absolute w-2/3 m-auto md:bottom-[10%] left-[0%] right-[0%] justify-center items-center flex flex-col h-screen leading-4 md:text-4xl text-sm font-anton ">
						<motion.img
							src={bear}
							variants={bearVariants}
							animate="animation"
							alt="/"
							className="md:w-1/3 md:h-1/3 self-center object-contain w-28 h-28 pb-5"
						/>
						<motion.p
							initial="hidden"
							animate={{ opacity: [0, 1] }}
							transition={{ duration: 3, delay: 0.5 }}
							className="py-2 md:py-0"
						>
							Astrology is a Language. If you understand
							this language, The Sky Speaks to You.
						</motion.p>
						<div className="flex justify-end md:justify-center w-full md:py-5 py-2 ">
							<motion.p
								className=""
								variants={daneVariants}
								animate="fadeIn"
							>
								—Dane Rudhyar
							</motion.p>
						</div>
						<div className="flex">
							<Link to="/home">
								<motion.button
									className="border-2 border-black p-3 text-black rounded-full w-52"
									variants={buttonVariants}
									animate="visible"
									whileHover="hover"
									whileTap="tap"
								>
									Enter...
								</motion.button>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Start;
