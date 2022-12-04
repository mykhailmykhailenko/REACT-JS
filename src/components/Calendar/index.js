 import React, { Component } from 'react';
 import CurrentDay from './CurrentDay'
 import CalendarBody from './CalendarBody'
 import './style.css'
//  import Day from './CalendarBody/Day';
//  import CalendarContext from '../../contexts/CalendarContext';

 
 class Calendar extends Component {
    constructor(props) {
        super (props);
        this.state = {
            currentDay: new Date()
        }

    }
    
    
    render() {
        const {currentDay} = this.state;
        return (
            <div className='calendar'>
                <div className='currentDate'>
                    <CurrentDay day={currentDay} />
                </div>
                <div className='currentMonth'>
                    <CalendarBody day={currentDay}/>
                </div>
            
            </div>

        );
    }
 }
 
 export default Calendar;
 
