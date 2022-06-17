import React from "react";
import { motion } from "framer-motion";
import {useState} from 'react';

const DrawButtonAnimation = () => {


    return (
        <>
            <motion.button
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 3 }}
                exit={{ opacity: 0 }}
            >
                Draw Card
            </motion.button>
        </>
    );
};

export default DrawButtonAnimation;
