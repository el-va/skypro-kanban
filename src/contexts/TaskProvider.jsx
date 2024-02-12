import { createContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { AppRoutes } from "../lib/AppRoutes";

export const TaskContext = createContext(null);

export function TaskProvider({ children }) {
  const [tasks, setTask] = useState(null);
  // const navigate = useNavigate();

  function setTaskData(newTasks) {
    setTask(newTasks);
    // navigate(AppRoutes.HOME);
  }

  return (
    <TaskContext.Provider value={{ tasks, setTaskData }}>
      {children}
    </TaskContext.Provider>
  );
}
