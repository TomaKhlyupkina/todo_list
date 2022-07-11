import React from 'react';
import classes from "./TaskInput.module.css"
const TaskInput = (props) => {
    return (
        <input className={classes.taskInput} {...props}/>
    );
};

export default TaskInput;