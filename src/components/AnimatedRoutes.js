import Start from "../components/pages/Start";
import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Horoscope from "../components/pages/Horoscope";
import Zodiac from "../components/pages/Zodiac";
import Aquarius from "../components/pages/signs/Aquarius";
import Aries from "../components/pages/signs/Aries";
import Cancer from "../components/pages/signs/Cancer";
import Capricorn from "../components/pages/signs/Capricorn";
import Gemini from "../components/pages/signs/Gemini";
import Leo from "../components/pages/signs/Leo";
import Libra from "../components/pages/signs/Libra";
import Pisces from "../components/pages/signs/Pisces";
import Sagittarius from "../components/pages/signs/Sagittarius";
import Scorpio from "../components/pages/signs/Scorpio";
import Taurus from "../components/pages/signs/Taurus";
import Virgo from "../components/pages/signs/Virgo";
import Reading from "./pages/TarotDeck/Reading";
import Tarot from "./pages/Tarot";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import React from "react";


const AnimatedRoutes = () => {
    const location = useLocation();
    return (
		<AnimatePresence>
			<Routes location={location}>
				<Route path="/" element={<Start />} />
				<Route path="/home" element={<Home />} />
				<Route path="/horoscope" element={<Horoscope />} />
				<Route path="/about" element={<About />} />
				<Route path="/zodiac" element={<Zodiac />} />
				<Route path="/tarot" element={<Tarot />} />
				<Route path="/tarot/reading" element={<Reading />} />
				<Route path="/aquarius" element={<Aquarius />} />
				<Route path="/aries" element={<Aries />} />
				<Route path="/cancer" element={<Cancer />} />
				<Route path="/capricorn" element={<Capricorn />} />
				<Route path="/gemini" element={<Gemini />} />
				<Route path="/leo" element={<Leo />} />
				<Route path="/libra" element={<Libra />} />
				<Route path="/pisces" element={<Pisces />} />
				<Route path="/sagittarius" element={<Sagittarius />} />
				<Route path="/scorpio" element={<Scorpio />} />
				<Route path="/taurus" element={<Taurus />} />
				<Route path="/virgo" element={<Virgo />} />
			</Routes>
		</AnimatePresence>
    );
};

export default AnimatedRoutes;
