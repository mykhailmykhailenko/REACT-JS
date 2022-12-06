import React, {useState} from "react";
import MouseTracker from "./components/MouseTracker";
import WindowSizer from "./components/WindowSizer";

function App(props) {
   const [isVisible, setVisible] = useState(true);

    return (
        // <> {isVisible && <MouseTracker />}</>
        <WindowSizer />
    )
}

export default App;
/*
Stateless - той, хто не має стану
Statefull - той, хто має стан
function App(props){} -> React.createElement(...);
class App extend React.Component{} --> App.render() --> React.createElement();
*/