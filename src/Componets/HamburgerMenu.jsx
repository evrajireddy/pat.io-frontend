// Components/HamburgerMenu.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import patioIcon from "../assets/icon.svg";

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
      {/* Hamburger Icon - Adjusted Size and Position */}
      <div
        className="hamburger-icon ml-2 cursor-pointer" // Added left margin and cursor style
        onClick={toggleSidebar}
        style={{ width: "24px", height: "24px" }} // Smaller size
      >
        <div
          className={`h-1 bg-gray-500 bg-opacity-70 transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "transform rotate-45 translate-y-1.5" : ""
          }`}
          style={{ width: "100%", height: "3px", marginBottom: "4px" }}
        ></div>
        <div
          className={`h-1 bg-gray-500 bg-opacity-70 transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "transform -rotate-45 -translate-y-2" : ""
          }`}
          style={{ width: "100%", height: "3px" }}
        ></div>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-opacity-30 z-20" onClick={toggleSidebar}>
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            className="fixed top-0 left-0 h-full w-64 bg-white bg-opacity-35 shadow-lg p-6 space-y-6 text-gray-500 z-30"
          >
            
            {/* <h2 className="text-2xl font-bold">Menu</h2> */}
            <div className="bg-opacity-0 bg-white cursor-pointer">
              <img
                src={patioIcon}
                alt="Pat.io Icon"
                className="ml-1 w-16 h-16 grayscale"
              />
           </div>
            <ul className="space-y-4">
              {/* <li>
                <button
                  onClick={() => handleNavigation("/")}
                  className="text-lg hover:text-black font-black transition-colors"
                >
                  Home
                </button>
              </li> */}
              <li>
                <button
                  onClick={() => handleNavigation("/research")}
                  className="text-xl font-bold hover:text-black [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] transition-colors"
                >
                  Research Page
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/contact")}
                  className="text-xl font-bold hover:text-black [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] transition-colors"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/company")}
                  className="text-xl font-bold hover:text-black [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] transition-colors"
                >
                  Company
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/careers")}
                  className="text-xl font-bold hover:text-black [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] transition-colors"
                >
                  Careers
                </button>
              </li>
            </ul>
          </motion.div>
        </div>
      )}
    </>
  );
}
