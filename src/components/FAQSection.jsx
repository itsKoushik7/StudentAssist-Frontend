import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is this platform free to use?",
    answer:
      "Yes! StudentAssist is completely free for students. You can upload papers, generate QA PDFs, and build resumes without paying anything.",
  },
  {
    question: "What if my subject is not listed?",
    answer:
      "If your subject isn't listed, you can upload a question paper manually. Our system will extract, analyze, and generate QA PDFs for it.",
  },
  {
    question: "Is the AI-generated content reliable?",
    answer:
      "We use top LLMs to ensure answers are syllabus-relevant and clear. Still, double-check if you're unsure — it's meant to assist, not replace study!",
  },
  {
    question: "Can I use this during exams?",
    answer:
      "StudentAssist is meant for **revision**, not cheating. Use it responsibly to boost your prep, especially before externals.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-14 px-6 md:px-20" id="faq">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-10">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center text-left"
            >
              <h3 className="text-md md:text-lg font-medium text-black-700">
                {item.question}
              </h3>
              <ChevronDown
                className={`h-5 w-5 text-blue-600 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600 mt-3 text-sm md:text-base px-1">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
