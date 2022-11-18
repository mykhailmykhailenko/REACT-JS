import React, { Component } from 'react';
import styles from './TodoForm.module.css';
class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
            isInputValid: true
        }
    }

    changeHandler = ({target: {value, name}}) => {
        if (value.includes(' ')) {
            this.setState({
                isInputValid: false
            })
        } else {
            this.setState({
                isInputValid: true
            })
        }
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
        const {todo, isInputValid} = this.state;
        const cnames = cx({

        })
 //       const cnames = `${styles.input} ${isInputValid ? [styles.valid] : [styles.invalid]}`
        return (
            <form onSubmit={this.submitHandler} >
            <input 
                type="text"
                name="todo"
                value={todo}
                onChange={this.changeHandler}
                className={cnames}
                 />
            <button>Add item</button>
           </form>
        );
    }
}


/*
objectClassNames = {
    className1: true,
    className2: false,
    className3: true
} ---> 'className1 className3';
*/

function cx (objectClassNames){
   return Object
   .entries(objectClassNames)
   .filter(([cln, condition]) => condition)
   .map(([cln, condition]) => cln)
   .join(' ');
}

/*
1. Перетворити об'єкт в масив з масивами - Object.entries()
{} -> [[className1, true], [className2, false], [className3, true]]
2. Відфільтрувати масив за певною умовою: там, де другий елемент масиву (кортежу) - true - нам підходить
[[className1, true], [className2, false], [className3, true]] -> [[className1, true], [className3, true]]
3. Перетворити масив з масивами на масив, який містить тільки перші елементи підмасивів
[[className1, true], [className3, true]] -> [className1, className3]
4. Об'єднати цей масив у рядок
[className1, className3] -> 'className1, className3'
*/



export default TodoForm;