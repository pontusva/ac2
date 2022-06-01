import React from "react";
import { XIcon } from "@heroicons/react/outline";

const PiscesModal = ({ closeModalPisces }) => {
	// Makin a modal....

	return (
		<>
			<div className="modalBackground text-black  w-full h-screen fixed let-0 right-0 bottom-0 items-center flex justify-center bg-black/50 backdrop-blur-lg text-sm md:text-lg md:px-0 px-10">
				<div className="modalContainer w-[500px]">
					<div
						className="flex justify-center"
						onClick={() => closeModalPisces(false)}
					>
						<XIcon className="w-5 h-5" />
					</div>
					<div className="w-full text-white text-md font-sans text-justify">
						<p className="leading-6">
							This is a project I have been working on to
							show some of my web-dev abilities. I am a
							passionate programmer that also is very into
							astrology. I am also in need of some help to
							make this website even better. So if you want
							and have some knowledge we could help each
							other out. We need information about the
							Zodiac Signs. If you know, or know anybody
							that knows about the signs please contact me
							at{" "}
							<span className="font-bold">
								pontusabrahamsson92@gmail.com
							</span>
							, Name your Email "Astrological Calling" and
							I will get back to you asap. If you are
							interested in working with me, Please use the
							same Email and Naming on the email!
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default PiscesModal;
