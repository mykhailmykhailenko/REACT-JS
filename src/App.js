import React from "react";
import Header from "./components/Header";
import Tree from "./components/Tree";
import UserContext from "./contexts/UserContext";
import ThemeContext from './contexts/ThemeContext';
import CONSTANTS from './constants';
const {THEMES} = CONSTANTS;
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstName: 'John',
                lastName: 'Doe',
                email: 'mail.fdsdf@fsddf',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4jFqy72BnOtX9KZVGFax-w-D2GrrN-j_qpfG6K_U5SDhbFA-AJP7oXWdGWsi_amI8bsY&usqp=CAU' 
            },
            theme: THEMES.LIGHT
        }
    }
    changeThemeCallback = (theme) => {
        this.setState({
            theme
        })
    }
    
    logOutCallback = () =>{
        this.setState({
            user: {}
        })
    }
    render () {
        const {user, theme} = this.state;
        return (
            <ThemeContext.Provider value={[theme, this.changeThemeCallback]}>
                <UserContext.Provider value={[user, this.logOutCallback]}>
                    <Header />
                    <Tree />
                </UserContext.Provider>
            </ThemeContext.Provider>
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