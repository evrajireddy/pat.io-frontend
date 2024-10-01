import React, { useState, useEffect, useRef } from "react";
import "./Chat.css";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showVisaOptions, setShowVisaOptions] = useState(false);
  const [showVisaTypeOptions, setShowVisaTypeOptions] = useState(false);
  const [showSSNOptions, setShowSSNOptions] = useState(false);

  const [userInteractions, setUserInteractions] = useState({
    buttonClicks: {
      subject: null, // Stores "SSN"
      valid_visa: null, // Stores true/false based on Yes/No response
      visa_type: null, // Stores visa type (e.g., H1B)
      request_info: null, // Stores information request (e.g., "documents")
    },
    textInputs: [],
  });

  const messageListRef = useRef(null);
  const inputRef = useRef(null);

  console.log("User Interactions:", userInteractions);

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    setMessages([
      {
        text: "Welcome to Pat.io\nDo you have any questions about SSN? Local Law 30? ITIN number?",
        sender: "bot",
        isWelcome: true,
      },
    ]);
    inputRef.current?.focus(); // Automatically focus on input
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return; // Early return if input is empty

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: input, sender: "user" },
    ]);

    try {
      const response = await fetch("https://pat-io.onrender.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: data.response, sender: "bot" },
      ]);
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

    setUserInteractions((prev) => ({
      ...prev,
      textInputs: [...prev.textInputs, input],
    }));

    setInput(""); // Clear input after message sent
  };

  const handleOptionClick = (option) => {
    let botResponse = `You selected: ${option}. How can I help you with that?`;

    if (option === "Tell me about SSN") {
      botResponse =
        "Of course! I have all the information about getting an SSN, but first, do you have a valid visa?";
      setShowVisaOptions(true);

      setUserInteractions((prev) => ({
        ...prev,
        buttonClicks: {
          ...prev.buttonClicks,
          subject: "SSN", // Update subject to "SSN"
        },
      }));
    } else {
      setShowVisaOptions(false);
    }

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: option, sender: "user" },
      { text: botResponse, sender: "bot" },
    ]);
  };

  const handleVisaOptionClick = (answer) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: answer, sender: "user" },
      {
        text: `You answered ${answer} to having a valid visa.`,
        sender: "bot",
      },
    ]);

    setUserInteractions((prev) => ({
      ...prev,
      buttonClicks: {
        ...prev.buttonClicks,
        valid_visa: answer === "Yes", // Set true/false for valid_visa based on Yes/No
      },
    }));

    // Show visa type options if the answer is "Yes" and hide Yes/No buttons
    setShowVisaOptions(false); // Hide Yes/No options after selection

    if (answer === "Yes") {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: "What is your type of visa? Please choose below options.",
          sender: "bot",
        },
      ]);
      setShowVisaTypeOptions(true); // Show visa type buttons
    }
  };

  const handleVisaTypeClick = (visaType) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: visaType, sender: "user" },
      {
        text: "Great! you are eligible to apply for SSN, you can choose a suggestion below for more info.",
        sender: "bot",
      },
    ]);

    setUserInteractions((prev) => ({
      ...prev,
      buttonClicks: {
        ...prev.buttonClicks,
        visa_type: visaType, // Set visa_type based on user selection
      },
    }));

    setShowVisaTypeOptions(false); // Hide visa type options after selection
    setShowSSNOptions(true); // Show the new SSN options
  };

  const handleSSNOptionClick = async (option) => {
    // Update messages immediately
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: option, sender: "user" },
      { text: `You selected: ${option}`, sender: "bot" },
    ]);

    // Update the user interactions state
    const updatedInteractions = {
      ...userInteractions, // Get the current state
      buttonClicks: {
        ...userInteractions.buttonClicks,
        request_info: option, // Set request_info
      },
    };

    // Update the state
    setUserInteractions(updatedInteractions);

    // Now that the state is updated, call the backend
    await sendMessageToBackend(option, updatedInteractions);

    setShowSSNOptions(false); // Hide SSN options after selection
  };

  // Function to send the message and interactions to the backend
  const sendMessageToBackend = async (option, updatedUserInteractions) => {
    try {
      const response = await fetch("https://pat-io.onrender.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: option,
          userInteractions: updatedUserInteractions, // Send the updated interactions
        }),
      });

      const data = await response.json();
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: data.response, sender: "bot" },
      ]);
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
  };

  return (
    <div className="chat-container">
      <h1>Chat with Pat.io</h1>
      <div className="message-list" ref={messageListRef} aria-live="polite">
        {messages.map((message, index) => (
          <React.Fragment key={index}>
            <div className={`message ${message.sender}`}>{message.text}</div>
            {message.isWelcome && (
              <div className="option-grid">
                <button onClick={() => handleOptionClick("Tell me about SSN")}>
                  Tell me about SSN
                </button>
                <button
                  onClick={() => handleOptionClick("Explain Local Law 30")}
                >
                  Explain Local Law 30
                </button>
                <button
                  onClick={() => handleOptionClick("What is an ITIN number?")}
                >
                  What is an ITIN number?
                </button>
                <button onClick={() => handleOptionClick("Other questions")}>
                  Other questions
                </button>
              </div>
            )}
          </React.Fragment>
        ))}
        {showVisaOptions && (
          <div className="visa-options">
            <button onClick={() => handleVisaOptionClick("Yes")}>Yes</button>
            <button onClick={() => handleVisaOptionClick("No")}>No</button>
          </div>
        )}
        {showVisaTypeOptions && (
          <div className="visa-type-options">
            <button onClick={() => handleVisaTypeClick("H-1B")}>H-1B</button>
            <button onClick={() => handleVisaTypeClick("L-1")}>L-1</button>
            <button onClick={() => handleVisaTypeClick("F-1")}>F-1</button>
            <button onClick={() => handleVisaTypeClick("Others")}>
              Others
            </button>
          </div>
        )}
        {showSSNOptions && (
          <div className="ssn-options">
            <button
              onClick={() => handleSSNOptionClick("Closest Office Location")}
            >
              Closest Office Location
            </button>
            <button onClick={() => handleSSNOptionClick("Documents Required")}>
              Documents Required
            </button>
          </div>
        )}
      </div>
      <div className="input-area">
        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button type="submit" disabled={!input.trim()}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
