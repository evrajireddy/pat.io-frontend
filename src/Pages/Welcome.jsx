import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18n'; 
import logo from '../assets/Logo.svg'; 
import "./Welcome.css"

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

  return (
    <div className="min-h-screen bg-gray-100 font-quattrocento">
      {/* Sticky Header */}
      <header className="w-full glass text-green-500 py-4 sticky top-0 z-10 shadow-md flex justify-between items-center px-4 md:px-6">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-600">Pat.io</h1>

        {/* Logo on the top right */}
        <img
          src={logo}
          alt="App Logo"
          className="h-8 w-8 md:h-12 md:w-12 object-contain"
        />
      </header>

      {/* Hero Section */}
      <section className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-r from-yellow-200 to-green-300 p-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray">
            Pat.io
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            A revolutionary AI-powered language model for Social Security
            assistance.
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
          <div
            className="relative mt-6 w-full"
            onClick={toggleLanguageContainer}
          >
            <div className="w-full max-w-lg mx-auto overflow-hidden bg-gray-300 bg-opacity-30 rounded-full p-2 md:p-4 cursor-pointer">
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
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
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
          </motion.div>
        )}

        {languageSelected && (
          <div className="text-center text-lg md:text-2xl text-gray-600 py-6 md:py-8">
            {`How can I assist you with Social Security in ${languageMapping[selectedLanguage][1]}?`}
          </div>
        )}
      </section>

      {/* Research Section - Only visible on medium and larger screens */}
      <section
        className="hidden md:block py-16 bg-glass"
        style={{ display: "none" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Introducing the Pat.io Model
            </h2>
            <p className="mt-2 md:mt-4 text-base md:text-lg text-gray-600">
              Our AI-powered language model is designed to provide instant,
              accurate, and engaging information on Social Security processes
              and requirements in New York City.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                Cost Efficiency
              </h3>
              <p className="text-sm md:text-lg text-gray-600">
                Pat.io delivers valuable insights while keeping operational
                costs low, ensuring accessibility for all users.
              </p>
            </div>
            {/* Additional research items as necessary */}
          </div>
        </div>
      </section>
    </div>
  );
}
