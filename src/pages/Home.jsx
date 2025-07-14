import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { getUser } from "../api";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const { data } = await getUser();
        setUser(data.user);
      } catch {
        setUser(null);
      }
    }
    fetchUser();
  }, []);

  return (
    <>
      <Navbar />
      <section className="p-6 md:p-12 flex flex-col-reverse md:flex-row items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 min-h-[calc(100vh-64px)] overflow-hidden">
        <div className="max-w-xl space-y-6 animate-fade-in md:pr-8">
          {user ? (
            <>
              <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 leading-tight">
                Welcome back,{" "}
                <span className="text-blue-600">{user.name} 👋</span>
              </h1>
              <p className="text-lg text-gray-700">
                What would you like to do today?
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/upload"
                  className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 shadow-md"
                >
                  📤 Upload Paper
                </Link>
                <Link
                  to="/qa-generator"
                  className="bg-green-600 text-white px-6 py-2 rounded-full font-medium hover:bg-green-700 transition-all duration-300 shadow-md"
                >
                  📑 Generate QA PDF
                </Link>
                <Link
                  to="/profile"
                  className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-blue-50 transition-all duration-300"
                >
                  🙍 View Profile
                </Link>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 leading-tight">
                Empowering <span className="text-blue-600">Tier-2/Tier-3</span>{" "}
                Students
              </h1>
              <p className="text-lg text-gray-700">
                🚀 Facing last-minute exam panic? Unsure about resume building
                or final year projects?
                <br />
                <span className="font-semibold text-blue-700">
                  Student Assist
                </span>{" "}
                has got your back — everything you need, in one place.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/register"
                  className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 shadow-md"
                >
                  🚀 Get Started
                </Link>
                <Link
                  to="/login"
                  className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-blue-50 transition-all duration-300 shadow-sm"
                >
                  🔐 Log In
                </Link>
              </div>
            </>
          )}
        </div>

        <div className="mb-10 md:mb-0 md:ml-12 animate-slide-in">
          <img
            src="/assets/Studying-bro.svg"
            alt="Student illustration"
            className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[550px] drop-shadow-2xl transition-transform duration-500 hover:scale-105"
          />
        </div>
      </section>
    </>
  );
}
