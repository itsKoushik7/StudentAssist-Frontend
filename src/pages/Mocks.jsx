import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function Mocks() {
  return (
    <>
      {/* <Navbar /> */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.5 }}
        className="min-h-[calc(100vh-64px)] flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-6 py-12"
      >
        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <img
            src="/assets/Interviewi.svg"
            alt="Under Development Illustration"
            className="max-w-xs md:max-w-md"
          />
        </div>

        <div className="w-full md:w-1/2 max-w-xl text-center md:text-left px-4 animate-fade-in">
          <h2 className="text-3xl font-bold text-primary-dark mb-4">
            Mocks Section Coming Soon!
          </h2>
          <p className="text-gray-700 text-lg">
            We’re crafting an amazing experience for practicing mock exams just
            like your real university papers — unit-wise, time-bound, and
            tracked! 💡
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Stay tuned and keep preparing. Your success is just one mock away!
            🚀
          </p>
        </div>
      </motion.div>
    </>
  );
}
