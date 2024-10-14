import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BreadCrumb from "../Componets/BreadCrumb";
// import LanguageSelector from "../Componets/LanguageSelector";
import "./Chat.css";

export default function Chat() {
  // State variables
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showWelcomeButtons, setShowWelcomeButtons] = useState(true);
  const [breadcrumbPath, setBreadcrumbPath] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);
  const [showBubble, setShowBubble] = useState(false);

  // Language selection for user and target language
  const [userLanguage, setUserLanguage] = useState(
    () => localStorage.getItem("chatLanguage") || "en-US"
  );
  const [targetLanguage, setTargetLanguage] = useState(
    () => localStorage.getItem("chatLanguage") || "en-US"
  );

  // Unified UI visibility state
  const [uiState, setUiState] = useState({
    visibleOptions: {
      visa: false,
      law30: false,
      itin: false,
      visaType: false,
      ssn: false,
      travelVisa: false,
      showDocumentButtons: false,
      showOfficeInfoButtons: false,
      moreVisaType: false,
    },
  });

  // Unified user interactions state
  const [userInteractions, setUserInteractions] = useState({
    buttonClicks: {
      subject: null,
      valid_visa: null,
      visa_type: null,
      request_info: null,
    },
    textInputs: [],
  });

  // useRef for speech recognition and audio playback
  const recognitionRef = useRef(null); // For speech recognition
  const audioRef = useRef(new Audio()); // For audio responses
  const messageListRef = useRef(null);
  const inputRef = useRef(null);
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Debugging logs
  console.log("User Interactions:", userInteractions);
  console.log("Messages in Chat.jsx:", messages);
  console.log("UI State:", uiState);

  // useEffects
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

  // Breadcrumb update function
  const updateBreadcrumb = (selection) => {
    setBreadcrumbPath((prevPath) => {
      const newPath = [...prevPath, selection];
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { path: newPath, messages: [...messages] },
      ]);
      return newPath;
    });
  };

  const handleBreadcrumbNavigation = (index) => {
    const newPath = breadcrumbPath.slice(0, index + 1);
    setBreadcrumbPath(newPath);

    const historicalState = chatHistory.find(
      (state) => state.path.length === newPath.length
    );
    if (historicalState) {
      setMessages(historicalState.messages);

      // Reset other relevant state variables
      setShowWelcomeButtons(index === 0);
      setInput("");
      resetUserInteractions();
      toggleAllButtonsOff();

      // Determine which UI elements should be visible based on the historical state
      const lastMessage =
        historicalState.messages[historicalState.messages.length - 1];
      updateUIStateBasedOnMessage(lastMessage);
    }
  };

  const updateUIStateBasedOnMessage = (message) => {
    // Reset all UI options first
    const resetUIState = {
      visa: false,
      law30: false,
      itin: false,
      visaType: false,
      ssn: false,
      travelVisa: false,
      showDocumentButtons: false,
      showOfficeInfoButtons: false,
      moreVisaType: false,
    };

    let newUIState = { ...resetUIState };

    // Check the message content and update UI state accordingly
    console.log("Message:", message);
    if (message.text.includes(t("welcome"))) {
      setBreadcrumbPath([]);
      setShowWelcomeButtons(true);
    } else {
      setShowWelcomeButtons(false);

      if (message.text.includes(t("visaType"))) {
        newUIState.visaType = true;
      } else if (message.text.includes(t("eligible"))) {
        newUIState.ssn = true;
      } else if (message.text.includes(t("noValidVisa"))) {
        newUIState.travelVisa = true;
      } else if (message.text.includes(t("allRequired"))) {
        newUIState.showDocumentButtons = true;
      } else if (
        message.text.includes(t("ssaOffice")) ||
        message.text.includes(t("missingDocuments"))
      ) {
        newUIState.showOfficeInfoButtons = true;
      } else if (message.text.includes(t("nearestOffice"))) {
        // Do nothing, waiting for user input
      } else if (message.text.includes(t("anymoreHelp"))) {
        // Do nothing, end of conversation
      } else if (message.text.includes(t("ssnSelected"))) {
        newUIState.visa = true;
      } else if (message.text.includes(t("LL30"))) {
        newUIState.law30 = true;
      } else if (message.text.includes(t("ITIN"))) {
        newUIState.itin = true;
      }
    }

    // Update the UI state
    setUiState((prevState) => ({
      ...prevState,
      visibleOptions: newUIState,
    }));
  };

  // Function to update UI visibility
  const toggleOption = (optionName, value = null) => {
    setUiState((prev) => ({
      ...prev,
      visibleOptions: {
        ...Object.keys(prev.visibleOptions).reduce(
          (acc, key) => ({
            ...acc,
            [key]:
              key === optionName
                ? value !== null
                  ? value
                  : !prev.visibleOptions[key]
                : false,
          }),
          {}
        ),
      },
    }));
  };

  // Function to update user interactions
  const updateUserInteraction = (category, key, value) => {
    setUserInteractions((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: value,
      },
    }));
  };

  // Function to get closest office
  const handleLocationSubmit = async (input) => {
    if (!input || input.trim() === "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Please enter a valid zip code.", sender: "bot" },
      ]);
      return;
    }

    const finalUserLanguage = userLanguage || "en-US";
    const finalTargetLanguage = targetLanguage || "en-US";

    try {
      const response = await fetch("https://pat-io.onrender.com/api/location", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userLanguage: finalUserLanguage,
          targetLanguage: finalTargetLanguage,
          zipCode: input.trim(), // trim extra spaces
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
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
      console.error("Error in handleLocationSubmit:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "An error occurred. Please try again.", sender: "bot" },
      ]);
    } finally {
      setIsLoading(false);
      resetAfterSubmit();
    }
  };

  // Submit sending the targetLanguage to the backend along with the message
  const handleSubmit = async () => {
    resetUserInteractions();
    if (!input.trim()) return;
    setIsLoading(true);

    const finalUserLanguage = userLanguage || "en-US";
    const finalTargetLanguage = targetLanguage || "en-US";

    try {
      const response = await fetch("https://pat-io.onrender.com/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: input,
          userLanguage: finalUserLanguage,
          targetLanguage: finalTargetLanguage,
          userInteractions,
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();

      if (data.textResponse) {
        setMessages((prev) => [
          ...prev,
          { text: input, sender: "user" },
          { text: data.textResponse, sender: "bot" },
        ]);
      }

      if (data.audioResponse) {
        playAudioResponse(data.audioResponse);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          text: "Sorry, there was an error processing your request.",
          sender: "bot",
        },
      ]);
    } finally {
      resetAfterSubmit();
      setIsLoading(false);
      setInput("");
    }
  };

  // Function to reset user interactions
  const resetUserInteractions = () => {
    setUserInteractions({
      buttonClicks: {
        subject: null,
        valid_visa: null,
        visa_type: null,
        request_info: null,
      },
      textInputs: [],
    });
  };

  // Function to toggle all buttons off
  const toggleAllButtonsOff = () => {
    setUiState((prev) => ({
      ...prev,
      visibleOptions: Object.keys(prev.visibleOptions).reduce(
        (acc, key) => ({ ...acc, [key]: false }),
        {}
      ),
    }));
  };

  // Function to reset user interactions and toggle all buttons off
  const resetAfterSubmit = () => {
    resetUserInteractions();
    toggleAllButtonsOff();
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
    setShowBubble(true);
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
    setShowBubble(false);
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      await handleSubmit();
    }
  };

  // Handle option click (e.g., SSN, Local Law 30, etc.)
  const handleOptionClick = (option) => {
    setShowWelcomeButtons(false);
    updateBreadcrumb(option);
    let botResponse = t("optionSelected") + option;
    if (option === t("howToApplyForSSN")) {
      botResponse = t("ssnSelected");
      toggleOption("visa", true);
      updateUserInteraction("buttonClicks", "subject", "SSN");
    } else if (option === t("whatIsNYCLocalLaw30")) {
      botResponse = t("LL30Selected");
      toggleOption("law30", true);
    } else if (option === t("whatIsAnITIN")) {
      botResponse = t("ITINSelected");
      toggleOption("itin", true);
    } else {
      botResponse = "Under Construction";
      toggleOption("law30", false);
      toggleOption("visa", false);
    }

    setMessages((prev) => [
      ...prev,
      { text: option, sender: "user" },
      { text: botResponse, sender: "bot" },
    ]);
  };

  // Handle visa option click (Yes/No for visa validity)
  const handleVisaOptionClick = (answer) => {
    updateBreadcrumb(answer);
    setMessages((prev) => [...prev, { text: answer, sender: "user" }]);

    updateUserInteraction("buttonClicks", "valid_visa", answer === t("yes"));
    toggleOption("visa", false);

    if (answer === t("yes")) {
      setMessages((prev) => [...prev, { text: t("visaType"), sender: "bot" }]);
      toggleOption("visaType", true);
    } else {
      setMessages((prev) => [
        ...prev,
        { text: t("noValidVisa"), sender: "bot" },
      ]);
      toggleOption("travelVisa", true);
    }
  };

  // Handle visa type click (e.g., H1B, L1, etc.)
  const handleVisaTypeClick = (visaType) => {
    updateBreadcrumb(visaType);
    if (visaType === "Others") {
      toggleOption("moreVisaType", true);
    } else {
      setMessages((prev) => [
        ...prev,
        { text: visaType, sender: "user" },
        { text: t("eligible"), sender: "bot" },
      ]);

      updateUserInteraction("buttonClicks", "visa_type", visaType);
      toggleOption("visaType", false);
      toggleOption("ssn", true);
    }
  };

  // Handle SSN options click (e.g., Closest Office, Documents Required)
  const handleSSNOptionClick = async (option) => {
    updateBreadcrumb(option);
    toggleOption("ssn", false);
    if (option === t("closestOfficeLocation")) {
      let response = t("nearestOffice");

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: response, sender: "bot" },
      ]);
    } else {
      try {
        // Update messages immediately
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: option, sender: "user" },
        ]);

        // Default language settings, if needed
        const finalUserLanguage = userLanguage || "en-US";
        const finalTargetLanguage = targetLanguage || "en-US";

        // Update the user interactions state
        const updatedInteractions = {
          ...userInteractions,
          buttonClicks: {
            ...userInteractions.buttonClicks,
            request_info: option,
          },
        };

        // Log to see the data structure
        console.log("Updated interactions:", updatedInteractions);

        // Always call the backend, regardless of the option
        const response = await sendMessageToBackend(
          option,
          updatedInteractions
        );

        // Handle the response based on the option
        if (option === t("documentsRequired")) {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              text: t("allRequired"),
              sender: "bot",
            },
          ]);
          toggleOption("showDocumentButtons", true);
        } else if (option === t("closestOfficeLocation")) {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              text: "Give me your current location",
              sender: "bot",
            },
          ]);
        }

        // Add the backend response to messages
        if (response && response.textResponse) {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: response.textResponse, sender: "bot" },
          ]);
        }
      } catch (error) {
        console.error("Error in handleSSNOptionClick:", error);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "An error occurred. Please try again.", sender: "bot" },
        ]);
      } finally {
        resetUserInteractions();
      }
    }
  };

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

  // Function to handle document status
  const handleDocumentStatus = (status) => {
    updateBreadcrumb(status);
    toggleOption("showDocumentButtons", false);
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
      },
    ]);
    if (response === t("missingDocuments")) {
      toggleOption("showOfficeInfoButtons", false);
    } else {
      toggleOption("showOfficeInfoButtons", true);
    }
  };

  // Function to handle office info response
  const handleOfficeInfoResponse = (answer) => {
    updateBreadcrumb(answer);
    toggleOption("showOfficeInfoButtons", false);
    let response = answer === t("yes") ? t("nearestOffice") : t("anymoreHelp");

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: answer, sender: "user" },
      { text: response, sender: "bot" },
    ]);
  };

  // Function to handle the "Start Over" button click
  const handleStartOver = () => {
    setBreadcrumbPath([]);
    setMessages([
      {
        text: t("welcome"),
        sender: "bot",
        isWelcome: true,
      },
    ]);
    resetUserInteractions();
    toggleAllButtonsOff();
    setShowWelcomeButtons(true);
    setInput("");
  };

  return (
    <div className="chat-container">
      {/* <h1>{t("chat")}</h1> */}
      <BreadCrumb
        path={breadcrumbPath}
        onNavigate={handleBreadcrumbNavigation}
      />
      <button onClick={handleStartOver} className="start-over-button">
        {t("startOver")}
      </button>
      {/* <LanguageSelector
        setUserLanguage={setUserLanguage}
        userLanguage={userLanguage}
        targetLanguage={targetLanguage}
        setTargetLanguage={setTargetLanguage}
      /> */}
      <div className="message-list" ref={messageListRef} aria-live="polite">
        {messages.map((message, index) => (
          <React.Fragment key={index}>
            {message.isWelcome && showWelcomeButtons && (
              <div className="option-grid">
                <button
                  onClick={() => handleOptionClick(t("howToApplyForSSN"))}
                >
                  {t("SSN")}
                </button>
                <button
                  onClick={() => handleOptionClick(t("whatIsNYCLocalLaw30"))}
                >
                  {t("LL30")}
                </button>
                <button onClick={() => handleOptionClick(t("whatIsAnITIN"))}>
                  {t("ITIN")}
                </button>
              </div>
            )}
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
          </React.Fragment>
        ))}
        {uiState.visibleOptions.visa && (
          <div className="visa-options">
            <button onClick={() => handleVisaOptionClick(t("yes"))}>
              {t("yes")}
            </button>
            <button onClick={() => handleVisaOptionClick(t("no"))}>
              {t("no")}
            </button>
          </div>
        )}
        {uiState.visibleOptions.travelVisa && (
          <div className="visa-form-options">
            <button
              onClick={() =>
                window.open(
                  `https://www-travel-state-gov.translate.goog/content/travel/en/us-visas/visa-information-resources/forms/ds-160-online-nonimmigrant-visa-application.html?_x_tr_sl=en&_x_tr_tl=${
                    userLanguage === "en" ? "eng" : userLanguage
                  }`,
                  "_blank",
                  "noopener noreferrer"
                )
              }
            >
              {t("applyForNonImmigrantVisa")}
            </button>
            <button
              onClick={() =>
                window.open(
                  `https://travel-state-gov.translate.goog/content/travel/en/us-visas/visa-information-resources/forms/online-immigrant-visa-forms.html?_x_tr_sl=en&_x_tr_tl=${
                    userLanguage === "en" ? "eng" : userLanguage
                  }`,
                  "_blank",
                  "noopener noreferrer"
                )
              }
            >
              {t("applyForImmigrantVisa")}
            </button>
          </div>
        )}
        {uiState.visibleOptions.law30 && (
          <div className="law30-options">
            <button
              onClick={() =>
                window.open(
                  `https://www-nycservice-org.translate.goog/language_access?_x_tr_sl=en&_x_tr_tl=${
                    userLanguage === "en" ? "eng" : userLanguage
                  }`,
                  "_blank",
                  "noopener noreferrer"
                )
              }
            >
              {t("learnLL30")}
            </button>
          </div>
        )}
        {uiState.visibleOptions.itin && (
          <div className="itin-options">
            <button
              onClick={() =>
                window.open(
                  `https://www-irs-gov.translate.goog/individuals/international-taxpayers/taxpayer-identification-numbers-tin?_x_tr_sl=en&_x_tr_tl=${
                    userLanguage === "en" ? "eng" : userLanguage
                  }`,
                  "_blank",
                  "noopener noreferrer"
                )
              }
            >
              {t("TIN")}
            </button>
            <button
              onClick={() =>
                window.open(
                  `https://www-nyc-gov.translate.goog/site/dca/consumers/file-your-taxes-itin.page?_x_tr_sl=en&_x_tr_tl=${
                    userLanguage === "en" ? "eng" : userLanguage
                  }`,
                  "_blank",
                  "noopener noreferrer"
                )
              }
            >
              {t("nycITIN")}
            </button>

            <button
              onClick={() =>
                window.open(
                  `https://www-irs-gov.translate.goog/individuals/individual-taxpayer-identification-number?_x_tr_sl=en&_x_tr_tl=${
                    userLanguage === "en" ? "eng" : userLanguage
                  }`,
                  "_blank",
                  "noopener noreferrer"
                )
              }
            >
              {t("irsITIN")}
            </button>
          </div>
        )}
        {uiState.visibleOptions.visaType && (
          <div className="visa-type-options">
            <button onClick={() => handleVisaTypeClick("H-1B")}>H-1B</button>
            <button onClick={() => handleVisaTypeClick("L-1")}>L-1</button>
            <button onClick={() => handleVisaTypeClick("F-1")}>F-1</button>
            <button onClick={() => handleVisaTypeClick("Others")}>
              {t("more")}
            </button>
          </div>
        )}
        {uiState.visibleOptions.moreVisaType && (
          <div className="visa-type-options">
            <button onClick={() => handleVisaTypeClick("H-1B")}>H-1B</button>
            {/* <button onClick={() => handleVisaTypeClick("H-2A")}>H-2A</button> */}
            {/* <button onClick={() => handleVisaTypeClick("H-2B")}>H-2B</button> */}
            <button onClick={() => handleVisaTypeClick("L-1")}>L-1</button>
            {/* <button onClick={() => handleVisaTypeClick("O-1")}>O-1</button> */}
            {/* <button onClick={() => handleVisaTypeClick("E-1")}>E-1</button> */}
            {/* <button onClick={() => handleVisaTypeClick("E-2")}>E-2</button> */}
            {/* <button onClick={() => handleVisaTypeClick("TN")}>TN</button> */}
            {/* <button onClick={() => handleVisaTypeClick("J-1")}>J-1</button> */}
            <button onClick={() => handleVisaTypeClick("F-1")}>F-1</button>
            {/* <button onClick={() => handleVisaTypeClick("H-4")}>H-4</button> */}
            {/* <button onClick={() => handleVisaTypeClick("J-2")}>J-2</button> */}
          </div>
        )}
        {uiState.visibleOptions.ssn && (
          <div className="ssn-options">
            <button
              onClick={() => handleSSNOptionClick(t("closestOfficeLocation"))}
            >
              {t("office")}
            </button>
            <button
              onClick={() => handleSSNOptionClick(t("documentsRequired"))}
            >
              {t("documents")}
            </button>
          </div>
        )}
        {uiState.visibleOptions.showDocumentButtons && (
          <div className="document-status-buttons">
            <button onClick={() => handleDocumentStatus("complete")}>
              {t("complete")}
            </button>
            <button onClick={() => handleDocumentStatus("incomplete")}>
              {t("incomplete")}
            </button>
          </div>
        )}
        {uiState.visibleOptions.showOfficeInfoButtons && (
          <div className="office-info-buttons">
            <button onClick={() => handleOfficeInfoResponse(t("yes"))}>
              {t("yes")}
            </button>
            <button onClick={() => handleOfficeInfoResponse(t("no"))}>
              {t("no")}
            </button>
          </div>
        )}
      </div>

      <div className="input-area">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (
              (input.trim() !== "" &&
                messages[messages.length - 1].text === t("nearestOffice")) ||
              (input.length === 5 && /^\d+$/.test(input))
            ) {
              setMessages((prevMessages) => [
                ...prevMessages,
                { text: input, sender: "user" },
              ]);
              handleLocationSubmit(input); // get data from server about location of nearest SSA office
            } else {
              handleSubmit(); // gets response from OpenAI API
            }
            setInput("");
          }}
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              resetUserInteractions();
            }}
            placeholder={t("type")}
          />
          <button
            className="send-button"
            type="submit"
            disabled={!input.trim() || isLoading}
          >
            {t("send")}
          </button>
          <div className="mic-button-wrapper">
            <button
              className="mic-button"
              type="button"
              onMouseDown={startListening}
              onMouseUp={stopListeningAndSend}
              onTouchStart={startListening}
              onTouchEnd={stopListeningAndSend}
              disabled={isLoading}
            >
              <i className="fa-solid fa-microphone"></i>
            </button>
            <span className={`bubble-message ${showBubble ? "visible" : ""}`}>
              Hold to speak, release to send.
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
