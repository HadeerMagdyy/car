import React from 'react';
import SignUpIn from './Components/Signup-in';
import { BrowserRouter as Router,Route} from "react-router-dom";
import Home from './Components/Home';
function App() {
  return (
    <Router>
      <Route path="/" exact component={SignUpIn}></Route>
      <Route path="/login" exact component={Home}></Route>

    </Router>
  );
}

export default App;