import React, { useState } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

export interface ProjectsProps {}

const items = [
  { id: "1", subtitle: "Test", title: "Test" },
  { id: "2", subtitle: "Test 2", title: "Test 2" },
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

export default function Projects({}: ProjectsProps) {
  const [selectedId, setSelectedId] = useState<any>(null);

  return (
    <motion.div
      className="project-container"
      key="content"
      initial="hidden"
      animate="show"
      exit="exit"
      variants={container}
    >
      <motion.div variants={itemMain} className="content">
        <h2>Projects</h2>
        <div className="content-card-container">
          <AnimateSharedLayout type="crossfade">
            {items.map((item) => (
              <motion.div
                layoutId={item.id}
                className="project-card"
                onClick={() => setSelectedId(item)}
              >
                <motion.h5>{item.subtitle}</motion.h5>
                <motion.h2>{item.title}</motion.h2>
              </motion.div>
            ))}

            <AnimatePresence>
              {selectedId && (
                <motion.div
                  className="selected-project-card"
                  layoutId={selectedId}
                >
                  <motion.h5>{selectedId.subtitle}</motion.h5>
                  <motion.h2>{selectedId.title}</motion.h2>
                  <motion.button onClick={() => setSelectedId(null)}>
                    X
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </AnimateSharedLayout>
        </div>
      </motion.div>
    </motion.div>
  );
}
