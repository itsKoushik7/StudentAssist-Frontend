// import React from "react";
// import Navbar from "../components/Navbar";

// export default function Projects() {
//   return (
//     <>
//       {/* <Navbar /> */}
//       <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-6">
//         <div className="w-full max-w-5xl flex flex-col-reverse md:flex-row items-center justify-center gap-8 animate-fade-in">
//           <div className="w-[280px] sm:w-[350px] md:w-[400px] lg:w-[450px] drop-shadow-xl">
//             <img
//               src="/assets/underprogress.svg"
//               alt="Under Development Illustration"
//               className="w-full"
//             />
//           </div>

//           <div className="text-center md:text-left space-y-4 max-w-lg">
//             <h1 className="text-3xl font-bold text-primary-dark">
//               🚧 Projects Zone Coming Soon!
//             </h1>
//             <p className="text-gray-700 text-lg">
//               We're building something awesome for your final-year project needs
//               — from team building to skill matching, it’s all on the way. Stay
//               tuned and keep innovating! 💡
//             </p>
//             <p className="text-sm text-neutral-dark">
//               This feature is currently under development and will be available
//               soon.
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const [userId, setUserId] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  useEffect(() => {
    setUserId(user ? user.id : null);
  }, []);
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl flex flex-col-reverse md:flex-row items-center justify-center gap-10"
      >
        {/* 🖼️ Illustration */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4 }}
          className="w-[280px] sm:w-[360px] md:w-[420px] lg:w-[460px] drop-shadow-xl"
        >
          <img
            src="/assets/underprogress.svg"
            alt="Project Assistance"
            className="w-full"
          />
        </motion.div>

        {/* 📝 Text */}
        <div className="text-center md:text-left space-y-5 max-w-xl">
          <motion.h1
            className="text-3xl sm:text-4xl font-bold text-primary-dark"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Project Help Zone
          </motion.h1>

          <motion.p
            className="text-gray-700 text-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            Got a project idea? Need guidance to build it? We’re here to help —
            from tech stack suggestions to finding teammates, we’ve got you
            covered!
          </motion.p>

          {/* <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            <button
              onClick={() => {
                userId == 1
                  ? navigate("/admin/projects")
                  : navigate("/projects/new");
              }}
              className="bg-primary-dark hover:bg-primary text-white px-6 py-2 rounded-xl text-md shadow-md transition-all duration-200"
            >
              {userId == 1 ? "Show Projects" : "Request Project Help"}
            </button>
          </motion.div> */}
          {userId == 1 ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex gap-4"
            >
              <button
                onClick={() => navigate("/admin/projects")}
                className="bg-primary-dark hover:bg-primary text-white px-6 py-2 rounded-xl text-md shadow-md transition-all duration-200"
              >
                Show Projects
              </button>
              <button
                onClick={() => navigate("/projects/new")}
                className="bg-primary-dark hover:bg-primary text-white px-6 py-2 rounded-xl text-md shadow-md transition-all duration-200"
              >
                Request Project Help
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <button
                onClick={() => navigate("/projects/new")}
                className="bg-primary-dark hover:bg-primary text-white px-6 py-2 rounded-xl text-md shadow-md transition-all duration-200"
              >
                Request Project Help
              </button>
            </motion.div>
          )}

          <p className="text-sm text-neutral-600 pt-2">
            This feature is under active development. Submissions are open now!
          </p>
        </div>
      </motion.div>
    </div>
  );
}
