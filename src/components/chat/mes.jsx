import React, { Component } from 'react';

class Mes extends Component {

    constructor(props){
        super(props)
        this.state = { 
            Key: 'eekek'
         }
        this.removeMes = this.removeMes.bind(this)
    }
    removeMes(id){
        this.props.removeFromState(id)
    }
    render(props) { 
        return ( 
            <div className="message">
                <h6>
                    <span 
                        className='removeX'
                        key={this.props.Key}
                        onClick={()=>
                            this.removeMes(this.props.Id)
                        }
                    >&times;</span>
                    {this.props.User} : {this.props.Mes}
                </h6>
            </div>
         );
    }
}
 
export default Mes;