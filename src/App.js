import React from "react";
class App extends React.Component {
  
    render () {

        return (
            <>
            <p>lorem ipsum dolor sit amet</p>
            <button onClick={()=>{
                window.navigator.clipboard.writeText('ANOTHER TEXT')
                .then((data) => {
                    console.log(data)
                })
            }}>Copy it!</button>


                <button onClick={()=>{
                window.navigator.clipboard.readText()
                .then((data) => {
                    console.log(data)
                })
            }}>Read the buffer!</button>
            </>
        )
    }
}
export default App;