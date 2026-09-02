import { motion, useScroll } from "motion/react";

import "./ScrollProgress.css";

const ScrollProgress = () => {

  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="scroll-progress"
      style={{
        scaleX: scrollYProgress
      }}
    />
  );
};

export default ScrollProgress;