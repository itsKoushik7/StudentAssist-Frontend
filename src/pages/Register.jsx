// import React, { useState } from "react";
// import { register } from "../api";
// import { Link, useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Select from "react-select";
// import axios from "axios";

// export default function Register() {
//   const nav = useNavigate();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     college_display_code: "",
//     branch: "",
//     year: "",
//   });
//   const [err, setErr] = useState("");
//   const [collegeOptions, setCollegeOptions] = useState([]);

//   // Fetch college s
//   const fetchColleges = async (inputValue) => {
//     if (!inputValue || inputValue.length < 2) return;

//     try {
//       const { data } = await axios.get(
//         `/api/colleges?search=${encodeURIComponent(inputValue)}`
//       );
//       console.log("✅ Colleges fetched:", data);
//       const options = data.colleges.map((college) => ({
//         value: college.display_code,
//         label: `${college.college_name} (${college.place})`,
//       }));
//       setCollegeOptions(options);
//     } catch (error) {
//       console.error("❌ Error fetching colleges:", error);
//     }
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleCollegeSelect = (selectedOption) => {
//     setForm({ ...form, college_display_code: selectedOption?.value || "" });
//   };

//   const submit = async (e) => {
//     e.preventDefault();
//     try {
//       await register(form);
//       nav("/login");
//     } catch {
//       setErr("Registration failed. Please try again.");
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-6">
//         <div className="w-full max-w-6xl flex flex-col-reverse md:flex-row items-center justify-evenly gap-8 animate-fade-in">
//           <form
//             onSubmit={submit}
//             className="w-full max-w-md bg-white p-8 rounded-xl shadow-xl"
//           >
//             <h2 className="text-2xl font-bold text-primary mb-6 text-center flex flex-row items-center justify-start gap-10">
//               <img
//                 style={{
//                   borderRadius: "50%",
//                 }}
//                 src="/assets/blue-logo-1.jpg"
//                 alt="Study Broo Logo"
//                 className="h-16 w-auto object-contain"
//               />{" "}
//               <span> Create Your Account</span>
//             </h2>

//             {err && (
//               <div className="text-red-500 text-sm mb-2 text-center">{err}</div>
//             )}

//             <div className="space-y-4">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Full Name"
//                 required
//                 value={form.name}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 required
//                 value={form.email}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
//               />
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 required
//                 value={form.password}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
//               />

//               <Select
//                 placeholder="Select Your College"
//                 options={collegeOptions}
//                 // onInputChange={(val) => fetchColleges(val)}
//                 onInputChange={(val) => {
//                   fetchColleges(val);
//                   return val;
//                 }}
//                 onChange={handleCollegeSelect}
//                 isClearable
//                 noOptionsMessage={() => "Type at least 2 characters"}
//               />

//               <select
//                 name="branch"
//                 required
//                 value={form.branch}
//                 onChange={handleChange}
//                 className={`w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary ${
//                   form.branch === "" ? "text-gray-400" : "text-black"
//                 }`}
//               >
//                 <option value="">Select Branch</option>
//                 <option value="CSE">
//                   Computer Science and Engineering (CSE)
//                 </option>
//                 <option value="CSE-AIML">
//                   CSE - Artificial Intelligence & ML
//                 </option>
//                 <option value="CSE-DS">CSE - Data Science</option>
//                 <option value="CSE-CS">CSE - Cybersecurity</option>
//                 <option value="ECE">
//                   Electronics and Communication Engineering (ECE)
//                 </option>
//                 <option value="EEE">
//                   Electrical and Electronics Engineering (EEE)
//                 </option>
//                 <option value="ME">Mechanical Engineering (ME)</option>
//                 <option value="CE">Civil Engineering (CE)</option>
//                 <option value="IT">Information Technology (IT)</option>
//                 <option value="AIML">
//                   Artificial Intelligence & ML (AIML)
//                 </option>
//                 <option value="CS">Cyber Security (CS)</option>
//                 <option value="DS">Data Science (DS)</option>
//                 <option value="Agri">Agricultural Engineering</option>
//                 <option value="BioTech">Biotechnology</option>
//                 <option value="Mining">Mining Engineering</option>
//                 <option value="Others">Other / Interdisciplinary</option>
//               </select>
//               <select
//                 name="year"
//                 required
//                 value={form.year}
//                 onChange={handleChange}
//                 className={`w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary ${
//                   form.year === "" ? "text-gray-400" : "text-black"
//                 }`}
//               >
//                 <option value="" disabled hidden>
//                   Select Year (e.g., 1st Year)
//                 </option>
//                 <option value="1">1st Year</option>
//                 <option value="2">2nd Year</option>
//                 <option value="3">3rd Year</option>
//                 <option value="4">4th Year</option>
//               </select>

//               <button
//                 type="submit"
//                 className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition-all duration-300 w-full"
//               >
//                 Register
//               </button>

//               <p className="text-center text-sm mt-2">
//                 Already have an account?{" "}
//                 <Link
//                   to="/login"
//                   className="text-primary font-medium hover:underline"
//                 >
//                   Log In
//                 </Link>
//               </p>
//             </div>
//           </form>

//           <div className="w-full max-w-md animate-slide-in">
//             <img
//               src="/assets/sign-up.svg"
//               alt="Register illustration"
//               className="w-full drop-shadow-xl"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useState } from "react";
import { register } from "../api";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Select from "react-select";
import axios from "axios";

export default function Register() {
  const nav = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    college_display_code: "",
    branch: "",
    year: "",
  });
  const [err, setErr] = useState("");
  const [collegeOptions, setCollegeOptions] = useState([]);

  const fetchColleges = async (inputValue) => {
    if (!inputValue || inputValue.length < 2) return;

    try {
      const { data } = await axios.get(
        `/api/colleges?search=${encodeURIComponent(inputValue)}`
      );
      const options = data.colleges.map((college) => ({
        value: college.display_code,
        label: `${college.college_name} (${college.place})`,
      }));
      setCollegeOptions(options);
    } catch (error) {
      console.error("❌ Error fetching colleges:", error);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCollegeSelect = (selectedOption) => {
    setForm({ ...form, college_display_code: selectedOption?.value || "" });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      await register(form);
      nav("/verify?email=" + encodeURIComponent(form.email));
    } catch (err) {
      setErr(
        err?.response?.data?.message || "Registration failed. Please try again."
      );
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-6">
        <div className="w-full max-w-6xl flex flex-col-reverse md:flex-row items-center justify-evenly gap-8 animate-fade-in">
          <form
            onSubmit={submit}
            className="w-full max-w-md bg-white p-8 rounded-xl shadow-xl"
          >
            <h2 className="text-2xl font-bold text-primary mb-6 text-center flex flex-row items-center justify-start gap-10">
              <img
                style={{ borderRadius: "50%" }}
                src="/assets/blue-logo-1.jpg"
                alt="Study Broo Logo"
                className="h-16 w-auto object-contain"
              />
              <span> Create Your Account</span>
            </h2>

            {err && (
              <div className="text-red-500 text-sm mb-2 text-center">{err}</div>
            )}

            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                value={form.password}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <Select
                placeholder="Select Your College"
                options={collegeOptions}
                onInputChange={(val) => {
                  fetchColleges(val);
                  return val;
                }}
                onChange={handleCollegeSelect}
                isClearable
                noOptionsMessage={() => "Type at least 2 characters"}
              />

              <select
                name="branch"
                required
                value={form.branch}
                onChange={handleChange}
                className={`w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary ${
                  form.branch === "" ? "text-gray-400" : "text-black"
                }`}
              >
                <option value="">Select Branch</option>
                <option value="CSE">
                  Computer Science and Engineering (CSE)
                </option>
                <option value="CSE-AIML">
                  CSE - Artificial Intelligence & ML
                </option>
                <option value="CSE-DS">CSE - Data Science</option>
                <option value="CSE-CS">CSE - Cybersecurity</option>
                <option value="ECE">
                  Electronics and Communication Engineering (ECE)
                </option>
                <option value="EEE">
                  Electrical and Electronics Engineering (EEE)
                </option>
                <option value="ME">Mechanical Engineering (ME)</option>
                <option value="CE">Civil Engineering (CE)</option>
                <option value="IT">Information Technology (IT)</option>
                <option value="AIML">
                  Artificial Intelligence & ML (AIML)
                </option>
                <option value="CS">Cyber Security (CS)</option>
                <option value="DS">Data Science (DS)</option>
                <option value="Agri">Agricultural Engineering</option>
                <option value="BioTech">Biotechnology</option>
                <option value="Mining">Mining Engineering</option>
                <option value="Others">Other / Interdisciplinary</option>
              </select>

              <select
                name="year"
                required
                value={form.year}
                onChange={handleChange}
                className={`w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary ${
                  form.year === "" ? "text-gray-400" : "text-black"
                }`}
              >
                <option value="" disabled hidden>
                  Select Year (e.g., 1st Year)
                </option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
              </select>

              <button
                type="submit"
                className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition-all duration-300 w-full"
              >
                Register
              </button>

              <p className="text-center text-sm mt-2">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-primary font-medium hover:underline"
                >
                  Log In
                </Link>
              </p>
            </div>
          </form>

          <div className="w-full max-w-md animate-slide-in">
            <img
              src="/assets/sign-up.svg"
              alt="Register illustration"
              className="w-full drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}
