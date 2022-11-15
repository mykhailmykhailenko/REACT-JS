import React from "react";
import LoginForm from './components/LoginForm'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isOn: true
        }
    }

    render () {
        return (
           <LoginForm />
        )
    }
}
export default App;