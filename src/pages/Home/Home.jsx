import { motion } from "motion/react";
import {
  FiArrowDownRight,
  FiGithub,
  FiLinkedin,
  FiFileText
} from "react-icons/fi";

import sajnaImage from "../../assets/images/sajna.png";

import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="home">

      <div className="home-container">

        {/* =================================
            LEFT CONTENT
        ================================= */}

        <motion.div
          className="home-content"

          initial={{
            opacity: 0,
            y: 40
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 0.8
          }}
        >

          {/* Small Heading */}
          <p className="home-label">
            SOFTWARE ENGINEER · FULL STACK DEVELOPER
          </p>


          {/* Main Heading */}
          <h1>
            Building
            <span> digital</span>
            <br />
            experiences.
          </h1>


          {/* Description */}
          <p className="home-description">
            I build scalable web applications using React, Node.js,
            MongoDB and modern cloud technologies, combining hands-on
            full-stack development with project leadership.
          </p>


          {/* =================================
              CTA BUTTONS
          ================================= */}

          <div className="home-buttons">

            <a
              href="#projects"
              className="primary-button"
            >
              View My Work

              <FiArrowDownRight />
            </a>


            <a
              href="#contact"
              className="outline-button"
            >
              Contact Me
            </a>

          </div>


          {/* =================================
              SOCIAL LINKS
          ================================= */}

          <div className="social-links">

            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/sajna-tt-53964426a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>


            {/* GitHub */}

            <a
              href="https://github.com/sajna1994"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>


            {/* Resume */}

           <a
  href="/SajnaTT-FSD.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  <FiFileText />
</a>

          </div>

        </motion.div>


        {/* =================================
            RIGHT VISUAL
        ================================= */}

        <motion.div
          className="home-visual"

          initial={{
            opacity: 0,
            scale: 0.8
          }}

          animate={{
            opacity: 1,
            scale: 1
          }}

          transition={{
            duration: 1
          }}
        >

          {/* Background Glow */}

          <div className="glow-circle"></div>


          {/* =================================
              FLOATING TECHNOLOGIES
          ================================= */}

          <div className="tech-orbit orbit-one">
            <span>React</span>
          </div>


          <div className="tech-orbit orbit-two">
            <span>Node</span>
          </div>


          <div className="tech-orbit orbit-three">
            <span>MongoDB</span>
          </div>


          {/* =================================
              PORTRAIT
          ================================= */}

          <div className="visual-center">

            <div className="portrait-ring"></div>

            <img
              src={sajnaImage}
              alt="Sajna - Software Engineer and Full Stack Developer"
              className="profile-image"
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Home;