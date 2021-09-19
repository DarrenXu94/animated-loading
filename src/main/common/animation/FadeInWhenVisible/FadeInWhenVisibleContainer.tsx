import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import useWindowSize, { Size } from "../../hooks/useWindowSize";
export interface FadeInWhenVisibleContainerProps {
  children;
  className?;
}

export default function FadeInWhenVisibleContainer({
  children,
  className,
}: FadeInWhenVisibleContainerProps) {
  const controls = useAnimation();
  const size: Size = useWindowSize();

  // const [ref, inView] = useInView(
  //   size.width && size.width > 960
  //     ? {
  //         threshold: 1 || undefined,
  //       }
  //     : {
  //         rootMargin: "-200px 0px",
  //       }
  // );

  const [ref, inView] = useInView({ rootMargin: "-200px 0px" });

  useEffect(() => {
    if (inView && size.width) {
      controls.start("visible");
      console.log("visible");
    }
  }, [controls, inView, size]);

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={controls}
      initial="hidden"
      transition={{
        duration: 1.5,
        delay: 0.2,
        staggerChildren: 0.35,
      }}
    >
      {children}
    </motion.div>
  );
}
