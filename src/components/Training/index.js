import React, { useState, useEffect } from 'react';
import {format, addSeconds} from 'date-fns';


function Training (props) {
    const [time, setTime] = useState(new Date(0,0,0,0,0,0));
    const [isRunning, setRunning] = useState(false);
   
    useEffect (() => {
        let intervalId = null;
            if (isRunning) {
            intervalId = setTimeout (() => {
                setTime(addSeconds(time, 1))
            }, 1000)
        }
            return () => {
                clearTimeout(intervalId)
            }
    });

   const switchRunning = () => {
    setRunning(!isRunning)
   }


    const  reset = () => {
        setTime(new Date(0,0,0,0,0,0))
    }

        

        const buttonText =  isRunning ? 'Stop' : 'Start';
        const buttonClassname = isRunning ? 'green-btn' : 'red-btn';
        return (
            <div>
               <h1>{format(time, 'HH:mm:ss')}</h1> 
               <button onClick={switchRunning} className={buttonClassname}>{buttonText}</button>
               <button onClick={reset}>Clear</button>
            </div>
        );
   
}

export default Training;