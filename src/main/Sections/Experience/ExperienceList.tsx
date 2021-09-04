import React from "react";
import FadeInWhenVisible from "~/main/common/animation/FadeInWhenVisible/FadeInWhenVisible";

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
      {experienceListItems.map((item) => {
        return (
          <FadeInWhenVisible key={item.name} className="experienceList--item">
            {/* <div > */}
            <div className="experienceList--item__img">
              <img src={item.img} alt="" />
            </div>
            <div className="experienceList--item__content">
              <h3>{item.name}</h3>
              <div className="experienceList--item__lineContainer">
                <div className="experienceList--item__lineContainer--line"></div>
                <h5>{item.role}</h5>
              </div>
              <p>{item.description}</p>
            </div>
            {/* </div> */}
          </FadeInWhenVisible>
        );
      })}
    </div>
  );
}
