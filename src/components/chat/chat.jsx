import React, { Component } from 'react';
import Mes from './mes'
import './chat.css'

class Chat extends Component {
    constructor(props){
        super(props)
        this.state = { 
            messages:[]
        }
        this.addToState = this.addToState.bind(this)
        this.removeFromState = this.removeFromState.bind(this)
         
    }
    addToState(mes){
        let previousMessages = this.state.messages
        previousMessages.push({
            Key: previousMessages.length,
            User: 'Evan',
            Mes: mes
        })
        this.setState({
            messages : previousMessages
        })
        document.getElementById('mes').value = ''
     }
     removeFromState(key){
        let previousMessages = this.state.messages
        previousMessages.splice(key,1)
        if(previousMessages.length === 1 && previousMessages.splice(key,1) === 0){
            previousMessages = []
        }
        this.setState({
            messages : previousMessages
        })
     }

    render() { 
        return ( 
            <div id='chat'>
                <div id='chatboxContainer' className="form-control">
                    {
                        this.state.messages.map((content) => 
                            <Mes
                                key={content.Key}
                                Id={content.Key}
                                User={content.User}
                                Mes={content.Mes}
                                removeFromState={this.removeFromState}
                            ></Mes>
                        )
                    }
                </div>
                <div id="send" className="input-group mb-3">
                    <input 
                        id="mes" 
                        type="text" 
                        className="form-control" 
                        placeholder="Send Chat" 
                        onKeyDown={(e) => {
                                if(e.keyCode === 13){
                                    this.addToState(document.getElementById('mes').value)
                                }
                            }
                        }
                    ></input>
                    <div className="input-group-append">
                        <button 
                            type="button" 
                            className="btn btn-primary"
                            onClick= {()=> this.addToState(document.getElementById('mes').value)}
                        >Send</button>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Chat;