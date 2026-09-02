import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FiArrowUpRight,
  FiX,
  FiChevronLeft,
  FiChevronRight
} from "react-icons/fi";

import TiltCard from "../../components/TiltCard/TiltCard";
import "./Projects.css";

// Project images
import rsa from "../../assets/images/projects/RSA.png";
import rsa0 from "../../assets/images/projects/RSA0.png";
import rsa1 from "../../assets/images/projects/rsa1.png";
import rsa2 from "../../assets/images/projects/rsa2.png";
import rsa3 from "../../assets/images/projects/rsa3.png";
import rsa4 from "../../assets/images/projects/rsa4.png";
import rsa5 from "../../assets/images/projects/rsa5.png";
import rsa6 from "../../assets/images/projects/rsa6.png";
import rsa7 from "../../assets/images/projects/rsa7.png";
import rsa8 from "../../assets/images/projects/rsa8.png";
import rsa9 from "../../assets/images/projects/rsa9.png";
import rsa10 from "../../assets/images/projects/rsa10.png";
import rsa11 from "../../assets/images/projects/rsa11.png";
import rsa12 from "../../assets/images/projects/rsa12.png";
import rsa13 from "../../assets/images/projects/rsa13.png";
import rsa14 from "../../assets/images/projects/rsa14.png";
import rsa15 from "../../assets/images/projects/rsa15.png";
import rsa16 from "../../assets/images/projects/rsa16.png";
import rsa17 from "../../assets/images/projects/rsa17.png";
import rsa18 from "../../assets/images/projects/rsa18.png";
import rsa19 from "../../assets/images/projects/rsa19.png";
import rsa20 from "../../assets/images/projects/rsa20.png";
import rsa21 from "../../assets/images/projects/RSA21.png";
import rsa22 from "../../assets/images/projects/RSA22.png";
import rsa23 from "../../assets/images/projects/RSA23.png";
import rsa24 from "../../assets/images/projects/RSA24.png";
import rsa25 from "../../assets/images/projects/RSA25.png";
import rsa26 from "../../assets/images/projects/RSA26.png";
import rsa27 from "../../assets/images/projects/RSA27.png";
import rsa28 from "../../assets/images/projects/RSA28.png";
import rsa29 from "../../assets/images/projects/RSA29.png";
import rsa30 from "../../assets/images/projects/RSA30.png";
import rsa31 from "../../assets/images/projects/RSA31.png";
import rsa32 from "../../assets/images/projects/RSA32.png";
import rsa33 from "../../assets/images/projects/RSA33.png";
import rsa34 from "../../assets/images/projects/RSA34.png";
import rsa35 from "../../assets/images/projects/RSA35.png";
import rsa36 from "../../assets/images/projects/RSA36.png";
import rsa37 from "../../assets/images/projects/RSA37.png";
import rsa38 from "../../assets/images/projects/RSA38.png";
import rsa39 from "../../assets/images/projects/RSA39.png";
import rsa40 from "../../assets/images/projects/RSA40.png";
import rsa41 from "../../assets/images/projects/RSA41.png";
import rsa42 from "../../assets/images/projects/RSA42.png";
import rsa43 from "../../assets/images/projects/RSA43.png";
import rsa44 from "../../assets/images/projects/RSA44.png";
import rsa45 from "../../assets/images/projects/RSA45.png";
import rsa46 from "../../assets/images/projects/RSA46.png";
import rsa47 from "../../assets/images/projects/RSA47.png";
import rsa48 from "../../assets/images/projects/RSA48.png";
import rsa49 from "../../assets/images/projects/RSA49.png";
import rsa50 from "../../assets/images/projects/RSA50.png";
import rsa51 from "../../assets/images/projects/RSA51.png";
import rsa52 from "../../assets/images/projects/RSA52.png";
import rsa53 from "../../assets/images/projects/RSA53.png";
import rsa54 from "../../assets/images/projects/RSA54.png";
import rsa55 from "../../assets/images/projects/RSA55.png";
import rsa56 from "../../assets/images/projects/RSA56.png";
import rsa57 from "../../assets/images/projects/RSA57.png";
import rsa58 from "../../assets/images/projects/RSA58.png";
import rsa59 from "../../assets/images/projects/RSA59.png";
import rsa60 from "../../assets/images/projects/RSA60.png";
import rsa61 from "../../assets/images/projects/RSA61.png";
import rsa62 from "../../assets/images/projects/RSA62.png";
import rsa63 from "../../assets/images/projects/RSA63.png";
import rsa64 from "../../assets/images/projects/RSA64.png";

