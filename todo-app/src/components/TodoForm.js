import React from "react";
import "./Todo.css";

export default function TodoForm (props) {
    const handleChange = (event) => {
        props.setTodo(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        props.dispatch({
            type: 'NEW_TODO',
            payload: props.todo
        });

        props.setTodo();
    }

    const handleDelete = (event) => {
        props.dispatch({
            type: 'CLEAR_COMPLETE',
        })
    }

    return (
        <div>
            <input
                type="text"
                value={props.todo}
                className="form-field"
                onChange={handleChange}
                placeholder='Add Task Here'
            />
            <button className="form-field" type="submit" onClick={handleSubmit}>Add New Task</button>
            <button className="form-field" type="submit" onClick={handleDelete}>Clear Completed Tasks</button>
        </div>
    )
}