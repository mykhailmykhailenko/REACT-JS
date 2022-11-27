import React, { Component } from 'react';

class WindowSizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: window.innerWidth,
            y: window.innerHeight
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.resizeHandler)
    }

    componentWillUnmount() {
        window.removeEventListener('resize',  this.resizeHandler)
    }


    resizeHandler = () => {
        this.setState({
            x: window.innerWidth,
            y: window.innerHeight
        })
    }


    render() {


        const {x,y} = this.state;
        return (
        <section>
            <p>Current width: {x}px</p>
            <p>Current height: {y}px</p>
        </section>
        );
    }
}

export default WindowSizer;


/*
Створіть компонент WindowResizer, який відображає на сторінці
    <section>
        Current width: ....px
        Current height: ...px
    </section>
Ширина і висота вьюпорта (видимої частини екрану)
При зміні розміру екрану цифри мають змінюватись
*/