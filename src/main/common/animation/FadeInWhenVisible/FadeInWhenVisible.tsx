import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import useWindowSize, { Size } from "../../hooks/useWindowSize";
export interface FadeInWhenVisibleProps {
  children;
  className?;
}

export default function FadeInWhenVisible({
  children,
  className,
}: FadeInWhenVisibleProps) {
  const controls = useAnimation();
  const size: Size = useWindowSize();
  const [ref, inView] = useInView({
    threshold: size.width ? (size.width > 960 && 0.5) || undefined : undefined,
  });

  useEffect(() => {
    console.log("IN view", { inView });
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -200 },
      }}
    >
      {children}
    </motion.div>
  );
}
