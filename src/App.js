import React from "react";
import TodoList from './components/TodoList';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isOn: true
        }
    }

    render () {
        return (
           <TodoList />
        )
    }
}
export default App;
/*
Список справ (TodoList)
1. Форма (інпут і кнопка), за введення даних і натиснення кнопки вміст інпута стає новим рядком у списку справ
2. Список справ відображається як ul-список. Кожна справа - це лішка.
Дві компоненти - одна - список і друга - елемент списку
*/