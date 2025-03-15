import './App.css'
import {TodolistItem, TypeTask} from "./components/TodolistItem/TodolistItem.tsx";
import {useState} from "react";

export type FilterValuesType = "all" | "active" | "completed";

export const App = () => {
    let [tasks, setTasks] = useState<Array<TypeTask>>([
        { id: 1, title: 'HTML&CSS', isDone: true },
        { id: 2, title: 'JS', isDone: true },
        { id: 3, title: 'ReactJS', isDone: false },
        { id: 4, title: 'Redux', isDone: false },
        { id: 5, title: 'Typescript', isDone: false },
        { id: 6, title: 'Jest', isDone: false },
    ]);

    const [filter, setFilter] = useState<FilterValuesType>("all");

    function removeTask(id: number) {
        let filteredTasks = tasks.filter(task => task.id !== id)
        setTasks(filteredTasks);
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    let tasksForTodolist = tasks;
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(task => task.isDone === true)
    }
    if (filter === "active") {
        tasksForTodolist = tasks.filter(task => task.isDone === false)
    }
  return (
      <>
          <TodolistItem
              title="What to learn"
              tasks={tasksForTodolist}
              removeTask={removeTask}
              changeFilter={changeFilter}
          />
      </>
  )
}