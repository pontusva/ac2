import React from "react";
import FortuneTellingCardTwo from "./FortuneTelling/FortuneTellingCardTwo";
import ReverseTwo from "./ReveresReading/ReverseTwo";
import LightReadingTwo from "../LightAndShadow/LightReadingTwo";
import ShadowReadingTwo from "../LightAndShadow/ShadowReadingTwo";
import KeywordsTwo from "./Keywords/KeywordsTwo";
import { motion, AnimatePresence } from "framer-motion";

const SecondCard = ({ reading }) => {
    if (reading.length === 0) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            <AnimatePresence>
                <motion.div
                    key='asdfqwe'
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
                    <p className='text-center font-anton text-5xl underline uppercase'>
                        {reading[1].name}
                    </p>
                    <FortuneTellingCardTwo reading={reading} />
                    <div>
                        <ReverseTwo reading={reading} />
                    </div>
                    <div className='pt-7'>
                        <LightReadingTwo reading={reading} />
                    </div>
                    <div>
                        <ShadowReadingTwo reading={reading} />
                    </div>
                    <div>
                        <KeywordsTwo reading={reading} />
                    </div>
                </motion.div>
            </AnimatePresence>
        </>
    );
};

export default SecondCard;
