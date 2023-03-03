import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./TodoList";

export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {

    const [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ])

    const removeTasks = (id: number) => {
        setTasks(tasks.filter(el => el.id !== id))
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
                      filteredTasks={changeTasks}/>
        </div>
    );
}

export default App;
