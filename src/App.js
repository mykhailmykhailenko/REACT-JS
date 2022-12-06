import React from "react";
import Header from "./components/Header";
import Tree from "./components/Tree";
import UserContext from "./contexts/UserContext";
import ThemeContext from './contexts/ThemeContext';
import CONSTANTS from './constants';
import SignUpForm from "./components/SignUpForm";
const {THEMES} = CONSTANTS;

class App extends React.Component {
    constructor(props) {
        super(props);
    }



    render () {
        return (
          <SignUpForm />
        )
    }
}
export default App;
/*
Контекст має три умови
1. Створити контекст
2. Огорнути дерево компонент у компонент Provider, передати значення у проп value
3. Підписати конкретні компоненти, яким необхідно ось це значення, на оновлення контексту (за допомогою Consumer)
*/