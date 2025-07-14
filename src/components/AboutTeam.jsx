import React from "react";
import { motion } from "framer-motion";

export default function AboutTeam() {
  return (
    <section className="bg-blue-50 py-16 px-6 md:px-20" id="about">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12">
        Built by Students, for Students
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-xl text-center lg:text-left"
        >
          <p className="text-gray-700 text-lg leading-relaxed">
            We know the pain of prepping the night before externals, scrambling
            for past papers, and building resumes at the last minute.
          </p>
          <p className="mt-4 text-gray-700 text-lg font-semibold">
            That’s why we built{" "}
            <span className="text-blue-600">Student Assist</span> — a one-stop
            platform to save time, reduce stress, and help students like us
            succeed 💡.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 max-w-sm text-center"
        >
          <img
            src="/assets/creator.svg"
            alt="Creator"
            className="w-24 h-24 mx-auto rounded-full border-4 border-white shadow-lg mb-4"
          />
          <h3 className="text-xl font-bold text-blue-700">
            LaxmiKoushik Nandikanti
          </h3>
          {/* <p className="text-gray-600 text-sm">EX Student, Nomad</p>
          <p className="text-gray-600 text-sm mt-2 italic">
            "Building tools I wish I had in my 1st year."
          </p> */}
          <p className="text-gray-600 text-sm">
            Once lost, now building maps for others.
          </p>
          <p className="text-gray-600 text-sm mt-2 italic">
            "If I had this in 1st year, I'd have slept better before externals."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
