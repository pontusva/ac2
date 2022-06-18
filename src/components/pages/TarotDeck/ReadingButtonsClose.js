import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const ReadingButtonsClose = ({ close }) => {
    return (
        <>
            <div>
                <AnimatePresence>
                    <motion.button
                        inital={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 3 }}
                        onClick={close}
                    >
                        Close
                    </motion.button>
                </AnimatePresence>
            </div>
        </>
    );
};

export default ReadingButtonsClose;
