import { goTodoInstance } from "../axios";

export const createTask = async (taskName: string) => {
  const request = await goTodoInstance.post("/create", { name: taskName });
  const response = request.data;
  return response;
};
