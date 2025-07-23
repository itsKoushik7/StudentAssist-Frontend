import React from "react";
import { motion } from "framer-motion";

// 🔁 Reusable card component
const FeatureCard = ({ image, title, description, bg }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{
      scale: 1.03,
      y: -6,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
    }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
    className={`rounded-xl shadow-md p-6 text-center cursor-default ${bg}`}
  >
    <img src={image} alt={title} className="w-28 h-28 mx-auto mb-4" />
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </motion.div>
);

// 🧠 QA Generator Steps
const qaSteps = [
  {
    title: "1. Search for Your Subject",
    description:
      "Search your subject or semester. If papers were uploaded before, you’ll instantly access them.",
    image: "/assets/search.svg",
  },
  {
    title: "2. Auto-Generated QA Sets",
    description:
      "AI identifies repeated & important questions, classifies them unit-wise, and generates answers.",
    image: "/assets/ai-analysis.svg",
  },
  {
    title: "3. Download & Revise",
    description:
      "Download a neat, printable QA PDF — even one day before exams!",
    image: "/assets/pdf-download.svg",
  },
  {
    title: "4. Contribute if Missing",
    description: "Can’t find your paper? Upload it to help others like you.",
    image: "/assets/upload.svg",
  },
];

// 🧾 Resume Builder Steps
const resumeSteps = [
  {
    title: "1. Fill Basic Details",
    description:
      "Enter your education, skills, projects, and internships in a simple guided form.",
    image: "/assets/resume-card.svg",
  },
  {
    title: "2. AI Summary & Styling",
    description:
      "AI improves your summary and selects an ATS-friendly layout for your target role.",
    image: "/assets/resume-card2.svg",
  },
  {
    title: "3. Download Resume",
    description:
      "Preview and download your professional resume as a polished PDF instantly.",
    image: "/assets/resume-card3.svg",
  },
];

// 💼 Project Assist Steps
const projectSteps = [
  {
    title: "1. Share Your Project Idea or Problem",
    description:
      "Whether you're just starting or stuck midway, tell us your current project status, idea, or challenge.",
    image: "/assets/project-card.svg",
  },
  {
    title: "2. Get Personalized Assistance",
    description:
      "We match you with relevant teammates, resources, and suggestions to build or unblock your project fast.",
    image: "/assets/project-card2.svg",
  },
  {
    title: "3. Complete, Improve & Maintain",
    description:
      "Successfully finish your project with our guidance — and get help with post-submission improvements too!",
    image: "/assets/project-card3.svg",
  },
];

export default function HowItWorksAllFeatures() {
  return (
    <div className="bg-gray-100">
      {/* 📚 QA Generator */}
      <section className="bg-white py-12 px-6 md:px-16" id="how-it-works">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-10">
          How QA Generator Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {qaSteps.map((step, index) => (
            <FeatureCard key={index} {...step} bg="bg-blue-50" />
          ))}
        </div>
      </section>

      {/* 🧾 Resume Builder */}
      <section className="bg-blue-50 py-12 px-6 md:px-16" id="resume-builder">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-10">
          Smart CV Designer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {resumeSteps.map((step, index) => (
            <FeatureCard key={index} {...step} bg="bg-white" />
          ))}
        </div>
      </section>

      {/* 💼 Project Assist */}
      <section className="bg-white py-12 px-6 md:px-16" id="project-assist">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-10">
          Project Assist
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projectSteps.map((step, index) => (
            <FeatureCard key={index} {...step} bg="bg-blue-50" />
          ))}
        </div>
      </section>
    </div>
  );
}
