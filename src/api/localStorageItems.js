// src/api/localStorageItems.js

export const getLocalStorageItem = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    return localStorage.getItem(key);
  }
};

export const setLocalStorageItem = (key, value) => {
  localStorage.setItem(
    key,
    typeof value === "string" ? value : JSON.stringify(value)
  );
};

export const removeLocalStorageItem = (key) => {
  localStorage.removeItem(key);
};
