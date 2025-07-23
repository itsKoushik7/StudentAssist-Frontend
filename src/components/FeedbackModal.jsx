import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { post } from "../api/apiHelper";
import * as api from "../api/apiConstants";

export default function FeedbackModal({ isOpen, onClose, context = "" }) {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (rating === 0 || !feedback.trim()) return;

    setLoading(true);
    try {
      await post(api.FEEDBACK, {
        rating,
        feedback,
        context,
      });

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFeedback("");
        setRating(0);
        onClose();
      }, 1500);
    } catch (err) {
      console.error("Feedback submission failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full relative z-50">
              <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">
                Rate Your Experience
              </h2>
              <p className="text-sm text-center text-gray-500 mb-4">
                Your feedback helps us improve and serve you better.
              </p>

              {/* Rating stars */}
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((num) => (
                  <Star
                    key={num}
                    size={28}
                    className={`cursor-pointer mx-1 transition-transform ${
                      num <= rating
                        ? "text-yellow-400 scale-110"
                        : "text-gray-300"
                    }`}
                    onClick={() => setRating(num)}
                  />
                ))}
              </div>

              {/* Feedback Textarea */}
              <textarea
                rows={4}
                placeholder="Write your feedback..."
                className="w-full border border-gray-300 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-primary mb-4"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={loading || rating === 0 || !feedback.trim()}
                className="w-full bg-primary text-white font-medium py-2 rounded-xl hover:bg-primary-dark transition disabled:opacity-60"
              >
                {loading
                  ? "Submitting..."
                  : submitted
                  ? "Thank you!"
                  : "Submit Feedback"}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
