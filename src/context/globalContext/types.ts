import { LoginResponse, Task } from "../../types";

export type GlobalContextType = {
  accessToken: string;
  setAccessToken: React.Dispatch<React.SetStateAction<string>>;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  loginResponse: LoginResponse;
  setLoginResponse: React.Dispatch<React.SetStateAction<LoginResponse>>;
};
