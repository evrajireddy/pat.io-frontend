// Pages/careers.jsx
import React from "react";
import HamburgerMenu from "../Componets/HamburgerMenu";
import HeroSection from "../Componets/HeroSection";
import { Link } from "react-router-dom";

export default function Careers() {
  // Sample list of tech positions
  const positions = [
    { title: "Frontend Developer", location: "Remote", department: "Engineering" },
    { title: "Backend Developer", location: "Remote", department: "Engineering" },
    { title: "Full Stack Developer", location: "Remote", department: "Engineering" },
    { title: "UI/UX Designer", location: "Remote", department: "Design" },
    { title: "Mobile Developer", location: "Remote", department: "Engineering" },
    { title: "Product Manager", location: "Remote", department: "Product" },
    { title: "Data Scientist", location: "Remote", department: "Data" },
    { title: "Machine Learning Engineer", location: "Remote", department: "AI" },
    { title: "DevOps Engineer", location: "Remote", department: "Engineering" },
    { title: "Cloud Architect", location: "Remote", department: "Engineering" },
    { title: "QA Engineer", location: "Remote", department: "Quality Assurance" },
    { title: "Data Engineer", location: "Remote", department: "Data" },
    { title: "AI Researcher", location: "Remote", department: "AI" },
    { title: "Business Analyst", location: "Remote", department: "Product" },
    { title: "Solutions Architect", location: "Remote", department: "Engineering" },
    { title: "Technical Writer", location: "Remote", department: "Content" },
    { title: "Software Engineering Manager", location: "Remote", department: "Engineering" },
    { title: "Customer Success Engineer", location: "Remote", department: "Customer Success" },
    { title: "Security Engineer", location: "Remote", department: "Engineering" },
    { title: "Database Administrator", location: "Remote", department: "Engineering" },
    { title: "Scrum Master", location: "Remote", department: "Product" },
    { title: "Data Analyst", location: "Remote", department: "Data" },
    { title: "Growth Engineer", location: "Remote", department: "Growth" },
    { title: "Backend Architect", location: "Remote", department: "Engineering" },
    { title: "Blockchain Developer", location: "Remote", department: "Engineering" },
  ];

  return (
    <div className="page-container bg-gradient-to-r from-green-100 to-blue-200 min-h-screen p-6 font-quattrocento">
      {/* Hamburger Menu */}
      <HamburgerMenu />

      <HeroSection
        title="Careers at Pat.io"
        description="Join our mission to make social services accessible with technology. Explore open roles in our tech-driven, remote-first environment."
        gradientClass="bg-glass"
      />

      {/* Careers Content */}
      <div className="max-w-4xl mx-auto mt-8 text-gray-800 font-quattrocento">
        <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
        
        <p className="text-lg mb-8">
          At Pat.io, we believe in building technology that makes a difference. Our team is driven, 
          innovative, and committed to creating impactful solutions. We’re looking for passionate 
          individuals who want to join us on our mission to make social services more accessible 
          through technology.
        </p>

        {/* Company Culture and Benefits */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-3">Why Work at Pat.io?</h2>
          <p className="text-lg mb-4">
            Pat.io is a remote-first company with team members spread across the globe. We offer 
            flexible work hours, professional development opportunities, and a culture that values 
            collaboration and creativity.
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>🌍 Work from anywhere</li>
            <li>💻 Cutting-edge technology projects</li>
            <li>🧘 Flexible hours & work-life balance</li>
            <li>📈 Growth and development opportunities</li>
            <li>💰 Competitive salary and benefits</li>
          </ul>
        </section>

        {/* Available Positions */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-3">Available Positions</h2>
          <p className="text-lg mb-6">Explore our current openings and find the right fit for you.</p>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {positions.map((position, index) => (
              <div key={index} className="bg-slate-200 bg-opacity-30 shadow-lg rounded-lg p-6 border-2 border-gray-100">
                <h3 className="text-2xl font-semibold mb-2 text-slate-800">{position.title}</h3>
                <p className="text-gray-600 mb-1"><strong>Location:</strong> {position.location}</p>
                <p className="text-gray-600 mb-4"><strong>Department:</strong> {position.department}</p>
                
                <button 
                  onClick={() => window.alert(`Applying for ${position.title}`)}
                  className="text-center bg-blue-400 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

