import React from 'react'
import ReactDOM from 'react-dom/client';

// const h1 = React.createElement('h1', {}, 'Hello, World');


// const div = React.createElement('div',{}, h1);
const div = (<section>
                     <div>
                            <h1>Hello, world</h1>
                     </div>
                     <article>
                            <p>Lorem</p>
                     </article>
              </section>
              );

const rootElement = document.querySelector('#root');
const root = ReactDOM.createRoot(rootElement);
root.render(div);


console.log(root);