import myo1 from "../../assets/images/projects/myo1.png";
import myo2 from "../../assets/images/projects/myo2.png";
import myo3 from "../../assets/images/projects/myo3.png";
import myo4 from "../../assets/images/projects/myo4.png";
import myo5 from "../../assets/images/projects/myo5.png";
import myo6 from "../../assets/images/projects/myo6.png";
import myo7 from "../../assets/images/projects/myo7.png";
import myo8 from "../../assets/images/projects/myo8.png";
import myo9 from "../../assets/images/projects/myo9.png";
import myo10 from "../../assets/images/projects/myo10.jpeg";
import myo11 from "../../assets/images/projects/myo11.jpeg";
import myo12 from "../../assets/images/projects/myo12.jpeg";

import hospitality1 from "../../assets/images/projects/hospitality1.png";
import hospitality2 from "../../assets/images/projects/hospitality2.png";

import tripon1 from "../../assets/images/projects/tripon1.png";
import tripon2 from "../../assets/images/projects/tripon2.jpeg";


const projects = [
  {
    number: "01",
    title: "Roadside Assistance Platform",
    category: "FULL STACK · PROJECT MANAGEMENT",

    description:
      "A scalable roadside assistance platform involving driver applications, showroom systems and administrative management.",

    technologies:
      "React · Node.js · MongoDB · Express · TypeScript · Firebase",

   images: [
    rsa,
    rsa0,
    rsa1,
    rsa2,
    rsa3,
    rsa4,
    rsa5,
    rsa6,
    rsa7,
    rsa8,
    rsa9,
    rsa10,
    rsa11,
    rsa12,
    rsa13,
    rsa14,
    rsa15,
    rsa16,
    rsa17,
    rsa18,
    rsa19,
    rsa20,
     rsa21,
    rsa22,
    rsa23,
    rsa24,
    rsa25,
    rsa26,
    rsa27,
    rsa28,
    rsa29,
    rsa30,
    rsa31,
    rsa32,
    rsa33,
    rsa34,
    rsa35,
    rsa36,
    rsa37,
    rsa38,
    rsa39,
    rsa40,
    rsa41,
    rsa42,
    rsa43,
    rsa44,
    rsa45,
    rsa46,
    rsa47,
    rsa48,
    rsa49,
    rsa50,
    rsa51,
    rsa52,
    rsa53,
    rsa54,
    rsa55,
    rsa56,
    rsa57,
    rsa58,
    rsa59,
    rsa60,
    rsa61,
    rsa62,
    rsa63,
    rsa64
    
  ]
  },

  {
    number: "02",
    title: "MYO Fitness Studio",
    category: "FULL STACK · BUSINESS MANAGEMENT",

    description:
      "A complete digital solution for a fitness studio, including a professional gym website and a product management system for managing inventory, stock, pricing, suppliers and sales of fitness products such as protein powders and supplements.",

    technologies:
      "React · Node.js · MongoDB · Express · REST APIs",

    images: [
    myo1,
    myo2,
    myo3,
    myo4,
    myo5,
    myo6,
    myo7,
    myo8,
    myo9,
    myo10,
    myo11,
    myo12
  ]
  },

  {
    number: "03",
    title: "Hospitality Management SRS",
    category: "FULL STACK DEVELOPMENT",

    description:
      "A hospitality management solution developed with a MERN architecture.",

    technologies:
      "MongoDB · Express · React · Node.js",

    images: [
      hospitality1,
      hospitality2
    ]
  },

  {
    number: "04",
    title: "Tripon Travel Agency",
    category: "FRONTEND DEVELOPMENT",

    description:
      "A travel agency frontend developed using React with Node.js backend integration.",

    technologies:
      "React · Node.js",

    images: [
      tripon1,
      tripon2
    ]
  }
];


