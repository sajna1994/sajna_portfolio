import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

import "./PageLoader.css";

const PageLoader = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);

  }, []);

  return (
    <AnimatePresence>

      {loading && (

        <motion.div
          className="page-loader"

          initial={{ opacity: 1 }}

          exit={{
            opacity: 0,
            scale: 1.03
          }}

          transition={{
            duration: 0.8,
            ease: "easeInOut"
          }}
        >

          <div className="loader-content">

            <motion.div
              className="loader-logo"

              initial={{
                opacity: 0,
                y: 20
              }}

              animate={{
                opacity: 1,
                y: 0
              }}

              transition={{
                duration: 0.7
              }}
            >
              SAJNA<span>.</span>
            </motion.div>

            <motion.p
              initial={{
                opacity: 0
              }}

              animate={{
                opacity: 1
              }}

              transition={{
                delay: 0.3
              }}
            >
              FULL STACK DEVELOPER
            </motion.p>

            <div className="loader-line">

              <motion.div
                className="loader-progress"

                initial={{
                  width: "0%"
                }}

                animate={{
                  width: "100%"
                }}

                transition={{
                  duration: 1.5,
                  ease: "easeInOut"
                }}
              />

            </div>

          </div>

        </motion.div>

      )}

    </AnimatePresence>
  );
};

export default PageLoader;