import { motion } from "framer-motion";
import React from "react";
import FadeInWhenVisible from "~/main/common/animation/FadeInWhenVisible/FadeInWhenVisible";
import useWindowSize, { Size } from "~/main/common/hooks/useWindowSize";

export interface ExperienceListProps {}

const experienceListItems = [
  {
    name: "Name of company",
    role: "My role here",
    description:
      "Brief description. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, atque.",
    img: "https://images.pexels.com/photos/233698/pexels-photo-233698.jpeg?cs=srgb&dl=pexels-paul-loh-233698.jpg&fm=jpg",
  },
  {
    name: "Name of company 2",
    role: "My role here",
    description:
      "Brief description. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, atque.",
    img: "https://images.pexels.com/photos/233698/pexels-photo-233698.jpeg?cs=srgb&dl=pexels-paul-loh-233698.jpg&fm=jpg",
  },
  {
    name: "Name of company 3",
    role: "My role here",
    description:
      "Brief description. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, atque.",
    img: "https://images.pexels.com/photos/233698/pexels-photo-233698.jpeg?cs=srgb&dl=pexels-paul-loh-233698.jpg&fm=jpg",
  },
];

export default function ExperienceList({}: ExperienceListProps) {
  const size: Size = useWindowSize();

  return (
    <div className="experienceList">
      {size.width &&
        experienceListItems.map((item, idx) => {
          return (
            <FadeInWhenVisible
              key={item.name}
              className="experienceList--item"
              size={size}
            >
              <motion.div
                variants={{
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5 },
                  },
                  hidden: { opacity: 0, x: -200 },
                }}
              >
                <div className="experienceList--item__img">
                  <img src={item.img} alt="" />
                </div>
              </motion.div>
              <motion.div
                variants={{
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5 },
                  },
                  hidden: { opacity: 0, x: -200 },
                }}
              >
                <div className="experienceList--item__content">
                  <h3>{item.name}</h3>
                  <div className="experienceList--item__lineContainer">
                    <div className="experienceList--item__lineContainer--line"></div>
                    <h5>{item.role}</h5>
                  </div>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            </FadeInWhenVisible>
          );
        })}
    </div>
  );
}
