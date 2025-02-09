import { TTask } from "@/entities/task";
import TasksList from "@/entities/task/ui/tasks-list";
import AddTask from "@/features/add-task";
import { TTasks } from "@/shared/types";
import { useReducer } from "react";
import "./styles.css";

export default function TaskList() {
  const [tasks, dispatch] = useReducer(tasksReducer, {});

  const handleAddTask = (task: TTask) => {
    dispatch({
      type: "ADD_TASK",
      payload: task,
    });
  };

  const handleToggleTaskCompleted = (task: TTask) => {
    dispatch({
      type: "TOGGLE_TASK_COMPLETED",
      payload: task,
    });
  };

  const handleEditTask = (task: TTask) => {
    console.log("edit task", task);

    // dispatch({
    //   type: "EDIT_TASK",
    //   payload: task,
    // });
  };

  const handleRemoveTask = (task: TTask) => {
    dispatch({
      type: "REMOVE_TASK",
      payload: task,
    });
  };

  return (
    <div className="task-list">
      <AddTask addTask={handleAddTask} />

      <TasksList
        tasks={tasks}
        toggleTaskCompleted={handleToggleTaskCompleted}
        onEditTask={handleEditTask}
        onRemoveTask={handleRemoveTask}
      />
    </div>
  );

  function tasksReducer(
    tasks: TTasks,
    action: {
      type: string;
      payload: TTask;
    }
  ) {
    switch (action.type) {
      case "ADD_TASK": {
        const prevTasks = { ...tasks };
        prevTasks[action.payload.id] = action.payload;
        return prevTasks;
      }

      case "REMOVE_TASK": {
        const prevTasks = { ...tasks };
        delete prevTasks[action.payload.id];
        return prevTasks;
      }

      case "TOGGLE_TASK_COMPLETED": {
        const prevTasks = { ...tasks };
        prevTasks[action.payload.id] = {
          ...action.payload,
          completed: !action.payload.completed,
        };
        return prevTasks;
      }

      case "EDIT_TASK": {
        const prevTasks = { ...tasks };
        prevTasks[action.payload.id] = action.payload;
        return prevTasks;
      }

      default: {
        return tasks;
      }
    }
  }
}
