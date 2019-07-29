import React from 'react';
import firebase from 'firebase'


const Mes = () => ({
    render(props) { 
        return ( 
            <div className = {this.props.User === firebase.auth().currentUser.email ? 'User message' : 'NotUser message' }>
                <h6>
                    <span 
                        className='removeX'
                        key={this.props.Key}
                        onClick={()=>
                            this.props.removeFromState(this.props.Id)
                        }
                    >&times;</span>
                    {this.props.User} : {this.props.Mes}
                </h6>
            </div>
         );
    }
})
export default Mes;