// import { motion } from "motion/react";
// import {
//   FiCode,
//   FiLayers,
//   FiUsers
// } from "react-icons/fi";

// import "./About.css";
// import Reveal from "../../components/Reveal/Reveal";

// import aboutImage from "../../assets/images/computer.jpeg";

// const About = () => {
//   return (
//     <section id="about" className="about section-padding">

//       <div className="container">

//         {/* SECTION LABEL */}
//         <p className="section-label">
//           01 — ABOUT ME
//         </p>

//         {/* HEADING */}
//         <div className="about-heading">

//           <h2 className="section-title">
//             I don't just write
//             <span> code.</span>
//             <br />
//             I build <span>solutions.</span>
//           </h2>

//           <p>
//             I build solutions that connect technology,
//             people and business needs.
//           </p>

//         </div>


//         {/* MAIN ABOUT AREA */}
//         <div className="about-main">

//           {/* LEFT SIDE */}
//           <div className="about-left">

//             <Reveal direction="left">

//               <div className="about-text">

//                 <p className="about-intro">
//                   I'm Sajna TT, a Software Engineer and
//                   Full Stack Developer with experience in
//                   building scalable web applications and
//                   digital solutions.
//                 </p>

//                 <p>
//                   My work focuses on modern JavaScript
//                   technologies, backend architecture,
//                   databases, API integration and
//                   cloud-based solutions.
//                 </p>

//                 <p>
//                   Alongside development, I have experience
//                   in project coordination and leadership,
//                   helping transform ideas into reliable,
//                   maintainable and user-focused products.
//                 </p>

//               </div>

//             </Reveal>


//             {/* ABOUT CARDS */}
//             <div className="about-cards">

//               <motion.div
//                 className="about-card"
//                 whileHover={{ y: -8 }}
//                 transition={{ duration: 0.3 }}
//               >

//                 <FiCode />

//                 <h3>
//                   Development
//                 </h3>

//                 <p>
//                   Full-stack web application development
//                   using React, Node.js, MongoDB and
//                   modern JavaScript technologies.
//                 </p>

//               </motion.div>


//               <motion.div
//                 className="about-card"
//                 whileHover={{ y: -8 }}
//                 transition={{ duration: 0.3 }}
//               >

//                 <FiLayers />

//                 <h3>
//                   Architecture
//                 </h3>

//                 <p>
//                   Designing scalable systems, APIs,
//                   database-driven applications and
//                   maintainable software solutions.
//                 </p>

//               </motion.div>


//               <motion.div
//                 className="about-card"
//                 whileHover={{ y: -8 }}
//                 transition={{ duration: 0.3 }}
//               >

//                 <FiUsers />

//                 <h3>
//                   Leadership
//                 </h3>

//                 <p>
//                   Project coordination, collaboration
//                   and technical leadership focused on
//                   delivering quality solutions.
//                 </p>

//               </motion.div>

//             </div>

//           </div>


//           {/* RIGHT SIDE IMAGE */}
//           <Reveal direction="right">

//             <div className="about-image-wrapper">

//               <img
//                 src={aboutImage}
//                 alt="Modern software development workspace"
//                 className="about-image"
//               />

//               <div className="about-image-overlay">
//                 <span>
//                   BUILD · CREATE · SOLVE
//                 </span>
//               </div>

//             </div>

//           </Reveal>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default About;
import { motion } from "motion/react";
import {
  FiCode,
  FiLayers,
  FiUsers
} from "react-icons/fi";

import "./About.css";
import Reveal from "../../components/Reveal/Reveal";

import aboutImage from "../../assets/images/computer.jpeg";

const About = () => {
  return (
    <section id="about" className="about section-padding">

      <div className="container">

        {/* SECTION LABEL */}
        <p className="section-label">
          01 — ABOUT ME
        </p>


        {/* HEADING */}
        <div className="about-heading">

          <h2 className="section-title">
            I don't just write
            <span> code.</span>
            <br />
            I build <span>solutions.</span>
          </h2>

          <p>
            I build solutions that connect technology,
            people and business needs.
          </p>

        </div>


        {/* MAIN ABOUT AREA */}
        <div className="about-content">


          {/* LEFT SIDE */}
          <div className="about-left">

            <Reveal direction="left">

              <div className="about-text">

                <p className="about-intro">
                  I'm Sajna TT, a Software Engineer and
                  Full Stack Developer with experience in
                  building scalable web applications and
                  digital solutions.
                </p>

                <p>
                  My work focuses on modern JavaScript
                  technologies, backend architecture,
                  databases, API integration and
                  cloud-based solutions.
                </p>

                <p>
                  Alongside development, I have experience
                  in project coordination and leadership,
                  helping transform ideas into reliable,
                  maintainable and user-focused products.
                </p>

              </div>

            </Reveal>


            {/* ABOUT CARDS */}
            <div className="about-cards">

              {/* CARD 1 */}
              <motion.div
                className="about-card"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >

                <FiCode />

                <h3>
                  Development
                </h3>

                <p>
                  Full-stack web application development
                  using React, Node.js, MongoDB and
                  modern JavaScript technologies.
                </p>

              </motion.div>


              {/* CARD 2 */}
              <motion.div
                className="about-card"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >

                <FiLayers />

                <h3>
                  Architecture
                </h3>

                <p>
                  Designing scalable systems, APIs,
                  database-driven applications and
                  maintainable software solutions.
                </p>

              </motion.div>


              {/* CARD 3 */}
              <motion.div
                className="about-card"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >

                <FiUsers />

                <h3>
                  Leadership
                </h3>

                <p>
                  Project coordination, collaboration
                  and technical leadership focused on
                  delivering quality solutions.
                </p>

              </motion.div>

            </div>

          </div>


          {/* RIGHT SIDE IMAGE */}
          <Reveal direction="right">

            <div className="about-image-wrapper">

              <img
                src={aboutImage}
                alt="Modern software development workspace"
                className="about-image"
              />

              <div className="about-image-overlay">
                <span>
                  BUILD · CREATE · SOLVE
                </span>
              </div>

            </div>

          </Reveal>


        </div>

      </div>

    </section>
  );
};

export default About;