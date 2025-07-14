import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "1. Search for Your Subject",
    description:
      "Begin by searching your subject or semester. If papers were uploaded before, you’ll instantly access them — no need to upload again.",
    image: "/assets/search.svg",
  },
  {
    title: "2. Auto-Generated QA Sets",
    description:
      "Our AI identifies repeated & important questions, classifies them unit-wise, and generates high-quality answers automatically.",
    image: "/assets/ai-analysis.svg",
  },
  {
    title: "3. Download & Revise",
    description:
      "Get a neat, printable QA PDF that’s ready to revise — even one day before exams! Boost your confidence with focused answers compiled just for your syllabus.",
    image: "/assets/pdf-download.svg",
  },
  {
    title: "4. Contribute if Missing",
    description:
      "Can’t find your paper? Upload it to help others like you. Every contribution helps the next batch of students!",
    image: "/assets/upload.svg",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-12 px-6 md:px-16" id="how-it-works">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-10">
        How It Works
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.03,
              y: -6,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-blue-50 rounded-xl shadow-md p-6 flex flex-col justify-between h-full text-center cursor-default"
          >
            <img
              src={step.image}
              alt={step.title}
              className="w-28 h-28 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
