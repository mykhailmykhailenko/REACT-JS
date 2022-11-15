 
import React from 'react';

class LoginForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    changeHandler = ({target: {value, name}}) => {
        console.log(name, value)
        this.setState({
            [name]: value
        })
    }


    render(){
        return (
            <form>
                <input 
                    type="text" 
                    placeholder='Type your email' 
                    name='email'
                    value={this.state.email}
                    onChange={this.changeHandler}/>
                <input 
                    type="text" 
                    placeholder='Type your password' 
                    name='password'
                    value={this.state.password}
                    onChange={this.changeHandler}/>
                <button>Click</button>
            </form>
        );
    }
}

export default LoginForm;


/*
Керовані компоненти
1. Стан компоненти (state) є єдиним джерелом правди для елементів форми. 
2. Елемент форми отримує свій стан від стану компоненти. Відображає те, що в стані.
3. Якщо з елементом форми щось відбувається (змінюється його наповнення), ми маємо оновити стан компоненти.
(Елемент форми обов'язково має атрибут name, який співпадає з назвою стану)
*/