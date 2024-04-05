import TodoItem from "./TodoItem";

const TodoList = ({todos, toggleTodoCompete, removeTodo}) => {
    return (
        <ul> {todos.map(todo => (
            <TodoItem key={todo.id}
                      toggleTodoCompete={toggleTodoCompete}
                      removeTodo={removeTodo}
                      {...todo}/>
        ))}
        </ul>
    )
}

export default TodoList;
