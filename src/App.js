import React from "react";
import WindowSizer from "./components/WindowSizer";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Counter from './components/Counter';
import LoginForm from './components/LoginForm';
import TodoList from './components/TodoList';
import CounterPage from './pages/CounterPage';


class App extends React.Component {
  
    render () {
        return (
            <BrowserRouter>
                <ul>
                    <li><Link to="/">Go to Home</Link></li>
                    <li><Link to="/counter">Go to CounterPage</Link></li>
                    <li><Link to="/login">Go to LoginForm</Link></li>
                    <li><Link to="/todo">Go to Todo</Link></li>
                </ul>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/counter" element={<CounterPage />}/>
                    <Route path="/login" element={<LoginForm />}/>
                    <Route path="/todo" element={<TodoList />}/>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
            </BrowserRouter>
        )
    }
}
export default App;
const NotFound = () => {
    return <div>Page not found</div>
}
const Home = () => {
    return <h1>You are home now</h1>
}