import React from "react";

export interface ExperienceListProps {}

export default function ExperienceList({}: ExperienceListProps) {
  return (
    <div className="experienceList">
      <div className="experienceList--item">
        <div className="experienceList--item__img">
          <img
            src="https://images.pexels.com/photos/233698/pexels-photo-233698.jpeg?cs=srgb&dl=pexels-paul-loh-233698.jpg&fm=jpg"
            alt=""
          />
        </div>
        <div className="experienceList--item__content">
          <h3>Name of Company</h3>
          <div className="experienceList--item__lineContainer">
            <div className="experienceList--item__lineContainer--line"></div>
            <h5>Role</h5>
          </div>
          <p>
            Brief description. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Incidunt, atque.
          </p>
        </div>
      </div>
    </div>
  );
}
