import React from "react";
import aquarius from "../assets/zodiacSigns/Aquarius.png";
import aries from "../assets/zodiacSigns/Aries.png";
import taurus from "../assets/zodiacSigns/Taurus.png";
import gemini from "../assets/zodiacSigns/Gemini.png";
import cancer from "../assets/zodiacSigns/Cancer.png";
import capricorn from "../assets/zodiacSigns/Capricorn.png";
import leo from "../assets/zodiacSigns/Leo.png";
import libra from "../assets/zodiacSigns/Libra.png";
import sagittarius from "../assets/zodiacSigns/Sagittarius.png";
import scorpius from "../assets/zodiacSigns/Scorpius.png";
import virgo from "../assets/zodiacSigns/Virgo.png";
import pisces from "../assets/zodiacSigns/Pisces.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "../Navbar";

const Horoscope = () => {
    return (
        <>
            <nav>
                <Navbar />
            </nav>
            <section className='h-[100%] bg-zinc-50'>
                <div className='hidden text-center pt-5 w-full font-anton tracking-wide md:text-xl text-sm h-full bg-zinc-50'>
                    <p>Click to read todays horoscopes...</p>
                </div>
                <motion.div
					initial={{opacity: 0}}
                    animate={{ opacity: 1 }}
					transition={{duration: 1}}
                    className='gap-x-2 z-10 bg-zinc-50 grid md:grid-cols-4 grid-cols-3 md:p-24 p-3 justify-items-center gap-8 bg-cover bg-center md:fixed w-screen h-[100%]'
                >
                    <div className=''>
                        <p className=' text-center font-bold text-xl text-sky-700'>
                            Aquarius
                        </p>
                        <Link to='/aquarius'>
                            <img
                                src={aquarius}
                                alt=''
                                className='w-24 h-24 object-contain '
                            />
                        </Link>
                    </div>

                    <div>
                        <p className='text-center font-bold text-xl text-sky-700'>
                            Aries
                        </p>
                        <Link to='/aries'>
                            <img
                                src={aries}
                                alt=''
                                className='w-24 h-24 object-contain '
                            />
                        </Link>
                    </div>

                    <div>
                        <p className='text-center font-bold text-xl text-sky-700'>
                            Cancer
                        </p>
                        <Link to='/cancer'>
                            <img
                                src={cancer}
                                alt=''
                                className='w-24 h-24 object-contain'
                            />
                        </Link>
                    </div>

                    <div>
                        <p className='text-center font-bold text-xl text-sky-700'>
                            Capricorn
                        </p>
                        <Link to='/capricorn'>
                            <img
                                src={capricorn}
                                alt=''
                                className='w-24 h-24 object-contain'
                            />
                        </Link>
                    </div>

                    <div>
                        <p className='text-center font-bold text-xl text-sky-700'>
                            Gemini
                        </p>
                        <Link to='/gemini'>
                            <img
                                src={gemini}
                                alt=''
                                className='w-24 h-24 object-contain'
                            />
                        </Link>
                    </div>

                    <div>
                        <p className='text-center font-bold text-xl text-sky-700'>
                            Leo
                        </p>
                        <Link to='/leo'>
                            <img
                                src={leo}
                                alt=''
                                className='w-24 h-24 object-contain'
                            />
                        </Link>
                    </div>

                    <div>
                        <p className='text-center font-bold text-xl text-sky-700'>
                            Libra
                        </p>
                        <Link to='/libra'>
                            <img
                                src={libra}
                                alt=''
                                className='w-24 h-24 object-contain'
                            />
                        </Link>
                    </div>

                    <div>
                        <p className='text-center font-bold text-xl text-sky-700'>
                            Pisces
                        </p>
                        <Link to='/pisces'>
                            <img
                                src={pisces}
                                alt=''
                                className='w-24 h-24 object-contain'
                            />
                        </Link>
                    </div>

                    <div>
                        <p className='text-center font-bold text-xl text-sky-700'>
                            Sagittarius
                        </p>
                        <Link to='/sagittarius'>
                            <img
                                src={sagittarius}
                                alt=''
                                className='w-24 h-24 object-contain'
                            />
                        </Link>
                    </div>

                    <div>
                        <p className='text-center font-bold text-xl text-sky-700'>
                            Scorpio
                        </p>
                        <Link to='/scorpio'>
                            <img
                                src={scorpius}
                                alt=''
                                className='w-24 h-24 object-contain'
                            />
                        </Link>
                    </div>

                    <div>
                        <p className='text-center font-bold text-xl text-sky-700'>
                            Taurus
                        </p>
                        <Link to='/taurus'>
                            <img
                                src={taurus}
                                alt=''
                                className='w-24 h-24 object-contain'
                            />
                        </Link>
                    </div>

                    <div>
                        <p className='text-center font-bold text-xl text-sky-700'>
                            Virgo
                        </p>
                        <Link to='/virgo'>
                            <img
                                src={virgo}
                                alt=''
                                className='w-24 h-24 object-contain'
                            />
                        </Link>
                    </div>
                </motion.div>
            </section>
        </>
    );
};

export default Horoscope;
