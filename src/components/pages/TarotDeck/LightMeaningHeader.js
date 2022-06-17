import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const LightMeaningHeader = ({ show, cardDraw }) => {
    return (
        <>
            <div>
                <div className='text-5xl underline text-center uppercase pb-5 font-anton'>
                    <AnimatePresence>
                        {show && (
                            <motion.h1
                                inital={{ opacity: 0 }}
                                animate={{ opacity: [0,1], scale: [0.75, 1] }}
                                transition={{delay: 0.3, duration: 1.5}}
                                exit={{ opacity: 0 }}
                            >
                                {cardDraw.name}
                            </motion.h1>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </>
    );
};

export default LightMeaningHeader;
