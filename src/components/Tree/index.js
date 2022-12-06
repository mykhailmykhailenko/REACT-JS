import React from 'react';
import Parent from './Parent';
import styles from './Tree.module.css';
import cx from 'classnames';
import ThemeContext from '../../contexts/ThemeContext';
import CONSTANTS from '../../constants';
const {THEMES} = CONSTANTS;
function Tree (props) {

  return (
   <ThemeContext.Consumer>
      {([theme, setTheme])=>{
          const cn = cx(styles.container, {
            [styles.darkTheme]: theme === THEMES.DARK,
            [styles.lightTheme]: theme === THEMES.LIGHT
          });
          return (
             <div className={cn}>
                <p>Tree</p>
                <Parent />
             </div>
          )
      }}
   </ThemeContext.Consumer>
  )
}
export default Tree;