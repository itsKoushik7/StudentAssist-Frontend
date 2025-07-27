import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { post } from "../api/apiHelper";
import { useLocation, useNavigate } from "react-router-dom";
import * as api from "../api/apiConstants";
import FeedbackModal from "../components/FeedbackModal";

export default function ResumeForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const template = queryParams.get("template");
  console.log("Selected template:", template);

  useEffect(() => {
    if (template === "minimal") {
      navigate("/resumes/templates");
    }
  }, []);

  const [showFeedback, setShowFeedback] = useState(false);
  const [formData, setFormData] = useState({
    template: template,
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    portfolio: "",
    summary: "",
    skills: {
      frontend: "",
      backend: "",
      devops: "",
      others: "",
    },
    education: [{ school: "", degree: "", year: "", cgpa: "", percentage: "" }],
    experience: [{ company: "", role: "", duration: "", description: "" }],
    certifications: [{ title: "", issuer: "", year: "" }],
    projects: [{ title: "", link: "", techStack: "", description: "" }],
    achievements: [""],
    languages: [""],
    hobbies: [""],
    location: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle input changes for nested fields and array fields
  const handleChange = (e, path) => {
    const value = e.target.value;
    const keys = path.split(".");

    setFormData((prev) => {
      let updated = { ...prev };

      // Special handling for array fields (languages, achievements, hobbies)
      if (["languages", "achievements", "hobbies"].includes(keys[0])) {
        const index = parseInt(keys[1]);
        return {
          ...updated,
          [keys[0]]: updated[keys[0]].map((item, i) =>
            i === index ? value : item
          ),
        };
      }

      // General handling for nested objects and arrays
      let ref = updated;
      for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        if (Array.isArray(ref[key])) {
          ref = ref[key][parseInt(keys[i + 1])];
          i++;
        } else {
          ref = ref[key];
        }
      }
      ref[keys[keys.length - 1]] = value;
      return updated;
    });
  };

  // Add a new entry to an array field
  const addEntry = (section) => {
    setFormData((prev) => {
      const newEntry =
        section === "education"
          ? { school: "", degree: "", year: "", cgpa: "", percentage: "" }
          : section === "experience"
          ? { company: "", role: "", duration: "", description: "" }
          : section === "certifications"
          ? { title: "", issuer: "", year: "" }
          : { title: "", link: "", techStack: "", description: "" };

      return {
        ...prev,
        [section]: [...prev[section], newEntry],
      };
    });
  };

  // Remove an entry from an array field
  const removeEntry = (section, index) => {
    setFormData((prev) => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index),
    }));
  };

  const handleGenerateResume = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Format the form data to match backend JSON structure
      const formatted = {
        ...formData,
        skills: {
          frontend: formData.skills.frontend
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean),
          backend: formData.skills.backend
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean),
          devops: formData.skills.devops
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean),
          others: formData.skills.others
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean),
        },
        projects: formData.projects.map((project) => ({
          ...project,
          techStack: project.techStack
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean),
        })),
        achievements: formData.achievements[0]
          .split(",")
          .map((a) => a.trim())
          .filter(Boolean),
        languages: formData.languages[0]
          .split(",")
          .map((l) => l.trim())
          .filter(Boolean),
        hobbies: formData.hobbies[0]
          .split(",")
          .map((h) => h.trim())
          .filter(Boolean),
      };

      const response = await post(api.RESUME_GEN, formatted, {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([response]));
      const a = document.createElement("a");
      a.href = url;
      a.download = `${formData.name}_Resume.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setShowFeedback(true);
    } catch (err) {
      console.error("Resume PDF download error:", err);
      setError("Failed to generate resume. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex h-screen"
    >
      <div className="w-3/5 overflow-y-scroll hide-scrollbar p-8 space-y-6">
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl font-bold mb-4 text-blue-700"
        >
          Create Resume
        </motion.h1>

        {/* Basic Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 gap-4"
        >
          <Input
            label="Full Name"
            path="name"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            label="Email"
            path="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            label="Phone"
            path="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <Input
            label="LinkedIn URL"
            path="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
          />
          <Input
            label="GitHub URL"
            path="github"
            value={formData.github}
            onChange={handleChange}
          />
          <Input
            label="Portfolio URL"
            path="portfolio"
            value={formData.portfolio}
            onChange={handleChange}
          />
        </motion.div>

        <TextArea
          label="Professional Summary"
          path="summary"
          value={formData.summary}
          onChange={handleChange}
        />

        {/* Skills */}
        <SectionTitle title="Skills" />
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Frontend (comma separated)"
            path="skills.frontend"
            value={formData.skills.frontend}
            onChange={handleChange}
          />
          <Input
            label="Backend (comma separated)"
            path="skills.backend"
            value={formData.skills.backend}
            onChange={handleChange}
          />
          <Input
            label="DevOps (comma separated)"
            path="skills.devops"
            value={formData.skills.devops}
            onChange={handleChange}
          />
          <Input
            label="Others (comma separated)"
            path="skills.others"
            value={formData.skills.others}
            onChange={handleChange}
          />
        </div>

        {/* Education */}
        <SectionTitle title="Education" />
        {formData.education.map((edu, index) => (
          <div key={index} className="border p-4 rounded mb-4 relative">
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="College/School"
                path={`education.${index}.school`}
                value={edu.school}
                onChange={handleChange}
              />
              <Input
                label="Degree"
                path={`education.${index}.degree`}
                value={edu.degree}
                onChange={handleChange}
              />
              <Input
                label="Year"
                path={`education.${index}.year`}
                value={edu.year}
                onChange={handleChange}
              />
              <Input
                label="CGPA"
                path={`education.${index}.cgpa`}
                value={edu.cgpa}
                onChange={handleChange}
              />
              <Input
                label="Percentage"
                path={`education.${index}.percentage`}
                value={edu.percentage}
                onChange={handleChange}
              />
            </div>
            {formData.education.length > 1 && (
              <button
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                onClick={() => removeEntry("education", index)}
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => addEntry("education")}
        >
          Add Education
        </button>

        {/* Experience */}
        <SectionTitle title="Experience" />
        {formData.experience.map((exp, index) => (
          <div key={index} className="border p-4 rounded mb-4 relative">
            <Input
              label="Company"
              path={`experience.${index}.company`}
              value={exp.company}
              onChange={handleChange}
            />
            <Input
              label="Role"
              path={`experience.${index}.role`}
              value={exp.role}
              onChange={handleChange}
            />
            <Input
              label="Duration"
              path={`experience.${index}.duration`}
              value={exp.duration}
              onChange={handleChange}
            />
            <TextArea
              label="Description"
              path={`experience.${index}.description`}
              value={exp.description}
              onChange={handleChange}
            />
            {formData.experience.length > 1 && (
              <button
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                onClick={() => removeEntry("experience", index)}
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => addEntry("experience")}
        >
          Add Experience
        </button>

        {/* Certifications */}
        <SectionTitle title="Certifications" />
        {formData.certifications.map((cert, index) => (
          <div key={index} className="border p-4 rounded mb-4 relative">
            <Input
              label="Title"
              path={`certifications.${index}.title`}
              value={cert.title}
              onChange={handleChange}
            />
            <Input
              label="Issuer"
              path={`certifications.${index}.issuer`}
              value={cert.issuer}
              onChange={handleChange}
            />
            <Input
              label="Year"
              path={`certifications.${index}.year`}
              value={cert.year}
              onChange={handleChange}
            />
            {formData.certifications.length > 1 && (
              <button
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                onClick={() => removeEntry("certifications", index)}
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => addEntry("certifications")}
        >
          Add Certification
        </button>

        {/* Projects */}
        <SectionTitle title="Projects" />
        {formData.projects.map((proj, index) => (
          <div key={index} className="border p-4 rounded mb-4 relative">
            <Input
              label="Project Title"
              path={`projects.${index}.title`}
              value={proj.title}
              onChange={handleChange}
            />
            <Input
              label="Link"
              path={`projects.${index}.link`}
              value={proj.link}
              onChange={handleChange}
            />
            <Input
              label="Tech Stack (comma separated)"
              path={`projects.${index}.techStack`}
              value={proj.techStack}
              onChange={handleChange}
            />
            <TextArea
              label="Description"
              path={`projects.${index}.description`}
              value={proj.description}
              onChange={handleChange}
            />
            {formData.projects.length > 1 && (
              <button
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                onClick={() => removeEntry("projects", index)}
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => addEntry("projects")}
        >
          Add Project
        </button>

        <TextArea
          label="Achievements (comma separated)"
          path="achievements.0"
          value={formData.achievements[0]}
          onChange={handleChange}
        />
        <Input
          label="Languages (comma separated)"
          path="languages.0"
          value={formData.languages[0]}
          onChange={handleChange}
        />
        <Input
          label="Hobbies (comma separated)"
          path="hobbies.0"
          value={formData.hobbies[0]}
          onChange={handleChange}
        />
        <Input
          label="Location"
          path="location"
          value={formData.location}
          onChange={handleChange}
        />

        {error && <p className="text-red-500">{error}</p>}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          onClick={handleGenerateResume}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Resume"}
        </motion.button>
      </div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="hidden md:flex fixed top-0 right-0 w-full md:w-2/5 h-screen bg-gradient-to-b from-blue-100 to-blue-200 items-center justify-center p-4 shadow-lg z-10"
      >
        <img
          src="/assets/resume-1.svg"
          alt="Resume Preview"
          className="w-full h-auto max-w-xs"
        />
      </motion.div>

      <FeedbackModal
        isOpen={showFeedback}
        onClose={() => setShowFeedback(false)}
        context="Resume Generation"
      />
    </motion.div>
  );
}

function Input({ label, value, path, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1 text-blue-500">
        {label}
      </label>
      <input
        type="text"
        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={value}
        onChange={(e) => onChange(e, path)}
      />
    </div>
  );
}

function TextArea({ label, value, path, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1 text-blue-500">
        {label}
      </label>
      <textarea
        rows={3}
        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={value}
        onChange={(e) => onChange(e, path)}
      />
    </div>
  );
}

function SectionTitle({ title }) {
  return (
    <h2 className="text-xl font-semibold mt-8 mb-2 text-blue-600">{title}</h2>
  );
}
