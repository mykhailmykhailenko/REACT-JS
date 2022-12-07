import React, {useEffect, useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(2);

    useEffect(()=>{
        const handleClick = () => {
            setCount((count) => count+step);
        }
        console.log('effect created')
        window.addEventListener('click', handleClick);
        return () => {
            window.removeEventListener('click', handleClick);
        }
    },[step]);

    const handleChange = ({target: {value}}) => {
        setStep(Number(value));
    }


    return (
        <div>
           <p>Counter: {count}</p>
            <input type="text" name="step" value={step} onChange={handleChange}/>
        </div>
    );
}
export default Counter;
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