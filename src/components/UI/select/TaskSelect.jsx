import React from 'react';
import classes from "./TaskSelect.module.css"

const TaskSelect = ({value, defaultValue, options, onChange}) => {
    return (
        <div>
            <select className={classes.taskSelect}
                    value={value}
                    onChange={e => onChange(e.target.value)}
            >
                <option disabled value="">{defaultValue}</option>
                {options.map(option =>
                    <option key={option.value} value={option.value}>{option.name}</option>
                )}
            </select>
        </div>
    );
};

export default TaskSelect;