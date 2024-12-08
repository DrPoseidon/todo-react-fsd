import TaskRow from "@/entities/task/ui/task-row";
import {TTask} from "@/entities/task";
import {TTasks} from "@/shared/types";

interface Props { tasks: TTasks, toggleTaskCompleted: (task: TTask) => void }

export default function TasksList({ tasks, toggleTaskCompleted }: Props) {
  return (
    <div className="tasks-list">
      {Object.values(tasks).map((task) => (
        <TaskRow key={task.id} task={task} completeTask={toggleTaskCompleted}/>
      ))}
    </div>
  )
}
