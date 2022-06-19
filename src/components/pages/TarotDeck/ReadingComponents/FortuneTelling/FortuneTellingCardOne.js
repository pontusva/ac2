import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

const FortuneTellingCardOne = ({ reading, show }) => {
    return (
        <>
            <div className='w-full'>
                <div className='pt-5 text-center'>
                    {show &&
                        reading[0].fortune_telling.map((telling, index) => {
                            return (
                                <ul
                                    inital={{ opacity: 0 }}
                                    animate={{ opacity: [0, 1] }}
                                    exit={{ opacity: show ? 1 : 0 }}
                                    key={index}
                                >
                                    <li
                                        inital={{ opacity: 0 }}
                                        animate={{ opacity: [0, 1] }}
                                        exit={{ opacity: show ? 1 : 0 }}
                                    >
                                        {telling}.
                                    </li>
                                </ul>
                            );
                        })}
                </div>
            </div>
        </>
    );
};

export default FortuneTellingCardOne;
