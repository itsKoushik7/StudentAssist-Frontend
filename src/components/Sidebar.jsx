import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar({ close, user, nav }) {
  const handleLogout = () => {
    localStorage.removeItem("token");
    close();
    nav("/login");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex z-50">
      <div className="bg-white w-64 p-4 relative animate-slide-in">
        <button onClick={close} className="absolute top-2 right-2">
          ✖️
        </button>
        <nav className="space-y-4 mt-10 text-blue-700 font-medium">
          {user ? (
            <>
              <Link to="/" onClick={close} className="block hover:underline">
                🏠 Home
              </Link>
              <Link
                to="/upload"
                onClick={close}
                className="block hover:underline"
              >
                📤 Upload Paper
              </Link>
              <Link
                to="/qa-generator"
                onClick={close}
                className="block hover:underline"
              >
                📑 QA Generator
              </Link>
              <Link
                to="/projects"
                onClick={close}
                className="block hover:underline"
              >
                📊 Projects
              </Link>
              <Link
                to="/profile"
                onClick={close}
                className="block hover:underline"
              >
                🙍 Profile
              </Link>
              <button
                onClick={handleLogout}
                className="text-red-600 hover:underline"
              >
                🔓 Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={close}
                className="block hover:underline"
              >
                Log In
              </Link>
              <Link
                to="/register"
                onClick={close}
                className="block hover:underline"
              >
                Register
              </Link>
            </>
          )}
        </nav>
      </div>
      <div className="flex-grow" onClick={close}></div>
    </div>
  );
}
