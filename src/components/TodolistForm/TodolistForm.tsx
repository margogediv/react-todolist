import {ChangeEvent, KeyboardEvent, useState} from "react";

type FormProps = {
    addTask: (title: string) => void
}

export const TodolistForm = (props: FormProps) => {
    const [newTaskTitle, setNewTaskTitle] = useState("");

    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            props.addTask(newTaskTitle);
            setNewTaskTitle("");
        }
    }

    const addTask = () => {
        props.addTask(newTaskTitle);
        setNewTaskTitle("");
    }

    return (
        <div>
            <input
                value={newTaskTitle}
                onChange={onNewTitleChangeHandler}
                onKeyDown={onKeyPressHandler}
            />
            <button onClick={addTask}>+</button>
        </div>
    )
}