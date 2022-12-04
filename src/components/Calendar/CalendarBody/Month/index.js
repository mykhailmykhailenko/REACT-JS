import { getWeeksInMonth } from 'date-fns';
import React from 'react';
import Week from '../Week';

//TODO getWeekInMonth

// const resultWeeks = getWeeksInMonth(new Date(), 12)
// const arr = new Array(7)
// .fill(null)
// .map((el ,index) => <Day day={addWeeks(startOfWeek,index)}/>)

const Month = (props) => {
    return (
        <>
            <tbody>
                <Week year='2022' week='49'/>
                <Week year='2022' week='50'/>
                <Week year='2022' week='51'/>
                <Week year='2022' week='52'/>
                <Week year='2022' week='53'/>
            </tbody>
        </>
    );
}

export default Month;
 

