// import { createTask } from "../../api";
import { useGlobalContext } from "../../context/globalContext/GlobalContext";
import "./TodoMain.css";
import darkBG from "../../assets/bg-desktop-dark.jpg";
import sun from "../../assets/icon-sun.svg";
import TaskInput from "../TaskInput/TaskInput";
import TodoItem from "../TodoItem/TodoItem";

const TodoMain = () => {
  const { loginResponse } = useGlobalContext();
  const { tasks } = loginResponse;

  return (
    <div className="todo_main">
      <img src={darkBG} alt="" />

      <div className="todos_container">
        <div>
          <h1>TODO</h1>
          <img src={sun} alt="" />
        </div>

        <TaskInput />

        <div className="todo_list_holder">
          {tasks.map((task) => {
            return <TodoItem key={task.id} task={task} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TodoMain;
