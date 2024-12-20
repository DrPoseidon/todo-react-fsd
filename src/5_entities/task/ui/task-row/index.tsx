import {TTask} from "@/entities/task";
import './style.css'
import classNames from "classnames";

// import { ReactComponent as EditIcon }  from "@/shared/assets/svg/edit.svg";

interface Props {
  task: TTask,
  completeTask: (value:TTask) => void
}

export default function TaskRow({ task, completeTask }: Props) {
  const handleChange = () => {
    completeTask(task)
  }

  return (
    <div className={classNames(
      "task-row",
      {
        "task-row--completed": task.completed
      }
    )}>
      <div className="task-row__task-info">
        <input type="checkbox" checked={task.completed} onChange={handleChange}/>

        <div className="task-row__task-title">{task.title}</div>
      </div>

      <div className="task-row__task-controls">
        {/*<a href=""><EditIcon/></a>*/}

        <a href="">
          <div className="task-row__task-controls-edit task-row__icon"></div>
        </a>

        <a href="">
          <div className="task-row__task-controls-remove task-row__icon"></div>
        </a>
      </div>
    </div>
  )
}
