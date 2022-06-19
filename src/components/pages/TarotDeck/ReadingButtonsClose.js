import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const ReadingButtonsClose = ({ updateReading }) => {
    return (
        <>
            <div>
                <motion.button
                    inital={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 3 }}
                    onClick={updateReading}
                >
                    Close
                </motion.button>
            </div>
        </>
    );
};

export default ReadingButtonsClose;
