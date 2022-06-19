import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const ReadingButtons = ({ updateReading, show }) => {
    const draw = "Draw Cards";
    return (
        <>
            <div className='h-screen'>
                <motion.button
                    key='ReadingButtons'
                    inital={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={updateReading}
                >
                    {draw}
                </motion.button>
            </div>
        </>
    );
};

export default ReadingButtons;
