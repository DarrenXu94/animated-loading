import React, { useEffect } from "react";

export interface BannerProps {}

export default function Banner({}: BannerProps) {
  useEffect(() => {
    const text: any = document.querySelector(".text p");
    text.innerHTML = text.innerText
      .split("")
      .map(
        (char, i) =>
          `<span style="transform:rotate(${i * 11}deg)">${char}</span>`
      )
      .join("");

    const body: any = document.querySelector(".banner");
    body.style.opacity = 1;
  }, []);

  return (
    <div className="banner">
      <div className="circle">
        <div className="logo"></div>
        <div className="text">
          <p>Software Developer - Darren Xu -</p>
        </div>
      </div>
    </div>
  );
}
