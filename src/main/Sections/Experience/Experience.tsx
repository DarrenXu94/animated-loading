import React, { useState } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import ExperienceList from "./ExperienceList";

export interface ExperienceProps {}

const items = [
  {
    id: "1",
    subtitle:
      "Hear about my latest hard hitting choccy reviews. A Gatsby blog hosted on Netlify with custom React components and styling",
    title: "Choccy Blog",
  },
  { id: "2", subtitle: "Test 2", title: "Test 2" },
  { id: "3", subtitle: "Test 3", title: "Test 3" },
];

const itemMain = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1.5,
    },
  },
};
export default function Experience({}: ExperienceProps) {
  return (
    <motion.div
      className="experience-container"
      key="content"
      initial="hidden"
      animate="show"
      exit="exit"
      variants={container}
    >
      <motion.div variants={itemMain} className="content">
        <h2 className="content__h2" id="experience">
          Experience
        </h2>
      </motion.div>
    </motion.div>
  );
}
