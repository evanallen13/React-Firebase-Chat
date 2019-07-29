import React, { Component } from 'react';


const Mes = () => ({
    render(props) { 
        return ( 
            <div className="message">
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