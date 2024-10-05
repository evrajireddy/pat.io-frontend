// src/App.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./i18n";

const languageMapping = {
  en: "en-US",
  ru: "ru-RU",
  it: "it-IT",
  pl: "pl-PL",
  el: "el-GR",
  yi: "yi",
  he: "he-IL",
  ht: "ht-HT",
  fr: "fr-FR",
  es: "es-ES",
  pt: "pt-PT",
  zh: "zh-CN",
  yue: "zh-HK",
  hi: "hi-IN",
  bn: "bn-IN",
  te: "te-IN",
  pa: "pa-IN",
  ta: "ta-IN",
  ko: "ko-KR",
  ja: "ja-JP",
  vi: "vi-VN",
  ar: "ar-SA",
};

export default function Languages() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (lang) => {
    // Change i18n language
    i18n.changeLanguage(lang);

    // Store the chat language code in localStorage
    const chatLangCode = languageMapping[lang] || "en-US";
    localStorage.setItem("chatLanguage", chatLangCode);

    // Navigate to chat page
    navigate("/chat");
  };

  return (
    <div className="Languages">
      <h1>{t("select")}</h1>
      <div>
        <button onClick={() => changeLanguage("en")}>English</button>
        <button onClick={() => changeLanguage("ru")}>Русский (Russian)</button>
        <button onClick={() => changeLanguage("it")}>Italiano (Italian)</button>
        <button onClick={() => changeLanguage("pl")}>Polski (Polish)</button>
        <button onClick={() => changeLanguage("el")}>Ελληνικά (Greek)</button>
        <button onClick={() => changeLanguage("yi")}>ייִדיש (Yiddish)</button>
        <button onClick={() => changeLanguage("he")}>עברית (Hebrew)</button>
        <button onClick={() => changeLanguage("ht")}>
          Kreyòl Ayisyen (Haitian Creole)
        </button>
        <button onClick={() => changeLanguage("fr")}>Français (French)</button>
        <button onClick={() => changeLanguage("es")}>Español (Spanish)</button>
        <button onClick={() => changeLanguage("pt")}>
          Português (Portuguese)
        </button>
        <button onClick={() => changeLanguage("zh")}>
          中文 (Mandarin Chinese)
        </button>
        <button onClick={() => changeLanguage("yue")}>粵語 (Cantonese)</button>
        <button onClick={() => changeLanguage("hi")}>हिन्दी (Hindi)</button>
        <button onClick={() => changeLanguage("bn")}>বাংলা (Bengali)</button>
        <button onClick={() => changeLanguage("te")}>తెలుగు (Telugu)</button>
        <button onClick={() => changeLanguage("pa")}>ਪੰਜਾਬੀ (Punjabi)</button>
        <button onClick={() => changeLanguage("ta")}>தமிழ் (Tamil)</button>
        <button onClick={() => changeLanguage("ko")}>한국어 (Korean)</button>
        <button onClick={() => changeLanguage("ja")}>日本語 (Japanese)</button>
        <button onClick={() => changeLanguage("vi")}>
          Tiếng Việt (Vietnamese)
        </button>
        <button onClick={() => changeLanguage("ar")}>العربية (Arabic)</button>
      </div>
      <Link to="/chat">
        <button>{t("chat")}</button>
      </Link>
    </div>
  );
}
