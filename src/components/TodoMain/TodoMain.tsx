// import { createTask } from "../../api";
import { useGlobalContext } from "../../context/globalContext/GlobalContext";
import "./TodoMain.css";
import darkBG from "../../assets/bg-desktop-dark.jpg";
import sun from "../../assets/icon-sun.svg";
import TaskInput from "../TaskInput/TaskInput";
import TodoItem from "../TodoItem/TodoItem";
import { useState } from "react";
import { filterOptions } from "../../constants";

const TodoMain = () => {
  const { loginResponse } = useGlobalContext();
  const { tasks } = loginResponse;

  const [filter, setFilter] = useState(filterOptions[0]);

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

          <div className="todo_list_footer">
            {tasks.length} items left
            <div>
              {filterOptions.map((option) => {
                return (
                  <button
                    key={option}
                    className={filter == option ? "selected_filter" : ""}
                    onClick={() => setFilter(option)}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            <button>Clear Completed</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoMain;
