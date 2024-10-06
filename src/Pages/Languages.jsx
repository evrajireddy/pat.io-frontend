import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./i18n";
import "./Languages.css"; // Import the CSS file

const languageMapping = {
  en: "English",
  ru: "Русский (Russian)",
  it: "Italiano (Italian)",
  pl: "Polski (Polish)",
  el: "Ελληνικά (Greek)",
  yi: "ייִדיש (Yiddish)",
  he: "עברית (Hebrew)",
  ht: "Kreyòl Ayisyen (Haitian Creole)",
  fr: "Français (French)",
  es: "Español (Spanish)",
  pt: "Português (Portuguese)",
  zh: "中文 (Mandarin Chinese)",
  yue: "粵語 (Cantonese)",
  hi: "हिन्दी (Hindi)",
  bn: "বাংলা (Bengali)",
  te: "తెలుగు (Telugu)",
  pa: "ਪੰਜਾਬੀ (Punjabi)",
  ta: "தமிழ் (Tamil)",
  ko: "한국어 (Korean)",
  ja: "日本語 (Japanese)",
  vi: "Tiếng Việt (Vietnamese)",
  ar: "العربية (Arabic)",
};

export default function Languages() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [selectedLang, setSelectedLang] = useState(null);

  const handleLanguageClick = (lang) => {
    setSelectedLang(lang);
    setTimeout(() => {
      i18n.changeLanguage(lang);
      localStorage.setItem("chatLanguage", languageMapping[lang] || "en");
      setLoading(false);
    }, 1000); // Simulate loading and language change
  };

  const confirmSelection = () => {
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
              <span className="language-text">{name}</span>
            </div>
          ))}
        </div>
      </div>
      {selectedLang && (
        <div className="confirmation-popup">
          <p>
            You selected <strong>{languageMapping[selectedLang]}</strong>. 
            Would you like to continue?
          </p>
          <button className="confirm-button" onClick={confirmSelection}>
            Yes, Continue
          </button>
        </div>
      )}
    </div>
  );
}
