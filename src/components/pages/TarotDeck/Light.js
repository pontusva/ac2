import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { drawCard, drawReading } from "tarot-deck";

const Light = ({ show, cardDraw }) => {
    if (cardDraw.length === 0) {
        return <h1>Loading...</h1>;
    }
    return (
        <>
            <div className='pt-5'>
                <AnimatePresence>
                    {show && (
                        <motion.div
                            inital={{ opacity: 0 }}
                            animate={{ opacity: [0, 1] }}
                            exit={{ opacity: 0 }}
                        >
                            {show &&
                                cardDraw.meanings.light.map(
                                    (meaning, index) => {
                                        return (
                                            <div key={index}>
                                                <ul>
                                                    <motion.li
                                                        className='flex flex-col text-center jusitify-center max-w-10'
                                                        initial={{
                                                            opacity: 0,
                                                            scale: 0.75,
                                                        }}
                                                        animate={{
                                                            opacity: 1,
                                                            scale: 1,
                                                        }}
                                                        transition={{
                                                            duration: 2.5,
                                                        }}
                                                        exit={{
                                                            opacity: 0,
                                                            scale: 0,
                                                        }}
                                                    >
                                                        {meaning}.
                                                    </motion.li>
                                                </ul>
                                            </div>
                                        );
                                    }
                                )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default Light;
