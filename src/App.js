import React from "react";
import ProductsList from "./components/ProductsList";


class App extends React.Component {
    constructor(props){
        super(props);
    }
    render () {

        return (
        <ProductsList />
        )
    }
}
export default App;