import React, { Component } from 'react';
import './style.css';
class Lamp extends Component {
    constructor(props){
        super(props); 
        this.state = {
            on: true
        }
    }

    toggle = ()=>{
        this.setState({on: !this.state.on});
        this.props.callbackParent(this.state.on ? 'off' : 'on');
    }

    render() {
        const cn = this.state.on ? 'lamp-on' : 'lamp-off'
        return (
            <>
                <div className={cn}>

                </div>
                <p>{this.props.lampText}</p>
                <button onClick={this.toggle}>Toggle</button>
            </>
        );
    }
}
export default Lamp;