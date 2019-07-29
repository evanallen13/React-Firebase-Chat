import React, { Component } from 'react';
import './App.css';
import Chat from './components/chat/chat'
import firebase from 'firebase'

let userCurrent;

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      User: null
    }
  }
  render() { 
    return ( 
      <div className='App'>
        {firebase.auth().currentUser ?(
            <Chat
            User = {this.state.User}
            ></Chat>) : (
          <div id="login">
            <h1> Please Login </h1>
            <button id='googleLogin' onClick={() => 
              this.setState({
                User: firebase.auth().currentUser.email
              })
          }>Google Login</button>
          </div>)}
      </div>
     );
  }

}

 
export default App;