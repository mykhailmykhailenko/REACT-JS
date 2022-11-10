import React from 'react'
import ReactDOM from 'react-dom/client';
import Counter from './Counter';

// import Section from './Section.js';


//  const component = <Section />;


const rootElement = document.querySelector('#root');
const root = ReactDOM.createRoot(rootElement);
root.render(<Counter />);

