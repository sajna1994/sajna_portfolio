import { motion } from "motion/react";

import "./BackgroundParticles.css";

const particles = [
  { left: "10%", top: "20%", size: 3, delay: 0 },
  { left: "25%", top: "70%", size: 2, delay: 1 },
  { left: "45%", top: "35%", size: 2, delay: 2 },
  { left: "70%", top: "20%", size: 3, delay: 1 },
  { left: "85%", top: "65%", size: 2, delay: 3 },
  { left: "60%", top: "80%", size: 2, delay: 2 },
  { left: "15%", top: "50%", size: 2, delay: 4 },
];

const BackgroundParticles = () => {

  return (
    <div className="background-particles">

      {particles.map((particle, index) => (

        <motion.span
          key={index}
          className="particle"

          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size
          }}

          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.7, 0.2]
          }}

          transition={{
            duration: 5 + index,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />

      ))}

    </div>
  );
};

export default BackgroundParticles;