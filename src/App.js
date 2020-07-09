import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';


import Header from './Components/Header';
import India from './Components/India';
import World from './Components/World';

class App extends Component{

render(){
  return(

<div className="container-fluid">

<Router>

<Header/>


<Switch>


  <Route  path="/">
<India/>
  </Route>

  <Route  path="/india">
<India/>
  </Route>

  <Route  path="/world">
<World/>
  </Route>


</Switch>
</Router>



</div>

  )
}
}

export default App;