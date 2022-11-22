import React from "react";
import TodoItem from './components/TodoList/TodoItem';
import UserCard from "./components/UserCard";


class App extends React.Component {
    constructor(props){
        super(props);
    }
    delete = () => {
        console.log('delete callback')
    }
    render () {

        return (
            <>
           <UserCard/>
            </>
        )
    }
}
export default App;