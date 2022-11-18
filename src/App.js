import React from "react";
import Header from "./components/Header";

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isOn: true,
            user: {
                firstName: 'Alex',
                lastName: 'Doe',
                avatar: 'https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg'
            }
        }
    }

    render () {
        const {user: {firstName, lastName, avatar}} = this.state;
        return (
           <Header text="value">
               <div>
                <img src={avatar} width="75px" height="75px"/>
                <span>{firstName} {lastName} </span>
                </div>
            </Header>
        )
    }
}
export default App;