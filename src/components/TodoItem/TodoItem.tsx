import "./TodoItem.css";
import { TodoItemProps } from "./types";
import cross from "../../assets/icon-cross.svg";
import check from "../../assets/icon-check.svg";
import { deleteTask, updateTask } from "../../api";
import { useGlobalContext } from "../../context/globalContext/GlobalContext";
import { toast } from "react-toastify";
import { Task } from "../../types";

const TodoItem = ({ task }: TodoItemProps) => {
  const { accessToken, tasks, setTasks } = useGlobalContext();

  const handleDelete = () => {
    deleteTask(task.id, accessToken).then(() => {
      const updatedTasks = tasks.filter((item) => {
        return item.id != task.id;
      });
      setTasks(updatedTasks);
      toast.success("Task deleted!");
    });
  };

  const handleUpdate = () => {
    updateTask(task.id, !task.isCompleted, accessToken).then((result: Task) => {
      const updatedTasks = tasks.map((item) => {
        if (item.id == task.id) {
          return result;
        } else return item;
      });
      setTasks(updatedTasks);
      toast.success("Task updated!");
    });
  };

  return (
    <div className="todo_item">
      <div>
        <div
          onClick={handleUpdate}
          className={task.isCompleted ? "completed_task" : ""}
        >
          {task.isCompleted && <img src={check} alt="" />}
        </div>
        <p className={task.isCompleted ? "completed_task_name" : ""}>
          {task.name}
        </p>
      </div>
      <img src={cross} alt="" onClick={handleDelete} />
    </div>
  );
};

export default TodoItem;
