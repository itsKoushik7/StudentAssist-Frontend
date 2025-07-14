import { getUser } from "../api";

export async function requireAuth(navigate) {
  try {
    await getUser();
  } catch (err) {
    localStorage.removeItem("token");
    navigate("/");
  }
}
