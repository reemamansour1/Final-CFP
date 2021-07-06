import React from 'react';
import './App.css';
import Nav from './components/Nav';
import WorkOut from './components/WorkOut';
import Food from './components/Food';
import Mental from './components/Mental';
import Search from './components/Page1';
import Screen from './components/Screen';

import {BrowserRouter as Router ,Switch , Route} from 'react-router-dom';

function App() {

    
  return (
    <Router>
    <div className="App">
     <h3>
       <Nav />
       <Switch>
         <Route path="/" exact component = {Home}/>
         <Route path="/workout" component = {WorkOut}/>
         <Route path="/food" component = {Food} />
         <Route path="/mentalhealth" component = {Mental} />
       </Switch>
     </h3>
    </div>

    </Router>
  );
}
const Home = () =>(
  <div>
     {/* <Screen /> */}
     <Search />
  </div>
  );

export default App;
