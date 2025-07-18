import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Settings } from "lucide-react";
import Sidebar from "./Sidebar";
import SettingsSidebar from "./SettingsSidebar";
import * as api from "../api/apiConstants";
import { get } from "../api/apiHelper";

export default function Navbar() {
  const nav = useNavigate();
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [userId, setUserId] = useState(null);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const users = localStorage.getItem("user");
  console.log(users);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setUserId(parsedUser.id);
      } catch (err) {
        console.error("Error parsing user from localStorage", err);
      }
    }
  }, []);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await get(api.ABOUT);

        // setUser(data.user);
      } catch {
        setUser(null);
      }
    }
    fetchUser();
  }, []);

  const handleLogout = () => {
    setUserId(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("email");
    nav("/login");
  };

  return (
    <nav className="bg-blue-900 text-white flex justify-between items-center px-6 py-3 sticky top-0 z-50 shadow-md z-10">
      <div className="flex items-center space-x-4">
        {user && (
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <Menu size={26} />
          </button>
        )}
        <Link
          to="/"
          className="text-xl font-bold tracking-wide font-['Comic_Sans_MS',cursive]"
        >
          <img
            src="/assets/white-logo-1.jpg"
            alt="Study Broo Logo"
            className="h-16 w-auto object-contain"
          />
        </Link>
      </div>

      {user ? (
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-blue-300 transition">
            Home
          </Link>
          {userId === 1 && (
            <>
              <Link to="/upload" className="hover:text-blue-300 transition">
                Upload Paper
              </Link>
            </>
          )}

          <Link to="/QAGen" className="hover:text-blue-300 transition">
            QA Generator
          </Link>
          <Link to="/projects" className="hover:text-blue-300 transition">
            Projects
          </Link>
          <Link to="/mocks" className="hover:text-blue-300 transition">
            Mocks
          </Link>
          <Link to="/resume-form" className="hover:text-blue-300 transition">
            Resume
          </Link>
        </div>
      ) : (
        <>
          <p className="text-center text-white text-sm md:text-base mb-4 italic font-['Comic_Sans_MS',cursive] max-w-md mx-auto px-2">
            Every topper had a Broo — now you do too.
          </p>
        </>
      )}

      <div className="hidden md:flex items-center space-x-4">
        {!user ? (
          <>
            <Link to="/login" className="hover:underline">
              Log In
            </Link>
            <Link
              to="/register"
              className="bg-white text-blue-800 font-medium px-3 py-1 rounded hover:bg-blue-100 transition"
            >
              Register
            </Link>
          </>
        ) : (
          <>
            <Link to="/profile">
              <div
                title={user.name}
                className="bg-orange-500 text-white font-bold rounded-full w-9 h-9 flex items-center justify-center uppercase shadow-md hover:scale-105 transition"
              >
                {user.name?.[0] || "U"}
              </div>
            </Link>
            <button
              onClick={handleLogout}
              className="text-sm bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
            {/* <button
              onClick={() => setSettingsOpen(true)}
              title="Settings"
              className="text-white hover:text-blue-300 transition hover:scale-110"
            >
              <Settings size={24} />
            </button> */}
            <Link to="/settings" title="Settings">
              <Settings
                size={24}
                className="text-white hover:text-blue-300 transition hover:scale-110"
              />
            </Link>
          </>
        )}
      </div>

      {open && <Sidebar close={() => setOpen(false)} user={user} nav={nav} />}
      {settingsOpen && <SettingsSidebar close={() => setSettingsOpen(false)} />}
    </nav>
  );
}
