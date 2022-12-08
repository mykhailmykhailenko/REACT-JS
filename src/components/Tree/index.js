import React, {useCallback, useContext, useEffect} from 'react';
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

      const changeTheme = () => {
         setTheme(theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK);
      }

      const memoizedFunc = useCallback(()=>{
         console.log(props.value);
            }, [props.value]);

      useEffect(() => {
         console.log('функція перестворилась')        
      }, [memoizedFunc]);



                  return (
                      <div className={cn}>
                         <p>{user.firstName}</p>
                         <p>Tree</p>
                         <button onClick={changeTheme}>change theme</button>
                         {memoizedFunc()}
                        <Parent />
                      </div>
                  )
}
export default Tree;