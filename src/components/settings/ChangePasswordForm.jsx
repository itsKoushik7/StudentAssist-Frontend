import React, { useState } from "react";
import { motion } from "framer-motion";
import * as api from "../../api/apiConstants";
import { post } from "../../api/apiHelper";

export default function ChangePasswordForm({ onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { currentPassword, newPassword, confirmNewPassword } = formData;

    if (!currentPassword || !newPassword || !confirmNewPassword) {
      return setError("All fields are required.");
    }

    if (newPassword !== confirmNewPassword) {
      return setError("New passwords do not match.");
    }
    try {
      const res = await post(api.CHANGE_PASSWORD, {
        currentPassword: formData.currentPassword,
        newPassword: formData.newPassword,
      });
      console.log(res);
    } catch (err) {
      setError("Failed to change password.");
    }

    setError("");
    // onSubmit(formData); // Call parent handler with form data
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
    >
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative">
        <button
          className="absolute top-2 right-4 text-gray-500 hover:text-black text-xl"
          onClick={onClose}
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold mb-4 text-blue-700">
          Change Password
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="password"
            name="currentPassword"
            placeholder="Current Password"
            value={formData.currentPassword}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
          <input
            type="password"
            name="newPassword"
            placeholder="New Password"
            value={formData.newPassword}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
          <input
            type="password"
            name="confirmNewPassword"
            placeholder="Confirm New Password"
            value={formData.confirmNewPassword}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Update Password
          </button>
        </form>
      </div>
    </motion.div>
  );
}
