import "./App.css";
import Auth from "./components/Auth/Auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TodoMain from "./components/TodoMain/TodoMain";
import { useState } from "react";
import { GlobalContextProvider } from "./context/globalContext/GlobalContext";

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <>
      <GlobalContextProvider>
        {!isAuthorized ? (
          <Auth setIsAuthorized={setIsAuthorized} />
        ) : (
          <TodoMain />
        )}
        <ToastContainer />
      </GlobalContextProvider>
    </>
  );
}

export default App;
