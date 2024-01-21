import { useGlobalContext } from "../../context/globalContext/GlobalContext";
import "./TodoMain.css";
import darkBG from "../../assets/bg-desktop-dark.jpg";
import sun from "../../assets/icon-sun.svg";
import TaskInput from "../TaskInput/TaskInput";
import TodoItem from "../TodoItem/TodoItem";
import { useEffect, useState } from "react";
import { filterOptions } from "../../constants";
import { deleteAll } from "../../api";
import { toast } from "react-toastify";

const TodoMain = () => {
  const { tasks, setTasks, accessToken } = useGlobalContext();
  const [tasksTemp, setTasksTemp] = useState(tasks);
  const [filter, setFilter] = useState(filterOptions[0]);

  const activeTasksLength = tasks.filter((task) => {
    return !task.isCompleted;
  }).length;

  const handleDeleteAll = () => {
    deleteAll(accessToken).then(() => {
      setTasksTemp([]);
      setTasks([]);
      toast.success("All tasks deleted!");
    });
  };

  useEffect(() => {
    switch (filter) {
      case filterOptions[1]:
        const activeTasks = tasks.filter((task) => {
          return !task.isCompleted;
        });
        setTasksTemp(activeTasks);
        break;
      case filterOptions[2]:
        const completedTasks = tasks.filter((task) => {
          return task.isCompleted;
        });
        setTasksTemp(completedTasks);
        break;

      default:
        setTasksTemp(tasks);
        break;
    }
  }, [filter, tasks]);

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
          {tasksTemp.map((task) => {
            return <TodoItem key={task.id} task={task} />;
          })}

          <div className="todo_list_footer">
            {activeTasksLength} item
            {activeTasksLength > 1 || (activeTasksLength == 0 && "s")} left
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
            <button onClick={handleDeleteAll}>Clear Completed</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoMain;
