import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
            list: []
        }
    }

    changeHandler = ({target: {value, name}}) => {
        this.setState({
            [name]: value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        const {list, todo} = this.state;
        const todoObject = {
            body: todo,
            id: list.length
        }
        this.setState({
            list: [...list, todoObject],
            todo: ''
        });
    }

    mapList = () => {
        const {list} = this.state;
       return list.map(elem => <TodoItem text={elem.body} key={elem.id}/>);
    }


    render() {
        const {todo} = this.state;

        return (
        <section>
           <form onSubmit={this.submitHandler}>
            <input 
                type="text"
                name="todo"
                value={todo}
                onChange={this.changeHandler}
                 />
            <button>Add item</button>
           </form>
           <ul>
            {this.mapList()}
           </ul>
        </section>
        );
    }
}

export default TodoList;