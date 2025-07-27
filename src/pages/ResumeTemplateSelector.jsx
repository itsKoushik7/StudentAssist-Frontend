import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const resumeTemplates = [
  {
    id: "classic",
    title: "Classic Resume",
    description: "Clean and professional layout for all job roles.",
    preview: "/assets/resume-classic.svg",
  },
  {
    id: "modern",
    title: "Modern Resume",
    description: "Bold design with contemporary section styling.",
    preview: "/assets/resume-modern.svg",
  },
  {
    id: "minimal",
    title: "Minimal Resume",
    description: "Simple layout focused on readability and spacing.",
    preview: "/assets/Coding-bro.svg",
  },
];

export default function ResumeTemplateSelector() {
  const navigate = useNavigate();

  const handleSelect = (templateId) => {
    navigate(`/resumes/form?template=${templateId}`);
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-4xl font-bold text-blue-800 text-center mb-10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Choose Your Resume Template
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        {resumeTemplates.map((tpl) => (
          <motion.div
            key={tpl.id}
            className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-shadow p-4 flex flex-col items-center"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {/* A4 Ratio Box */}
            <div className="relative w-full max-w-[280px] aspect-[1/1.41] overflow-hidden flex justify-center items-center mb-4">
              <motion.img
                src={tpl.preview}
                alt={tpl.title}
                className="w-full h-full object-cover rounded"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <h2 className="text-lg font-semibold text-blue-700 mb-1">
              {tpl.title}
            </h2>
            <p className="text-sm text-gray-600 text-center">
              {tpl.description}
            </p>

            <button
              onClick={() => handleSelect(tpl.id)}
              className="mt-4 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
            >
              Use This Template
            </button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
