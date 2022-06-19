import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const KeywordsTwo = ({show, drawing}) => {
    return (
        <>
            <div>
                <AnimatePresence>
                    {show &&
                        drawing[1].keywords.map((keywords, index) => {
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0, scale: 2 }}
                                >
                                    <ul>
                                        <li>{keywords}.</li>
                                    </ul>
                                </motion.div>
                            );
                        })}
                </AnimatePresence>
            </div>
        </>
    );
};

export default KeywordsTwo;
