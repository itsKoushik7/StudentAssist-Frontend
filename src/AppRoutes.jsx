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
import SettingsPage from "./pages/SettingsPage";
import ProjectHelpForm from "./pages/ProjectHelpForm";
import AdminProjects from "./pages/AdminProjects";
import ResumeTemplateSelector from "./pages/ResumeTemplateSelector";
import MockTest from "./pages/MockTest";

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
          <Route path="/mock-test" element={<MockTest />} />
          <Route
            path="/resumes/templates"
            element={<ResumeTemplateSelector />}
          />
          <Route path="/resumes/form" element={<ResumeForm />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/projects/new" element={<ProjectHelpForm />} />
          <Route path="/admin/projects" element={<AdminProjects />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
