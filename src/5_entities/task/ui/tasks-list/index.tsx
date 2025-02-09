import { TTask } from "@/entities/task";
import TaskRow from "@/entities/task/ui/task-row";
import { TTasks } from "@/shared/types";

interface Props {
  className?: string;
  tasks: TTasks;
  toggleTaskCompleted: (task: TTask) => void;
  onEditTask: (task: TTask) => void;
  onRemoveTask: (task: TTask) => void;
}

export default function TasksList({
  className,
  tasks,
  toggleTaskCompleted,
  onEditTask,
  onRemoveTask,
}: Props) {
  return (
    <div className={`tasks-list ${className || ""}`}>
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
