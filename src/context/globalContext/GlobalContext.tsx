import { ReactNode, createContext, useContext, useState } from "react";
import { GlobalContextType } from "./types";
import { LoginResponse, Task } from "../../types";

const GlobalContext = createContext({} as GlobalContextType);

type Props = {
  children: ReactNode;
};

export const GlobalContextProvider = ({ children }: Props) => {
  const [accessToken, setAccessToken] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loginResponse, setLoginResponse] = useState({} as LoginResponse);

  return (
    <GlobalContext.Provider
      value={{
        accessToken,
        setAccessToken,
        tasks,
        setTasks,
        loginResponse,
        setLoginResponse,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
