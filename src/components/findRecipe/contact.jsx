import "./contact.css";

function Contact() {
  return (
    <section className="contact-section">

      <div className="contact-title">

        <h2>Get in Touch</h2>

        <div className="title-line"></div>

        <p>
          We're here to help with any questions, feedback, or collaboration
          ideas.
        </p>

      </div>

      <div className="contact-box">

        <form className="contact-form">

          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            placeholder="Zainab Shomuyiwa"
          />

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="zainab@gmail.com"
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="tel"
            placeholder="08123456789"
          />

          <label htmlFor="message">Message</label>

          <textarea
            id="message"
            rows="6"
            placeholder="Type your message..."
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;