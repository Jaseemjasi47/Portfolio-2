// Intro.jsx
import React from "react";
import Img1 from "../../../Assets/Images/coding-1.jpg";
// import './Home.css';

function Intro() {
  return (
    <>
      <h1 className="font-1 animated-text">
        Hey Guys, <br /> It's Me Mohammad Jaseem K J
      </h1>
      <section
        className="home-header"
        style={{ backgroundImage: `url(${Img1})` }}
      >
        <div className="header-text">
          <p className="font-4 overlay-text">
            Full Stack Developer | Digital Marketer | Photographer
          </p>
        </div>
      </section>
    </>
  );
}

export default Intro;
