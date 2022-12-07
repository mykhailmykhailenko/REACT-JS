import React, {useState} from "react";
import UserDashboard from './components/UserDashboard';
import UsersList from "./components/UsersList";

function App(props) {
   const [isVisible, setVisible] = useState(true);

    return (
      <UserDashboard />

    )
}
export default App;
/*
Stateless - той, хто не має стану
Statefull - той, хто має стан
function App(props){} -> React.createElement(...);
class App extend React.Component{} --> App.render() --> React.createElement();
*/
