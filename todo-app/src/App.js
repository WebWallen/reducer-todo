import React, { useReducer } from 'react';
import { initialState, todoReducer } from './reducers/reducer';
import './components/Todo.css';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  // ^ spreads in the initial state and all the app's functions (listed below) 

  const completed = (id) => { // needs ID to register click selection
    dispatch({ type: 'MARK_COMPLETE', payload: id })
    // IMPORTANT: this function name has to match what's in TodoList or it'll break
  }

  const clearCompleted = () => {
    dispatch({ type: 'CLEAR_COMPLETED '}) // no payload as there's no text or click handler
  }

  return (
      <div className="App">
        <h2>Today's Most Important Tasks</h2>
        <TodoList state={state} />
        <TodoForm dispatch={dispatch} />
      </div>
  );
}

export default App;