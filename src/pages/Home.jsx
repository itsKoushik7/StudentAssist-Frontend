// import React, { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import { Link } from "react-router-dom";
// import { getUser } from "../api";
// import HowItWorks from "../components/HowItWorks";
// import Testimonials from "../components/Testimonials";
// import BeforeYouUpload from "../components/BeforeYouUpload";
// import AboutTeam from "../components/AboutTeam";
// import ContactSection from "../components/ContactSection";
// import FAQSection from "../components/FAQSection";
// import StatCounter from "../components/StatCounter";

// export default function Home() {
//   const [user, setUser] = useState(null);
//   const [randomLine, setRandomLine] = useState("");

//   useEffect(() => {
//     const random = quotes[Math.floor(Math.random() * quotes.length)];
//     setRandomLine(random);
//   }, []);

//   useEffect(() => {
//     async function fetchUser() {
//       try {
//         const { data } = await getUser();
//         setUser(data.user);
//       } catch {
//         setUser(null);
//       }
//     }
//     fetchUser();
//   }, []);

//   const quotes = [
//     "Empowering one-day batting students 🏏",
//     "Helping you pass the exam you opened yesterday 📚",
//     "One PDF away from passing! 🫡",
//     "Because 5 units in 1 night is a talent 😎",
//     "Engineers don't sleep — we compile dreams 😴💻",
//     "Important questions? We got you. ✅",
//     "From zero prep to hero PDF 📄🔥",
//     "Study like it's the last night before judgment day 🫣",
//     "Relax... we've already done the panic for you 💥",
//     "Helping students hit distinction boundaries 🏏🎓",
//   ];

//   return (
//     <>
//       <section className="p-6 md:p-12 flex flex-col-reverse md:flex-row items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 min-h-[calc(100vh-64px)] overflow-hidden">
//         <div className="max-w-xl space-y-6 animate-fade-in md:pr-8">
//           {user ? (
//             <>
//               <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 leading-tight">
//                 {randomLine}
//               </h1>
//               <p className="text-lg text-gray-700">
//                 What would you like to do today?
//               </p>
//               <div className="flex flex-wrap gap-4">
//                 <Link
//                   to="/mocks"
//                   className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 shadow-md"
//                 >
//                   📤 Mocks and Blogs
//                 </Link>
//                 <Link
//                   to="/qa-generator"
//                   className="bg-green-600 text-white px-6 py-2 rounded-full font-medium hover:bg-green-700 transition-all duration-300 shadow-md"
//                 >
//                   📑 Generate QA PDF
//                 </Link>
//                 <Link
//                   to="/profile"
//                   className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-blue-50 transition-all duration-300"
//                 >
//                   🙍 View Profile
//                 </Link>
//               </div>
//             </>
//           ) : (
//             <>
//               <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 leading-tight">
//                 {randomLine}
//               </h1>
//               <p className="text-lg text-gray-700">
//                 Facing last-minute exam panic? Unsure about resume building or
//                 final year projects?
//                 <br />
//                 <span className="font-semibold text-blue-700">
//                   Student Assist
//                 </span>{" "}
//                 has got your back — everything you need, in one place.
//               </p>
//               <div className="flex flex-wrap gap-4">
//                 <Link
//                   to="/register"
//                   className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 shadow-md"
//                 >
//                   🚀 Get Started
//                 </Link>
//                 <Link
//                   to="/login"
//                   className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-blue-50 transition-all duration-300 shadow-sm"
//                 >
//                   🔐 Log In
//                 </Link>
//               </div>
//             </>
//           )}
//         </div>

//         <div className="mb-10 md:mb-0 md:ml-12 animate-slide-in">
//           <img
//             src="/assets/Studying-bro.svg"
//             alt="Student illustration"
//             className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[550px] drop-shadow-2xl transition-transform duration-500 hover:scale-105"
//           />
//         </div>
//       </section>
//       <section className="py-10 px-4 bg-white flex flex-wrap justify-center gap-6">
//         <StatCounter label="Registered Users" end={3421} icon="👤" />
//         <StatCounter label="Subjects Available" end={124} icon="📘" />
//         <StatCounter label="QA PDFs Downloaded" end={5638} icon="📑" />
//         <StatCounter label="Resumes Created" end={1032} icon="🧑‍💼" />
//         <StatCounter label="Projects Assisted" end={215} icon="💡" />
//       </section>
//       <section>
//         <HowItWorks />
//         <Testimonials />
//         <BeforeYouUpload />
//         <AboutTeam />

