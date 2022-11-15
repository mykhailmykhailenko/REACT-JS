import React, { Component } from 'react';
import Lamp from './Lamp';
import Sibling from './Sibling';

class Scene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggler: 'on'
        }
    }

    callbackState = (data) => {
       this.setState({
        toggler: data
       })
    }

    render() {
        return (
            <>
             <Lamp lampText='cool lamp' callbackParent={this.callbackState}/> 
             <Sibling toggleText={this.state.toggler}/>  
             </>
        );
    }
}
export default Scene;