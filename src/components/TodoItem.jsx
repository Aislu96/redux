const TodoItem = ({id, text, completed, removeTodo, toggleTodoCompete}) => {
    return (
        <li>
            <input type="checkbox" checked={completed} onChange={() => toggleTodoCompete(id)}/>
            <span>{text}</span>
            <span className="delete" onClick={() => removeTodo(id)}>&times;</span>
        </li>
    )
}


export default TodoItem;
