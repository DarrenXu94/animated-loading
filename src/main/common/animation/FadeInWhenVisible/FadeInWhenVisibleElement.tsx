import React from "react";
import { motion } from "framer-motion";

export interface FadeInWhenVisibleElementProps {
  children;
  direction?: "rtl" | "ltr";
}

export default function FadeInWhenVisibleElement({
  children,
  direction = "ltr",
}: FadeInWhenVisibleElementProps) {
  return (
    <motion.div
      variants={{
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.85 },
        },
        hidden: { opacity: 0, x: direction == "ltr" ? -300 : 300 },
      }}
    >
      {children}
    </motion.div>
  );
}
