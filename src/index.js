import React from 'react'
import ReactDOM from 'react-dom/client';
import Counter from './components/Counter';
import Greeting from './components/Greeting';


const rootElement = document.querySelector('#root');
const root = ReactDOM.createRoot(rootElement);
root.render(
    // React.createElement(Greeting, {userName: 'John'})
    <section>
    <Greeting userName="John"/>
    <Greeting userName="Alex"/>
    <Greeting userName="Jake"/>
    <Greeting userName="Jane"/>
    <Greeting userName="Josh"/>
    </section>
);