import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const socials = [
  {
    name: "Instagram",
    icon: <FaInstagram size={28} />,
    link: "https://instagram.com/krishna.koushik7",
    color: "text-pink-600",
  },
  {
    name: "X",
    icon: <FaXTwitter size={28} />,
    link: "https://x.com/your_handle/NL_Koushik",
    color: "text-black",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={28} />,
    link: "https://linkedin.com/in/nlkoushik",
    color: "text-blue-700",
  },
];

export default function ContactSection() {
  return (
    <section
      className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-6 md:px-20 text-center"
      id="contact"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-blue-800 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Let's Connect
      </motion.h2>
      <motion.p
        className="text-gray-700 mb-10 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Have feedback, questions, or just want to say hi? Reach out on any of
        the platforms below — we’d love to hear from you!
      </motion.p>

      <div className="flex justify-center gap-8">
        {socials.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-white rounded-full shadow-md p-5 hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 ${social.color}`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    </section>
  );
}
