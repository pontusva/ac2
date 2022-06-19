import React from "react";
import LightReadingThree from "../LightAndShadow/LightReadingThree";
import ShadowReadingThree from "../LightAndShadow/ShadowReadingThree";
import FortuneTellingCardThree from "./FortuneTelling/FortuneTellingCardThree";
import KeywordsThree from "./Keywords/KeywordsThree";
import ReverseThree from "./ReveresReading/ReverseThree";
import { AnimatePresence, motion } from "framer-motion";

const ThirdCard = ({ reading }) => {
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
                        {reading[2].name}
                    </p>
                    <FortuneTellingCardThree reading={reading} />
                    <div>
                        <ReverseThree reading={reading} />
                    </div>
                    <div>
                        <LightReadingThree reading={reading} />
                    </div>
                    <div>
                        <ShadowReadingThree reading={reading} />
                    </div>
                    <div>
                        <KeywordsThree reading={reading} />
                    </div>
                </motion.div>
            </AnimatePresence>
        </>
    );
};

export default ThirdCard;
