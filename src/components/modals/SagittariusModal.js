import React from "react";
import { XIcon } from "@heroicons/react/outline";
import ModalOverlay from "./ModalOverlay";
import { motion } from "framer-motion";

const SagittariusModal = ({ closeModalSagittarius }) => {
	// Makin a modal....

	return (
		<>
			<ModalOverlay>
				{closeModalSagittarius && (
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0 }}
						onClick={(e) => e.stopPropagation()}
					>
						<div
							className="flex justify-center"
							onClick={() => closeModalSagittarius(false)}
						>
							<XIcon className="w-5 h-5 text-white scale-150" />
						</div>
						<div className="text-white text-md font-sans text-justify w-96 p-10 lg:p-0">
							<p className="leading-6">
								This is a project I have been working on
								to show some of my web-dev abilities. I
								am a passionate programmer that also is
								very into astrology. I am also in need
								of some help to make this website even
								better. So if you want and have some
								knowledge we could help each other out.
								We need information about the Zodiac
								Signs. If you know, or know anybody that
								knows about the signs please contact me
								at{" "}
								<span className="font-bold">
									pontusabrahamsson92@gmail.com
								</span>
								, Name your Email "Astrological Calling"
								and I will get back to you asap. If you
								are interested in working with me,
								Please use the same Email and Naming on
								the email!
							</p>
						</div>
					</motion.div>
				)}
			</ModalOverlay>
		</>
	);
};

export default SagittariusModal;
