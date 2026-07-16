import { useState } from "react";
import Sidebar from "../components/aiChat/Sidebar";
import ChatArea from "../components/aiChat/ChatArea";
import ChatInput from "../components/aiChat/ChatInput";
import "./aiChat.css";

export default function AiChat() {
  const [messages, setMessages] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);

  const handleSendMessage = (text) => {
    // Add user message
    const userMessage = { text, isUser: true };
    setMessages([...messages, userMessage]);
    setIsEmpty(false);

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage = {
        text: "That's a great question! Let me help you find the perfect recipe.",
        isUser: false,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    }, 800);
  };

  const handleNewChat = () => {
    setMessages([]);
    setIsEmpty(true);
  };

  return (
    <div className="ai-chat-container">
      <Sidebar onNewChat={handleNewChat} />
      <div className="chat-main">
        <ChatArea messages={messages} isEmpty={isEmpty} />
        <ChatInput onSend={handleSendMessage} />
      </div>
    </div>
  );
}
