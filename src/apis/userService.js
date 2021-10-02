import { axiosClient } from "./apiClient";

export function checkMail(data) {
  return axiosClient.post("/user/checkMail", data);
}

export function login(data) {
  return axiosClient.post("/user/login", data);
}

export function signup(data) {
  return axiosClient.post("/user/signup", data);
}

export function getQuestions(data) {
  return axiosClient.post("/api/getQuestions", { category: "html" });
}

export function addScore(data) {
  return axiosClient.post("/api/addScore", data);
}
export function getScoreboard() {
  return axiosClient.get("/api/getScore");
}
