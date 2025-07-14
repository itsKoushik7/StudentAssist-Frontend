import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function NotFound() {
  return (
    <>
      {/* <Navbar /> */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-6 text-center"
      >
        <img
          src="/assets/not-found.svg"
          alt="404 Illustration"
          className="w-72 md:w-96 mb-8"
        />
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Oops! Page not found.
        </h1>
        <p className="text-gray-600 mb-6 max-w-md">
          Looks like you've taken a wrong turn. Don't worry, it happens to the
          best of us! 🧭
        </p>
        <Link
          to="/"
          className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition-all duration-300"
        >
          Go back to Home
        </Link>
      </motion.div>
    </>
  );
}
