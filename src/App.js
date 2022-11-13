 
import React from "react";
import Greeting from './components/Greeting/index'
import{userData} from './components/Greeting/userData'


class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            users: ['Blake', 'Alex', 'Raine', 'Jane', 'Kosh'],
            isSort: true
        }

   
    }

    userMap = () => this.state.users.map((name) => <Greeting userName={name}/>)
    
    sortUsers = () => {
        const {users, isSort} = this.state;
        const newUsers = [...users];
        newUsers.sort((a,b) => (a>b && isSort) ? 1 : -1);
        this.setState ({
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