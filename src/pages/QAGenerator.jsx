import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import Select from "react-select";

export default function QAGenerator() {
  const [form, setForm] = useState({ subject_code: "", unit: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [subjectOptions, setSubjectOptions] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleGenerate = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.get("/api/qa/generate", {
        params: form,
        responseType: "blob", // Receive as file
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const a = document.createElement("a");
      a.href = url;
      a.download = `${form.subject_code}_Unit${form.unit}_QA.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (err) {
      setError("Failed to generate. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubjectSelect = (selectedOption) => {
    setForm({ ...form, subject_code: selectedOption?.value || "" });
  };

  const fetchSubjects = async (inputValue) => {
    if (!inputValue || inputValue.length < 2) return;

    try {
      const { data } = await axios.get(
        `/api/subjects?search=${encodeURIComponent(inputValue)}`
      );
      console.log("✅ Subjects fetched:", data);

      const options = data.subjects.map((subject) => ({
        value: subject.subject_code,
        label: `${subject.subject_name} (${subject.subject_code})`,
      }));
      setSubjectOptions(options);
    } catch (error) {
      console.error("❌ Error fetching subjects:", error);
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-6">
        <div className="w-full max-w-xl flex flex-col items-center animate-fade-in">
          <h1 className="text-xl md:text-2xl text-center font-semibold text-primary-dark mb-2">
            📘 Boost Your Exam Prep!
          </h1>
          <p className="text-center text-gray-600 max-w-md mb-8">
            Instantly generate question & answer PDFs unit-wise. Perfect for
            last-minute revision or focused study. Just select your subject and
            unit — we’ll do the rest!
          </p>

          <form
            onSubmit={handleGenerate}
            className="w-full bg-white p-8 rounded-xl shadow-xl space-y-4"
          >
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
              QA Generator
            </h2>

            {/* <input
              type="text"
              name="subject_code"
              placeholder="Subject Code (e.g., CN)"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              required
              value={form.subject_code}
              onChange={handleChange}
            /> */}
            <Select
              placeholder="Select Required Subject"
              options={subjectOptions}
              onInputChange={(val) => {
                fetchSubjects(val);
                return val;
              }}
              onChange={handleSubjectSelect}
              isClearable
              noOptionsMessage={() => "Type at least 2 characters"}
            />
            <input
              type="number"
              name="unit"
              placeholder="Unit Number (e.g., 4)"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              required
              value={form.unit}
              onChange={handleChange}
              min={1}
              max={10}
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition-all duration-300 w-full"
            >
              {loading ? "Generating..." : "Generate PDF"}
            </button>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
