import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FaceRegister from "../components/FaceRegister";

export default function SettingsSidebar({ close, user }) {
  const [userId, setUserId] = useState(null);
  const users = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    setUserId(users ? users.id : null);
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
      <div className="bg-white w-64 p-4 relative animate-slide-in-right">
        <button onClick={close} className="absolute top-2 right-2">
          ✖️
        </button>
        <h2 className="text-lg font-semibold text-gray-700 mt-10 mb-6">
          Settings
        </h2>
        <nav className="space-y-4 text-blue-700 font-medium">
          <Link
            to="/settings/profile"
            onClick={close}
            className="block hover:underline"
          >
            Edit Profile
          </Link>
          <Link
            to="/settings/preferences"
            onClick={close}
            className="block hover:underline"
          >
            Preferences
          </Link>
          <Link
            to="/settings/face-id"
            onClick={close}
            className="block hover:underline"
          >
            Face ID
          </Link>
          {/* Add more settings options if needed */}
        </nav>
      </div>
      <div className="flex-grow" onClick={close}></div>
    </div>
  );
}
