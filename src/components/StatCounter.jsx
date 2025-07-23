// components/StatCounter.jsx
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function StatCounter({ label, end, icon }) {
  const controls = useAnimation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    controls.start({
      count: end,
      transition: { duration: 2, ease: "easeOut" },
    });
  }, [end]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev < end) return prev + Math.ceil(end / 50);
        clearInterval(interval);
        return end;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [end]);

  return (
    <div className="flex flex-col items-center p-4 w-36 sm:w-44 bg-white shadow-lg rounded-xl">
      <div className="text-2xl">{icon}</div>
      <motion.h3 className="text-3xl font-bold text-blue-700">
        {count}
      </motion.h3>
      <p className="text-center text-sm font-medium text-gray-600">{label}</p>
    </div>
  );
}
