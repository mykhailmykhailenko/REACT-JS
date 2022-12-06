 /*
Написати HOC для огортання компонент контекстом теми
*: реалізувати HOC через класову компоненту (замість функціональної)
*/

import React from "react";
import ThemeContext from "../contexts/ThemeContext";

// export const withTheme = (Component) => {
//     return function (props) {
//         return <ThemeContext.Consumer>
//             {([theme, setTheme]) => {
//                 return <Component theme={theme} setTheme={setTheme} />
//             }}
//         </ThemeContext.Consumer>
//     }
// }

/* Класова HOC */

export const withTheme = (Component) => {
    return class extends React.Component {
       render () {
        return (
            <ThemeContext.Consumer>
                {([theme, setTheme]) => {
                    return <Component theme={theme} setTheme={setTheme} {...this.props}/>
                }}
            </ThemeContext.Consumer>
        )
       }
    }
}
