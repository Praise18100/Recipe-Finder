import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import "./ChatInput.css";

export default function ChatInput({ onSend }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chat-input-container">
      <div className="input-wrapper">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask Chef Hilda for recipes, ingredients, tips..."
          className="chat-input"
        />
        <button
          onClick={handleSend}
          className="send-btn"
          disabled={!input.trim()}
        >
          <FaArrowRight />
        </button>
      </div>
      <p className="input-footer">
        Chef helps you create recipes. Please double-check ingredients and
        cooking instructions
      </p>
    </div>
  );
}
