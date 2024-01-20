import { useState } from "react";
import "./TaskInput.css";
import { createTask } from "../../api";
import { toast } from "react-toastify";
import { useGlobalContext } from "../../context/globalContext/GlobalContext";
import { Task } from "../../types";

const TaskInput = () => {
  const { setTasks, tasks, accessToken } = useGlobalContext();
  const [newTask, setNewTask] = useState("");
  return (
    <div className="task_input">
      <div></div>
      <input
        type="text"
        placeholder="Create a new todo"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            createTask(newTask, accessToken).then((result: Task) => {
              setTasks([...tasks, result]);
              toast.success("Task created!");
              setNewTask("");
            });
          }
        }}
      />
    </div>
  );
};

export default TaskInput;
