import React, { Component } from 'react';

class WindowResizer extends Component {
    constructor (props) {
        super (props);
        this.state = {
            width : window.innerWidth,
            height : window.innerWidth
        }
    }
   

    componentDidMount () {
        window.addEventListener ('resize', this.screenSize)
    }

    componentWillUnmount () {
        window.removeEventListener ('resize', this.screenSize)
    }

   screenSize = () => {
        this.setState ({
            width: window.innerWidth,
            height: window.innerHeight
        })

        
   }

    render() {

     const {height,width} = this.state
        return (
            <section>
                <p>Current width:{height}px</p>
                <p>Current height:{width}px</p>
            </section>
        );
    }
}

export default WindowResizer;
 
