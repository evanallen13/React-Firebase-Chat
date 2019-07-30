import React, { Component } from 'react';
import './App.css';
import Chat from './components/chat/chat'
import firebase from 'firebase'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      LoggedIn : false
    };
    this.firebaseAuth = this.firebaseAuth.bind(this)
    this.Login = this.Login.bind(this)
  }
  
  Login(){
    this.setState({
      LoggedIn : true
    })
  }
  
  firebaseAuth = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    this.Login()
  }

  render() { 
    return ( 
      <div className='App'>
        {this.state.LoggedIn ?(
            <Chat
            User = {firebase.auth().currentUser.displayName }
            ></Chat>) : (
          <div id="login">
            <h1> Please Login </h1>
            <button id='googleLogin' onClick={() => 
            this.firebaseAuth()
            }>Google Login</button>
            <p>{firebase.auth().currentUser}</p>
          </div>)}
      </div>
     );
  }

}

 
export default App;