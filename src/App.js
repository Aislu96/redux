import './App.css';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "./store/todoSlice";
import TodoList from "../src/components/TodoList";
import InputField from "./components/InputField";

function App() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const addTask = () => {
        dispatch(addTodo({text}));
        setText('');
    }

    return (
        <div className="App">
            <InputField text={text} handelInput={setText} handelSubmit={addTask}/>
            <TodoList/>
        </div>
    );
}

export default App;
