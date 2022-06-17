import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {useState} from 'react';

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
