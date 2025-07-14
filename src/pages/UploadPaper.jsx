import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

export default function UploadPaper() {
  const [form, setForm] = useState({
    subject_code: "",
    year: "",
    month: "",
    paper: null,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    const data = new FormData();
    data.append("subject_code", form.subject_code);
    data.append("year", form.year);
    data.append("month", form.month);
    data.append("paper", form.paper);

    try {
      const res = await axios.post("/api/papers/upload", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setSuccess("Uploaded successfully!");
    } catch (err) {
      setError("Failed to upload. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-6">
        <div className="w-full max-w-2xl flex flex-col items-center animate-fade-in">
          <h1 className="text-xl md:text-2xl text-center font-semibold text-primary-dark mb-2">
            🙌 Help your juniors and peers!
          </h1>
          <p className="text-center text-gray-600 max-w-md mb-8">
            Uploading past question papers not only helps you organize your
            materials, but also supports hundreds of students who are preparing
            just like you. Your contribution matters! 💙
          </p>

          <form
            onSubmit={handleSubmit}
            className="w-full bg-white p-8 rounded-xl shadow-xl"
          >
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
              Upload Question Paper
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                name="subject_code"
                placeholder="Subject Code (e.g., CN)"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                required
                value={form.subject_code}
                onChange={handleChange}
              />
              <input
                type="text"
                name="year"
                placeholder="Year (e.g., 2024)"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                required
                value={form.year}
                onChange={handleChange}
              />
              <input
                type="text"
                name="month"
                placeholder="Month (e.g., May)"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                required
                value={form.month}
                onChange={handleChange}
              />
              <input
                type="file"
                name="paper"
                accept=".pdf"
                className="w-full border border-gray-300 px-4 py-2 rounded bg-neutral-light text-neutral-dark"
                required
                onChange={handleChange}
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition-all duration-300 w-full"
              >
                {loading ? "Uploading..." : "Upload"}
              </button>

              {success && (
                <p className="text-green-600 text-sm text-center">{success}</p>
              )}
              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
