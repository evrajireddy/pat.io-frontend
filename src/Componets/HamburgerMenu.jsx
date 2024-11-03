// Components/HamburgerMenu.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function HamburgerMenu() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsSidebarOpen(false); // Close sidebar after navigating
  };

  return (
    <>
      {/* Hamburger Icon */}
      <div className="hamburger-icon" onClick={toggleSidebar}>
        <div className={`bar ${isSidebarOpen ? "rotate-45" : ""}`}></div>
        <div className={`bar ${isSidebarOpen ? "-rotate-45" : ""}`}></div>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-opacity-30 z-20" onClick={toggleSidebar}>
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            className="fixed top-0 left-0 h-full w-64 bg-gray-200 bg-opacity-35 shadow-lg p-6 space-y-6 text-gray-700 z-30"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Menu</h2>
              <button
                className="text-gray-600 text-lg font-semibold"
                onClick={toggleSidebar}
              >
                ✕
              </button>
            </div>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => handleNavigation("/research")}
                  className="text-lg font-semibold hover:text-green-600 transition-colors"
                >
                  Research Page
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/contact")}
                  className="text-lg font-semibold hover:text-green-600 transition-colors"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/company")}
                  className="text-lg font-semibold hover:text-green-600 transition-colors"
                >
                  Company
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/careers")}
                  className="text-lg font-semibold hover:text-green-600 transition-colors"
                >
                  Careers
                </button>
              </li>
              <li>
          <button
            onClick={() => handleNavigation("/")}
            className="text-lg font-semibold hover:text-green-600"
          >
            Home
          </button>
        </li>
            </ul>
          </motion.div>
        </div>
      )}
    </>
  );
}
