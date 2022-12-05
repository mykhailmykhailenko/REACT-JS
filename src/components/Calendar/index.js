 import React, { Component } from 'react';
 import CurrentDay from './CurrentDay'
 import CalendarBody from './CalendarBody'
 import './style.css'
 import CalendarContext from '../../contexts/CalendarContext';

 
 class Calendar extends Component {
    constructor(props) {
        super (props);
        this.state = {
            currentDay: new Date(),
            isOn: true
        }

    }

    
    changeCurrentDay = (value) => {
        this.setState({
            currentDay: value,
        })
    }

    
    
    render() {
       
        const {currentDay, isOn} = this.state;
        return (
            <CalendarContext.Provider value = {[currentDay, isOn, this.changeCurrentDay]}>
            <div className='calendar'>
                <div className='currentDate'>
                    <CurrentDay day={currentDay} />
                </div>
                <div className='currentMonth'>
                    <CalendarBody />
                </div>
            </div>
            </CalendarContext.Provider>

        );
    }
 }
 
 export default Calendar;
 
