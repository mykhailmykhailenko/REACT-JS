import React from "react";
import TodoItem from './components/TodoList/TodoItem';
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
            <TodoItem deleteCallback={this.delete}/>
            <TodoItem />
            </>
        )
    }
}
export default App;