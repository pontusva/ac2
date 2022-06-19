import React from "react";

const ShadowTwo = ({drawing, show}) => {
    return (
        <>
            <div>
                <AnimatePresence>
                    {show &&
                        drawing[1].meanings.light.map((light, index) => {
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

export default ShadowTwo;
