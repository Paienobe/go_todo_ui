import "./TodoItem.css";
import { TodoItemProps } from "./types";
import cross from "../../assets/icon-cross.svg";
import check from "../../assets/icon-check.svg";

const TodoItem = ({ task }: TodoItemProps) => {
  return (
    <div className="todo_item">
      <div>
        <div>{task.isCompleted && <img src={check} alt="" />}</div>
        <p>{task.name}</p>
      </div>
      <img src={cross} alt="" />
    </div>
  );
};

export default TodoItem;
