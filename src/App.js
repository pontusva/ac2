import Start from "./components/pages/Start";
import Home from "./components/pages/Home";
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<Start />} />       
        <Route path='/home' element={<Home />} />        
      </Routes>                 
    </Router>
    
  </div>
  );
}

export default App;
