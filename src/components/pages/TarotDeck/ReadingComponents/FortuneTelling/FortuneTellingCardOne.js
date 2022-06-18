import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const FortuneTellingCardOne = ({ reading }) => {
    return (
        <>
            <div className='w-full'>
                <div className='pt-5 text-center'>
                    <AnimatePresence>
                        {reading[0].fortune_telling.map((telling, index) => {
                            return (
                                <ul key={index}>
                                    <motion.li
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
                                        {telling}.
                                    </motion.li>
                                </ul>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>
        </>
    );
};

export default FortuneTellingCardOne;
