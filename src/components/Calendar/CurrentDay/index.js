import { format } from 'date-fns';
import React from 'react';
import './style.css'
 
 const CurrentDay = (props) => {
    const {day} = props
    return (
        <div className='container'>
            <p className='currentDayName'>{format(day, 'cccc')}</p>
            <p className='currentDayNumber'>{format(day, 'd')}</p>
        </div>
    );
 }
 
 export default CurrentDay;
 
