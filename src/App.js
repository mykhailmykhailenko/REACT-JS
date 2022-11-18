import React from "react";
import FlexContainer from "./components/FlexContainer";

import styles from './App.module.css';

class App extends React.Component {
    constructor(props){
        super(props);
    }
    render () {

        return (
         <FlexContainer fd="row" jc="space-between" ai="center">
            <div className={styles.box}> 1 </div>
            <div className={styles.box}> 2 </div>
            <div className={styles.box}> 3 </div>
            <div className={styles.box}> 4 </div>
            <div className={styles.box}> 5 </div>
         </FlexContainer>
        )
    }
}

export default App;
