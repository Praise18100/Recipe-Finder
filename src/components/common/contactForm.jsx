import { useState, useEffect, useRef } from "react";
import "./contactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ visible: false, type: "", message: "" });
  const toastTimer = useRef(null);

  // Clear any pending timer if the component unmounts mid-toast
  useEffect(() => {
    return () => clearTimeout(toastTimer.current);
  }, []);

  const showToast = (type, message) => {
    clearTimeout(toastTimer.current);
    setToast({ visible: true, type, message });
    toastTimer.current = setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 4000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      showToast("success", "Message sent! We'll get back to you soon.");
      setFormData({ fullName: "", email: "", phone: "", message: "" });
    } catch (err) {
      showToast("error", err.message || "Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section" id="contactForm">
      <div className="contact-header">
        <h2>Get in Touch</h2>
        <p className="contact-subtitle">
          We're here to help with any questions, feedback, or collaboration
          ideas.
        </p>
      </div>

      <form className="contact-card" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="John Doe Petson"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="johndoe@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="08167647654"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Type your Message..."
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>

      {/* Toast notification */}
      <div
        className={`toast toast-${toast.type} ${toast.visible ? "toast-visible" : ""}`}
        role="status"
        aria-live="polite"
      >
        <span className="toast-icon">
          {toast.type === "success" ? "✓" : "!"}
        </span>
        <span className="toast-message">{toast.message}</span>
        <button
          type="button"
          className="toast-close"
          onClick={() => setToast((prev) => ({ ...prev, visible: false }))}
          aria-label="Dismiss notification"
        >
          ×
        </button>
      </div>
    </section>
  );
}
