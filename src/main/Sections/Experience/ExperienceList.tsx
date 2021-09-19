import { motion } from "framer-motion";
import React from "react";
import FadeInWhenVisibleContainer from "~/main/common/animation/FadeInWhenVisible/FadeInWhenVisibleContainer";
import FadeInWhenVisibleElement from "~/main/common/animation/FadeInWhenVisible/FadeInWhenVisibleElement";
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
  return (
    <div className="experienceList">
      <motion.div
        initial={{ opacity: 0, y: 180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.1,
        }}
        className="experienceList__header"
      >
        <div className="experienceList__line-start"></div>
        <h2 className="content__h2" id="experience">
          Experience
        </h2>
        <div className="experienceList__line"></div>
      </motion.div>
      {experienceListItems.map((item, idx) => {
        return (
          <FadeInWhenVisibleContainer
            key={item.name}
            className="experienceList--item"
          >
            <FadeInWhenVisibleElement direction={idx % 2 ? "rtl" : "ltr"}>
              <div className="experienceList--item__img">
                <img src={item.img} alt="" />
              </div>
            </FadeInWhenVisibleElement>
            <FadeInWhenVisibleElement direction={idx % 2 ? "rtl" : "ltr"}>
              <div className="experienceList--item__content">
                <h3>{item.name}</h3>
                <div className="experienceList--item__lineContainer">
                  <div className="experienceList--item__lineContainer--line"></div>
                  <h5>{item.role}</h5>
                </div>
                <p>{item.description}</p>
              </div>
            </FadeInWhenVisibleElement>
          </FadeInWhenVisibleContainer>
        );
      })}
    </div>
  );
}
