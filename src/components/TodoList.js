// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";



const TodoList = props => {
    return (
        <div className="list">
            {props.todos.map(todo => (
                <Todo toggleTodo={props.toggleTodo} key={todo.id} todo={todo} /> 
            ))}

            <button onClick={props.clearCompleted}>Clear Completed</button>
        </div>
    )
};

export default TodoList;
