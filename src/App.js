import React, { Component } from 'react';
import './App.css';
import Main from './components/main'
import Chat from './components/chat/chat'
import { BrowserRouter as  Router, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <Router>
        <Switch>
          <Route path='/chat' exact component={Chat}></Route>
          <Route path='/' exact component={Main}></Route>
        </Switch>
      </Router>
     );
  }
}
 
export default App;