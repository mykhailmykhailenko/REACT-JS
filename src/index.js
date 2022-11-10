import React from 'react'
import ReactDOM from 'react-dom/client';

 const component = React.createElement(Section);


const rootElement = document.querySelector('#root');
const root = ReactDOM.createRoot(rootElement);
root.render(component);

function Section(props){

       const username = 'John';
       const today = new Date();

       return (
              <section>
                     <div>
                            <h1>Hello, {username}</h1>
                     </div>
                     <article>
                            <p>{today.toDateString()}</p>
                            <button>{vipText}</button>
                     </article>
              </section>
       )
}
