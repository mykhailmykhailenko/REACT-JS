import React from "react";
import Greeting from './components/Greeting';
import {userData} from "./components/Greeting/userData";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: userData,
            isSort: true
        }
    }

    userMap = () => this.state.users.map((userObj) => <Greeting userName={userObj.name} key={userObj.id}/>);

    sortUsers = () => {
        const {users, isSort} = this.state;
        const newUsers = [...users];
        newUsers.sort((a,b) => (a.name > b.name && isSort) ? 1 : -1);
        this.setState({
            users: newUsers,
            isSort: !isSort
        })
    }

    render () {
        return (
            <section>
                <button onClick={this.sortUsers}>Sorted</button>
                {this.userMap()}
            </section>
        )
    }
}
export default App;