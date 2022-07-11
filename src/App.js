import React, {useMemo, useState} from "react";
import "./styles/App.css"
import TaskList from "./components/TaskList";
import TaskForm from "./components/taskForm/TaskForm";
import TaskFilter from "./components/TaskFilter";

function App() {
    const [tasks, setTasks] = useState( [
        {id: 1, item: "Buy food", complete: false, isEditing: false},
        {id: 2, item: "Bathroom", complete: false, isEditing: false},
        {id: 3, item: "Cleaning", complete: false, isEditing: false},
        {id: 4, item: "Work", complete: false, isEditing: false},
        {id: 5, item: "Gym", complete: false, isEditing: false},
        {id: 6, item: "Meeting", complete: false, isEditing: false},
        {id: 7, item: "Walking in the park", complete: false, isEditing: false},
        {id: 8, item: "Going to the parents", complete: false, isEditing: false},
        {id: 9, item: "Visit the museum", complete: false, isEditing: false},
        {id: 10, item: "Watch Youtube", complete: false, isEditing: false},
    ]
    )

    const [filter, setFilter] = useState({sort: "", search: ""})

    const createTask = (newTask) => {
        setTasks([...tasks, newTask])
    }

    const applyFunctionById = (task, func) => {
        const changedTaskList = tasks.map(t => {
            if (t.id === task.id) {
                return func()
            }
            return t
        })
        setTasks(changedTaskList)
    }

    const completeTask = (task) => {
        applyFunctionById(task, () => {return {...task, complete: !task.complete}})
    }

    const setEditingFlag = (task) => {
        applyFunctionById(task, () => {return {...task, isEditing: true }})
    }

    const resetEditingFlag = (task) => {
        applyFunctionById(task, () => {return {...task, isEditing: false}})
    }

    const editTask = (task, newVal) => {
        applyFunctionById(task, () => {return {...task, item: newVal}})
    }

    const removeTask = (task) => {
        setTasks(tasks.filter(t => t.id !== task.id))
    }

    const sortTasksByName = (tasks) => {
        return tasks.sort((a, b) => a.item.localeCompare(b.item))
    }

    const sortTasksByCompleted = (tasks) => {
        return tasks.sort((a, b) => Number(a.complete) - Number(b.complete))
    }

    const sortedTasks = useMemo(() => {
        switch (filter.sort) {
            case "item" :
                return  sortTasksByName([...tasks])
            case "complete" :
                return  sortTasksByCompleted([...tasks])
            default :
                return tasks
        }
    }, [filter.sort, tasks])

    const sortedAndSearchedTasks = useMemo(() => {
        if (filter.search) {
            return sortedTasks.filter(task => task.item.toLowerCase().includes(filter.search.toLowerCase()))
        }
        return sortedTasks
    }, [filter.search, sortedTasks])

    const changeSortType = (sortType) => {
        setFilter({...filter, sort: sortType})
    }
    const changeSearchQuery = (searchQuery) => {
        setFilter({...filter, search: searchQuery})
    }

    return (
        <div className="App">
            <TaskForm create={createTask}/>
            <TaskFilter
                filter={filter}
                setFilterSort={changeSortType}
                setSearchQuery={changeSearchQuery}
            />
            <TaskList
                title={"TO DO"}
                tasks={sortedAndSearchedTasks}
                remove={removeTask}
                complete={completeTask}
                setEditingFlag={setEditingFlag}
                edit={editTask}
                resetEditingFlag={resetEditingFlag}
            />
        </div>

    );
}

export default App;
