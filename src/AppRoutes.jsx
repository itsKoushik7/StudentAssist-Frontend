// this is for normal routing initially but there is an issue with protected routes
// so we are using PrivateRoute component for protected routes

// import React from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Profile from "./pages/Profile";
// import UploadPaper from "./pages/UploadPaper";
// import QAGenerator from "./pages/QAGenerator";
// import Projects from "./pages/Projects";
// import NotFound from "./pages/NotFound";
// import Mocks from "./pages/Mocks";

// export default function AppRoutes() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/upload" element={<UploadPaper />} />
//         <Route path="/QAGen" element={<QAGenerator />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/mocks" element={<Mocks />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

//  these are the updated routes with PrivateRoute for protected routes

// import React from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Profile from "./pages/Profile";
// import UploadPaper from "./pages/UploadPaper";
// import QAGenerator from "./pages/QAGenerator";
// import Projects from "./pages/Projects";
// import NotFound from "./pages/NotFound";
// import Mocks from "./pages/Mocks";
// import PrivateRoute from "./components/ProtectedRoute"; // ✅ import this

// export default function AppRoutes() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         {/*  Protected Routes */}
//         <Route
//           path="/profile"
//           element={
//             <PrivateRoute>
//               <Profile />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/upload"
//           element={
//             <PrivateRoute>
//               <UploadPaper />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/QAGen"
//           element={
//             <PrivateRoute>
//               <QAGenerator />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/projects"
//           element={
//             <PrivateRoute>
//               <Projects />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/mocks"
//           element={
//             <PrivateRoute>
//               <Mocks />
//             </PrivateRoute>
//           }
//         />

//         {/* Not found route */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// these are the updated routes with PrivateRoute for protected routes layouts

// import React from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Profile from "./pages/Profile";
// import UploadPaper from "./pages/UploadPaper";
// import QAGenerator from "./pages/QAGenerator";
// import Projects from "./pages/Projects";
// import NotFound from "./pages/NotFound";
// import Mocks from "./pages/Mocks";
// import Layout from "./components/Layout";

// export default function AppRoutes() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Pages without Layout (like login/register) */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         {/* Pages with shared Layout */}
//         <Route element={<Layout />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/upload" element={<UploadPaper />} />
//           <Route path="/QAGen" element={<QAGenerator />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/mocks" element={<Mocks />} />
//           <Route path="*" element={<NotFound />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import UploadPaper from "./pages/UploadPaper";
import QAGenerator from "./pages/QAGenerator";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import Mocks from "./pages/Mocks";
import Layout from "./components/Layout";
import VerifyOtp from "./pages/VerifyOtp";
import ResumeForm from "./pages/ResumeForm";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes without layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<VerifyOtp />} />

        {/* Routes with shared layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/upload" element={<UploadPaper />} />
          <Route path="/QAGen" element={<QAGenerator />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/mocks" element={<Mocks />} />
          <Route path="/resume-form" element={<ResumeForm />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
