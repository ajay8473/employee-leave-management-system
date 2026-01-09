const API_URL = "http://localhost:5000/api";

export const signup = (data) =>
  fetch(`${API_URL}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

export const login = (data) =>
  fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

export const applyLeave = (data, token) =>
  fetch(`${API_URL}/leave/apply`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    },
    body: JSON.stringify(data)
  });

export const myLeaves = (token) =>
  fetch(`${API_URL}/leave/my`, {
    headers: { Authorization: token }
  });
