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
import ReversedOne from "../ReadingComponents/ReverseReading/ReversedOne";
import LightOne from "../ReadingComponents/LightAndShadow/LightOne";
import ShadowOne from "../ReadingComponents/LightAndShadow/ShadowOne";
import KeywordsOne from "../ReadingComponents/Keywords/KeywordsOne";
import ReveresTwo from "../ReadingComponents/ReverseReading/ReveresTwo";
import FortunteTellingOne from "../ReadingComponents/FortuneTelling/FortunteTellingOne";
import FortuneTellingTwo from "../ReadingComponents/FortuneTelling/FortuneTellingTwo";
import LigthTwo from "../ReadingComponents/LightAndShadow/LigthTwo";
import ShadowTwo from "../ReadingComponents/LightAndShadow/ShadowOne";
import KeywordsTwo from "../ReadingComponents/Keywords/KeywordsTwo";
import ReversedThree from "../ReadingComponents/ReverseReading/ReversedThree";
import FortuneTellingThree from "../ReadingComponents/FortuneTelling/FortuneTellingThree";
import LightThree from "../ReadingComponents/LightAndShadow/LightThree";
import ShadowThree from "../ReadingComponents/LightAndShadow/ShadowThree";
import KeywordsThree from "../ReadingComponents/Keywords/KeywordsThree";
import LightHeader from "../ReadingComponents/LightAndShadow/LightHeader";
import ShadowHeader from "../ReadingComponents/LightAndShadow/ShadowHeader";
import KeywordsHeader from "../ReadingComponents/Keywords/KeywordsHeader";
import ReversedHeader from "../ReadingComponents/ReverseReading/ReversedHeader";

const Reading = () => {
	const [show, setShow] = useState(false);
	const [drawing, setDrawing] = useState([]);
    const [disable, setDisable] = useState(false);

	const showing = () => {
		setShow(!show);
		setDrawing(drawReading());
		setDisable(true);
		setTimeout(() => {
			setDisable(false);
		}, 3500);
	};

	const close = () => {
		setShow(!show);
		setDisable(true);
		setTimeout(() => {
			setDisable(false);
		}, 3500);
	};

	useEffect(() => {
		setDrawing(drawReading());
	}, []);

	if (drawing.length === 0) {
		return <h1>loading....</h1>;
	}

	return (
		<>
			<Navbar />
			<div className="grid h-full lg:grid-cols-3 grid-cols-1 justify-items-center bg-zinc-50">
				<div></div>
				<div className="text-moss font-bold text-7xl text-center">
					{show ? (
						<ReadingClose disable={disable} close={close} />
					) : (
						<ReadingDraw disable={disable} showing={showing} />
					)}
				</div>
				<div></div>

				<div className="space-y-3 text-center">
					<CardNameOne drawing={drawing} show={show} />
					<FortunteTellingOne drawing={drawing} show={show} />
					<ReversedHeader show={show} />
					<ReversedOne drawing={drawing} show={show} />
					<LightHeader show={show} />
					<LightOne drawing={drawing} show={show} />
					<ShadowHeader show={show} />
					<ShadowOne drawing={drawing} show={show} />
					<KeywordsHeader show={show} />
					<KeywordsOne drawing={drawing} show={show} />
				</div>
				<div className="space-y-3 text-center">
					<CardNameTwo drawing={drawing} show={show} />
					<FortuneTellingTwo drawing={drawing} show={show} />
					<ReversedHeader show={show} />
					<ReveresTwo drawing={drawing} show={show} />
					<LightHeader show={show} />
					<LigthTwo drawing={drawing} show={show} />
					<ShadowHeader show={show} />
					<ShadowTwo drawing={drawing} show={show} />
					<KeywordsHeader show={show} />
					<KeywordsTwo drawing={drawing} show={show} />
				</div>
				<div className="space-y-3 text-center">
					<CardNameThree drawing={drawing} show={show} />
					<FortuneTellingThree drawing={drawing} show={show} />
					<ReversedHeader show={show} />
					<ReversedThree drawing={drawing} show={show} />
					<LightHeader show={show} />
					<LightThree show={show} drawing={drawing} />
					<ShadowHeader show={show} />
					<ShadowThree show={show} drawing={drawing} />
					<KeywordsHeader show={show} />
					<KeywordsThree show={show} drawing={drawing} />
				</div>
			</div>
			<div className="h-screen bg-zinc-50"></div>
		</>
	);
};

export default Reading;
