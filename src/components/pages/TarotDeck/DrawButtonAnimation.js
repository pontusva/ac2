import React from "react";
import { motion } from "framer-motion";


const DrawButtonAnimation = ({update, disable}) => {
    
    return (
        <>
            <motion.button
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 3 }}
                exit={{ opacity: 0 }}
                onClick={update}
                disabled={disable}
            >
                Draw Card
            </motion.button>
        </>
    );
};

export default DrawButtonAnimation;
