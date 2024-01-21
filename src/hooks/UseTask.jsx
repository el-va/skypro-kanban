import { useContext } from "react";
import { TaskContext } from "../contexts/UserProvider";

export default function useTask() {
  return useContext(TaskContext);
}