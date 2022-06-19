import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const ReversedOne = ({ drawing, show }) => {
    return (
        <>
            <div>
                <AnimatePresence>
                    {show && (
                        <div>
                            <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, scale: 2 }}
                            >
                                Reversed
                            </motion.p>
                            <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, scale: 2 }}
                            >
                                {drawing[0].reversed === true ? "Yes" : "No"}
                            </motion.p>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default ReversedOne;