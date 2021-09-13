import React from "react";
import { motion } from "framer-motion";

export interface VerticalMenuProps {}
const container = {
  show: {
    transition: {
      delayChildren: 1.6,
      staggerChildren: 0.35,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
};
export default function VerticalMenu({}: VerticalMenuProps) {
  return (
    <motion.div
      className="banner-vertical-menu"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <motion.div variants={itemMain} className="banner-menu-item">
        <a href="#navbar">Home</a>
      </motion.div>
      <motion.div variants={itemMain} className="banner-menu-item">
        <a href="#experience">Experience</a>
      </motion.div>
      <motion.div variants={itemMain} className="banner-menu-item">
        <a href="#projects">Projects</a>
      </motion.div>
    </motion.div>
  );
}
