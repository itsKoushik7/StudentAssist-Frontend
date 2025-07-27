import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import Select from "react-select";
import { get, post } from "../api/apiHelper";
import * as api from "../api/apiConstants";

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
  const [subjectOptions, setSubjectOptions] = useState([]);
  const [userId, setUserId] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    setUserId(user ? user.id : null);
  }, []);

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;
    console.log("Changed field:", name);
    if (type === "file") {
      console.log("File selected:", files[0]);
      // const uploadedFile = files[0];
      setForm((prev) => ({
        ...prev,
        [name]: files[0], // safe: only assign if it's a file input
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
    console.log("Updated form state:", form);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    if (!form.paper || !(form.paper instanceof File)) {
      setError("Please select a valid PDF file.");
      setLoading(false);
      return;
    }

    console.log("Form state before FormData:", form);
    console.log("Paper file:", form.paper);

    const data = new FormData();
    console.log("Creating FormData...", data);
    data.append("subject_code", form.subject_code);
    data.append("year", form.year);
    data.append("month", form.month);
    data.append("paper", form.paper);
    console.log("FormData created:", data);

    // Log FormData contents
    console.log("FormData contents:");
    for (let [key, value] of data.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      // const res = await post(api.PAPER_UPLOAD, data);
      console.log("API Base URL:", import.meta.env.VITE_API_BASE_URL);
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/papers/upload`,
        // `http://localhost:5000/api/papers/upload`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data", // ✅ Let axios handle boundary
            Authorization: `Bearer ${localStorage.getItem("token")}`, // optional if required
          },
        }
      );
      console.log("✅ Upload response:", res);

      setSuccess("Uploaded successfully!");
    } catch (err) {
      console.error("❌ Upload error:", err?.response?.data?.message);
      setError(err?.response?.data?.message || "Failed to upload. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubjectSelect = (selectedOption) => {
    console.log("Selected subject:", selectedOption);
    setForm({ ...form, subject_code: selectedOption?.value || "" });
  };

  const fetchSubjects = async (inputValue) => {
    if (!inputValue || inputValue.length < 2) return;

    try {
      const res = await get(`${api.SEARCH_SUBJECTS}?search=${inputValue}`);
      console.log("✅ Subjects fetched:", res);

      const options = res.subjects.map((subject) => ({
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
        <div className="w-full max-w-2xl flex flex-col items-center animate-fade-in">
          <h1 className="text-xl md:text-2xl text-center font-semibold text-primary-dark mb-2">
            Help your juniors and peers!
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
                placeholder="Subject Code"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                required
                value={form.subject_code}
                // disabled={true}
                readOnly
                onChange={handleChange}
              />

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

              <select
                name="year"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                value={form.year}
                onChange={handleChange}
              >
                <option value="">Select Year</option>
                {Array.from({ length: 2025 - 2016 }, (_, i) => 2017 + i).map(
                  (year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  )
                )}
              </select>
              <select
                name="month"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                value={form.month}
                onChange={handleChange}
              >
                <option value="">Select Month</option>
                {[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ].map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>

              <input
                type="file"
                name="paper"
                accept=".pdf"
                className="w-full border border-gray-300 px-4 py-2 rounded bg-neutral-light text-neutral-dark"
                required
                onChange={handleChange}
              />
              {userId == 1 && (
                <>
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition-all duration-300 w-full"
                  >
                    {loading ? "Uploading..." : "Upload"}
                  </button>
                </>
              )}

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
