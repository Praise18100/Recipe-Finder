import ChatMessage from "./ChatMessage";
import EmptyState from "./EmptyState";
import "./ChatArea.css";

export default function ChatArea({ messages, isEmpty }) {
  return (
    <div className="chat-area">
      {isEmpty ? (
        <EmptyState />
      ) : (
        <div className="messages-container">
          {messages.map((msg, idx) => (
            <ChatMessage
              key={idx}
              message={msg.text}
              isUser={msg.isUser}
              image={msg.image}
              recipe={msg.recipe}
            />
          ))}
        </div>
      )}
    </div>
  );
}
