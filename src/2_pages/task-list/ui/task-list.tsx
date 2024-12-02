import './styles.css';
import {useState} from "react";
import AddTask from "@/features/add-task";
import {TTask} from "@/entities/task";

export default function TaskList() {
  const [tasks, setTasks] = useState<TTask[]>([]);

  const addTask = (task: TTask) => {
    setTasks([...tasks, task])
  }


  return (
    <div className="task-list">
      <AddTask addTask={addTask}/>

      {tasks.map((task) => (
        <div key={task.id}>{task.title}</div>
      ))}
    </div>
  )
}
