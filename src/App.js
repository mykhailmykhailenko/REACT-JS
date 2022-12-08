import React, {useState} from "react";
import WindowSizer from "./components/WindowSizer";
import SingForm from "./components/SingForm"

function App(props) {


    return (
      <SingForm />
    )
}

export default App;
/*
Контекст
1. Створити контекст
2. Обернути дерево компонент у Provider, значення контексту передати у проп value
3. У компоненті, яка потребує контексту, обернути компонентою-Консьюмером і прийняти value у рендер-пропсі, з якого повернути розмітку 
*/