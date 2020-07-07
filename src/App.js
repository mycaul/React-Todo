import React from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";


const todos = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {
      todos: todos
    }
  }

  addTodo = todoName => {
    const newTodo = {
      name: todoName,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  };

  toggleTodo = todoId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  };


  render() {
    return (
      <div className="App">
        <h2> To-Do App</h2>
        <TodoForm addTodo={this.addTodo} />
        <TodoList 
          toggleTodo={this.toggleTodo} 
          todos={this.state.todos} 
          clearCompleted={this.clearCompleted}
        />
        
    
      </div>
    );
  }
}

export default App;