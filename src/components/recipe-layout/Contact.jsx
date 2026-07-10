import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Get in Touch</h2>

      <p>
        We're here to help with any questions, feedback, or collaboration ideas.
      </p>

      <div className="contact-box">
        <form>
          <label>Full Name</label>
          <input type="text" placeholder="John Doe Petson" />

          <label>Email Address</label>
          <input type="email" placeholder="johndoe@gmail.com" />

          <label>Phone Number</label>
          <input type="tel" placeholder="0810746504" />

          <label>Message</label>
          <textarea placeholder="Type your Message..."></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}