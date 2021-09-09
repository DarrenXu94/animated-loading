import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

export interface FloatingActionButtonProps {}

export default function FloatingActionButton({}: FloatingActionButtonProps) {
  const [isOpen, setisOpen] = useState(false);
  const scrollTo = (title) => {
    var url = location.href; //Save down the URL without hash.
    location.href = "#" + title; //Go to the target element.
    history.replaceState(null, "", url);
  };
  return (
    <div className="floatingButtonWrap">
      <div
        className="floatingButtonInner"
        onClick={(e) => {
          e.preventDefault();
          setisOpen(!isOpen);
        }}
      >
        <a href="#" className={`floatingButton ${isOpen && "open"}`}>
          <i className="fa fa-plus icon-default"></i>
        </a>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              transition={{
                staggerChildren: 0.35,

                staggerDirection: -1,
              }}
              initial="hidden"
              animate="show"
              exit="exit"
              className="floatingMenu"
            >
              <motion.li key="home" variants={item}>
                <a href="#">Home</a>
              </motion.li>

              <motion.li key="experience" variants={item}>
                <a
                  href="#experience"
                  onClick={() => {
                    scrollTo("experience");
                  }}
                >
                  Experience
                </a>
              </motion.li>
              <motion.li key="projects" variants={item}>
                <a
                  onClick={() => {
                    scrollTo("projects");
                  }}
                  href="#projects"
                >
                  Projects
                </a>
              </motion.li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

const item = {
  hidden: { opacity: 0, y: 5 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 5 },
};
