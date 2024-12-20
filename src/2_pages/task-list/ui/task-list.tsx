import './styles.css';
import AddTask from "@/features/add-task";
import {TTask} from "@/entities/task";
import TasksList from "@/entities/task/ui/tasks-list";
import {TTasks} from "@/shared/types";
import {useImmer} from "use-immer";

export default function TaskList() {
  const [tasks, setTasks] = useImmer<TTasks>({});

  const addTask = (task: TTask) => {
    setTasks(prevTasks => {
      prevTasks[task.id] = task;
    })
  }

  const toggleTaskCompleted = (task: TTask) => {
    setTasks(prevTasks => {
      const newTasks = { ...prevTasks };
      newTasks[task.id] = { ...task, completed: !task.completed };

      return newTasks;
    });
  }

  return (
    <div className="task-list">
      <AddTask addTask={addTask}/>

      <TasksList tasks={tasks} toggleTaskCompleted={toggleTaskCompleted}/>
    </div>
  )
}
