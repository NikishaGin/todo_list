import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./TodoList";
import {v1} from "uuid";

export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {

    const [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false}
    ])

    const removeTasks = (id: string) => {
        setTasks(tasks.filter(el => el.id !== id))
    }

    const addTasks = (title: string) => {
        const newTasks = {id: v1(), title: title, isDone: false}
        setTasks([newTasks, ...tasks])
    }

    const [filter, setFilter] = useState<FilterValuesType>('all')

    let tasksForTodoLists = tasks

    if (filter === 'active') {
        tasksForTodoLists = tasks.filter(el => el.isDone === false)
    }

    if (filter === 'completed') {
        tasksForTodoLists = tasks.filter(el => el.isDone === true)
    }

    const changeTasks = (value: FilterValuesType) => {
        setFilter(value)
    }

    return (
        <div className="App">
            <TodoList tasks={tasksForTodoLists}
                      title={'What to learn'}
                      removeTasks={removeTasks}
                      filteredTasks={changeTasks}
                      addTasks={addTasks}
            />
        </div>
    );
}

export default App;
