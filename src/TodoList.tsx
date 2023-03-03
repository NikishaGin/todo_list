import React from 'react';
import {FilterValuesType} from "./App";

type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}

type PropsType = {
    tasks: TaskType []
    title: string
    removeTasks: (id: number) => void
    filteredTasks: (value: FilterValuesType) => void
}


export const TodoList = (props: PropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map(el => {
                    return<li key={el.id}>
                        <button onClick={()=>props.removeTasks(el.id)}>X</button>
                        <input type={"checkbox"} checked={el.isDone}/>
                        <span>{el.title}</span>
                    </li>
                })}
            </ul>
            <div>
                <button onClick={()=>props.filteredTasks('all')}>All</button>
                <button onClick={()=>props.filteredTasks('active')}>Active</button>
                <button onClick={()=>props.filteredTasks('completed')}>Completed</button>
            </div>
        </div>
    );
};

