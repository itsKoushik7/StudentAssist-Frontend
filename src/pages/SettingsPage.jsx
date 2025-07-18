import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProfileForm from "../components/settings/ProfileForm.jsx";
import PasswordForm from "../components/settings/ChangePasswordForm.jsx";
import FaceRegister from "../components/settings/FaceRegister.jsx";

export default function Settings() {
  const [activeForm, setActiveForm] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user.email, user.id, user.name);

  const closeForm = () => setActiveForm(null);
  const closeModal = () => setShowModal(false);

  const handleCardClick = (id) => {
    if (id === "face") {
      setShowModal(true);
    } else {
      setActiveForm(id);
    }
  };

  const cardData = [
    {
      id: "profile",
      title: "Update Profile",
      description: "Edit your name, email, and other details.",
    },
    {
      id: "password",
      title: "Change Password",
      description: "Update your account password securely.",
    },
    {
      id: "face",
      title: "Face Recognition",
      description: "Enable or disable face login.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5 }}
      className="min-h-[calc(89vh-64px)] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-10"
    >
      <h2 className="text-3xl font-bold text-primary-dark mb-8">Settings</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full px-4">
        {cardData.map((card) => (
          <motion.div
            key={card.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="cursor-pointer bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300"
            onClick={() => handleCardClick(card.id)}
          >
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              {card.title}
            </h3>
            <p className="text-gray-600">{card.description}</p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeForm === "profile" && <ProfileForm onClose={closeForm} />}
        {activeForm === "password" && <PasswordForm onClose={closeForm} />}
        {showModal && <FaceRegister closeModal={closeModal} userId={user} />}
      </AnimatePresence>
    </motion.div>
  );
}
