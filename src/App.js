import Start from "./components/pages/Start";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Horoscope from "./components/pages/Horoscope";
import Zodiac from "./components/pages/Zodiac";
import Aquarius from "./components/pages/signs/Aquarius";
import Aries from "./components/pages/signs/Aries";
import Cancer from "./components/pages/signs/Cancer";
import Capricorn from "./components/pages/signs/Capricorn";
import Gemini from "./components/pages/signs/Gemini";
import Leo from "./components/pages/signs/Leo";
import Libra from "./components/pages/signs/Libra";
import Pisces from "./components/pages/signs/Pisces";
import Sagittarius from "./components/pages/signs/Sagittarius";
import Scorpio from "./components/pages/signs/Scorpio";
import Taurus from "./components/pages/signs/Taurus";
import Virgo from "./components/pages/signs/Virgo";
import { apiContext } from "./components/contexts/ApiContext";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

	
	

	const [aqua, setAqua] = useState([]);
	const [aquaTomorrow, setAquaTomorrow] = useState([]);
	const [aries, setAries] = useState([]);
	const [ariesTomorrow, setAriesTomorrow] = useState([]);
	const [cancerSign, setCancer] = useState([]);
	const [cancerTomorrow, setCancerTomorrow] = useState([]);
	const [capricornSign, setCapricornSign] = useState([]);
	const [capricornTomorrow, setCapricornTomorrow] = useState([]);
	const [gemini, setGemini] = useState([]);
	const [geminiTomorrow, setGeminiTomorrow] = useState([]);
	const [leo, setLeo] = useState([]);
	const [leoTomorrow, setLeoTomorrow] = useState([]);
	const [libra, setLibra] = useState([]);
	const [libraTomorrow, setLibraTomorrow] = useState([]);
	const [pisces, setPisces] = useState([]);
	const [piscesTomorrow, setPiscesTomorrow] = useState([]);
	const [sagittarius, setSagittarius] = useState([]);
	const [sagittariusTomorrow, setSagittariusTomorrow] = useState([]);
	const [scorpio, setScorpio] = useState([]);
	const [scorpioTomorrow, setScorpioTomorrow] = useState([]);
	const [taurus, setTaurus] = useState([]);
	const [taurusTomorrow, setTaurusTomorrow] = useState([]);
	const [virgo, setVirgo] = useState([]);
	const [virgoTomorrow, setVirgoTomorrow] = useState([]);

	let aquariusApiCallToday =
		"https://aztro.sameerkumar.website/?sign=aquarius&day=today";
	let aquariusApiCallTomorrow =
		"https://aztro.sameerkumar.website/?sign=aquarius&day=tomorrow";
	let ariesApiCallToday =
		"https://aztro.sameerkumar.website/?sign=aries&day=today";
	let ariesApiCallTomorrow =
		"https://aztro.sameerkumar.website/?sign=aries&day=tomorrow";
	let cancerApiCallToday =
		"https://aztro.sameerkumar.website/?sign=cancer&day=today";
	let cancerApiCallTomorrow =
		"https://aztro.sameerkumar.website/?sign=cancer&day=tomorrow";
	let capricornApiCallToday =
		"https://aztro.sameerkumar.website/?sign=capricorn&day=today";
	let capricornApiCallTomorrow =
		"https://aztro.sameerkumar.website/?sign=capricorn&day=tomorrow";
	let geminiApiCallToday =
		"https://aztro.sameerkumar.website/?sign=gemini&day=today";
	let geminiApiCallTomorrow =
		"https://aztro.sameerkumar.website/?sign=gemini&day=tomorrow";
	let leoApiCallToday =
		"https://aztro.sameerkumar.website/?sign=leo&day=today";
	let leoApiCallTomorrow =
		"https://aztro.sameerkumar.website/?sign=leo&day=tomorrow";
	let libraApiCallToday =
		"https://aztro.sameerkumar.website/?sign=libra&day=today";
	let libraApiCallTomorrow =
		"https://aztro.sameerkumar.website/?sign=libra&day=tomorrow";
	let piscesApiCallToday =
		"https://aztro.sameerkumar.website/?sign=pisces&day=today";
	let piscesApiCallTomorrow =
		"https://aztro.sameerkumar.website/?sign=pisces&day=tomorrow";
	let sagittariusApiCallToday =
		"https://aztro.sameerkumar.website/?sign=sagittarius&day=today";
	let sagittariusApiCallTomorrow =
		"https://aztro.sameerkumar.website/?sign=sagittarius&day=tomorrow";
	let scorpioApiCallToday =
		"https://aztro.sameerkumar.website/?sign=scorpio&day=today";
	let scorpioApiCallTomorrow =
		"https://aztro.sameerkumar.website/?sign=scorpio&day=tomorrow";
	let taurusApiCallToday =
		"https://aztro.sameerkumar.website/?sign=taurus&day=today";
	let taurusApiCallTomorrow =
		"https://aztro.sameerkumar.website/?sign=taurus&day=tomorrow";
	let virgoApiCallToday =
		"https://aztro.sameerkumar.website/?sign=virgo&day=today";
	let virgoApiCallTomorrow =
		"https://aztro.sameerkumar.website/?sign=virgo&day=tomorrow";

	const aquaRequest = axios.post(aquariusApiCallToday);
	const aquaRequestTomorrow = axios.post(aquariusApiCallTomorrow);
	const ariesRequest = axios.post(ariesApiCallToday);
	const ariesRequestTomorrow = axios.post(ariesApiCallTomorrow);
	const cancerRequest = axios.post(cancerApiCallToday);
	const cancerRequestTomorrow = axios.post(cancerApiCallTomorrow);
	const capricornRequest = axios.post(capricornApiCallToday);
	const capricornRequestTomorrow = axios.post(capricornApiCallTomorrow);
	const geminiRequest = axios.post(geminiApiCallToday);
	const geminiRequestTomorrow = axios.post(geminiApiCallTomorrow);
	const leoRequest = axios.post(leoApiCallToday);
	const leoRequestTomorrow = axios.post(leoApiCallTomorrow);
	const libraRequest = axios.post(libraApiCallToday);
	const libraRequestTomorrow = axios.post(libraApiCallTomorrow);
	const piscesRequest = axios.post(piscesApiCallToday);
	const piscesRequestTomorrow = axios.post(piscesApiCallTomorrow);
	const sagittariusRequest = axios.post(sagittariusApiCallToday);
	const sagittariusRequestTomorrow = axios.post(sagittariusApiCallTomorrow);
	const scorpioRequest = axios.post(scorpioApiCallToday);
	const scorpioRequestTomorrow = axios.post(scorpioApiCallTomorrow);
	const taurusRequest = axios.post(taurusApiCallToday);
	const taurusRequestTomorrow = axios.post(taurusApiCallTomorrow);
	const virgoRequest = axios.post(virgoApiCallToday);
	const virgoRequestTomorrow = axios.post(virgoApiCallTomorrow);

	useEffect(() => {
		axios.all([
			aquaRequest,
			aquaRequestTomorrow,
			ariesRequest,
			ariesRequestTomorrow,
			cancerRequest,
			cancerRequestTomorrow,
			capricornRequest,
			capricornRequestTomorrow,
			geminiRequest,
			geminiRequestTomorrow,
			leoRequest,
			leoRequestTomorrow,
			libraRequest,
			libraRequestTomorrow,
			piscesRequest,
			piscesRequestTomorrow,
			sagittariusRequest,
			sagittariusRequestTomorrow,
			scorpioRequest,
			scorpioRequestTomorrow,
			taurusRequest,
			taurusRequestTomorrow,
			virgoRequest,
			virgoRequestTomorrow,
		]).then(
			axios.spread((...responses) => {
				const aquaResponseToday = responses[0].data;
				const aquaResponseTomorrow = responses[1].data;
				const ariesResponseToday = responses[2].data;
				const ariesResponseTomorrow = responses[3].data;
				const cancerResponseToday = responses[4].data;
				const cancerResponseTomorrow = responses[5].data;
				const capricornResponseToday = responses[6].data;
				const capricornResponseTomorrow = responses[7].data;
				const geminiResponseToday = responses[8].data;
				const geminiResponseTomorrow = responses[9].data;
				const leoResponseToday = responses[10].data;
				const leoResponseTomorrow = responses[11].data;
				const libraResponseToday = responses[12].data;
				const libraResponseTomorrow = responses[13].data;
				const piscesResponseToday = responses[14].data;
				const piscesResponseTomorrow = responses[15].data;
				const sagittariusResponseToday = responses[16].data;
				const sagittariusResponseTomorrow = responses[17].data;
				const scorpioResponseToday = responses[18].data;
				const scorpioResponseTomorrow = responses[19].data;
				const taurusResponseToday = responses[20].data;
				const taurusResponseTomorrow = responses[21].data;
				const virgoResponseToday = responses[22].data;
				const virgoResponseTomorrow = responses[23].data;

				// use/access the results
				setAqua(aquaResponseToday);
				setAquaTomorrow(aquaResponseTomorrow);
				setAries(ariesResponseToday);
				setAriesTomorrow(ariesResponseTomorrow);
				setCancer(cancerResponseToday);
				setCancerTomorrow(cancerResponseTomorrow);
				setCapricornSign(capricornResponseToday);
				setCapricornTomorrow(capricornResponseTomorrow);
				setGemini(geminiResponseToday);
				setGeminiTomorrow(geminiResponseTomorrow);
				setLeo(leoResponseToday);
				setLeoTomorrow(leoResponseTomorrow);
				setLibra(libraResponseToday);
				setLibraTomorrow(libraResponseTomorrow);
				setPisces(piscesResponseToday);
				setPiscesTomorrow(piscesResponseTomorrow);
				setSagittarius(sagittariusResponseToday);
				setSagittariusTomorrow(sagittariusResponseTomorrow);
				setScorpio(scorpioResponseToday);
				setScorpioTomorrow(scorpioResponseTomorrow);
				setTaurus(taurusResponseToday);
				setTaurusTomorrow(taurusResponseTomorrow);
				setVirgo(virgoResponseToday);
				setVirgoTomorrow(virgoResponseTomorrow);
			})
		);
	}, []);


	return (
		<div>
			<apiContext.Provider
				value={{
					aqua,
					aquaTomorrow,
					aries,
					ariesTomorrow,
					cancerSign,
					cancerTomorrow,
					capricornSign,
					capricornTomorrow,
					gemini,
					geminiTomorrow,
					leo,
					leoTomorrow,
					libra,
					libraTomorrow,
					pisces,
					piscesTomorrow,
					sagittarius,
					sagittariusTomorrow,
					scorpio,
					scorpioTomorrow,
					taurus,
					taurusTomorrow,
					virgo,
					virgoTomorrow,
				}}
			>
				<Router>
					<Routes>
						<Route path="/" element={<Start />} />
						<Route path="/home" element={<Home />} />
						<Route
							path="/horoscope"
							element={<Horoscope />}
						/>
						<Route path="/about" element={<About />} />
						<Route path="/zodiac" element={<Zodiac />} />
						<Route path="/aquarius" element={<Aquarius />} />
						<Route path="/aries" element={<Aries />} />
						<Route path="/cancer" element={<Cancer />} />
						<Route
							path="/capricorn"
							element={<Capricorn />}
						/>
						<Route path="/gemini" element={<Gemini />} />
						<Route path="/leo" element={<Leo />} />
						<Route path="/libra" element={<Libra />} />
						<Route path="/pisces" element={<Pisces />} />
						<Route
							path="/sagittarius"
							element={<Sagittarius />}
						/>
						<Route path="/scorpio" element={<Scorpio />} />
						<Route path="/taurus" element={<Taurus />} />
						<Route path="/virgo" element={<Virgo />} />
					</Routes>
				</Router>
			</apiContext.Provider>
		</div>
	);
}

export default App;
