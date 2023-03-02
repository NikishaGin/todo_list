import React from 'react';

type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}

type PropsType = {
    tasks: TaskType []
    title: string
}


export const TodoList = (props: PropsType) => {
    return (
        <div>
            <h2>{props.title}</h2>
        </div>
    );
};

