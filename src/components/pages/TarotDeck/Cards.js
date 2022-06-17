import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { drawCard, drawReading } from "tarot-deck";

const Cards = () => {
    const [cardDraw, setCardDraw] = useState([]);
    const [show, setShow] = useState(false);

    const closeButton = "Close";
    const generateNew = "Generate";

    const update = () => {
        setCardDraw(drawCard());
        setShow(!show);
    };

    useEffect(() => {
        setCardDraw(drawCard());
    }, []);

    if (cardDraw.length === 0) {
        return <h1>Loading...</h1>;
    }
    return (
        <>
            <div
                className={
                    show
                        ? "grid lg:grid-cols-1 justify-items-center content-center bg-slate-50"
                        : "hidden"
                }
            >
                <div>
                    <div>
                        <AnimatePresence>
                            {show &&
                                cardDraw.fortune_telling.map(
                                    (fortune, index) => {
                                        return (
                                            <div key={index}>
                                                <ul>
                                                    <motion.li
                                                        initial={{
                                                            opacity: 0,
                                                            scale: 0.75,
                                                        }}
                                                        animate={{
                                                            opacity: 1,
                                                            scale: 1,
                                                        }}
                                                        exit={{
                                                            opacity: 0,
                                                            scale: 0,
                                                        }}
                                                    >
                                                        {fortune}
                                                    </motion.li>
                                                </ul>
                                            </div>
                                        );
                                    }
                                )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-start h-screen bg-slate-50'>
                <button
                    key='button'
                    inital={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={update}
                    className='text-jonquil text-4xl text-center'
                >
                    {show ? closeButton : generateNew}
                </button>
            </div>
        </>
    );
};

export default Cards;
