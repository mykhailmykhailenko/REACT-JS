import React, {useState} from "react";
import Tree from './components/Tree';
import ThemeContext from "./contexts/ThemeContext";
import UserContext from "./contexts/UserContext";
import CONSTANTS from "./constants";
const {THEMES} = CONSTANTS;

function App(props) {
  const [user, setUser] = useState({
                            firstName: 'John Doe'
                              });
  const [theme, setTheme] = useState(THEMES.LIGHT);

    return (
      <ThemeContext.Provider value={[theme, setTheme]}>
      <UserContext.Provider value={[user, setUser]}>
        <Tree />
      </UserContext.Provider>
      </ThemeContext.Provider>
    )
}


export default App;


/*
Контекст
1. Створити контекст
2. Обернути дерево компонент у Provider, значення контексту передати у проп value
3. У компоненті, яка потребує контексту, обернути компонентою-Консьюмером і прийняти value у рендер-пропсі, з якого повернути розмітку 
*/