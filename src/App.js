import React, { Component } from 'react';
import Todos from './Todos';
import AddForm from './AddForm';


class App extends Component {
  // Make the state
  state = {
    todos: [
      { id: 1, content: 'Get groceries' },
      { id: 2, content: 'Study programming' },
      { id: 3, content: 'Sleep' }
    ]
  }

  // Function to delete Todo
  deleteTodo = (id) => {
    console.log(id);
    const todos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: todos });
  }

  // Add todo from form 
  addTodo = (todo) => {
    // Must give unique Id
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({ todos: todos });
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className='center blue-text'>Todo's</h1>
        <AddForm addTodo={this.addTodo} />
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />

      </div>
    );
  }
}

export default App;
