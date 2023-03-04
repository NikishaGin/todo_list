import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType} from "./App";

type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}

type PropsType = {
    tasks: TaskType []
    title: string
    removeTasks: (id: string) => void
    filteredTasks: (value: FilterValuesType) => void
    addTasks: (title: string) => void
}


export const TodoList = (props: PropsType) => {

    const [title, setTitle] = useState('')

    const onChangeHAndler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onClickAddTasksHandler = () => {
        props.addTasks(title)
        setTitle('')
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onClickAddTasksHandler()
        }
    }

    const onClickAllHandler = () => props.filteredTasks('all')
    const onClickActiveHandler = () => props.filteredTasks('active')
    const onClickCompletedHandler = () => props.filteredTasks('completed')


    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={title} onChange={onChangeHAndler} onKeyPress={onKeyPressHandler}/>
                <button onClick={onClickAddTasksHandler}>+</button>
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
                <button onClick={onClickAllHandler}>All</button>
                <button onClick={onClickActiveHandler}>Active</button>
                <button onClick={onClickCompletedHandler}>Completed</button>
            </div>
        </div>
    );
};

