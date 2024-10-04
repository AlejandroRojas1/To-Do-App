
type TaskProps = {
  task: string,
  deleteTask: ()=> void
}

const Task = ({task, deleteTask}: TaskProps) => {
  return (
    <div className="bg-slate-500 rounded-lg mb-5 mx-10 flex justify-between items-center px-3">
      <span className=" text-center">{task}</span>
      <button
          className=" h-8 w-28 my-3 rounded-lg text-slate-900 font-medium bg-slate-400  hover:bg-slate-800 hover:text-white"
          onClick={deleteTask}
        >Eliminar</button>
    </div>
  )
}

export default Task