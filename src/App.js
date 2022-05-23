import Start from "./components/pages/Start";
import Home from "./components/pages/Home";
import Horoscope from "./components/pages/Horoscope";
import Aquarius from "./components/pages/signs/Aquarius";
import Aries from "./components/pages/signs/Aries";
import Cancer from "./components/pages/signs/Cancer";
import Capricorn from "./components/pages/signs/Capricorn";
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';

function App() {
  return (
  <div>
    <Router>
      <Routes>
        <Route path='/' element={<Start />} />       
        <Route path='/home' element={<Home />} />
        <Route path='/horoscope' element={<Horoscope />} />    
        <Route path='/aquarius' element={<Aquarius />} />
        <Route path='/aries' element={<Aries />} /> 
        <Route path='/cancer' element={<Cancer />} />
        <Route path='/capricorn' element={<Capricorn />} />
      </Routes>                 
    </Router>    
  </div>
  );
}

export default App;
