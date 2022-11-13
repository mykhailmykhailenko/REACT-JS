import React from 'react'
import Greeting from './components/Greeting';

const userArray = ['John', 'Alex', 'Jake', 'Jane', 'Josh']

class App extends React.Component {

    userMap = () => userArray.map((name) => <Greeting userName={name} />)

    render() {
        return (
            <section>
               {this.userMap()}
            </section>
        )
    }
}

export default App;