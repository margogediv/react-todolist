import {TodolistTitle} from "../TodolistTitle/TodolistTitle.tsx";
import {TodolistForm} from "../TodolistForm/TodolistForm.tsx";
import {FilterValuesType} from "../../App.tsx";

export type TypeTask = {
    id: number
    title: string
    isDone: boolean
}

type Props = {
    title: string
    tasks: Array<TypeTask>
    date?: string
    removeTask: (id: number) => void
    changeFilter: (value: FilterValuesType) => void
}

export const TodolistItem = ({ title, tasks, date, removeTask, changeFilter }: Props) => {
    return (
        <div className="app">
            <div>
                <TodolistTitle title={title} />
                <TodolistForm />
                {tasks.length === 0 ?(
                    <p>Тасок нет</p>
                ) : (
                    <ul>
                        {tasks.map((task) => {
                            return (
                                <li key={task.id}>
                                    <input type="checkbox" checked={task.isDone}/>
                                    <span>{task.title}</span>
                                    <button onClick={() => {removeTask(task.id)}}>x</button>
                                </li>
                            )
                        })}
                    </ul>
                )}
                <div>
                    <button onClick={() => {changeFilter('all')}}>all</button>
                    <button onClick={() => {changeFilter('active')}}>active</button>
                    <button onClick={() => {changeFilter('completed')}}>completed</button>
                </div>
                <div>{date}</div>
            </div>
        </div>
    )
}