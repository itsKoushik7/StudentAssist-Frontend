// src/api/apiHelper.js
import axios from "axios";
import { getLocalStorageItem } from "./localStorageItems";
import { validateTokenOnRequest } from "./tokenValidation"; // Optional

const token = getLocalStorageItem("token");
const refreshToken = getLocalStorageItem("refreshToken");
const email = getLocalStorageItem("email");

// ✅ Update base URI based on environment
const isDev =
  window.location.hostname === "localhost" ||
  window.location.hostname.startsWith("192.168");
// export const BASE_URI = isDev
//   ? "http://localhost:5000/api"
//   : "https://studentassist-backend-production.up.railway.app/api"; // your prod backend
export const BASE_URI = import.meta.env.VITE_API_BASE_URL;

export const axiosApi = axios.create({
  baseURL: BASE_URI,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Attach token headers
if (token) {
  axiosApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
if (refreshToken) {
  axiosApi.defaults.headers.common[
    "x-refresh-token"
  ] = `Bearer ${refreshToken}`;
}
if (email) {
  axiosApi.defaults.headers.common["email"] = email;
}

// ✅ Add interceptor to inject token dynamically
axiosApi.interceptors.request.use(
  (config) => {
    const token = getLocalStorageItem("token");
    if (token) {
      validateTokenOnRequest?.(); // Optional validation
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Wrapper methods
export const get = async (url, params = {}, config = {}) => {
  const response = await axiosApi.get(url, { params, ...config });
  return response.data;
};

export const post = async (url, data = {}, config = {}) => {
  const response = await axiosApi.post(url, data, config);
  return response.data;
};

export const put = async (url, data = {}, config = {}) => {
  const response = await axiosApi.put(url, data, config);
  return response.data;
};

export const del = async (url, config = {}) => {
  const response = await axiosApi.delete(url, config);
  return response.data;
};
