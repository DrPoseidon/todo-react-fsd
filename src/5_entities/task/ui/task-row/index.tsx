import { TTask } from "@/entities/task";
import classNames from "classnames";
import "./style.css";

// import { ReactComponent as EditIcon }  from "@/shared/assets/svg/edit.svg";

interface Props {
  task: TTask;
  toggleTaskCompleted: (value: TTask) => void;
  onEdit: (task: TTask) => void;
  onRemove: (task: TTask) => void;
}

export default function TaskRow({
  task,
  toggleTaskCompleted,
  onEdit,
  onRemove,
}: Props) {
  const handleChange = () => {
    toggleTaskCompleted(task);
  };

  return (
    <div
      className={classNames("task-row", {
        "task-row--completed": task.completed,
      })}
    >
      <div className="task-row__task-info">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleChange}
        />

        <div className="task-row__task-title">{task.title}</div>
      </div>

      <div className="task-row__task-controls">
        {/*<a href=""><EditIcon/></a>*/}

        <a onClick={() => onEdit(task)}>
          <div className="task-row__task-controls-edit task-row__icon"></div>
        </a>

        <a onClick={() => onRemove(task)}>
          <div className="task-row__task-controls-remove task-row__icon"></div>
        </a>
      </div>
    </div>
  );
}
