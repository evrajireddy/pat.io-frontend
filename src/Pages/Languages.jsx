import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./i18n"; // Keep i18n for language translation

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

export default function Languages() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const [selectedLang, setSelectedLang] = useState(null);

  useEffect(() => {
    document.body.classList.add("languages-page");

    return () => {
      document.body.classList.remove("languages-page");
    };
  }, []);

  const handleLanguageClick = (lang) => {
    setSelectedLang(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("chatLanguage", languageMapping[lang][0] || "en-US");
    navigate("/chat");
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="flex flex-col items-center h-screen w-screen p-4 bg-white">
        <h1 className="text-3xl font-bold mb-4">Select a Language</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 w-full overflow-y-auto h-[calc(100vh-4rem)]">
          {Object.entries(languageMapping).map(([lang, name]) => (
            <div
              key={lang}
              onClick={() => handleLanguageClick(lang)}
              className={`p-4 bg-green-300 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-1 cursor-pointer ${
                selectedLang === lang ? "bg-green-300" : ""
              }`}
            >
              <div className="flex flex-col justify-center items-center text-center">
                <span className="text-lg font-semibold mb-1">{name[1].split(" ")[0]}</span>
                <span className="text-sm text-gray-600">{name[1].match(/\(([^)]+)\)/)?.[1]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
