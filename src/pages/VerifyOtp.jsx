import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import * as api from "../api/apiConstants";
import { post } from "../api/apiHelper";

export default function VerifyOtp() {
  const nav = useNavigate();
  const [params] = useSearchParams();
  const email = params.get("email") || "";

  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleVerify = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const res = await post(api.VERIFY_OTP, { email, otp });
      setMessage("✅ Verified! Redirecting to login...");
      setTimeout(() => {
        nav("/login");
      }, 1500);
    } catch (err) {
      console.error("❌ OTP verification failed", err);
      setError(
        err.response?.data?.message || "Verification failed. Try again."
      );
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-6">
        <div className="bg-white max-w-md w-full p-8 rounded-xl shadow-xl animate-fade-in">
          <h2 className="text-2xl font-bold text-primary mb-4 text-center">
            Verify Your Email
          </h2>
          <p className="text-center text-gray-600 mb-6">
            We sent a 6-digit code to <strong>{email}</strong>. <br />
            Please enter it below to complete your registration.
          </p>

          {message && (
            <p className="text-green-600 text-center mb-4">{message}</p>
          )}
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <form onSubmit={handleVerify} className="space-y-4">
            <input
              type="text"
              maxLength={6}
              required
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter 6-digit OTP"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary text-center tracking-widest text-xl"
            />

            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition-all duration-300 w-full"
            >
              Verify
            </button>
          </form>

          <p className="text-sm text-center mt-4 text-gray-600">
            Didn't receive OTP? <span className="text-primary">Check spam</span>{" "}
            or re-register.
          </p>
        </div>
      </div>
    </>
  );
}
