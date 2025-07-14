import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

// const testimonials = [
//   {
//     name: "Ravi T. (CSE 3rd Year)",
//     quote:
//       "I revised my entire syllabus in 6 hours... slept for 2... and still passed. Legend says, it's because of StudentAssist.",
//   },
//   {
//     name: "Anjali K. (EEE Final Year)",
//     quote:
//       "Resume built, team found, paper uploaded. All in one coffee break. 🔥",
//   },
//   {
//     name: "Rahul M. (ECE, Procrastinator)",
//     quote:
//       "Missed classes for a semester. This tool was my lifeline before externals.",
//   },
//   {
//     name: "Sneha V. (Mechanical)",
//     quote:
//       "Even if I forget lectures, I remember this site. It saved me thrice.",
//   },
// ];
const testimonials = [
  {
    name: "The Night-Before Legend",
    quote:
      "I revised my entire syllabus in 6 hours... slept for 2... and still passed. Legend says, it's because of StudentAssist.",
  },
  {
    name: "The Coffee-Break Hustler",
    quote:
      "Resume built, team found, paper uploaded. All in one coffee break. 🔥",
  },
  {
    name: "The Proud Procrastinator",
    quote:
      "Missed classes for a semester. This tool was my lifeline before externals.",
  },
  {
    name: "The Forgetful Genius",
    quote:
      "Even if I forget lectures, I remember this site. It saved me thrice.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-blue-50 py-16 px-6 md:px-20" id="testimonials">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12">
        Student Testimonials
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{
              scale: 1.03,
              y: -6,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 border border-blue-100 shadow-md cursor-default"
          >
            <div className="mb-4">
              <MessageCircle className="w-6 h-6 text-blue-600 mb-2" />
              <p className="text-gray-700 text-sm italic">“{t.quote}”</p>
            </div>
            <p className="text-sm font-semibold text-blue-700 mt-auto">
              — {t.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
