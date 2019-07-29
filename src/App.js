import React, { Component } from 'react';
import './App.css';
import Main from './components/main/main'
import Chat from './components/chat/chat'

class App extends Component {
  state = { 
    User: null
   }
  render() { 
    return ( 
      <div className='App'>
        {this.state.User ? (<Chat></Chat>) : (<Main></Main>)}
      </div>
     );
  }
}
 
export default App;