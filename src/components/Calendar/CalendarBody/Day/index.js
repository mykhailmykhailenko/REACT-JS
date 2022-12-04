import { format } from 'date-fns';
import React from 'react';
import cx from 'classnames';

const Day = (props) => {

    
    const {currentDay, day} = props;
    // const cn = cx(styles)
    // getMonth(currentDay) === getMonth(day)// если они не равні вернуть null или ' '
    const theDay  = format(day, 'd')
    
    return (
        <td>{theDay}</td>
    )
}

export default Day;
 
// прокидивать состояние через контекст или класовой
//getMonth
// context -> newDate( )