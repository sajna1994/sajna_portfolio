import { motion } from "motion/react";
import "./Skills.css";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React",
      "JavaScript",
      "TypeScript"
    ]
  },

  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js"
    ]
  },

  {
    title: "Database",
    skills: [
      "MongoDB",
      "Firebase"
    ]
  },

  {
    title: "Tools & Services",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Cloudinary",
      "JWT",
      "Multer",
      "Nodemailer"
    ]
  }
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="skills section-padding"
    >

      <div className="container">

        <p className="section-label">
          04 — TECHNOLOGIES
        </p>

        <h2 className="section-title">
          Tools I use to
          <span> build.</span>
        </h2>

        <div className="skills-grid">

          {skillGroups.map((group, index) => (

            <motion.div
              className="skill-group"
              key={group.title}
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
                delay: index * 0.1
              }}
            >

              <h3>
                {group.title}
              </h3>

              <div className="skill-list">

                {group.skills.map((skill) => (

                  <span key={skill}>
                    {skill}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;