// src/Components/HeroSection.jsx
import React from "react";

export default function HeroSection({ title, description, gradientClass }) {
  return (
    <section className={`w-full py-16 ${gradientClass}`}>
      <div className="max-w-4xl mx-auto text-center text-gray-800 px-6 font-quattrocento">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl">{description}</p>
      </div>
    </section>
  );
}
