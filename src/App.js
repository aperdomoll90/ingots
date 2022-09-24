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

function App() {
  return (
    <div className="App">
      <Router>
        <Logo/>
        <Routes>
          <Route path='/' element={<RouteWrapper children={<SvgPathOnScroll/>}/>} />
          {/* <Route path='/3d' component={Featured3DCSSPage} />
          <Route path='/creatures' component={FeaturedCreaturesPage} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
