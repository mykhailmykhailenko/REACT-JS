import React from "react";

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState({
            count: this.state.count+1
        });
        // this.state.count++ НЕ МОЖНА!!!
        // this.state.count = {} НЕ МОЖНА!
        // state unmutable
    }


    render(){
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>+</button>
                <button>-</button>
            </div>
        )
    }
}


export default Counter;