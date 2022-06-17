import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { drawCard, drawReading } from "tarot-deck";
import LightMeaning from './LightMeaning';


const Cards = () => {
	const [cardDraw, setCardDraw] = useState([]);
	const [show, setShow] = useState(false);

	const closeButton = "Close";
	const generateNew = "Draw Card";

	const update = () => {
		setCardDraw(drawCard());
		setShow(!show);
	};
	console.log(cardDraw);

	useEffect(() => {
		setCardDraw(drawCard());
	}, []);

	if (cardDraw.length === 0) {
		return <h1>Loading...</h1>;
	}
	return (
		<>
			<div
				onClick={update}
				className="flex justify-center items-start bg-slate-50"
			>
				<motion.button
					whileTap={{ scale: 0.8 }}
					key="button"
					className="text-jonquil text-4xl text-center mt-28"
				>
					{show ? closeButton : generateNew}
				</motion.button>
			</div>
			<div className="flex justify-center bg-slate-50 inset-x-0 z-10 relative inset-x-0">
				<div className="">
					<AnimatePresence>
						<motion.h1
							initial={{
								opacity: 0,
								scale: 0,
							}}
							animate={{
								opacity: 1,
								scale: 0.99,
							}}
							exit={{
								opacity: 0,
								scale: 0,
							}}
							className="text-2xl uppercase underline text-center"
						>
							{show && cardDraw.name}
						</motion.h1>
						{show &&
							cardDraw.fortune_telling.map(
								(fortune, index) => {
									return (
										<div key={index}>
											<ul>
												<motion.li
													initial={{
														opacity: 0,
														scale: 0,
													}}
													animate={{
														opacity: 1,
														scale: 0.99,
													}}
													exit={{
														opacity: 0,
														scale: 0,
													}}
													className="text-center"
												>
													{fortune}.
												</motion.li>
											</ul>
										</div>
									);
								}
							)}
					</AnimatePresence>
				</div>
			</div>
			<LightMeaning show={show} update={update} cardDraw={cardDraw} />
		</>
	);
};

export default Cards;
