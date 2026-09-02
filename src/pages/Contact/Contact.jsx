import { FiArrowUpRight, FiMail } from "react-icons/fi";
import "./Contact.css";

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact section-padding"
    >

      <div className="container">

        <p className="section-label">
          05 — CONTACT
        </p>

        <div className="contact-content">

          <h2>
            Let's build
            <span> something.</span>
          </h2>

          <p>
            Have a project, opportunity or idea?
            I'd love to hear about it.
          </p>

          <a
            href="mailto:sajnaaizanaufal@gmail.com"
            className="email-link"
          >

            <FiMail />

            sajnaaizanaufal@gmail.com

            <FiArrowUpRight />

          </a>

          <div className="contact-socials">

            <a href="#">
              LinkedIn
              <FiArrowUpRight />
            </a>

            <a href="#">
              GitHub
              <FiArrowUpRight />
            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;