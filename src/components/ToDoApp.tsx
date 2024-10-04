import { useState } from "react"
import TaskList from "./TaskList";

const ToDoApp = () => {
  const [newTask, setNewTask] = useState<string>('')
  const [tasks, setTasks] = useState<string[]>([])

  const handleAddTask = () => {
    if (newTask.trim() === '') return
    setTasks(prevTasks => [...prevTasks, newTask])
    setNewTask('')
  }

  const handleDeleteTask = (index: number) => {
    setTasks(tasks => tasks.filter((_, i) => i !== index))
  }

  return (
    <>
      <div className="container w-5/12 mt-16 mx-auto">
      <div className="mb-8 pb-3 bg-slate-400 flex flex-col rounded-xl">
        <h1 className="text-4xl font-bold text-center my-8">Lista de Tareas</h1>
        <input
          className=" px-3 h-10 mx-5 rounded-lg bg-slate-200 focus:outline-0 focus:border-2 focus:border-fuchsia-950"
          type="text"
          value={newTask}
          onChange={(e) => { setNewTask(e.target.value) }}
          placeholder="Agregar Nueva Tarea"
        />
        
          <button
            className="h-10 w-28 ml-5 my-3 rounded-lg text-slate-900 font-medium bg-indigo-300  hover:bg-indigo-950 hover:text-white"
            onClick={handleAddTask}
          >Agregar Tarea</button>
        </div>

        <TaskList tasks={tasks} deleteTask={handleDeleteTask}></TaskList>
      </div>
    </>

  )
}

export default ToDoApp