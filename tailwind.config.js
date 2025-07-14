// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       animation: {
//         "fade-in": "fadeIn 1s ease-out forwards",
//         "slide-in": "slideIn 0.8s ease-out forwards",
//       },
//       keyframes: {
//         fadeIn: {
//           "0%": { opacity: 0 },
//           "100%": { opacity: 1 },
//         },
//         slideIn: {
//           "0%": { transform: "translateX(50%)", opacity: 0 },
//           "100%": { transform: "translateX(0)", opacity: 1 },
//         },
//       },
//     },
//   },
//   plugins: [],
// };

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       animation: {
//         "fade-in": "fadeIn 1s ease-out forwards",
//         "slide-in": "slideIn 0.8s ease-out forwards",
//       },
//       keyframes: {
//         fadeIn: {
//           "0%": { opacity: 0 },
//           "100%": { opacity: 1 },
//         },
//         slideIn: {
//           "0%": { transform: "translateX(50%)", opacity: 0 },
//           "100%": { transform: "translateX(0)", opacity: 1 },
//         },
//       },
//       spacing: {
//         128: "32rem",
//         144: "36rem",
//       },
//       fontSize: {
//         xxs: "0.65rem",
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#3b82f6", // blue-500
          DEFAULT: "#2563eb", // blue-600
          dark: "#1e3a8a", // blue-900
        },
        neutral: {
          light: "#f1f5f9", // slate-100
          DEFAULT: "#1e293b", // slate-800
        },
        accent: {
          success: "#10b981",
          warning: "#f59e0b",
          danger: "#ef4444",
          avatar: "#f97316",
        },
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
        "slide-in": "slideIn 0.8s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideIn: {
          "0%": { transform: "translateX(50%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      fontSize: {
        xxs: "0.65rem",
      },
    },
  },
  plugins: [],
};
