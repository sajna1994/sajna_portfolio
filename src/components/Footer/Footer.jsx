import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div>
          <strong>
            SAJNA<span>.</span>
          </strong>

          <p>
            Full Stack Developer & Project Manager
          </p>
        </div>

        <p>
          © {new Date().getFullYear()} Sajna TT.
          All rights reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;