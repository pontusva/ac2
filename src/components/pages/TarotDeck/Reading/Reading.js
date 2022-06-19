import React from "react";
import Navbar from "../../../Navbar";
import { useState } from "react";
import { drawReading } from "tarot-deck";
import { useEffect } from "react";
import CardNameOne from "../ReadingComponents/CardNames/CardNameOne";
import ReadingDraw from "../ReadingComponents/ReadingButtons/ReadingDraw";
import ReadingClose from "../ReadingComponents/ReadingButtons/ReadingClose";
import CardNameTwo from "../ReadingComponents/CardNames/CardNameTwo";
import CardNameThree from "../ReadingComponents/CardNames/CardNameThree";
import ReversedOne from "../ReadingComponents/ReveresReading/ReversedOne";
import LightOne from "../ReadingComponents/LightAndShadow/LightOne";
import ShadowOne from "../ReadingComponents/LightAndShadow/ShadowOne";
import KeywordsOne from "../ReadingComponents/Keywords/KeywordsOne";
import ReveresTwo from "../ReadingComponents/ReveresReading/ReveresTwo";
import FortunteTellingOne from "../ReadingComponents/FortuneTelling/FortunteTellingOne";
import FortuneTellingTwo from "../ReadingComponents/FortuneTelling/FortuneTellingTwo";
import LigthTwo from "../ReadingComponents/LightAndShadow/LigthTwo";
import ShadowTwo from "../ReadingComponents/LightAndShadow/ShadowOne";
import KeywordsTwo from "../ReadingComponents/Keywords/KeywordsTwo";

const Reading = () => {
    const [show, setShow] = useState(false);
    const [drawing, setDrawing] = useState([]);

    const showing = () => {
        setShow(!show);
        setDrawing(drawReading());
    };

    const close = () => {
        setShow(!show)
    };

    useEffect(() => {
        setDrawing(drawReading());
    }, []);

    if (drawing.length === 0) {
        return <h1>loading....</h1>;
    }
    console.log(drawing);

    return (
        <>
            <Navbar />
            <div className='grid grid-cols-3 justify-items-center'>
                <div></div>
                <div>
                    {show ? (
                        <ReadingClose close={close} />
                    ) : (
                        <ReadingDraw showing={showing} />
                    )}
                </div>
                <div></div>

                <div className='space-y-5 text-center'>
                    <CardNameOne drawing={drawing} show={show} />
                    <ReversedOne drawing={drawing} show={show} />
                    <FortunteTellingOne drawing={drawing} show={show} />
                    <LightOne drawing={drawing} show={show} />
                    <ShadowOne drawing={drawing} show={show} />
                    <KeywordsOne drawing={drawing} show={show} />
                </div>
                <div className='space-y-5 text-center'>
                    <CardNameTwo drawing={drawing} show={show} />
                    <ReveresTwo drawing={drawing} show={show} />
                    <FortuneTellingTwo drawing={drawing} show={show} />
                    <LigthTwo drawing={drawing} show={show} />
                    <ShadowTwo drawing={drawing} show={show} />
                    <KeywordsTwo drawing={drawing} show={show} />
                </div>
                <div className='space-y-5'>
                    <CardNameThree drawing={drawing} show={show} />
                </div>
            </div>
        </>
    );
};

export default Reading;