const Projects = () => {

  const [selectedProject, setSelectedProject] = useState(null);

  const [currentImage, setCurrentImage] = useState(0);


  // Open modal
  const openProject = (project) => {

    setSelectedProject(project);

    setCurrentImage(0);

    document.body.style.overflow = "hidden";
  };


  // Close modal
  const closeProject = () => {

    setSelectedProject(null);

    setCurrentImage(0);

    document.body.style.overflow = "auto";
  };


  // Previous image
  const previousImage = () => {

    if (!selectedProject) return;

    setCurrentImage((prev) =>
      prev === 0
        ? selectedProject.images.length - 1
        : prev - 1
    );
  };


  // Next image
  const nextImage = () => {

    if (!selectedProject) return;

    setCurrentImage((prev) =>
      prev === selectedProject.images.length - 1
        ? 0
        : prev + 1
    );
  };


  return (
    <section
      id="projects"
      className="projects section-padding"
    >

      <div className="container">

        {/* SECTION LABEL */}

        <p className="section-label">
          03 — SELECTED WORK
        </p>


        {/* HEADING */}

        <div className="projects-heading">

          <h2 className="section-title">
            Projects that
            <span> matter.</span>
          </h2>

          <p>
            A selection of software projects showcasing
            my development and problem-solving experience.
          </p>

        </div>


        {/* PROJECT LIST */}

        <div className="projects-list">

          {projects.map((project, index) => (

            <TiltCard key={project.number}>

              <motion.article
                className="project-card"

                initial={{
                  opacity: 0,
                  y: 40
                }}

                whileInView={{
                  opacity: 1,
                  y: 0
                }}

                viewport={{
                  once: true
                }}

                transition={{
                  duration: 0.7,
                  delay: index * 0.15
                }}

                whileHover={{
                  y: -8
                }}
              >

                {/* NUMBER */}

                <div className="project-number">
                  {project.number}
                </div>


                {/* CONTENT */}

                <div className="project-content">

                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                  <span className="project-tech">
                    {project.technologies}
                  </span>

                </div>


                {/* ARROW */}

                <button
                  className="project-arrow"
                  onClick={(e) => {
                    e.stopPropagation();
                    openProject(project);
                  }}
                  aria-label={`View ${project.title} screenshots`}
                >

                  <FiArrowUpRight />

                </button>

              </motion.article>

            </TiltCard>

          ))}

        </div>

      </div>


      {/* =========================================
          PROJECT MODAL
      ========================================= */}

      <AnimatePresence>

        {selectedProject && (

          <motion.div
            className="project-modal"
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}

            onClick={closeProject}
          >

            {/* MODAL BOX */}

            <motion.div
              className="project-modal-content"

              initial={{
                opacity: 0,
                scale: 0.92,
                y: 30
              }}

              animate={{
                opacity: 1,
                scale: 1,
                y: 0
              }}

              exit={{
                opacity: 0,
                scale: 0.92,
                y: 30
              }}

              transition={{
                duration: 0.35
              }}

              onClick={(e) =>
                e.stopPropagation()
              }
            >

              {/* CLOSE BUTTON */}

              <button
                className="modal-close"
                onClick={closeProject}
                aria-label="Close project"
              >
                <FiX />
              </button>


              {/* IMAGE AREA */}

              <div className="project-gallery">

                <img
                  src={
                    selectedProject.images[currentImage]
                  }
                  alt={`${selectedProject.title} screenshot ${currentImage + 1}`}
                />


                {/* PREVIOUS */}

                {selectedProject.images.length > 1 && (

                  <button
                    className="gallery-arrow gallery-prev"
                    onClick={previousImage}
                    aria-label="Previous screenshot"
                  >
                    <FiChevronLeft />
                  </button>

                )}


                {/* NEXT */}

                {selectedProject.images.length > 1 && (

                  <button
                    className="gallery-arrow gallery-next"
                    onClick={nextImage}
                    aria-label="Next screenshot"
                  >
                    <FiChevronRight />
                  </button>

                )}

              </div>


              {/* PROJECT DETAILS */}

              <div className="modal-details">

                <span className="modal-category">
                  {selectedProject.category}
                </span>

                <h2>
                  {selectedProject.title}
                </h2>

                <p>
                  {selectedProject.description}
                </p>

                <span className="modal-technologies">
                  {selectedProject.technologies}
                </span>

              </div>


              {/* THUMBNAILS */}

              {selectedProject.images.length > 1 && (

                <div className="gallery-thumbnails">

                  {selectedProject.images.map(
                    (image, index) => (

                      <button
                        key={index}
                        className={
                          currentImage === index
                            ? "thumbnail active"
                            : "thumbnail"
                        }

                        onClick={() =>
                          setCurrentImage(index)
                        }
                      >

                        <img
                          src={image}
                          alt={`Screenshot ${index + 1}`}
                        />

                      </button>

                    )
                  )}

                </div>

              )}

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
};

export default Projects;