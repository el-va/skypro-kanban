import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../lib/AppRoutes";

export const TaskContext = createContext(null);

export function TaskProvider({ children }) {
  const [task, setTask] = useState(null);
  const navigate = useNavigate();

  function toTask(data) {
    setTask(data.tasks);
    navigate(AppRoutes.HOME);
  }

  return (
    <TaskContext.Provider value={{ task, toTask }}>
      {children}
    </TaskContext.Provider>
  );
}