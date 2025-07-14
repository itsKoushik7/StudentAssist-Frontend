import React from "react";
import { motion } from "framer-motion";

const guidelines = [
  {
    title: "🧾 Upload Clear PDFs",
    description:
      "Ensure your question paper is scanned clearly. Avoid photos, handwritten pages, or blurry scans for the best accuracy.",
  },
  {
    title: "📌 One Subject at a Time",
    description:
      "Please upload only one subject per file. Mixing papers may cause wrong classification or unit mapping.",
  },
  {
    title: "📅 Include Month & Year",
    description:
      "Use filenames like `CN_May2024.pdf` — it helps others identify the paper quickly and improves reuse.",
  },
  {
    title: "⚠️ Avoid Locked Files",
    description:
      "Password-protected or restricted PDFs can’t be processed. Ensure the file is open and unrestricted.",
  },
];

export default function BeforeYouUpload() {
  return (
    <section className="bg-white-50 py-16 px-6 md:px-20" id="upload-guidelines">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12">
        Before You Upload
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {guidelines.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-blue-50 rounded-2xl p-6 shadow-md text-center h-full flex flex-col justify-between hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300"
          >
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
