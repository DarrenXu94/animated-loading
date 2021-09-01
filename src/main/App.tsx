import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import React, { useState } from "react";
import Banner from "./Banner";
import Loading from "./Loading";
import Navbar from "./Navbar";
import Projects from "./Projects";

export interface AppProps {}

const bannerImg =
  "https://images.pexels.com/photos/163143/sackcloth-sackcloth-textured-laptop-ipad-163143.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

export default function App({}: AppProps) {
  const [loading, setLoading] = useState(true);

  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence>
        {loading ? (
          <motion.div key="loader">
            <Loading setLoading={setLoading} bannerImg={bannerImg} />
          </motion.div>
        ) : (
          <>
            <Navbar />
            <Banner />
            {!loading && (
              <div className="transition-image final">
                <Projects />
                <motion.img
                  transition={{
                    ease: [0.6, 0.01, -0.05, 0.9],
                    duration: 1.6,
                  }}
                  src={bannerImg}
                  layoutId="main-image-1"
                />
              </div>
            )}
          </>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}
