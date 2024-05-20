import React, { useState, useEffect, useContext } from "react";
import "./Main.css";
import SelectedCategoryContext from "../utils/SelectedCategoryContext";
import About from "../About/About";
import Creative from "../Creative/Creative";
import Projects from "../Projects/Projects";

function Main(props) {
  const SelectedCategory = React.useContext(SelectedCategoryContext);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const parallaxX = (mousePos.x / window.innerWidth) * 30 - 15;
  const parallaxY = (mousePos.y / window.innerHeight) * 30 - 15;

  return (
    <div className="parallax-container">
      <div
        className="main"
        style={{
          transform: `translateX(${parallaxX}px) translateY(${parallaxY}px)`,
        }}
      >
        <div className="main__selectors">
          <h1
            id="about"
            onClick={props.linkclick}
            className={`main__title ${
              SelectedCategory === "about" ? "main__title-selected" : ""
            }`}
          >
            About
          </h1>
          <h1
            id="projects"
            onClick={props.linkclick}
            className={`main__title ${
              SelectedCategory === "projects" ? "main__title-selected" : ""
            }`}
          >
            Projects
          </h1>
          <h1
            id="creative"
            onClick={props.linkclick}
            className={`main__title ${
              SelectedCategory === "creative" ? "main__title-selected" : ""
            }`}
          >
            Creative
          </h1>
        </div>
        <div className="main__expanded">
          {SelectedCategory === "about" && <About />}
          {SelectedCategory === "projects" && <Projects />}
          {SelectedCategory === "creative" && <Creative />}
        </div>
      </div>
    </div>
  );
}

export default Main;
