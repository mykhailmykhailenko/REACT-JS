import React from "react";
import TodoItem from './components/TodoList/TodoItem';


class App extends React.Component {
    constructor(props){
        super(props);
    }
    render () {

        return (
            <TodoItem />
        )
    }
}
export default App;