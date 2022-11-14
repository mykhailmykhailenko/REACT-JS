import React from "react";
import UserDashboard from "./components/UserDashboard";
import Tree from './components/Tree';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isOn: true
        }
    }

    render () {
        return (
            <div>
                <button onClick={()=>{this.setState({isOn: false})}}>Unmount Tree</button>
                 {this.state.isOn ? <Tree /> : null} 
           </div>
        )
    }
}

export default App;