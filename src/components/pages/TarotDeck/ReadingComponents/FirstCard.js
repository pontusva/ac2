import React from "react";
import LightReading from "../LightAndShadow/LightReading";
import ShadowReading from "../LightAndShadow/ShadowReading";
import FortuneTellingCardOne from "./FortuneTelling/FortuneTellingCardOne";
import ReversedOne from "./ReveresReading/ReversedOne";
import KeywordsOne from "./Keywords/KeywordsOne";
import { motion, AnimatePresence } from "framer-motion";

const FirstCard = ({ reading }) => {
    return (
        <>
            <div>
                <AnimatePresence>
                    <motion.div
                        intital={{ scale: 0 }}
                        animate={{ opacity: [0, 1] }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.p
                            intital={{ scale: 0 }}
                            animate={{ opacity: [0, 1] }}
                            exit={{ opacity: 0 }}
                            className='text-center font-anton text-5xl underline uppercase'
                        >
                            {reading[0].name}
                        </motion.p>
                    </motion.div>
                </AnimatePresence>
                <FortuneTellingCardOne reading={reading} />
                <div>
                    <ReversedOne reading={reading} />
                </div>
                <div>
                    <LightReading reading={reading} />
                </div>
                <div>
                    <ShadowReading reading={reading} />
                </div>
                <div>
                    <KeywordsOne reading={reading} />
                </div>
            </div>
        </>
    );
};

export default FirstCard;
