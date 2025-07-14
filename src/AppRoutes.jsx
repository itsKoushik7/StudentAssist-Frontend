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

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/upload" element={<UploadPaper />} />
        <Route path="/QAGen" element={<QAGenerator />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/mocks" element={<Mocks />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
