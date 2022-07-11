import React from 'react';
import TaskItem from "./taskItem/TaskItem";

const TaskList = ({tasks, title, remove, complete, setEditingFlag, edit, resetEditingFlag}) => {
    if (!tasks.length) {
        return (
            <div>
                <h1 style={{textAlign:"center"}}>NO TASKS</h1>
            </div>
        )
    }

    return (
        <div>
            <h1 style={{textAlign:"center"}}>{title}</h1>
            {tasks.map((task) =>
                <TaskItem key={task.id}
                          task={task}
                          remove={remove}
                          complete={complete}
                          setEditingFlag={setEditingFlag}
                          edit={edit}
                          resetEditingFlag={resetEditingFlag}
                />
            )}
        </div>
    );
};

export default TaskList;