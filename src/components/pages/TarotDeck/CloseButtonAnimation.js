import React from "react";
import { motion } from "framer-motion";


const CloseButtonAnimation = () => {

    return (
        <>
            <div key='closeButton'>
                <motion.button
                    transition={{ duration: 2.5 }}
                    animate={{ opacity: [0, 1] }}
                >
                    Close
                </motion.button>
            </div>
        </>
    );
};

export default CloseButtonAnimation;
