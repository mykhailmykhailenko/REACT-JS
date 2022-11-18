import React from "react";
import Column from "./components/Grid/Column";
import Container from "./components/Grid/GridContainer";
import Row from "./components/Grid/Row";
import Header from "./components/Header";

class App extends React.Component {
    constructor(props){
        super(props);
    }

    render () {

        return (
            <Container>
                <Row>
                    <Column colNum="12">
                        Full-width element
                    </Column>
                </Row>
                <Row>
                    <Column colNum="6">
                    Half-width
                    </Column>
                    <Column colNum="6">
                    Half-width
                    </Column>
                </Row>
                <Row>
                    <Column colNum="3">
                    Quart-width
                    </Column>
                    <Column colNum="3">
                    Half-width
                    </Column>
                    <Column colNum="3">
                    Quart-width
                    </Column>
                    <Column colNum="3">
                    Half-width
                    </Column>
                </Row>
            </Container>
        )
    }
}

export default App; 
