import React from "react";

const ToDo = (props) => {

    const { todo, completed } = props

    const checkOff = (e, action) => {
        e.preventDefault();
        props.dispatch(action);
    }
   
    return (
        <div onClick={(e) => checkOff(e, {type: 'MARK_COMPLETE', payload: {...todo, completed: true}})}>
            <p style={completed ? { color: 'red' } : { color: 'black' }}>{todo.item}</p>
        </div>
    );
}

export default ToDo;