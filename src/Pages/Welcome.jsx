import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./i18n";
import "./Welcome.css";

const languageMapping = {
  en: ["en-US", "English"],
  ru: ["ru-RU", "Русский (Russian)"],
  it: ["it-IT", "Italiano (Italian)"],
  pl: ["pl-PL", "Polski (Polish)"],
  el: ["el-GR", "Ελληνικά (Greek)"],
  yi: ["yi", "ייִדיש (Yiddish)"],
  he: ["he-IL", "עברית (Hebrew)"],
  ht: ["ht-HT", "Kreyòl Ayisyen (Haitian Creole)"],
  fr: ["fr-FR", "Français (French)"],
  es: ["es-ES", "Español (Spanish)"],
  pt: ["pt-PT", "Português (Portuguese)"],
  zh: ["zh-CN", "中文 (Mandarin Chinese)"],
  yue: ["zh-HK", "粵語 (Cantonese)"],
  hi: ["hi-IN", "हिन्दी (Hindi)"],
  bn: ["bn-IN", "বাংলা (Bengali)"],
  te: ["te-IN", "తెలుగు (Telugu)"],
  pa: ["pa-IN", "ਪੰਜਾਬੀ (Punjabi)"],
  ta: ["ta-IN", "தமிழ் (Tamil)"],
  ko: ["ko-KR", "한국어 (Korean)"],
  ja: ["ja-JP", "日本語 (Japanese)"],
  vi: ["vi-VN", "Tiếng Việt (Vietnamese)"],
  ar: ["ar-SA", "العربية (Arabic)"],
  ur: ["ur-PK", "اردو (Urdu)"],
  tl: ["tl-PH", "Tagalog (Filipino)"],
};

export default function Welcome() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [languageSelected, setLanguageSelected] = useState(false);
  const [isBarClicked, setIsBarClicked] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLanguageClick = (lang) => {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("chatLanguage", languageMapping[lang][0] || "en-US");
    setLanguageSelected(true);
    setTimeout(() => navigate("/chat"), 50);
  };

  const toggleLanguageContainer = () => {
    setIsBarClicked(!isBarClicked);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsSidebarOpen(false); // Close sidebar after navigating
  };

  return (
    <div className="min-h-screen font-quattrocento">
      {/* Hamburger Menu */}
      <div className="p-4">
        <div
          className="w-8 h-8 flex flex-col justify-around cursor-pointer"
          onClick={toggleSidebar}
        >
          <span
            className={`block h-1 bg-gray-600 transition-transform duration-300 ease-in-out ${
              isSidebarOpen ? "rotate-45 translate-y-1" : ""
            }`}
          ></span>
          <span
            className={`block h-1 bg-gray-600 transition-transform duration-300 ease-in-out ${
              isSidebarOpen ? "-rotate-45 -translate-y-1" : ""
            }`}
          ></span>
        </div>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-20"
          onClick={toggleSidebar}
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            className="fixed top-0 left-0 h-full w-64 bg-white bg-opacity-95 shadow-lg p-6 space-y-6 text-gray-700 z-30"
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
                  className="text-lg font-semibold hover:text-blue-600 transition-colors"
                >
                  Research
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/contact")}
                  className="text-lg font-semibold hover:text-blue-600 transition-colors"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/company")}
                  className="text-lg font-semibold hover:text-blue-600 transition-colors"
                >
                  Company
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/careers")}
                  className="text-lg font-semibold hover:text-blue-600 transition-colors"
                >
                  Careers
                </button>
              </li>
            </ul>
          </motion.div>
        </div>
      )}

      {/* Main Content */}
      <section className="w-full h-screen flex flex-col md:justify-center items-center bg-gradient-to-r from-yellow-100 to-sky-300 p-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray">Pat.io</h1>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            A revolutionary AI-powered language model for Social Security assistance.
          </p>
        </div>

        {/* Animated Finger Pointer Prompt */}
        {!isBarClicked && (
          <motion.div
            className="text-center mb-2"
            initial={{ y: -10 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="text-3xl md:text-4xl mt-1 text-green-600"
              style={{ transform: "rotate(45deg)" }}
            >
              👉
            </motion.div>
          </motion.div>
        )}

        {/* Language Scrolling Bar */}
        {!isBarClicked ? (
          <div className="relative mt-6 w-full" onClick={toggleLanguageContainer}>
            <div className="w-full max-w-lg mx-auto overflow-hidden bg-slate-200 bg-opacity-80 border-2 border-gray-300 rounded-full p-2 md:p-4 cursor-pointer">
              <motion.div
                className="whitespace-nowrap flex"
                animate={{ x: ["100%", "-100%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 30,
                  ease: "linear",
                }}
              >
                {Object.keys(languageMapping).map((lang, index) => (
                  <span
                    key={index}
                    className="px-3 md:px-6 text-base md:text-lg font-semibold text-gray-700"
                  >
                    {languageMapping[lang][1]}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        ) : (
          <motion.div
            className="mt-6 bg-teal bg-opacity-10 shadow-lg rounded-lg p-4 md:p-6 max-w-4xl mx-auto border-2 border-gray-300"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-h-[60vh] overflow-y-auto">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-6 md:gap-4">
                {Object.keys(languageMapping).map((lang, index) => (
                  <div
                    key={index}
                    onClick={() => handleLanguageClick(lang)}
                    className="px-2 py-3 md:px-4 md:py-4 bg-glass rounded-lg text-center cursor-pointer border-transparent border-2 transition-all hover:border-gray-400 z-10 shadow-md text-gray-600"
                  >
                    <span className="text-base md:text-lg font-semibold">
                      {languageMapping[lang][1].split("(")[0]}
                    </span>
                    <span className="text-xs md:text-sm text-white-500 block">
                      {languageMapping[lang][1].match(/\(([^)]+)\)/)?.[1]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
        {languageSelected && (
          <div className="text-center text-lg md:text-2xl text-gray-600 py-6 md:py-8">
            {`How can I assist you with Social Security in ${languageMapping[selectedLanguage][1]}?`}
          </div>
        )}
      </section>
    </div>
  );
}
