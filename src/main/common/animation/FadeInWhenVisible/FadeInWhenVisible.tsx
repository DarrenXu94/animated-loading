import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
export interface FadeInWhenVisibleProps {
  children;
  className?;
  size;
}

export default function FadeInWhenVisible({
  children,
  className,
  size,
}: FadeInWhenVisibleProps) {
  const controls = useAnimation();

  const [ref, inView] = useInView(
    size.width && size.width > 960
      ? {
          threshold: 0.5 || undefined,
        }
      : {
          rootMargin: "-200px 0px",
        }
  );

  useEffect(() => {
    if (inView && size.width) {
      controls.start("visible");
    }
  }, [controls, inView, size]);

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5, delay: 0.6 }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -200 },
      }}
    >
      {children}
    </motion.div>
  );
}
