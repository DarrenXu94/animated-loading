import React from "react";
import { motion } from "framer-motion";

export interface LoadingProps {
  setLoading;
  bannerImg;
}

const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

export default function Loading({ setLoading, bannerImg }: LoadingProps) {
  return (
    // <motion.div className="loader">
    <motion.div
      variants={container}
      onAnimationComplete={() => setLoading(false)}
      initial="hidden"
      animate="show"
      exit="exit"
      className="loader-inner"
    >
      <motion.div variants={itemMain} className="transition-image">
        <motion.img layoutId="main-image-1" src={bannerImg} />
        <motion.div variants={item} className="welcomeBlock">
          <h1>Welcome</h1>
        </motion.div>
      </motion.div>
    </motion.div>
    // </motion.div>
  );
}
