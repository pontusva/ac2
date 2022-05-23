import Start from "./components/pages/Start";
import Home from "./components/pages/Home";
import Horoscope from "./components/pages/Horoscope";
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';

function App() {
  return (
  <div>
    <Router>
      <Routes>
        <Route path='/' element={<Start />} />       
        <Route path='/home' element={<Home />} />
        <Route path='/horoscope' element={<Horoscope />} />       
      </Routes>                 
    </Router>    
  </div>
  );
}

export default App;
