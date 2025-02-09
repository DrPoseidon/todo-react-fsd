import { TaskList } from "@/pages/task-list";

import "./styles.css";

export default function App() {
  return (
    <div className="app-container">
      <div className="task-list-wrapper">
        <h1>Task List</h1>

        <TaskList />
      </div>
    </div>
  );
}
