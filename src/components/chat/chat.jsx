import React, { Component } from 'react';
import Fire from '../../fire'
import Mes from './mes'
import firebase from 'firebase'
import './chat.css'

class Chat extends Component {
    constructor(props){
        super(props)
        this.state = { 
            messages: []
        }
        this.addToState = this.addToState.bind(this)
        this.removeFromState = this.removeFromState.bind(this)
        this.readFromFirebase = this.readFromFirebase.bind(this)
    }
 
    addToState(mes){
         // Previous
         let previousMessages = this.state.messages
         previousMessages.push({
             Key: previousMessages.length,
             User: this.props.User,
             Mes: mes
         })

        // FireBase 
        Fire.shared.addMes(previousMessages.length,'Evan',mes)

        // State
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
     readFromFirebase(){
        let array = [];
        const db = firebase.firestore();
        const collection = db.collection('Messages')

        collection.onSnapshot((doc) => {
            doc.forEach(docs => {
                array.push({
                    Key : docs.data().Key,
                    User : docs.data().User,
                    Mes : docs.data().Mes
                })
            });
        })
        this.setState({
            messages : array
        })
    }

    render() { 
        return ( 
            <div id='chat' onChange={()=> this.readFromFirebase()}>
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