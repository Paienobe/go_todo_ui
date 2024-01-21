import "./App.css";
import Auth from "./components/Auth/Auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TodoMain from "./components/TodoMain/TodoMain";
import { useEffect, useState } from "react";
import { useGlobalContext } from "./context/globalContext/GlobalContext";
import { checkTokenValidity } from "./api";

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const { setTasks } = useGlobalContext();

  useEffect(() => {
    const storedAccessToken = localStorage.getItem("go_todo_access_token");
    if (storedAccessToken) {
      checkTokenValidity(storedAccessToken).then((result) => {
        setIsAuthorized(true);
        setTasks(result);
        toast.done("Welcome back");
      });
    }
  }, []);

  return (
    <>
      {!isAuthorized ? (
        <Auth setIsAuthorized={setIsAuthorized} />
      ) : (
        <TodoMain />
      )}
      <ToastContainer />
    </>
  );
}

export default App;
