import axios from "axios";

export const goTodoInstance = axios.create({
  baseURL: "http://localhost:9000",
});
