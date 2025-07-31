import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { get, post } from "../api/apiHelper";
import * as api from "../api/apiConstants";

export default function Mocks() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    experienceLevel: "fresher",
    role: "",
    technology: "",
  });
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [mockOptions, setMockOptions] = useState([]);
  useEffect(() => {
    const fetchMockOptions = async () => {
      try {
        const response = await get(api.MOCK_OPTIONS);
        console.log("🎯 Mock Options:", response);
        setMockOptions(response);
      } catch (error) {
        console.error("❌ Error fetching mock options:", error);
      }
    };

    fetchMockOptions();
  }, []);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.role || !form.technology) return alert("Please fill all fields");
    try {
      setLoading(true);
      // const res = await axios.post("/api/mocks/questions", form);
      const res = await post(api.MOCK_QUESTIONS, form);
      console.log(res);

      navigate("/mock-test", {
        state: { questions: res.questions, form },
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5 }}
      className="min-h-[calc(100vh-64px)] flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-6 py-12"
    >
      {/* Left Illustration */}
      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        <img
          src="/assets/Interviewi.svg"
          alt="Mock Illustration"
          className="max-w-xs md:max-w-md"
        />
      </div>

      {/* Right Form */}
      <div className="w-full md:w-1/2 max-w-xl px-4">
        <h2 className="text-3xl font-bold text-primary-dark mb-4 text-center md:text-left">
          Start Your Mock Test
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Type Selector */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Are you a fresher or experienced?
            </label>
            <select
              name="experienceLevel"
              value={form.experienceLevel}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="fresher">Fresher</option>
              <option value="experienced">Experienced</option>
            </select>
          </div>
          {/* Role */}
          {/* <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Role
            </label>
            <input
              type="text"
              name="role"
              placeholder="e.g., Frontend Developer"
              value={form.role}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>

          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Technology Stack
            </label>
            <input
              type="text"
              name="technology"
              placeholder="e.g., React, Node.js"
              value={form.technology}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>{" "}
          */}
          {/* Role Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Role
            </label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            >
              <option value="">Select a role</option>
              {mockOptions.roles?.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>
          {/* Technology Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Technology Stack
            </label>
            <select
              name="technology"
              value={form.technology}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            >
              <option value="">Select a technology</option>
              {mockOptions.technologies?.map((tech) => (
                <option key={tech} value={tech}>
                  {tech}
                </option>
              ))}
            </select>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            {loading ? "Generating..." : "Start Mock"}
          </button>
        </form>
      </div>
    </motion.div>
  );
}
