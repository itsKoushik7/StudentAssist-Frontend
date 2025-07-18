import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_BASE_URL; // Example: http://localhost:8000/api/user

export const getRegistrationOptions = async (userId) => {
  const res = await axios.post(`${BASE_URL}/users/webauthn/register-request`, {
    userId,
  });
  return res.data;
};

export const verifyRegistration = async (attResp) => {
  const res = await axios.post(`${BASE_URL}/faceid/register/verify`, {
    attestation: attResp,
  });
  return res.data;
};

export const getAuthenticationOptions = async () => {
  const res = await axios.get(`${BASE_URL}/faceid/login/options`);
  return res.data;
};

export const verifyAuthentication = async (authResp) => {
  const res = await axios.post(`${BASE_URL}/faceid/login/verify`, {
    assertion: authResp,
  });
  return res.data;
};

// const BASE_URL = import.meta.env.VITE_API_BASE_URL; // http://localhost:5000/api/users

// export const getRegistrationOptions = async (userId) => {
//   const res = await axios.post(`${BASE_URL}/webauthn/register-request`, {
//     userId,
//   });
//   return res.data;
// };

// export const verifyRegistration = async (attResp) => {
//   const res = await axios.post(`${BASE_URL}/webauthn/register-response`, {
//     attestation: attResp,
//   });
//   return res.data;
// };

// export const getAuthenticationOptions = async () => {
//   const res = await axios.post(`${BASE_URL}/webauthn/login-request`);
//   return res.data;
// };

// export const verifyAuthentication = async (authResp) => {
//   const res = await axios.post(`${BASE_URL}/webauthn/login-response`, {
//     assertion: authResp,
//   });
//   return res.data;
// };
