import { format, getMonth } from 'date-fns';
import React from 'react';
import cx from 'classnames';
import {withCalendar} from '../../../../HOCs/withCalendar';


const Day = (props) => {

    
    const {currentDay, day, changeCurrentDay} = props;
    // const cn = cx(styles)
    // getMonth(currentDay) === getMonth(day)// если они не равні вернуть null или ' '
    const theDay  = format(day, 'd')

    const checkDays = () => {
        if (getMonth(currentDay) === getMonth(day)) {
            return theDay
        } else {
            return null
        }
    }
    
    return (
        <td >{checkDays()}</td>
                 )
          
    
}

const wrappedDays = withCalendar(Day);


export default wrappedDays;
 
// прокидивать состояние через контекст или класовой
//getMonth
// context -> newDate( )