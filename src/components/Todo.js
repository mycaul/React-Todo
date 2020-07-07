import React from "react";
import "./Todo.css";

const Todo = props => {
    return (
        <div 
            onClick={() => props.toggleTodo(props.todo.id)}
            className={`todo${props.todo.completed ? " completed" : ""}`}
        >
            <p>{props.todo.name}</p>
        </div>
    )
};

export default Todo;