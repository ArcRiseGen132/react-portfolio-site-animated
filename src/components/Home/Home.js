import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import LogoTitle from "../../assets/images/logo-s.png";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./Home.scss";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["h", "e", "i", "k", "h"];
  const jobArray = [
    "W",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            index={15}
          />
          <br />
          Web Developer
        </h1>
        <h2>
          Full Stack Developer / Javascript / MERN Stack / COMPTIA Certified
        </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  );
};

export default Home;
