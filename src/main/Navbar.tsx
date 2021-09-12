import React from "react";
import { motion } from "framer-motion";

export interface NavbarProps {}

export default function Navbar({}: NavbarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
      className="header"
    >
      <div className="header-inner" id="navbar">
        <div className="logo-text">Darren Xu</div>
        <nav className="nav">
          <li>
            <a href="https://www.linkedin.com/in/darren-xu-profile/">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/DarrenXu94">Github</a>
          </li>
        </nav>
      </div>
    </motion.div>
  );
}
