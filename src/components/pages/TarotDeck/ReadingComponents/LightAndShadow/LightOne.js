import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const LightOne = ({ drawing, show }) => {
    return (
        <>
            <div>
                <AnimatePresence>
                    {show &&
                        drawing[0].meanings.light.map((light, index) => {
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0, scale: 2 }}
                                >
                                    <ul>
                                        <li>{light}.</li>
                                    </ul>
                                </motion.div>
                            );
                        })}
                </AnimatePresence>
            </div>
        </>
    );
};

export default LightOne;
