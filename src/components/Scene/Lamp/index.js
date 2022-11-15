 
import React, { Component } from 'react';
import './style.css';

class Lamp extends Component {
    constructor(props){
        super(props); 
        this.state = {
            on: true
        }
    }
    render() {
        const cn = this.state.on ? 'lamp-on' : 'lamp-off'
        return (
            <>
                <div className={cn}>

                </div>
                <button onClick={()=>{this.setState({on: !this.state.on})}}>Toggle</button>
            </>
        );
    }
}

export default Lamp;