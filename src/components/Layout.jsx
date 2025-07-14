// import React from "react";
// import Navbar from "./Navbar";

// export default function Layout({ children }) {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />

//       <main className="flex-1">{children}</main>

//       <footer className="bg-gray-100 text-center text-sm py-4 border-t mt-4">
//         © {new Date().getFullYear()} StudyBro. All rights reserved.
//       </footer>
//     </div>
//   );
// }

import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Page content will be injected here */}
      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-gray-100 text-center text-sm py-4 border-t">
        © {new Date().getFullYear()} StudyBro. All rights reserved.
      </footer>
    </div>
  );
}
