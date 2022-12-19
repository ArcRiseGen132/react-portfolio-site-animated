import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoTitle from "../../assets/images/logo-s.png";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./Home.scss";
import Logo from "./Logo/Logo";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["h", "e", "i", "k", "h"];
  const string = "Web Developer";
  const strArray = [...string];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            index={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={strArray}
            index={22}
          />
        </h1>
        <h2>
          Full Stack Developer / Javascript / MERN Stack / COMPTIA Certified
        </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo />
    </div>
  );
};

export default Home;
