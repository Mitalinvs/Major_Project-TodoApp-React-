import React, { useState } from 'react';
import TodoList from './TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState(["Mitali"]);                 //same as todos= []
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input]);
      setInput('');                                               //To empty input feild after adding
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);     //filter keepes that indexes != index
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new task"
          value={input}
          onChange={(e) => setInput(e.target.value.toUpperCase())}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default App;