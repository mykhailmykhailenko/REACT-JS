import React, {useContext} from 'react';
import Parent from './Parent';
import styles from './Tree.module.css';
import cx from 'classnames';
import UserContext from '../../contexts/UserContext';
import ThemeContext from '../../contexts/ThemeContext';
import CONSTANTS from '../../constants';
const {THEMES} = CONSTANTS;


function Tree (props) {
   const [user, setUser] = useContext(UserContext);
   const [theme, setTheme] = useContext(ThemeContext);

    const cn = cx(styles.container, {
                     [styles.darkTheme]: theme === THEMES.DARK,
                     [styles.lightTheme]: theme === THEMES.LIGHT
                  });
                  return (
                      <div className={cn}>
                         <p>{user.firstName}</p>
                         <p>Tree</p>
                        <Parent />
                      </div>
                  )

}

export default Tree;