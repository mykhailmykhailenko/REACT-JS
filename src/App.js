import React from "react";
import ImageWrapper from "./components/ImageWrapper";

class App extends React.Component {
    constructor(props){
        super(props);
    }
    render () {

        return (
        <ImageWrapper
            width="200px"
            height="300px"
            title="My super picture"
        >
            <img src='https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg' />
        </ImageWrapper>
        )
    }
}
export default App;
