import { useContext } from "react";
import { TaskContext } from "../contexts/TaskProvider";

export default function useTask() {
  return useContext(TaskContext);
}
