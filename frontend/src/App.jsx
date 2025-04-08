import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import "./App.css"; // Import the CSS file
import Home from './assets/Home';
import About from './assets/About';
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
      <Route path = "*" element = {<div>404 - Page Not Found</div>} />

    </Routes>

    </Router>
  );
}

export default App;