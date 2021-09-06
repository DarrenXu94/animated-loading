import React, { useEffect } from "react";
import { motion } from "framer-motion";

export interface BannerProps {}

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

export default function Banner({}: BannerProps) {
  useEffect(() => {
    const text: any = document.querySelector(".text p");
    text.innerHTML = text.innerText
      .split("")
      .map(
        (char, i) =>
          `<span style="transform:rotate(${i * 11}deg)">${char}</span>`
      )
      .join("");

    const body: any = document.querySelector(".banner");
    body.style.opacity = 1;
  }, []);

  return (
    <div className="banner">
      <motion.div
        className="banner-vertical-menu"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.div variants={itemMain} className="banner-menu-item">
          Home
        </motion.div>
        <motion.div variants={itemMain} className="banner-menu-item">
          <a href="#experience">Experience</a>
        </motion.div>
        <motion.div variants={itemMain} className="banner-menu-item">
          <a href="#projects">Projects</a>
        </motion.div>
      </motion.div>
      <div className="circle">
        <div className="logo"></div>
        <div className="text">
          <p>Software Developer - Darren Xu -</p>
        </div>
      </div>
    </div>
  );
}
