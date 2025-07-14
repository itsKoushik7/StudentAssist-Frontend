const API_BASE = import.meta.env.VITE_API_BASE_URL;

export const ENDPOINTS = {
  LOGIN: `${API_BASE}/users/login`,
  REGISTER: `${API_BASE}/users/register`,
  USER: `${API_BASE}/users/about`,
  COLLEGES: `${API_BASE}/colleges`,
};
