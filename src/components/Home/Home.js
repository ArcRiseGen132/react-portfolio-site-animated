import React from "react";
import { useState, useEffect } from "react";
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import LogoTitle from "../../assets/images/logo-s.png";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./Home.scss";
import facePicture from "../../assets/images/face_picture.jpg";
import Resume from "../../assets/documents/Sheikh_Ahmed_Resume.pdf";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["h", "e", "i", "k", "h"];
  const string = "Web Developer";
  const strArray = [...string];
  const downloadButtonClick = () => {
    fetch(Resume).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = Resume;
        alink.click();
      });
    });
  };
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <div>
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
            Full Stack Developer <br /> <br /> Javascript <br /> <br /> MERN
            Stack <br />
            <br /> COMPTIA Sec+ & A+
          </h2>
          <br />
          <btn onClick={downloadButtonClick} className="flat-button">
            RESUME
          </btn>
          {/* <br />
          <br />
          <br /> */}
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <img src={facePicture} alt="face" className="face_picture" />
      </div>
      <Loader type="line-scale-pulse-out" />
    </div>
  );
};

export default Home;
