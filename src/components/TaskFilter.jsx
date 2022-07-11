import React from 'react';
import TaskSelect from "./UI/select/TaskSelect";
import TaskInput from "./UI/input/TaskInput";

const TaskFilter = ({filter, setFilterSort, setSearchQuery}) => {
    return (
        <div>
            <TaskSelect
                value={filter.sort}
                defaultValue={"Sort"}
                options={[
                    {value: "item", name: "By name"},
                    {value: "complete", name: "By status"}
                ]}
                onChange={selectedSort => setFilterSort(selectedSort)}
            />

            <TaskInput
                value={filter.search}
                placeholder={"Search..."}
                onChange={e => setSearchQuery(e.target.value)}
            />
        </div>
    );
};

export default TaskFilter;