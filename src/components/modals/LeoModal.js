import React from "react";
import { XIcon } from "@heroicons/react/outline";

const LeoModal = ({ closeModalLeo }) => {
	// Makin a modal....

	return (
		<>
			<div className="modalBackground text-black  w-full h-screen fixed let-0 right-0 bottom-0 items-center flex justify-center bg-black/50 backdrop-blur-lg text-sm md:text-lg md:px-0 px-10">
				<div className="modalContainer w-[500px]">
					<div
						className="flex justify-center"
						onClick={() => closeModalLeo(false)}
					>
						<XIcon className="w-5 h-5" />
					</div>
					<div className="w-full text-white text-md font-sans text-justify">
						Help Needed!
						<br /> <br />
						What we need for these pages is information about
						the Zodiac Signs.
						<br />
						You don't have to know about every Sign. Write to
						me and we'll have a talk about how we can help
						each other out.
						<br /> Please head over to the "about" section to
						find contact information!
					</div>
				</div>
			</div>
		</>
	);
};

export default LeoModal;
