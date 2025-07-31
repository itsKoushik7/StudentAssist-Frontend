import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { get } from "../api/apiHelper";
import * as api from "../api/apiConstants";

export default function MockTest() {
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { questions, form } = location.state || {};
  const [answers, setAnswers] = useState(
    Array(questions?.length || 0).fill("")
  );
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setUserId(parsedUser.id);
      } catch (err) {
        console.error("Error parsing user from localStorage", err);
      }
    }
  }, []);

  useEffect(() => {
    const res = get();
  });

  if (!questions || !form) {
    navigate("/mocks");
    return null;
  }

  const sanitizeAnswer = (text) => {
    return text?.trim() || "";
  };

  const handleAnswerChange = (e) => {
    const updated = [...answers];
    updated[current] = e.target.value;
    setAnswers(updated);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const sanitizedAnswers = answers.map(sanitizeAnswer);
      const hasRealAnswer = sanitizedAnswers.some((a) => a !== "");

      if (!hasRealAnswer) {
        alert("Please attempt at least one question before submitting.");
        return;
      }

      const payload = {
        userId,
        role: form.role,
        technology: form.technology,
        experienceLevel: form.type,
        answers: questions.map((q, i) => ({
          question: q,
          userAnswer: sanitizedAnswers[i] || "",
        })),
      };

      const res = await axios.post("/api/mocks/submit", payload, {
        responseType: "blob",
      });

      const contentType = res.headers["content-type"];

      if (!contentType || !contentType.includes("application/pdf")) {
        const reader = new FileReader();
        reader.onload = () => {
          console.error("❌ Error response:", reader.result);
          alert("Submission failed: " + reader.result);
        };
        reader.readAsText(res.data);
        return;
      }

      const blob = new Blob([res.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
      link.href = url;
      link.setAttribute("download", `mock_result_${timestamp}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("❌ Submission failed:", err);
      alert("Failed to submit and download mock result.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 flex flex-col items-center">
      <div className="max-w-3xl w-full bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">
          Question {current + 1} of {questions.length}
        </h2>
        <p className="mb-4">{questions[current]}</p>

        <textarea
          value={answers[current]}
          onChange={handleAnswerChange}
          rows={8}
          className="w-full p-3 border rounded mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Write your answer here..."
        />

        <div className="flex justify-between items-center">
          <button
            onClick={() => setCurrent((prev) => Math.max(0, prev - 1))}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            disabled={current === 0}
          >
            Previous
          </button>

          {current === questions.length - 1 ? (
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          ) : (
            <button
              onClick={() =>
                setCurrent((prev) => Math.min(questions.length - 1, prev + 1))
              }
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
