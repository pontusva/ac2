import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const ReversedTarot = ({ cardDraw, show }) => {
    return (
        <>
            <div className='text-center'>
                <AnimatePresence>
                    {show && (
                        <div>
                            <motion.p
                                inital={{ opacity: 0 }}
                                animate={{ opacity: [0, 1] }}
                                exit={{ opacity: 0 }}
                                className='text-3xl font-anton uppercase underline'
                            >
                                Reversed
                            </motion.p>
                            <motion.p
                                inital={{ opacity: 0 }}
                                animate={{ opacity: [0, 1] }}
                                exit={{ opacity: 0 }}
                            >
                                {cardDraw.reversed === true ? "Yes" : "No"}
                            </motion.p>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default ReversedTarot;
