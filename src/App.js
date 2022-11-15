import React from "react";
import Scene from './components/Scene';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isOn: true
        }
    }

    render () {
        return (

            <Scene />

        )
    }
}
export default App;