import React from "react";

export default function Todo (props) {
   
    return (
        <div className={props.todo.completed ? "completed" : ""}>
            <p>{props.todo.item}</p>
        </div>
    )
}