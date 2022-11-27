import React from "react";



class App extends React.Component {



    render () {

        return (
            <>
            <button onClick={()=>{
               window.location.assign('https://rozetka.com.ua/');
            }}>Assing</button>
            <button onClick={()=>{
            window.location.reload();
            }}>Reload</button>
            <button onClick={()=>{
             window.location.replace('https://wiki.postgresql.org/wiki/Main_Page');
            }}>Replace</button>
            </>
        )
    }
}
export default App;