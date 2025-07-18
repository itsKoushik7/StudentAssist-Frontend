import React from "react";
import { motion } from "framer-motion";
import { startRegistration } from "@simplewebauthn/browser";

export default function FaceRegister({ closeModal }) {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user.email, user.id, user.name);
  console.log(user);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white rounded-2xl shadow-lg p-8 w-[90%] max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Face ID Setup</h2>
        <p className="mb-6 text-gray-600">
          Use your device's biometric authentication to enable Face ID login.
        </p>
        <p>In Progress</p>

        <div className="flex gap-4">
          {/* <button
            onClick={handleRegister}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            Register Face ID
          </button> */}
          <button
            onClick={closeModal}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </div>
  );
}
