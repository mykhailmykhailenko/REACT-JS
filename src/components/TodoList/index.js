import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }



    mapList = () => {
        const {list} = this.state;
       return list.map(elem => <TodoItem text={elem.body} key={elem.id} id={elem.id} deleteCallback={this.deleteItem}/>);
    }


    deleteItem = (id) => {
        const {list} = this.state;
      const filteredArray = list.filter(obj => obj.id !== id);
      this.setState({
        list: filteredArray
      });
    }

    addNewItem = (data) => {
        const {list} = this.state;
        const todoObject = {
            body: data,
            id: list.length
        }
        this.setState({
            list: [...list, todoObject]
        });
    }

    render() {
        return (
        <section>
            <TodoForm sendDataToParent={this.addNewItem}/>
           <ul>
            {this.mapList()}
           </ul>
        </section>
        );
    }
}
export default TodoList;