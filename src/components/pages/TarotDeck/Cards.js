import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { drawCard, drawReading } from "tarot-deck";
import LightMeaning from "./LightMeaning";
import LightMeaningHeader from "./LightMeaningHeader";
import CloseButtonAnimation from "./CloseButtonAnimation";
import DrawButtonAnimation from "./DrawButtonAnimation";
import ReversedTarot from "./ReversedTarot";

const Cards = () => {
    const [cardDraw, setCardDraw] = useState([]);
    const [show, setShow] = useState(false);

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
            <div className='h-screen bg-zinc-50 grid grid-cols-1 content-center pb-24'>
                <div className='bg-zinc-50'>
                    <div className='flex justify-center mb-5'>
                        <motion.div
                            key='button'
                            // whileTap={{ scale: 0.8 }}
                            onClick={update}
                            className='text-jonquil text-4xl text-center'
                        >
                            {show ? (
                                <CloseButtonAnimation />
                            ) : (
                                <DrawButtonAnimation />
                            )}
                        </motion.div>
                    </div>

                    <div className='flex justify-center'>
                        <div className='w-96'>
                            <AnimatePresence>
                                <LightMeaningHeader
                                    show={show}
                                    cardDraw={cardDraw}
                                />
                                {show &&
                                    cardDraw.fortune_telling.map(
                                        (fortune, index) => {
                                            return (
                                                <div key={index}>
                                                    <ul>
                                                        <motion.li
                                                            className='flex flex-col text-center jusitify-center'
                                                            initial={{
                                                                opacity: 0,
                                                                scale: 0.75,
                                                            }}
                                                            animate={{
                                                                opacity: 1,
                                                                scale: 1,
                                                            }}
                                                            transition={{
                                                                duration: 1,
                                                            }}
                                                            exit={{
                                                                opacity: 0,
                                                                scale: 0,
                                                            }}
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

                    <div className='flex justify-center items-start bg-slate-50'>
                        <LightMeaning
                            show={show}
                            update={update}
                            cardDraw={cardDraw}
                        />
                    </div>

                    <div className='flex justify-center items-start bg-slate-50'>
                        <ReversedTarot cardDraw={cardDraw} show={show} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cards;
