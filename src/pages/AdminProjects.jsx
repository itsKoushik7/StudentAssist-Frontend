import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { get } from "../api/apiHelper";
import * as api from "../api/apiConstants";
// Dummy data for now – replace with API call
const dummyProjects = [
  {
    id: 1,
    title: "Smart Attendance System using AI",
    user: { name: "Koushik Nandikanti", email: "koushik@example.com" },
    domain: "AI/ML",
    tech_stack: "React, Python, OpenCV",
    current_stage: "development",
    team_size: 3,
    help_needed: "Need guidance for OpenCV integration.",
    status: "open",
    created_at: "2025-07-23",
  },
  {
    id: 2,
    title: "Blockchain-based Voting App",
    user: { name: "Nikhil Reddy", email: "nikhil@example.com" },
    domain: "Blockchain",
    tech_stack: "Solidity, React",
    current_stage: "idea",
    team_size: 2,
    help_needed: "Need clarity on smart contracts.",
    status: "in_progress",
    created_at: "2025-07-22",
  },
];

const statusColors = {
  open: "bg-yellow-200 text-yellow-800",
  in_progress: "bg-blue-200 text-blue-800",
  resolved: "bg-green-200 text-green-800",
};

export default function AdminProjects() {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const responce = await get(api.FETCH_ALL_PROJECTS);
      setProjects(responce.projects);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-primary-dark mb-6 text-center">
          Project Help Requests – Admin Dashboard
        </h1>

        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3">Title</th>
                  <th className="px-4 py-3">Student</th>
                  <th className="px-4 py-3">Domain</th>
                  <th className="px-4 py-3">Tech Stack</th>
                  <th className="px-4 py-3">Stage</th>
                  <th className="px-4 py-3">Team</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, i) => (
                  <motion.tr
                    key={project.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b hover:bg-blue-50"
                  >
                    <td className="px-4 py-3 font-medium">{project.title}</td>
                    <td className="px-4 py-3">
                      <div className="font-semibold">
                        {project.student_name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {project.student_email}
                      </div>
                    </td>
                    <td className="px-4 py-3">{project.domain}</td>
                    <td className="px-4 py-3">{project.tech_stack}</td>
                    <td className="px-4 py-3 capitalize">
                      {project.current_stage}
                    </td>
                    <td className="px-4 py-3">{project.team_size}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          statusColors[project.status]
                        }`}
                      >
                        {project.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="text-sm text-primary font-semibold hover:underline">
                        View
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {projects.length === 0 && (
            <div className="text-center py-6 text-gray-500">
              No project requests yet.
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
