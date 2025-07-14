import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getUser } from "../api";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      try {
        const { data } = await getUser();
        setUser(data.user);
      } catch (err) {
        console.error("Error fetching user:", err);
        navigate("/login");
      }
    }
    fetchUser();
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-blue-50 to-blue-100 p-6 md:p-12 flex flex-col items-center ">
        {user && (
          <div className="z-10 -mb-12 animate-fade-in">
            <div className="w-24 h-24 bg-orange-600 text-white flex items-center justify-center rounded-full text-4xl font-bold shadow-lg">
              {user.name.charAt(0).toUpperCase()}
            </div>
          </div>
        )}

        <div className="mt-16 flex flex-col-reverse md:flex-row items-center justify-evenly w-full max-w-6xl gap-5">
          <div className="w-full max-w-xl bg-white p-8 rounded-xl shadow-xl animate-fade-in">
            <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
              My Profile
            </h2>
            {user ? (
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  <span className="font-semibold text-blue-600">Name:</span>{" "}
                  {user.name}
                </p>
                <p>
                  <span className="font-semibold text-blue-600">Email:</span>{" "}
                  {user.email}
                </p>
                <p>
                  <span className="font-semibold text-blue-600">College:</span>{" "}
                  {user.college_name}
                </p>
                <p>
                  <span className="font-semibold text-blue-600">Branch:</span>{" "}
                  {user.branch}
                </p>
                <p>
                  <span className="font-semibold text-blue-600">Year:</span>{" "}
                  {user.year}
                </p>
                <p>
                  <span className="font-semibold text-blue-600">Joined:</span>{" "}
                  {new Date(user.created_at).toLocaleDateString()}
                </p>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>

          <div className="animate-slide-in">
            <img
              src="/assets/Account-bro.svg"
              alt="Profile illustration"
              className="w-[300px] sm:w-[400px] md:w-[500px] drop-shadow-xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </>
  );
}
