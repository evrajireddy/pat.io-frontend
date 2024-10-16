import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./i18n";
import "./Languages.css"; // Import the CSS file

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
    <div className="languages-container">
      <h1 className="title">Select a Language</h1>
      <div className="languages-grid-container">
      <div className="languages-grid">
  {Object.entries(languageMapping).map(([lang, name]) => (
    <div
      key={lang}
      onClick={() => handleLanguageClick(lang)}
      className={`language-card ${selectedLang === lang ? "glow" : ""}`}
    >
      <div className="language-text-container">
        {/* Native language name (e.g., Русский) */}
        <span className="language-text native-name">{name[1].split(" ")[0]}</span>
        {/* English translation (e.g., Russian) */}
        <span className="language-text translation-name">{name[1].match(/\(([^)]+)\)/)?.[1]}</span>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
}