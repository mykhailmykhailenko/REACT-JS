 import React, { Component } from 'react';
 import CurrentDay from './CurrentDay'
 import CalendarBody from './CalendarBody'
 import './style.css'
 import CalendarContext from '../../contexts/CalendarContext';

 
 class Calendar extends Component {
    constructor(props) {
        super (props);
        this.state = {
            currentDay: new Date()
        }

    }

    changeCurrentDay = () => {
        this.setState({
            currentDay: {}
        })
    }

    
    
    render() {
        const {currentDay} = this.state;
        return (
            <CalendarContext.Provider value = {[currentDay, this.changeCurrentDay]}>
            <div className='calendar'>
                <div className='currentDate'>
                    <CurrentDay day={currentDay} />
                </div>
                <div className='currentMonth'>
                    <CalendarBody day={currentDay}/>
                </div>
            </div>
            </CalendarContext.Provider>

        );
    }
 }
 
 export default Calendar;
 
