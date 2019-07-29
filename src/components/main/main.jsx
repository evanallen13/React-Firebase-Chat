import React, { Component } from 'react';
import Fire from '../../fire'
import './main.css'

class Main extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>Welcome, Please Log In</h1>
                <button id="googleLogin" onClick={Fire.shared.authListener}>Sign In With Google</button>
            </div>
         );
    }
}
 
export default Main;