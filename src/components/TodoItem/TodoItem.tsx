import "./TodoItem.css";
import { TodoItemProps } from "./types";
import cross from "../../assets/icon-cross.svg";

const TodoItem = ({ task }: TodoItemProps) => {
  return (
    <div>
      <div></div>
      <p>{task.name}</p>
      <img src={cross} alt="" />
    </div>
  );
};

export default TodoItem;
