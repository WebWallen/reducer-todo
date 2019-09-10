import React, { useState, useReducer } from 'react';
import { initialState, todoReducer } from './reducers/reducer';
import './components/Todo.css';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

export default function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [todo, setTodo] = useState('');

  return (
    <div className="App">
      <h2>Today's Most Important Tasks</h2>
      <TodoList state={state} dispatch={dispatch} />
      <TodoForm todo={todo} setTodo={setTodo} dispatch={dispatch} />
    </div>
  )
}