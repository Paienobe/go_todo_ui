export type Task = {
  id: string;
  name: string;
  isCompleted: boolean;
  user_id: string;
};

export type LoginResponse = {
  success: boolean;
  tasks: Task[];
  token: string;
};
