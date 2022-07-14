import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  const headDivVariant = {
    initial: {
      y: -110,
    },
    animate: {
      y: 0,
    },
  };

  const titleVariant = {
    initial: {
      y: -110,
    },
    animate: {
      y: 0,
      fontSize: "30px",
    },
    transition: {
      delay: 0.5,
    },
  };

  const svgVariant = {
    initial: {
      rotate: -180,
    },
    animate: {
      rotate: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const pathVariant = {
    initial: {
      opacity: 0,
      pathLength: 0,
    },
    animate: {
      opacity: 1,
      pathLength: 1,
      transition: {
        ease: "easeInOut",
        duration: 2,
      },
    },
  };

  return (
    <header>
      <div className="logo">
        <motion.svg
          className="pizza-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          variants={svgVariant}
          initial="initial"
          animate="animate"
        >
          <motion.path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            variants={pathVariant}
          />
          <motion.path
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
            variants={pathVariant}
          />
        </motion.svg>
      </div>
      <motion.div
        className="title"
        variants={headDivVariant}
        initial="initial"
        animate="animate"
        transition={{
          type: "spring",
          stiffness: 500,
          when: "beforeChildren",
          damping: 20,
        }}
      >
        <motion.h1 variants={titleVariant}>Pizza Joint</motion.h1>
      </motion.div>
    </header>
  );
};

export default Header;
