import React, {useState} from "react";


function App(props) {
     const [count, setCount] = useState(0);

    const increment = () => {
       setCount(count+1);
    }

    return (
        <>
        <h2>{count}</h2>
        <button onClick={increment}>+</button>
        </>
    )
}


export default App;



/*
Stateless - той, хто не має стану
Statefull - той, хто має стан
function App(props){} -> React.createElement(...);
class App extend React.Component{} --> App.render() --> React.createElement();
*/