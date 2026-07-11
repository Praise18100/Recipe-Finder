import { useState } from "react";
import "./login.css";
import loginLogo from "../assets/login-logo.png";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    console.log("Login attempt:", form);
  };

  return (
    <div className="login-page">
      <div className="login-content">
        <div className="login-card">
          <div className="login-header">
            <img
              src={loginLogo}
              alt="Recipe Finder logo"
              className="login-logo"
            />
            <h2>Login to Recipe Finder</h2>
          </div>

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
          />

          <button type="button" onClick={handleLogin}>
            Login
          </button>

          <p className="login-footer-text">
            Don't have an account? <a href="#signup">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}
