import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const CardNameThree = ({ drawing, show }) => {
    const name = drawing[2].name;

    if (drawing.length === 1) {
        return <h1>loading....</h1>;
    }

    return (
        <>
            <div>
                <AnimatePresence>
                    {show && (
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, scale: 2 }}
                        >
                            {name}
                        </motion.h1>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default CardNameThree;
