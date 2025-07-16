// src/api/tokenValidation.js

export const validateTokenOnRequest = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    console.warn("No auth token found!");
  }
};
