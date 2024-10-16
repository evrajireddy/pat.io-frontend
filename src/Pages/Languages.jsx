import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./i18n";
import "./Languages.css"; // Import additional custom CSS for scrollbar

const languageMapping = {
  en: ["en-US", "English", "(English)"],
  ru: ["ru-RU", "Русский", "(Russian)"],
  it: ["it-IT", "Italiano", "(Italian)"],
  pl: ["pl-PL", "Polski", "(Polish)"],
  el: ["el-GR", "Ελληνικά", "(Greek)"],
  yi: ["yi", "ייִדיש", "(Yiddish)"],
  he: ["he-IL", "עברית", "(Hebrew)"],
  ht: ["ht-HT", "Kreyòl Ayisyen", "(Haitian Creole)"],
  fr: ["fr-FR", "Français", "(French)"],
  es: ["es-ES", "Español", "(Spanish)"],
  pt: ["pt-PT", "Português", "(Portuguese)"],
  zh: ["zh-CN", "中文", "(Mandarin Chinese)"],
  yue: ["zh-HK", "粵語", "(Cantonese)"],
  hi: ["hi-IN", "हिन्दी", "(Hindi)"],
  bn: ["bn-IN", "বাংলা", "(Bengali)"],
  te: ["te-IN", "తెలుగు", "(Telugu)"],
  pa: ["pa-IN", "ਪੰਜਾਬੀ", "(Punjabi)"],
  ta: ["ta-IN", "தமிழ்", "(Tamil)"],
  ko: ["ko-KR", "한국어", "(Korean)"],
  ja: ["ja-JP", "日本語", "(Japanese)"],
  vi: ["vi-VN", "Tiếng Việt", "(Vietnamese)"],
  ar: ["ar-SA", "العربية", "(Arabic)"],
  ur: ["ur-PK", "اردو", "(Urdu)"],
  tl: ["tl-PH", "Tagalog", "(Filipino)"],
};

export default function Languages() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [selectedLang, setSelectedLang] = useState(null);

  const handleLanguageClick = (lang) => {
    console.log("Selected language:", lang);
    setSelectedLang(lang);
    i18n.changeLanguage(lang);
    const chatLangCode = languageMapping[lang][0] || "en-US";
    localStorage.setItem("chatLanguage", chatLangCode);
    setLoading(false);
    navigate("/chat");
  };

  return (
    <div className="flex flex-col items-center h-screen p-6 font-quattrocento">
      <h1 className="text-3xl font-bold text-gray-800 mb-10">Select a Language</h1>
      <div className="p-4 rounded-lg h-4/5 overflow-y-scroll w-full max-w-3xl custom-scrollbar">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(languageMapping).map(([lang, name]) => (
            <div
              key={lang}
              onClick={() => handleLanguageClick(lang)}
              className={`w-40 h-16 sm:w-48 sm:h-20 flex items-center justify-center bg-[#3b7738] shadow-lg rounded-lg cursor-pointer transition-transform transform ${
                selectedLang === lang ? "scale-110 border-2 border-green-600" : ""
              } hover:scale-105`}
            >
              <div className="flex flex-col items-center">
                <span className="text-xl sm:text-2xl font-semibold text-white">{name[1]}</span>
                <span className="text-sm sm:text-lg font-semibold text-white">{name[2]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
