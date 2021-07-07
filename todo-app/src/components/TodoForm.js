import React, { useState } from 'react';
import "./Todo.css";

const TodoForm = (props) => {

    const [todo, setTodo] = useState("");

    const { clearCompleted } = props; // pulled in functions from App

    const handleChange = (event) => {
        const newTodo = event.target.value;
        setTodo(newTodo); // using set state to create the new todo list task
    }

    const submitTodo = (e, action) => {
        e.preventDefault();
        props.dispatch(action);
        setTodo("");
    }

    const clearAll = (e, action) => {
        e.preventDefault();
        props.dispatch(action);
    }

    return (
        <div>
            <form onSubmit={(e) => submitTodo(e, {type: 'NEW_TODO', payload: {item: todo, completed: false, id: Date.now()}})}>
                <input
                    type="text"
                    name="todo"
                    value={todo}
                    className="form-field"
                    onChange={handleChange} // not sure why I can't just call the method here?
                    placeholder={'Add Task Here'}
                />
                <button className="form-field">Add New Task</button>
                <button className="form-field" onClick={(e) => clearAll(e, {type: 'CLEAR_ALL', payload: []})}>Clear All</button>
                <button className="form-field" onClick={clearCompleted}>Clear Completed Tasks</button>
            </form>
        </div>
    );
}

export default TodoForm;