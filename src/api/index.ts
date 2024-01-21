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

export const updateTask = async (
  taskId: string,
  isCompleted: boolean,
  accessToken: string
) => {
  try {
    const request = await goTodoInstance.put(
      `/update`,
      {
        id: taskId,
        isCompleted,
      },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    const response = request.data;
    return response;
  } catch (error) {
    toast.error("Failed to update task!");
    throw new Error("Failed to update task");
  }
};

export const deleteAll = async (accessToken: string) => {
  try {
    const request = await goTodoInstance.delete("/delete-all", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const response = request.data;
    return response;
  } catch (error) {
    toast.error("Failed to delete all tasks!");
    throw new Error("Failed to delete all tasks");
  }
};

export const checkTokenValidity = async (accessToken: string) => {
  try {
    const request = await goTodoInstance.get("/check-validity", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const response = request.data;
    return response;
  } catch (error) {
    throw new Error("Access token is no longer valid");
  }
};
