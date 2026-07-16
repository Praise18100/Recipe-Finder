import { FaUser } from "react-icons/fa";
import "./ChatMessage.css";

export default function ChatMessage({ message, isUser, image, recipe }) {
  return (
    <div className={`chat-message ${isUser ? "user" : "assistant"}`}>
      {!isUser && (
        <div className="chef-avatar-small">
          <FaUser />
        </div>
      )}
      <div className="message-content">
        {message && <p className="message-text">{message}</p>}
        {image && (
          <div className="message-image-container">
            <img src={image} alt="Recipe" className="message-image" />
          </div>
        )}
        {recipe && (
          <div className="recipe-card">
            <h4>{recipe.name}</h4>
            <p className="recipe-details">{recipe.details}</p>
            {recipe.tags && (
              <div className="recipe-tags">
                {recipe.tags.map((tag, idx) => (
                  <span key={idx} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