//         <FAQSection />
//         <ContactSection />
//       </section>
//     </>
//   );
// }
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { getUser } from "../api";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import BeforeYouUpload from "../components/BeforeYouUpload";
import AboutTeam from "../components/AboutTeam";
import ContactSection from "../components/ContactSection";
import FAQSection from "../components/FAQSection";
import StatCounter from "../components/StatCounter";

export default function Home() {
  const [user, setUser] = useState(null);
  const [randomLine, setRandomLine] = useState("");

  useEffect(() => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setRandomLine(random);
  }, []);

  useEffect(() => {
    async function fetchUser() {
      try {
        const { data } = await getUser();
        setUser(data.user);
      } catch {
        setUser(null);
      }
    }
    fetchUser();
  }, []);

  const quotes = [
    "Empowering one-day batting students 🏏",
    "Helping you pass the exam you opened yesterday 📚",
    "One PDF away from passing! 🫡",
    "Because 5 units in 1 night is a talent 😎",
    "Engineers don't sleep — we compile dreams 😴💻",
    "Important questions? We got you. ✅",
    "From zero prep to hero PDF 📄🔥",
    "Study like it's the last night before judgment day 🫣",
    "Relax... we've already done the panic for you 💥",
    "Helping students hit distinction boundaries 🏏🎓",
  ];

  return (
    <>
      {/* <Navbar /> */}
      <section className="p-6 md:p-12 flex flex-col-reverse md:flex-row items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 min-h-[calc(100vh-64px)] overflow-hidden">
        <div className="max-w-xl space-y-6 animate-fade-in md:pr-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 leading-tight">
            {randomLine}
          </h1>
          {user ? (
            <>
              <p className="text-lg text-gray-700">
                What would you like to do today?
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/mocks"
                  className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 shadow-md"
                >
                  📤 Mocks and Blogs
                </Link>
                <Link
                  to="/qa-generator"
                  className="bg-green-600 text-white px-6 py-2 rounded-full font-medium hover:bg-green-700 transition-all duration-300 shadow-md"
                >
                  📑 Generate QA PDF
                </Link>
                <Link
                  to="/profile"
                  className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-blue-50 transition-all duration-300"
                >
                  🙍 View Profile
                </Link>
              </div>
            </>
          ) : (
            <>
              <p className="text-lg text-gray-700">
                Facing last-minute exam panic? Unsure about resume building or
                final year projects?
                <br />
                <span className="font-semibold text-blue-700">
                  Student Assist
                </span>{" "}
                has got your back — everything you need, in one place.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/register"
                  className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 shadow-md"
                >
                  🚀 Get Started
                </Link>
                <Link
                  to="/login"
                  className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-blue-50 transition-all duration-300 shadow-sm"
                >
                  🔐 Log In
                </Link>
              </div>
            </>
          )}
        </div>

        <div className="mb-10 md:mb-0 md:ml-12 animate-slide-in">
          <img
            src="/assets/Studying-bro.svg"
            alt="Student illustration"
            className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[550px] drop-shadow-2xl transition-transform duration-500 hover:scale-105"
          />
        </div>
      </section>

      <section className="py-10 px-4 bg-white flex flex-wrap justify-center gap-6">
        <StatCounter label="Registered Users" end={3421} icon="👤" />
        <StatCounter label="Subjects Available" end={124} icon="📘" />
        <StatCounter label="QA PDFs Downloaded" end={5638} icon="📑" />
        <StatCounter label="Resumes Created" end={1032} icon="🧑‍💼" />
        <StatCounter label="Projects Assisted" end={215} icon="💡" />
      </section>

      <section>
        <HowItWorks />
        <Testimonials />
        <BeforeYouUpload />
        <AboutTeam />
        <FAQSection />
        <ContactSection />
      </section>
    </>
  );
}
