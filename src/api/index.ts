import { toast } from "react-toastify";
import { goTodoInstance } from "../axios";

export const createTask = async (taskName: string, accessToken: string) => {
  try {
    const request = await goTodoInstance.post(
      "/create",
      { name: taskName },
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    const response = request.data;
    return response;
  } catch (error) {
    toast.error("Failed to create task!");
    throw new Error("Failed to create task");
  }
};

export const deleteTask = async (taskId: string, accessToken: string) => {
  try {
    const request = await goTodoInstance.delete(`/delete/${taskId}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const response = request.data;
    return response;
  } catch (error) {
    toast.error("Failed to delete task!");
    throw new Error("Failed to delete task");
  }
};
