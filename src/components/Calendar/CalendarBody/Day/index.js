import { format, getMonth} from 'date-fns';
import React from 'react';
import {withCalendar} from '../../../../HOCs/withCalendar';
import styles from './Day.module.css'



const Day = (props) => {

    
    const {currentDay, day, changeCurrentDay} = props;
    const theDay  = format(day, 'd')
   
    const cn = (format(currentDay, 'd') === format(day, 'd')) ? [styles.dateValid] : [styles.dateInvalid];
   
    const changeDay = () => {
        if (format(currentDay, 'd') !== format(day, 'd')) {
            changeCurrentDay(day)
        }
    }

    const checkDays = () => {
        if (getMonth(currentDay) === getMonth(day)) {
            return theDay
        } else {
            return null
        }
    }
    
    return (
       
        <td onClick={changeDay} className={cn} >{checkDays()}</td>
                 )
          
    
}

const wrappedDays = withCalendar(Day);


export default wrappedDays;
 
