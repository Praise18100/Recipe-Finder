import { useState } from "react";
import {
  FaUser,
  FaUtensils,
  FaLightbulb,
  FaHeart,
  FaStar,
  FaMoon,
  FaTrash,
  FaApple,
  FaIceCream,
  FaLeaf,
  FaFire,
} from "react-icons/fa";
import "./Sidebar.css";

export default function Sidebar({ onNewChat }) {
  const [darkMode, setDarkMode] = useState(false);

  const handleNewChat = () => {
    if (onNewChat) onNewChat();
  };

  return (
    <div className="ai-sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <span className="recipe">Recipe</span>
          <span className="finder">Finder</span>
        </div>
      </div>

      <div className="ai-info">
        <div className="chef-icon">
          <FaUser />
        </div>
        <h3>AI Recipe Assistant</h3>
        <p>Your personal cooking companion</p>
      </div>

      <button className="new-chat-btn" onClick={handleNewChat}>
        <span>+</span> New Chat
      </button>

      <div className="menu-section">
        <div className="menu-item">
          <span className="menu-icon">
            <FaUtensils />
          </span>
          <span>Ask Anything</span>
        </div>
        <div className="menu-item">
          <span className="menu-icon">
            <FaLightbulb />
          </span>
          <span>Get Suggestion</span>
        </div>
        <div className="menu-item">
          <span className="menu-icon">
            <FaHeart />
          </span>
          <span>Share & Enjoy</span>
        </div>
      </div>

      <div className="favorites-section">
        <div className="favorites-header">
          <span className="favorites-icon">
            <FaStar />
          </span>
          <h4>Save Your Favorites</h4>
        </div>
        <p className="favorites-text">Your saved recipes will appear here</p>
        <button className="sign-up-btn">Sign Up / Log in</button>
      </div>

      <div className="sidebar-settings">
        <div className="setting-item" onClick={() => setDarkMode(!darkMode)}>
          <span>
            <FaMoon />
          </span>
          <span>Dark Theme</span>
          <input type="checkbox" checked={darkMode} readOnly />
        </div>
        <div className="setting-item">
          <span>
            <FaTrash />
          </span>
          <span>Clear Conversations</span>
        </div>
      </div>

      <div className="recent-chats">
        <div className="recent-header">
          <h5>Recent Chat</h5>
          <span className="view-all">View all</span>
        </div>
        <div className="chat-item">
          <span className="chat-emoji">
            <FaApple />
          </span>
          <span>Banana, blueberry and...</span>
          <span className="chat-time">2 mins ago</span>
        </div>
        <div className="chat-item">
          <span className="chat-emoji">
            <FaIceCream />
          </span>
          <span>Quick dessert ideas...</span>
          <span className="chat-time">2 hours ago</span>
        </div>
        <div className="chat-item">
          <span className="chat-emoji">
            <FaLeaf />
          </span>
          <span>Vegan dinner recipes</span>
          <span className="chat-time">1 day ago</span>
        </div>
        <div className="chat-item">
          <span className="chat-emoji">
            <FaFire />
          </span>
          <span>Low calorie meals</span>
          <span className="chat-time">2 days ago</span>
        </div>
      </div>
    </div>
  );
}
