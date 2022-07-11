import React, {useState} from 'react';
import TaskInput from "../UI/input/TaskInput";
import TaskButton from "../UI/button/TaskButton";
import classes from "./TaskForm.module.css"

const TaskForm = ({create}) => {
    const [task, setTask] = useState({item: ""})

    const addNewTask = (e) => {
        e.preventDefault()
        const newTask = {
            ...task, id: Date.now(), complete: false
        }
        create(newTask)
        setTask({item: ""})
    }

    return (
        <form className={classes.taskForm}>
            <TaskInput
                value={task.item}
                placeholder={"Enter task"}
                onChange={e => setTask({...task, item: e.target.value})}
                type="text"
            />
            <TaskButton onClick={addNewTask}>
                Add Task
            </TaskButton>
        </form>
    );
};

export default TaskForm;