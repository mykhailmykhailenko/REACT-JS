import React, {useState} from 'react';

const MouseTracker = () => {
    const [coordinates, setCoordinates] = useState( {x: 0,
                                            y: 0} );
    const [count, setCount] = useState(0);

    const handleMouseMove = ({clientX, clientY}) => {
        setCoordinates({
            x: clientX,
            y: clientY
        })
    }

    const handleClick = () => {
        setCount(count+1)
    }

    return (
        <div onMouseMove={handleMouseMove}>
           <p>X: {coordinates.x}</p> 
           <p>Y: {coordinates.y}</p>
           <p>Counter: {count}</p>
           <button onClick={handleClick}>+</button>
        </div>
    );
}

export default MouseTracker;




/*
this.setState - класова функція зі зміни стану
const prevState = {
    x:0,
    y:0
}
const update = {
    count: 1
}
this.setState --> {...prevState, ...update} ---> {
                                            x: 0,
                                            y: 0,
                                            count: 1
                                                }
setState (useState хук) -- функціональний стан
const prevState = {
    x:0,
    y:0
}
const update = {
    count: 1
}
setState --> {...update}
*/
