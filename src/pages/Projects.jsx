import React from "react";
import Navbar from "../components/Navbar";

export default function Projects() {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-6">
        <div className="w-full max-w-5xl flex flex-col-reverse md:flex-row items-center justify-center gap-8 animate-fade-in">
          <div className="w-[280px] sm:w-[350px] md:w-[400px] lg:w-[450px] drop-shadow-xl">
            <img
              src="/assets/underprogress.svg"
              alt="Under Development Illustration"
              className="w-full"
            />
          </div>

          <div className="text-center md:text-left space-y-4 max-w-lg">
            <h1 className="text-3xl font-bold text-primary-dark">
              🚧 Projects Zone Coming Soon!
            </h1>
            <p className="text-gray-700 text-lg">
              We're building something awesome for your final-year project needs
              — from team building to skill matching, it’s all on the way. Stay
              tuned and keep innovating! 💡
            </p>
            <p className="text-sm text-neutral-dark">
              This feature is currently under development and will be available
              soon.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
