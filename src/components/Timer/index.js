import React, { Component } from 'react';
import {format, addSeconds} from 'date-fns';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(0,0,0,0,0,0)
        }
        this.intervalId = null;
    }

    start = () => {
       this.intervalId = setInterval(()=>{
            const {time} = this.state;
        const newdate = addSeconds(time, 1);
            this.setState({
                time: newdate
            })

        }, 1000);
    }
    componentDidMount(){
 //       this.start();
    }

    componentWillUnmount(){
        this.stop();
    }
    stop = () => {
        clearInterval(this.intervalId);
    }

    render() {
        const {time} = this.state;
        return (
            <div>
               <h1>{format(time, 'HH:mm:ss')}</h1> 
               <button onClick={this.stop}>Stop</button>
               <button onClick={this.start}>Start</button>
            </div>
        );
    }
}
export default Timer;
