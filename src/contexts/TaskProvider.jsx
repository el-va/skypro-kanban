import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../lib/Approutes";

export const TaskContext = createContext(null);

export function TaskProvider({ children }) {
  const [task, setTask] = useState(JSON.parse(localStorage.getItem("task")));
  const navigate = useNavigate();

  function toTask({data}) {
    setTask(data.tasks);
    navigate(AppRoutes.MAIN);
  }

  return (
    <TaskContext.Provider value={{ task, toTask }}>
      {children}
    </TaskContext.Provider>
  );
}