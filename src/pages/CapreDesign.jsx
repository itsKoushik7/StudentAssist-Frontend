// export default function CapraeDesign() {
//   return (
//     <div className="min-h-screen bg-gray-50 p-10 space-y-16 font-sans">
//       {/* Title */}
//       <h1 className="text-4xl font-extrabold text-center text-gray-900 tracking-tight">
//         Caprae Capital – Buyer/Seller Workflow UI
//       </h1>

//       {/* Buyer Questionnaire */}
//       <section className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto border border-gray-200">
//         <h2 className="text-2xl font-semibold mb-6 text-blue-800">
//           Buyer Questionnaire
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <Question label="What industry are you interested in?" />
//           <Question label="What is your investment range?" />
//           <Question label="Are you looking for full acquisition or partial?" />
//           <Question label="Expected timeline for acquisition?" />
//         </div>
//         <div className="mt-6 text-right">
//           <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all">
//             Submit
//           </button>
//         </div>
//       </section>

//       {/* Seller Questionnaire */}
//       <section className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto border border-gray-200">
//         <h2 className="text-2xl font-semibold mb-6 text-green-800">
//           Seller Questionnaire
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <Question label="Business name & domain" />
//           <Question label="Annual revenue (approx.)" />
//           <Question label="Why are you selling the business?" />
//           <Question label="Preferred deal structure?" />
//         </div>
//         <div className="mt-6 text-right">
//           <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all">
//             Submit
//           </button>
//         </div>
//       </section>

//       {/* Buyer Profile Card */}
//       <section className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto border border-purple-200">
//         <h2 className="text-2xl font-semibold mb-6 text-purple-700">
//           Buyer Profile Preview
//         </h2>
//         <div className="bg-purple-50 p-6 rounded-xl border border-purple-300">
//           <dl className="grid grid-cols-2 gap-4 text-gray-700">
//             <div>
//               <dt className="font-medium text-sm">Name</dt>
//               <dd className="text-lg font-semibold">John Doe</dd>
//             </div>
//             <div>
//               <dt className="font-medium text-sm">Industry</dt>
//               <dd className="text-lg">Healthcare SaaS</dd>
//             </div>
//             <div>
//               <dt className="font-medium text-sm">Budget</dt>
//               <dd className="text-lg">$5M – $10M</dd>
//             </div>
//             <div>
//               <dt className="font-medium text-sm">Location</dt>
//               <dd className="text-lg">USA</dd>
//             </div>
//             <div className="col-span-2">
//               <dt className="font-medium text-sm">Acquisition Goal</dt>
//               <dd className="text-lg">Within 6 months</dd>
//             </div>
//           </dl>
//         </div>
//       </section>

//       {/* Seller Profile Card */}
//       <section className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto border border-red-200">
//         <h2 className="text-2xl font-semibold mb-6 text-red-700">
//           Seller Profile Preview
//         </h2>
//         <div className="bg-red-50 p-6 rounded-xl border border-red-300">
//           <dl className="grid grid-cols-2 gap-4 text-gray-700">
//             <div>
//               <dt className="font-medium text-sm">Business Name</dt>
//               <dd className="text-lg font-semibold">WellnessCRM Inc</dd>
//             </div>
//             <div>
//               <dt className="font-medium text-sm">Domain</dt>
//               <dd className="text-lg">wellnesscrm.com</dd>
//             </div>
//             <div>
//               <dt className="font-medium text-sm">Annual Revenue</dt>
//               <dd className="text-lg">$1.2M/year</dd>
//             </div>
//             <div>
//               <dt className="font-medium text-sm">Deal Type</dt>
//               <dd className="text-lg">Full acquisition</dd>
//             </div>
//             <div className="col-span-2">
//               <dt className="font-medium text-sm">Reason to Sell</dt>
//               <dd className="text-lg">Focusing on new venture</dd>
//             </div>
//           </dl>
//         </div>
//       </section>

//       {/* Match Decision Popup Simulation */}
//       <section className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto border text-center">
//         <h2 className="text-2xl font-semibold mb-4 text-gray-800">
//           Match Found
//         </h2>
//         <p className="mb-6 text-gray-600">
//           You've been matched with{" "}
//           <span className="font-bold text-blue-600">WellnessCRM Inc</span>
//           based on your preferences. Would you like to proceed with the
//           acquisition discussion?
//         </p>
//         <div className="flex justify-center gap-6">
//           <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all">
//             Accept
//           </button>
//           <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-all">
//             Reject
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }

