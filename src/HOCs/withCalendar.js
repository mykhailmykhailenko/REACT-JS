 
import CalendarContext from "../contexts/CalendarContext";


export const withCalendar = (Component) => (props) =>  (
    <CalendarContext.Consumer>
        {([currentDay, changeCurrentDay])=>{
          return <Component currentDay={currentDay} changeCurrentDay={changeCurrentDay} {...props}/>
          }}
   </CalendarContext.Consumer>
  );