import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import {  BrowserRouter as Router, Switch,Route,Link,  } from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
      
     <nav>
       <Link to="/">HOME</Link>
       <Link to="/About">ABOUT</Link>
       <Link to="/Contact">CONTACT</Link>
       <Link to="/Login">LOGIN</Link>
      </nav>
     <Switch>
     <Route path="/about">
       <About/>
    </Route> 
    <Route path="/contact">
       <Contact/>
    </Route> 
    <Route path="/login">
       <Login/>
    </Route> 
    <Route path="/">
       <Home/>
    </Route> 
    </Switch> 
    </div>
    </Router>
  );
}

export default App;
