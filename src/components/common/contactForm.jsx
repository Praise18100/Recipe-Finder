import "./contactForm.css";

export default function ContactForm() {
  return (
    <section className="contact-section" id="contactForm">
      <div className="contact-header">
        <h2>Get in Touch</h2>
        <p className="contact-subtitle">
          We're here to help with any questions, feedback, or collaboration
          ideas.
        </p>
      </div>

      <form className="contact-card" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="John Doe Petson" />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="johndoe@gmail.com" />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" placeholder="08167647654" />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea placeholder="Type your Message..." rows="6"></textarea>
        </div>
        <div className="form-actions">
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}
