import { motion } from "motion/react";
import "./Experience.css";

const experiences = [
   {
    year: "2026 — PRESENT",
    role: "Freelance Software Developer",
    company: "Independent / Self-Employed",
    description:
      "Worked independently as a Freelance Software Developer, building practical web solutions for business needs. Developed a complete gym project including a responsive gym website and a product management system for managing inventory, stock levels, pricing, suppliers and sales of fitness products such as protein powder and supplements.",
    technologies:
      "React · Node.js · MongoDB · REST APIs · JavaScript"
  },
  {
    year: "2025 — 2026",
    role: "Project Manager",
    company: "Tecnavis Web Solutions",
    description:
      "Led end-to-end development of a scalable roadside assistance platform using MERN stack. Worked on backend logic, database architecture, authentication, notifications, image storage and location-based services.",
    technologies:
      "MERN · Twilio · Firebase · Cloudinary · OLA Maps"
  },

  {
    year: "2024 — 2025",
    role: "Full Stack Developer",
    company: "Tecnavis Web Solutions",
    description:
      "Worked on a large-scale Road Side Assistance project integrating driver applications, showroom dashboards and admin panels using TypeScript and Firebase. Managed cross-functional collaboration and project architecture.",
    technologies:
      "TypeScript · Firebase · React · Project Architecture"
  },

  {
    year: "2023 — 2024",
    role: "Full Stack Developer",
    company: "Techon Innovations",
    description:
      "Developed Hospitality Management SRS using the MERN stack and worked on the Tripon Travel Agency frontend with React and Node.js backend integration.",
    technologies:
      "MongoDB · Express · React · Node.js"
  }
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="experience section-padding"
    >

      <div className="container">

        <p className="section-label">
          02 — EXPERIENCE
        </p>

        <h2 className="section-title">
          Experience &
          <span> leadership.</span>
        </h2>

        <div className="experience-list">

          {experiences.map((item, index) => (

            <motion.article
              className="experience-item"
              key={item.company + item.year}
              initial={{
                opacity: 0,
                y: 30
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15
              }}
            >

              <div className="experience-year">
                {item.year}
              </div>

              <div className="experience-main">

                <h3>
                  {item.role}
                </h3>

                <h4>
                  {item.company}
                </h4>

                <p>
                  {item.description}
                </p>

                <span className="experience-tech">
                  {item.technologies}
                </span>

              </div>

            </motion.article>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Experience;