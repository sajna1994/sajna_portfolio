import { motion } from "motion/react";

const TextReveal = ({ children }) => {

  const words = children.split(" ");

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true
      }}

      variants={{
        hidden: {},

        visible: {
          transition: {
            staggerChildren: 0.06
          }
        }
      }}
    >

      {words.map((word, index) => (

        <motion.span
          key={index}

          variants={{
            hidden: {
              opacity: 0,
              y: 30
            },

            visible: {
              opacity: 1,
              y: 0
            }
          }}

          transition={{
            duration: 0.5
          }}

          style={{
            display: "inline-block",
            marginRight: "10px"
          }}
        >
          {word}
        </motion.span>

      ))}

    </motion.div>
  );
};

export default TextReveal;