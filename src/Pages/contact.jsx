// Pages/contact.jsx
import React from "react";
import HamburgerMenu from "../Componets/HamburgerMenu";


export default function Contact() {
  return (
    <div className="page-container bg-gradient-to-r from-blue-200 to-indigo-300">
      <HamburgerMenu />
      <div className="content-center">
        <h1 className="text-4xl font-bold text-gray-700">Contact Us</h1>
        <p className="text-lg text-gray-600 mt-4">
          Get in touch with us for more information.
        </p>
      </div>
    </div>
  );
}
