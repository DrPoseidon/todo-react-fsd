import { TTask } from "@/entities/task";
import TaskRow from "@/entities/task/ui/task-row";
import { TTasks } from "@/shared/types";

interface Props {
  tasks: TTasks;
  toggleTaskCompleted: (task: TTask) => void;
  onEditTask: (task: TTask) => void;
  onRemoveTask: (task: TTask) => void;
}

export default function TasksList({
  tasks,
  toggleTaskCompleted,
  onEditTask,
  onRemoveTask,
}: Props) {
  return (
    <div className="tasks-list">
      {Object.values(tasks).map((task) => (
        <TaskRow
          key={task.id}
          task={task}
          toggleTaskCompleted={toggleTaskCompleted}
          onEdit={onEditTask}
          onRemove={onRemoveTask}
        />
      ))}
    </div>
  );
}
