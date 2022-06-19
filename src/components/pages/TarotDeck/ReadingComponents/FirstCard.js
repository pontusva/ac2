import React from "react";
import LightReading from "../LightAndShadow/LightReading";
import ShadowReading from "../LightAndShadow/ShadowReading";
import FortuneTellingCardOne from "./FortuneTelling/FortuneTellingCardOne";
import ReversedOne from "./ReveresReading/ReversedOne";
import KeywordsOne from "./Keywords/KeywordsOne";
import {motion} from "framer-motion";

const FirstCard = ({ reading, show }) => {
    return (
        <>
            <motion.div
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
                <motion.div>
                    <motion.p className='text-center font-anton text-5xl underline uppercase'>
                        {reading[0].name}
                    </motion.p>
                </motion.div>

                <FortuneTellingCardOne reading={reading} show={show} />
                <div>
                    <ReversedOne reading={reading} show={show} />
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
            </motion.div>
        </>
    );
};

export default FirstCard;
