 
import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
        }
    }

    changeHandler = ({target: {value, name}}) => {
        this.setState({
            [name]: value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.sendDataToParent(this.state.todo);
        this.setState({
            todo: ''
        })
    }

    render() {
        const {todo} = this.state;
        return (
            <form onSubmit={this.submitHandler}>
            <input 
                type="text"
                name="todo"
                value={todo}
                onChange={this.changeHandler}
                 />
            <button>Add item</button>
           </form>
        );
    }
}

export default TodoForm;