import React, { useState, useEffect, useRef } from "react";
import "./Chat.css";
import { useTranslation } from "react-i18next";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const recognitionRef = useRef(null); // For speech recognition
  const audioRef = useRef(new Audio()); // For audio responses

  // Language selection for user and target language
  const [userLanguage, setUserLanguage] = useState(
    () => localStorage.getItem("chatLanguage") || "en-US"
  );
  const [targetLanguage, setTargetLanguage] = useState(
    () => localStorage.getItem("chatLanguage") || "en-US"
  );

  const [showVisaOptions, setShowVisaOptions] = useState(false);
  const [showLaw30Options, setShowLaw30Options] = useState(false);
  const [showVisaTypeOptions, setShowVisaTypeOptions] = useState(false);
  const [showSSNOptions, setShowSSNOptions] = useState(false);

  const [userInteractions, setUserInteractions] = useState({
    buttonClicks: {
      subject: null,
      valid_visa: null,
      visa_type: null,
      request_info: null,
    },
    textInputs: [],
  });

  const messageListRef = useRef(null);
  const inputRef = useRef(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    setMessages([
      {
        text: t("welcome"),
        sender: "bot",
        isWelcome: true,
      },
    ]);
    inputRef.current?.focus();
  }, [t]);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("chatLanguage");
    if (storedLanguage) {
      setUserLanguage(storedLanguage);
      setTargetLanguage(storedLanguage);
    }
  }, []);

  // Sending the targetLanguage to the backend along with the message
  const handleSubmit = async () => {
    if (!input.trim()) return;

    setIsLoading(true);

    // Use default language if user hasn't selected
    const finalUserLanguage = userLanguage || "en-US";
    const finalTargetLanguage = targetLanguage || "en-US";

    console.log({
      message: input,
      userLanguage: finalUserLanguage,
      targetLanguage: finalTargetLanguage,
      userInteractions,
    });

    try {
      const response = await fetch("https://pat-io.onrender.com/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: input, // Message from user
          userLanguage: finalUserLanguage, // Ensure this is passed
          targetLanguage: finalTargetLanguage, // Ensure this is passed
          userInteractions, // Additional user data
        }),
      });

      if (!response.ok) {
        const errorText = await response.text(); // Get the error text from response
        throw new Error(
          `Request failed with status ${response.status}: ${errorText}`
        );
      }

      const data = await response.json();
      console.log("API Response:", data);

      if (data.textResponse) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: data.textResponse, sender: "bot" },
        ]);
      }

      if (data.audioResponse) {
        playAudioResponse(data.audioResponse);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: "Sorry, there was an error processing your request.",
          sender: "bot",
        },
      ]);
    }

    setIsLoading(false);
    setInput("");
  };

  // Function to play audio response
  const playAudioResponse = (base64Audio) => {
    const byteCharacters = atob(base64Audio);
    const byteNumbers = Array.from(byteCharacters).map((char) =>
      char.charCodeAt(0)
    );
    const byteArray = new Uint8Array(byteNumbers);
    const audioBlob = new Blob([byteArray], { type: "audio/mp3" });
    const audioUrl = URL.createObjectURL(audioBlob);

    audioRef.current.src = audioUrl;
    audioRef.current.play();
  };

  // Function to start speech recognition
  const startListening = () => {
    if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = userLanguage; // Set language based on user selection

      recognitionRef.current.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join("");
        setInput(transcript);
      };

      recognitionRef.current.start();
    }
  };

  // Function to stop speech recognition and submit message
  const stopListeningAndSend = async () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      await handleSubmit();
    }
  };

  // Handle option click (e.g., SSN, Local Law 30, etc.)
  const handleOptionClick = (option) => {
    let botResponse = t("optionSelected") + option;

    if (option === "How to apply for SSN") {
      botResponse = t("ssnSelected");
      setShowVisaOptions(true);
      setUserInteractions((prev) => ({
        ...prev,
        buttonClicks: { ...prev.buttonClicks, subject: "SSN" },
      }));
    } else if (option === "What is NYC Local Law 30?") {
      botResponse = t("LL30Selected");
      setShowLaw30Options(true);
      setUserInteractions((prev) => ({
        ...prev,
        buttonClicks: { ...prev.buttonClicks, subject: "Law 30" },
      }));
    } else {
      setShowLaw30Options(false);
      setShowVisaOptions(false);
    }

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: option, sender: "user" },
      { text: botResponse, sender: "bot" },
    ]);
  };

  // Handle visa option click (Yes/No for visa validity)
  const handleVisaOptionClick = (answer) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: answer, sender: "user" },
      {
        text: t("validVisa") + answer,
        sender: "bot",
      },
    ]);

    setUserInteractions((prev) => ({
      ...prev,
      buttonClicks: { ...prev.buttonClicks, valid_visa: answer === "Yes" },
    }));

    setShowVisaOptions(false);

    if (answer === "Yes") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: t("visaType"), sender: "bot" },
      ]);
      setShowVisaTypeOptions(true);
    }
  };

  // Handle visa type click (e.g., H1B, L1, etc.)
  const handleVisaTypeClick = (visaType) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: visaType, sender: "user" },
      { text: t("eligible"), sender: "bot" },
    ]);

    setUserInteractions((prev) => ({
      ...prev,
      buttonClicks: { ...prev.buttonClicks, visa_type: visaType },
    }));

    setShowVisaTypeOptions(false);
    setShowSSNOptions(true);
  };

  // Handle SSN options click (e.g., Closest Office, Documents Required)
  const handleSSNOptionClick = async (option) => {
    // Update messages immediately
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: option, sender: "user" },
      { text: t("optionSelected") + option, sender: "bot" },
    ]);

    // Default language settings, if needed
    const finalUserLanguage = userLanguage || "en-US"; // Default to English if not set
    const finalTargetLanguage = targetLanguage || "en-US"; // Default to English if not set

    // Update the user interactions state
    const updatedInteractions = {
      ...userInteractions,
      buttonClicks: {
        ...userInteractions.buttonClicks,
        request_info: option, // Set request_info
      },
    };

    // Log to see the data structure
    console.log("Updated interactions:", updatedInteractions);

    // Now that the state is updated, call the backend
    await sendMessageToBackend(option, updatedInteractions);

    // Add new buttons after receiving the response
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        text: t("allRequired"), // "Do you have all the required documents?",
        sender: "bot",
        showDocumentButtons: true,
      },
    ]);

    setShowSSNOptions(false); // Hide SSN options after selection
  };

  // Function to send the message and interactions to the backend
  // Function to send the message and interactions to the backend
  const sendMessageToBackend = async (option, updatedUserInteractions) => {
    try {
      // Log the data that is about to be sent to the backend for debugging
      console.log("Sending data to backend:", {
        message: option,
        userLanguage,
        targetLanguage,
        userInteractions: updatedUserInteractions, // This should contain the correct data
      });

      const response = await fetch("https://pat-io.onrender.com/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: option, // Ensure the message is being passed
          userLanguage, // Ensure userLanguage is passed
          targetLanguage, // Ensure targetLanguage is passed
          userInteractions: updatedUserInteractions, // Ensure user interactions are passed
        }),
      });

      // Check if the response is okay
      if (!response.ok) {
        const errorText = await response.text(); // Get the error text from response
        throw new Error(
          `Request failed with status ${response.status}: ${errorText}`
        );
      }

      const data = await response.json();
      console.log("API Response:", data);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: data.textResponse, sender: "bot" },
      ]);
    } catch (error) {
      console.error("Error sending data to backend:", error.message);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: "Sorry, there was an error processing your request.",
          sender: "bot",
        },
      ]);
    }
  };

  const handleDocumentStatus = (status) => {
    let response =
      status === "complete" ? t("ssaOffice") : t("missingDocuments");

    setMessages((prevMessages) => [
      ...prevMessages,
      {
        text: status === "complete" ? t("complete") : t("incomplete"),
        sender: "user",
      },
      {
        text: response,
        sender: "bot",
        showOfficeInfoButtons: status === "complete",
      },
    ]);
  };

  const handleOfficeInfoResponse = (answer) => {
    let response = answer === "Yes" ? t("nearestOffice") : t("anymoreHelp");

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: answer, sender: "user" },
      { text: response, sender: "bot" },
    ]);
  };

  return (
    <div className="chat-container">
      <h1>{t("chat")}</h1>

      {/* Language selection for speech and translation */}
      <div className="language-selectors">
        <label>
          Speak Language:
          <select
            value={userLanguage}
            onChange={(e) => {
              setUserLanguage(e.target.value);
              localStorage.setItem("chatLanguage", e.target.value);
            }}
          >
            <option value="en-US">English</option>
            <option value="ru-RU">Russian</option>
            <option value="it-IT">Italian</option>
            <option value="pl-PL">Polish</option>
            <option value="el-GR">Greek</option>
            <option value="yi">Yiddish</option>
            <option value="he-IL">Hebrew</option>
            <option value="ht-HT">Haitian Creole</option>
            <option value="fr-FR">French</option>
            <option value="es-ES">Spanish</option>
            <option value="pt-PT">Portuguese</option>
            <option value="zh-CN">Mandarin</option>
            <option value="zh-HK">Cantonese</option>
            <option value="hi-IN">Hindi</option>
            <option value="bn-IN">Bengali</option>
            <option value="te-IN">Telugu</option>
            <option value="pa-IN">Punjabi</option>
            <option value="ta-IN">Tamil</option>
            <option value="ko-KR">Korean</option>
            <option value="ja-JP">Japanese</option>
            <option value="vi-VN">Vietnamese</option>
            <option value="ar-SA">Arabic</option>
          </select>
        </label>

        <label>
          Translate To:
          <select
            value={targetLanguage}
            onChange={(e) => {
              setTargetLanguage(e.target.value);
              localStorage.setItem("chatLanguage", e.target.value);
            }}
          >
            <option value="en-US">English</option>
            <option value="ru-RU">Russian</option>
            <option value="it-IT">Italian</option>
            <option value="pl-PL">Polish</option>
            <option value="el-GR">Greek</option>
            <option value="yi">Yiddish</option>
            <option value="he-IL">Hebrew</option>
            <option value="ht-HT">Haitian Creole</option>
            <option value="fr-FR">French</option>
            <option value="es-ES">Spanish</option>
            <option value="pt-PT">Portuguese</option>
            <option value="zh-CN">Mandarin</option>
            <option value="zh-HK">Cantonese</option>
            <option value="hi-IN">Hindi</option>
            <option value="bn-IN">Bengali</option>
            <option value="te-IN">Telugu</option>
            <option value="pa-IN">Punjabi</option>
            <option value="ta-IN">Tamil</option>
            <option value="ko-KR">Korean</option>
            <option value="ja-JP">Japanese</option>
            <option value="vi-VN">Vietnamese</option>
            <option value="ar-SA">Arabic</option>
          </select>
        </label>
      </div>

      <div className="message-list" ref={messageListRef} aria-live="polite">
        {messages.map((message, index) => (
          <React.Fragment key={index}>
            <div className={`message ${message.sender}`}>
              {(message.text || "").split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line.match(/^\d+\./) ? (
                    <div className="checkbox-item">
                      <input type="checkbox" id={`item-${i}`} />
                      <label htmlFor={`item-${i}`}>{line}</label>
                    </div>
                  ) : (
                    line
                  )}
                  <br />
                </React.Fragment>
              ))}
            </div>
            {message.showDocumentButtons && (
              <div className="document-status-buttons">
                <button onClick={() => handleDocumentStatus("complete")}>
                  {t("complete")}
                </button>
                <button onClick={() => handleDocumentStatus("incomplete")}>
                  {t("incomplete")}
                </button>
              </div>
            )}
            {message.isWelcome && (
              <div className="option-grid">
                <button
                  onClick={() => handleOptionClick("How to apply for SSN")}
                >
                  {t("SSN")}
                </button>
                <button
                  onClick={() => handleOptionClick("What is NYC Local Law 30?")}
                >
                  {t("LL30")}
                </button>
                <button
                  onClick={() => handleOptionClick("What is an ITIN number?")}
                >
                  {t("ITIN")}
                </button>
                <button onClick={() => handleOptionClick("Other questions")}>
                  {t("other")}
                </button>
              </div>
            )}
            {message.showOfficeInfoButtons && (
              <div className="office-info-buttons">
                <button onClick={() => handleOfficeInfoResponse("Yes")}>
                  {t("yes")}
                </button>
                <button onClick={() => handleOfficeInfoResponse("No")}>
                  {t("no")}
                </button>
              </div>
            )}
          </React.Fragment>
        ))}
        {showVisaOptions && (
          <div className="visa-options">
            <button onClick={() => handleVisaOptionClick("Yes")}>
              {t("yes")}
            </button>
            <button onClick={() => handleVisaOptionClick("No")}>
              {t("no")}
            </button>
          </div>
        )}
        {showLaw30Options && (
          <div className="law30-options">
            <button onClick={() => handleLaw30OptionClick("Yes")}>
              {t("yes")}
            </button>
            <button onClick={() => handleLaw30OptionClick("No")}>
              {t("no")}
            </button>
          </div>
        )}
        {showVisaTypeOptions && (
          <div className="visa-type-options">
            <button onClick={() => handleVisaTypeClick("H-1B")}>H-1B</button>
            <button onClick={() => handleVisaTypeClick("L-1")}>L-1</button>
            <button onClick={() => handleVisaTypeClick("F-1")}>F-1</button>
            <button onClick={() => handleVisaTypeClick("Others")}>
              {t("more")}
            </button>
          </div>
        )}
        {showSSNOptions && (
          <div className="ssn-options">
            <button
              onClick={() => handleSSNOptionClick("Closest Office Location")}
            >
              {t("office")}
            </button>
            <button onClick={() => handleSSNOptionClick("Documents Required")}>
              {t("documents")}
            </button>
          </div>
        )}
      </div>

      <div className="input-area">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t("type")}
          />
          <button type="submit" disabled={!input.trim() || isLoading}>
            {t("send")}
          </button>
          <button
            type="button"
            onMouseDown={startListening}
            onMouseUp={stopListeningAndSend}
            onTouchStart={startListening}
            onTouchEnd={stopListeningAndSend}
            disabled={isLoading}
          >
            Push to Talk
          </button>
        </form>
      </div>
    </div>
  );
}
