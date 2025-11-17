// import React from "react";

// export default function CapraeCapitalUI() {
//   return (
//     <div className="min-h-screen bg-gray-50 p-8 space-y-16">
//       <header className="text-center text-3xl font-bold text-blue-900">
//         Caprae Capital Design Assignment
//       </header>

//       {/* Section 1: Onboarding Workflow */}
//       <section>
//         <h2 className="text-xl font-semibold text-blue-800 mb-4">
//           1. Onboarding Workflow
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="bg-white rounded-2xl shadow-md p-6">
//             <h3 className="text-lg font-bold mb-2">Buyer Onboarding</h3>
//             <ul className="list-disc list-inside text-gray-700 space-y-1">
//               <li>Budget Range</li>
//               <li>Preferred Industries</li>
//               <li>Experience with Acquisitions</li>
//               <li>Deal Timeline</li>
//             </ul>
//             <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
//               Start Buyer Questionnaire →
//             </button>
//           </div>
//           <div className="bg-white rounded-2xl shadow-md p-6">
//             <h3 className="text-lg font-bold mb-2">Seller Onboarding</h3>
//             <ul className="list-disc list-inside text-gray-700 space-y-1">
//               <li>Company Size & Revenue</li>
//               <li>Sector</li>
//               <li>Reason for Sale</li>
//               <li>Preferred Buyer Type</li>
//             </ul>
//             <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
//               Start Seller Questionnaire →
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Section 2: Buyer Profiles */}
//       <section>
//         <h2 className="text-xl font-semibold text-blue-800 mb-4">
//           2. Buyer Profile Cards
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="bg-white rounded-2xl shadow-md p-6">
//             <h3 className="text-lg font-bold">John Doe</h3>
//             <p className="text-gray-600">Budget: $2M • Industry: Healthcare</p>
//             <p className="text-gray-600">Experience: 3 Acquisitions</p>
//             <div className="mt-4 flex gap-4">
//               <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
//                 Accept
//               </button>
//               <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
//                 Reject
//               </button>
//             </div>
//           </div>
//           <div className="bg-white rounded-2xl shadow-md p-6">
//             <h3 className="text-lg font-bold">Expanded Profile</h3>
//             <p className="text-gray-700">
//               Detailed acquisition goals, investor backing, intent letters, due
//               diligence readiness, etc.
//             </p>
//             <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
//               View Full Profile →
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Section 3: Acquisition Workflow */}
//       <section>
//         <h2 className="text-xl font-semibold text-blue-800 mb-4">
//           3. Acquisition Workflow with AI Tools
//         </h2>
//         <div className="bg-white rounded-2xl shadow-md p-6 space-y-3">
//           <div>
//             <strong>AI Document Analyzer</strong> – Automatically extracts &
//             summarizes key financials
//           </div>
//           <div>
//             <strong>AI Chat Assistant</strong> – Guides users through next steps
//             & FAQs
//           </div>
//           <div>
//             <strong>Progress Tracker</strong> – Visual deal pipeline with %
//             completion
//           </div>
//           <div>
//             <strong>Smart Scheduler</strong> – Books meetings across time zones
//           </div>
//           <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
//             Launch Workflow →
//           </button>
//         </div>
//       </section>

//       {/* Footer Links */}
//       <footer className="text-center text-sm text-gray-500 pt-10">
//         Profile • Settings • Help Center
//       </footer>
//     </div>
//   );
// }

import React from "react";
import {
  Home,
  MessageSquare,
  ClipboardList,
  User,
  Settings,
  HelpCircle,
} from "lucide-react";

