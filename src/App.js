import React from "react";
import UserDashboard from "./components/UserDashboard";

class App extends React.Component {
    constructor(props){
        super(props);
    }
    render () {

        return (
         <UserDashboard />
        )
    }
}

export default App;