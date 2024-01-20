import { ReactNode, createContext, useContext, useState } from "react";
import { GlobalContextType } from "./types";
import { Task } from "../../types";

const GlobalContext = createContext({} as GlobalContextType);

type Props = {
  children: ReactNode;
};

export const GlobalContextProvider = ({ children }: Props) => {
  const [accessToken, setAccessToken] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <GlobalContext.Provider
      value={{
        accessToken,
        setAccessToken,
        tasks,
        setTasks,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