export default function CapraeCapitalUI() {
  const Button = ({
    children,
    variant = "default",
    className = "",
    ...props
  }) => {
    const base =
      "px-4 py-2 rounded-md font-medium transition focus:outline-none";
    const variants = {
      default: "bg-blue-600 text-white hover:bg-blue-700",
      success: "bg-green-600 text-white hover:bg-green-700",
      destructive: "bg-red-600 text-white hover:bg-red-700",
      secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    };
    return (
      <button
        className={`${base} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  };

  const Card = ({ children, className = "" }) => (
    <div className={`bg-white shadow-md rounded-xl p-6 ${className}`}>
      {children}
    </div>
  );

  const CardHeader = ({ children, className = "" }) => (
    <div className={`mb-4 text-xl font-semibold ${className}`}>{children}</div>
  );

  const CardContent = ({ children, className = "" }) => (
    <div className={className}>{children}</div>
  );

  const Badge = ({ children, className = "" }) => (
    <span
      className={`border border-gray-400 text-gray-700 px-2 py-1 rounded-full text-sm ${className}`}
    >
      {children}
    </span>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8 space-y-16 font-sans">
      {/* Header */}
      <header className="text-center text-4xl font-bold text-blue-900 tracking-tight">
        Caprae Capital Design Assignment
      </header>

      {/* Navigation Stub */}
      {/* <div className="flex justify-between items-center text-sm text-gray-600 border-b pb-2">
        <div>🏠 Dashboard • 💬 Matches • 📝 Questionnaires</div>
        <div>👤 Profile • ⚙️ Settings • ❓ Help</div>
      </div> */}
      <div className="flex justify-between items-center text-sm text-gray-600 border-b pb-2">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1">
            <Home size={16} /> Dashboard
          </span>
          <span className="flex items-center gap-1">
            <MessageSquare size={16} /> Matches
          </span>
          <span className="flex items-center gap-1">
            <ClipboardList size={16} /> Questionnaires
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1">
            <User size={16} /> Profile
          </span>
          <span className="flex items-center gap-1">
            <Settings size={16} /> Settings
          </span>
          <span className="flex items-center gap-1">
            <HelpCircle size={16} /> Help
          </span>
        </div>
      </div>

      {/* Section 1: Onboarding Workflow */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-800 mb-6 border-b pb-2">
          1. Onboarding Workflow
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Buyer */}
          <Card>
            <CardHeader className="text-xl font-bold">
              Buyer Onboarding
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <ul className="list-disc list-inside">
                <li>Budget Range</li>
                <li>Preferred Industries</li>
                <li>Experience with Acquisitions</li>
                <li>Deal Timeline</li>
              </ul>
              <Button className="w-full mt-4">
                Start Buyer Questionnaire →
              </Button>
            </CardContent>
          </Card>

          {/* Seller */}
          <Card>
            <CardHeader className="text-xl font-bold">
              Seller Onboarding
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <ul className="list-disc list-inside">
                <li>Company Size & Revenue</li>
                <li>Sector</li>
                <li>Reason for Sale</li>
                <li>Preferred Buyer Type</li>
              </ul>
              <Button className="w-full mt-4">
                Start Seller Questionnaire →
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 2: Buyer Profile Cards */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-800 mb-6 border-b pb-2">
          2. Buyer Profile Cards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Compact Profile Card */}
          <Card>
            <CardHeader className="text-lg font-bold">John Doe</CardHeader>
            <CardContent className="text-gray-700 space-y-1">
              <p>
                Budget: <Badge>$2M</Badge>
              </p>
              <p>
                Industry: <Badge>Healthcare</Badge>
              </p>
              <p>Experience: 3 Acquisitions</p>
              <div className="flex gap-3 pt-4">
                <Button variant="success">Accept</Button>
                <Button variant="destructive">Reject</Button>
              </div>
            </CardContent>
          </Card>

          {/* Expanded Profile Card */}
          <Card>
            <CardHeader className="text-lg font-bold">
              Expanded Profile
            </CardHeader>
            <CardContent className="text-gray-700 space-y-2">
              <p>
                Detailed acquisition goals, investor backing, intent letters,
                due diligence readiness, industry background, funding stage, and
                strategic interest.
              </p>
              <Button className="mt-4">View Full Profile →</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 3: Acquisition Workflow */}

      {/* Section 3: Acquisition Workflow */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-800 mb-6 border-b pb-2">
          3. Acquisition Workflow with AI Tools
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* AI Document Analyzer */}
          <Card>
            <CardHeader>📊 AI Document Analyzer</CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <p>
                Summarizes financial, legal, and operational info from uploads.
              </p>
              <div className="bg-gray-100 p-3 rounded text-sm">
                <strong>Preview Summary:</strong>
                <ul className="list-disc list-inside mt-1 text-gray-600">
                  <li>Revenue: $5M/year</li>
                  <li>Net Profit: 12%</li>
                  <li>Contracts: No red flags</li>
                </ul>
              </div>
              <Button className="w-full">Upload & Analyze →</Button>
            </CardContent>
          </Card>

          {/* AI Chat Assistant */}
          <Card>
            <CardHeader>🤖 AI Chat Assistant</CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <p>Guides buyers/sellers with real-time acquisition Q&A.</p>
              <div className="bg-gray-100 p-3 rounded text-sm">
                <p className="text-blue-700 mb-1">
                  User: What’s a fair valuation?
                </p>
                <p className="text-gray-600">
                  AI: Based on comps, $4.8–5.2M range.
                </p>
              </div>
              <Button className="w-full">Start Chat →</Button>
            </CardContent>
          </Card>

          {/* Progress Tracker */}
          <Card>
            <CardHeader>📈 Progress Tracker</CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <p>Visual pipeline: LOI → Diligence → Contract → Close</p>
              <div className="flex justify-between text-sm">
                {["LOI", "Diligence", "Contract", "Close"].map((stage, i) => (
                  <div
                    key={stage}
                    className={`flex-1 text-center py-2 rounded ${
                      i <= 2
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-500"
                    } mx-1`}
                  >
                    {stage}
                  </div>
                ))}
              </div>
              <Button className="w-full mt-2" variant="secondary">
                View Tracker →
              </Button>
            </CardContent>
          </Card>

          {/* Smart Scheduler */}
          <Card>
            <CardHeader>📅 Smart Scheduler</CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <p>Syncs meetings across time zones for both parties.</p>
              <div className="bg-gray-100 p-3 rounded text-sm">
                <p>✔️ Meeting proposed: Aug 10, 4PM PST / Aug 11, 5:30AM IST</p>
              </div>
              <div className="flex gap-3">
                <Button variant="success" className="flex-1">
                  Accept
                </Button>
                <Button variant="destructive" className="flex-1">
                  Reschedule
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 pt-16">
        Profile • Settings • Help Center
      </footer>
    </div>
  );
}
