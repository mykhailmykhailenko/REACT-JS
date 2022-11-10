import React from 'react'
import ReactDOM from 'react-dom/client';

 const component = React.createElement(Section);


const rootElement = document.querySelector('#root');
const root = ReactDOM.createRoot(rootElement);
root.render(component);

function Section(props){

     const userObj = {
       "id": 2,
       "name": "Josh",
       "description": "programmer",
       "profilePicture": "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
       };

       const clicker = () => {
              console.log('hello')
       }

       return (
              <section onClick={clicker}>
                     <img src={userObj.profilePicture} />
                     <h2>{userObj.name}</h2>
                     <p>{userObj.description}</p>
                     <button>Connect</button>    
              </section>
       )
}
