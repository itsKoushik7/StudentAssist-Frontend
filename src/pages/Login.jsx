import React, { useState } from "react";
import { login } from "../api";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function Login() {
  const nav = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [err, setErr] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(form);
      const { token, user } = res.data;
      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        nav("/");
      } else {
        setErr("Login failed");
      }
    } catch {
      setErr("Login failed");
    }
  };

  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -80 }}
        transition={{ duration: 0.5 }}
        className="min-h-[calc(100vh-64px)] flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-6 py-12"
      >
        <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center animate-fade-in">
          <img
            src="/assets/login.svg"
            alt="Login Illustration"
            className="max-w-xs md:max-w-md"
          />
        </div>

        <form
          onSubmit={submit}
          className="w-full md:w-1/2 max-w-md bg-white p-8 rounded-xl shadow-xl animate-fade-in"
        >
          <h2 className="text-2xl font-bold text-primary mb-6 text-center flex flex-row items-center justify-start gap-10">
            <img
              style={{
                borderRadius: "50%",
              }}
              src="/assets/blue-logo-1.jpg"
              alt="Study Broo Logo"
              className="h-16 w-auto object-contain"
            />{" "}
            <span> Welcome Back</span>
          </h2>
          {err && (
            <p className="text-red-500 text-sm text-center mb-2">{err}</p>
          )}

          <div className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              required
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />

            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition-all duration-300 w-full"
            >
              Log In
            </button>

            <p className="text-center text-sm text-gray-600 mt-2">
              New here?{" "}
              <Link to="/register" className="text-primary hover:underline">
                Register instead
              </Link>
            </p>
          </div>
        </form>
      </motion.div>
    </>
  );
}
