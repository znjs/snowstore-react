import React from "react";
import "./hero.css";
const scrollDown = () => {
  window.scroll({
    top: window.innerHeight,
    left: 0,
    behavior: "smooth",
  });
};
function Hero() {
  return (
    <>
      <div className="hero-container p-rel">
        <i
          className="p-abs fa-solid fa-angle-down scroll-down cr-pt fx-row fx-jc-center lft rgt"
          onClick={scrollDown}
        ></i>
        <h1 className="fx-row fx-jc-center fx-ai-center hero-title">
          Snowstore for snow time
        </h1>
      </div>
    </>
  );
}

export { Hero };
