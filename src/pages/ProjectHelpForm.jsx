import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import * as api from "../api/apiConstants";
import { post } from "../api/apiHelper";

const formVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

export default function ProjectHelpForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    domain: "",
    description: "",
    tech_stack: "",
    current_stage: "idea",
    team_size: 1,
    expected_output: "",
    help_needed: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await post(api.NEW_PROJECT, formData);
      consosle.log(res);
      navigate("/projects");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8"
      >
        <h2 className="text-2xl font-bold text-primary-dark mb-6 text-center">
          🤝 Request Final Year Project Help
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {[
            {
              label: "Project Title",
              name: "title",
              type: "text",
              placeholder: "AI-based Attendance System",
            },
            {
              label: "Domain",
              name: "domain",
              type: "text",
              placeholder: "Web, AI/ML, IoT, etc.",
            },
            {
              label: "Short Description",
              name: "description",
              type: "textarea",
              placeholder: "Briefly describe your project idea...",
            },
            {
              label: "Tech Stack",
              name: "tech_stack",
              type: "text",
              placeholder: "React, Node.js, Firebase, etc.",
            },
            {
              label: "Expected Output",
              name: "expected_output",
              type: "text",
              placeholder: "Website, Mobile App, Report, etc.",
            },
            {
              label: "How can we help you?",
              name: "help_needed",
              type: "textarea",
              placeholder: "What kind of assistance are you looking for?",
            },
          ].map((field, i) => (
            <motion.div
              key={field.name}
              variants={formVariants}
              initial="hidden"
              animate="visible"
              custom={i}
            >
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                {field.label}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              )}
            </motion.div>
          ))}

          <motion.div
            variants={formVariants}
            initial="hidden"
            animate="visible"
            custom={6}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Current Stage
              </label>
              <select
                name="current_stage"
                value={formData.current_stage}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="idea">Idea</option>
                <option value="planning">Planning</option>
                <option value="development">Development</option>
                <option value="stuck">Stuck</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Team Size
              </label>
              <input
                type="number"
                name="team_size"
                min={1}
                value={formData.team_size}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </motion.div>

          <motion.div
            variants={formVariants}
            initial="hidden"
            animate="visible"
            custom={7}
          >
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Upload Abstract / Docs (optional)
            </label>
            <input
              type="file"
              name="file"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 file:text-sm file:mr-4"
            />
          </motion.div>

          <motion.div
            variants={formVariants}
            initial="hidden"
            animate="visible"
            custom={8}
            className="pt-4"
          >
            <button
              type="submit"
              className="w-full bg-primary-dark hover:bg-primary text-white py-3 rounded-xl shadow-md transition-all duration-200 text-lg font-medium"
            >
              🚀 Submit Request
            </button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}
