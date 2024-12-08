import {TTask} from "@/entities/task";

interface Props {
  task: TTask,
  completeTask: (value:TTask) => void
}

export default function TaskRow({ task, completeTask }: Props) {
  const handleChange = () => {
    completeTask(task)
  }

  return (
    <div className="task-row">
      <input type="checkbox" checked={task.completed} onChange={handleChange}/>

      <div key={task.id}>{task.title}</div>
    </div>
  )
}
