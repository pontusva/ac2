import React, { useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import { useState } from "react";
import {
    drawCard,
    drawReading,
    getByRank,
    getBySuit,
    majorArcana,
    minorArcana,
    suits,
    tarotDeck,
} from "tarot-deck";

const Tarot = () => {
    const [cardDraw, setCardDraw] = useState([]);

    const update = () => {
        setCardDraw(drawCard());
    };

    useEffect(() => {
        setCardDraw(drawCard());
    }, []);
    console.log(cardDraw);

    if (cardDraw.length === 0) {
        return <h1>Loading...</h1>;
    }
    return (
        <>
            <Navbar />
            <div className='grid lg:grid-cols-1 justify-items-center content-center bg-slate-50'>
                <div>
                    <div>
                        {cardDraw.fortune_telling.map((fortune, index) => {
                            return (
                                <div key={index}>
                                    <ul>
                                        <li>{fortune}</li>
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-start h-screen bg-slate-50'>
                <button
                    onClick={update}
                    className='text-jonquil text-4xl text-center'
                >
                    refresh
                </button>
            </div>
        </>
    );
};

export default Tarot;
