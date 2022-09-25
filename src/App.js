import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import Logo from './Components/Navigation'

// >>>>>>>>>>>>>> ROUTES IMPORTS <<<<<<<<<<<<<<<<<<<<<<<
import RouteWrapper from './Components/RouteWrapper'
import SvgPathOnScroll from './Archives/SvgPathOnScroll'
import Landing from './Archives/Landing'

function App() {
  return (
    <div className="App">
      <Router>
        <Logo/>
        <Routes>
          <Route path='/fishing' element={<RouteWrapper children={<SvgPathOnScroll/>}/>} />
          <Route path='/' element={<RouteWrapper children={<Landing/>}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
