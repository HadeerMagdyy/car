import React,{useContext} from 'react';
import { BrowserRouter as Router,Route} from "react-router-dom";
import './Style/SignUp.css'
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Visit from './Components/Visit';
import VisitDetalis from './Components/VisitDetalis';
import Dashboard from './Components/Dashboard';
import Technician from './Components/Technician'
import Checkout from './Components/Checkout';
function App() {
  return (
    <div>
    <Navbar></Navbar> 
    <Router>
     <Route path="/" exact component={Home}></Route>
      <Route path="/SignIn" exact component={SignIn}></Route>
      <Route path="/SignUp" exact component={SignUp}></Route>
      <Route path="/Visit" exact component={Visit}></Route>
      <Route path="/VisitDetalis" exact component={VisitDetalis}></Route>
      <Route path="/Dashboard" exact component={Dashboard}></Route>
      <Route path="/Technician" exact component={Technician}></Route>
      <Route path="/Checkout" exact component={Checkout}></Route>

    </Router>
    </div>
  );
}

export default App;