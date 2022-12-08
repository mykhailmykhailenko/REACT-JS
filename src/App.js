import React, {useState} from "react";
import Tree from './components/Tree';
import ThemeContext from "./contexts/ThemeContext";
import UserContext from "./contexts/UserContext";
import UserDashboard from './components/UserDashboard';
import CONSTANTS from "./constants";
import UserLoader from "./components/UserLoader";
import { getUsers } from "./api/user.js";
const {THEMES} = CONSTANTS;

function App(props) {


    return (
      <UserLoader />
    )
}

export default App;
/*
Контекст
1. Створити контекст
2. Обернути дерево компонент у Provider, значення контексту передати у проп value
3. У компоненті, яка потребує контексту, обернути компонентою-Консьюмером і прийняти value у рендер-пропсі, з якого повернути розмітку 
*/