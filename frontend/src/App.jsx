import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import "./App.css"; // Import the CSS file
import Home from './assets/components/Home';
import About from './assets/components/About';
import Market from './assets/Market';



function App(){

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Market">Market</Link>
      </nav>
  
    <Routes>

      <Route path = "/" element = {<Home />} />
      <Route path = "/About" element = {<About />} />
      <Route path = "/Market" element = {<Market />} />

    </Routes>

    </Router>
  );
}

export default App;