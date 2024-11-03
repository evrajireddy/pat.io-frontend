// Pages/contact.jsx
import React from "react";
import HamburgerMenu from "../Componets/HamburgerMenu";
import Abraham from "../assets/Abraham.png";
import Bryan from "../assets/Bryan.png";
import Ray from "../assets/Ray.png";
import Steven from "../assets/Steven.png";
import Venkata from "../assets/Venkata.png";

export default function Contact() {
  const team = [
    {
      name: "Abraham Zambrano Tablante",
      role: "UI/UX Designer",
      email: "azambranotablante@pursuit.org",
      image: Abraham,
      linkedin: "https://www.linkedin.com/in/Abrahamzambranotablante/",
      github: "https://github.com/AbrahamZambranoTablante",
    },
    {
      name: "Bryan Alcantara",
      role: "Developer",
      email: "balcantara@pursuit.org",
      image: Bryan,
      linkedin: "https://www.linkedin.com/in/bryan-alcantara-643479281/",
      github: "https://github.com/BryanA0418",
    },
    {
      name: "Runquan (Ray) Zhou",
      role: "Developer",
      email: "rzhou@pursuit.org",
      image: Ray,
      linkedin: "https://www.linkedin.com/in/runquanrayzhou/",
      github: "https://github.com/runquan-ray-zhou",
    },
    {
      name: "Steven Rouse",
      role: "UI/UX Designer",
      email: "srouse@pursuit.org",
      image: Steven,
      linkedin: "https://www.linkedin.com/in/StevenRouse/",
      github: "https://github.com/Rouse-Prog",
    },
    {
      name: "Venkata Raji Reddy Eda",
      role: "Developer",
      email: "veda@pursuit.org",
      image: Venkata,
      linkedin: "https://www.linkedin.com/in/evrajireddy/",
      github: "https://github.com/evrajireddy",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-200 to-cyan-300 py-12 font-quattrocento">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-700">
            Get in touch with us for any inquiries, support, or feedback. We're
            here to help you with our AI-powered Social Security solutions.
          </p>
        </div>
        <div className="max-h-[500px] overflow-y-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white bg-opacity-50 rounded-lg shadow-lg p-6 text-center flex flex-col justify-between"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-600 mb-2">{member.role}</p>
                <div className="flex justify-center space-x-4 mb-2">
                  <a
                    href={`mailto:${member.email}`}
                    className="text-teal-600 hover:text-teal-800"
                    aria-label="Email"
                  >
                    <i className="fa-solid fa-envelope"></i>
                  </a>
                  <a
                    href={member.linkedin}
                    className="text-black hover:text-blue-500"
                    aria-label="Email"
                  >
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                  <a
                    href={member.github}
                    className="text-black hover:text-gray-500"
                    aria-label="Email"
                  >
                    <i class="fa-brands fa-github"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
