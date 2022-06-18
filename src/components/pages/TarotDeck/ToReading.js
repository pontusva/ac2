import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const ToReading = ({ show }) => {
    return (
        <>
            <div className='text-center'>
                <AnimatePresence>
                    {show && (
                        <motion.p
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
                            Want More? Click{" "}
                            <Link to='/tarot/reading'>
                                <button>here</button>
                            </Link>
                            {" "}for a reading with three cards
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default ToReading;