// function Question({ label }) {
//   return (
//     <div>
//       <label className="block text-sm font-medium text-gray-700 mb-1">
//         {label}
//       </label>
//       <input
//         type="text"
//         className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
//         placeholder="Enter your answer..."
//       />
//     </div>
//   );
// }
export default function CapraeDesign() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white py-12 px-6 space-y-16 font-sans">
      <h1 className="text-5xl font-extrabold text-center text-gray-900 tracking-tight mb-8">
        Caprae Capital — Buyer & Seller Workflow
      </h1>

      {/* Buyer Questionnaire */}
      <section className="bg-white p-10 rounded-3xl shadow-xl max-w-5xl mx-auto border border-gray-200">
        <h2 className="text-3xl font-bold mb-8 text-blue-800 flex items-center gap-3">
          <span className="inline-block w-2 h-6 bg-blue-500 rounded-sm"></span>
          Buyer Questionnaire
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Question label="What industry are you interested in?" />
          <Question label="What is your investment range?" />
          <Question label="Are you looking for full acquisition or partial?" />
          <Question label="Expected timeline for acquisition?" />
        </div>
        <div className="mt-8 text-right">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Submit
          </button>
        </div>
      </section>

      {/* Seller Questionnaire */}
      <section className="bg-white p-10 rounded-3xl shadow-xl max-w-5xl mx-auto border border-gray-200">
        <h2 className="text-3xl font-bold mb-8 text-green-800 flex items-center gap-3">
          <span className="inline-block w-2 h-6 bg-green-500 rounded-sm"></span>
          Seller Questionnaire
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Question label="Business name & domain" />
          <Question label="Annual revenue (approx.)" />
          <Question label="Why are you selling the business?" />
          <Question label="Preferred deal structure?" />
        </div>
        <div className="mt-8 text-right">
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
            Submit
          </button>
        </div>
      </section>

      {/* Buyer Profile Card */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-purple-700">
          Buyer Profile Preview
        </h2>
        <div className="bg-white p-6 rounded-2xl shadow-md border border-purple-200">
          <dl className="grid grid-cols-2 gap-4 text-gray-800">
            <Item label="Name" value="John Doe" />
            <Item label="Industry" value="Healthcare SaaS" />
            <Item label="Budget" value="$5M – $10M" />
            <Item label="Location" value="USA" />
            <Item
              label="Acquisition Goal"
              value="Within 6 months"
              colSpan={2}
            />
          </dl>
        </div>
      </section>

      {/* Seller Profile Card */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-red-700">
          Seller Profile Preview
        </h2>
        <div className="bg-white p-6 rounded-2xl shadow-md border border-red-200">
          <dl className="grid grid-cols-2 gap-4 text-gray-800">
            <Item label="Business Name" value="WellnessCRM Inc" />
            <Item label="Domain" value="wellnesscrm.com" />
            <Item label="Annual Revenue" value="$1.2M/year" />
            <Item label="Deal Type" value="Full acquisition" />
            <Item
              label="Reason to Sell"
              value="Focusing on new venture"
              colSpan={2}
            />
          </dl>
        </div>
      </section>

      {/* Match Simulation */}
      <section className="bg-white p-10 rounded-3xl shadow-xl max-w-3xl mx-auto text-center border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Match Found</h2>
        <p className="text-lg text-gray-600 mb-8">
          You've been matched with{" "}
          <span className="font-bold text-blue-600">WellnessCRM Inc</span> based
          on your preferences. Would you like to proceed with the acquisition
          discussion?
        </p>
        <div className="flex justify-center gap-6">
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
            Accept
          </button>
          <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition">
            Reject
          </button>
        </div>
      </section>
    </div>
  );
}

function Question({ label }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1">
        {label}
      </label>
      <input
        type="text"
        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
        placeholder="Enter your answer..."
      />
    </div>
  );
}

function Item({ label, value, colSpan = 1 }) {
  return (
    <div className={`col-span-${colSpan}`}>
      <dt className="text-sm font-medium text-gray-500">{label}</dt>
      <dd className="text-lg font-semibold text-gray-900">{value}</dd>
    </div>
  );
}
