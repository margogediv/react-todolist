import {TodolistTitle} from "../TodolistTitle/TodolistTitle.tsx";
import {TodolistForm} from "../TodolistForm/TodolistForm.tsx";
import {FilterValuesType} from "../../App.tsx";

export type TypeTask = {
    id: string;
    title: string
    isDone: boolean
}

type Props = {
    title: string
    tasks: Array<TypeTask>
    date?: string
    removeTask: (id: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
}

export const TodolistItem = ({ title, tasks, date, removeTask, changeFilter, addTask }: Props) => {
    const onAllClickHandler = () => {changeFilter('all')};
    const onActiveClickHandler = () => {changeFilter('active')};
    const onCompletedClickHandler = () => {changeFilter('completed')};

    return (
        <div className="app">
            <div>
                <TodolistTitle title={title} />
                <TodolistForm addTask={addTask}/>
                {tasks.length === 0 ?(
                    <p>Тасок нет</p>
                ) : (
                    <ul>
                        {
                            tasks.map(task => {
                                const onRemoveHandler = () => {
                                    removeTask(task.id)
                                }

                                return (
                                    <li key={task.id}>
                                        <input type="checkbox" checked={task.isDone}/>
                                        <span>{task.title}</span>
                                        <button onClick={onRemoveHandler}>x</button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                )}
                <div>
                    <button onClick={onAllClickHandler}>all</button>
                    <button onClick={onActiveClickHandler}>active</button>
                    <button onClick={onCompletedClickHandler}>completed</button>
                </div>
                <div>{date}</div>
            </div>
        </div>
    )
}