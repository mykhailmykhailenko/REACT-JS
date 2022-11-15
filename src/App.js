import React from "react";
import UserDashboard from "./components/UserDashboard";
import Timer from './components/Timer';
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