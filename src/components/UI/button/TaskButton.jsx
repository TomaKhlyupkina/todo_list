import React from 'react';
import classes from "./TaskButton.module.css"

const TaskButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.taskBtn}>
            {children}
        </button>
    );
};

export default TaskButton;