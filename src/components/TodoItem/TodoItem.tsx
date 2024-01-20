import "./TodoItem.css";
import { TodoItemProps } from "./types";
import cross from "../../assets/icon-cross.svg";
import check from "../../assets/icon-check.svg";
import { deleteTask } from "../../api";
import { useGlobalContext } from "../../context/globalContext/GlobalContext";
import { toast } from "react-toastify";

const TodoItem = ({ task }: TodoItemProps) => {
  const { accessToken, tasks, setTasks } = useGlobalContext();
  return (
    <div className="todo_item">
      <div>
        <div>{task.isCompleted && <img src={check} alt="" />}</div>
        <p>{task.name}</p>
      </div>
      <img
        src={cross}
        alt=""
        onClick={() => {
          deleteTask(task.id, accessToken).then(() => {
            const updatedTasks = tasks.filter((item) => {
              return item.id != task.id;
            });
            setTasks(updatedTasks);
            toast.success("Task deleted!");
          });
        }}
      />
    </div>
  );
};

export default TodoItem;
