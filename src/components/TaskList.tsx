import Task from "./Task"

type TasksProps = {
    tasks: string[],
    deleteTask: (index: number) => void
}

const TaskList = ({tasks, deleteTask}: TasksProps) => {
  return (
    <div>
        {tasks.map((task, index)=>(
          <Task key={index} task={task} deleteTask={()=>deleteTask(index)}></Task>
        ))}
    </div>
  )
}

export default TaskList