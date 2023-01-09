import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState, useEffect } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./About.scss";

export const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2500);
  }, []);

  return (
    <div>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "M", "e"]}
              index={15}
            />
          </h1>
          <p>
            Intellectually curious and solutions-focused professional with
            almost 10 years of diversified experience in driving innovation
            through software development (primarily in Javascript, HTML, CSS)
            and education. Expert in managing system, network, and
            application-related projects.
          </p>
          <p>
            A multifaceted IT professional with unmatched leadership and astute
            technical acumen to drive operational excellence through strategic
            full-stack development in MERN (Mongo, Express, React, Node) and
            cybersecurity.
          </p>
          <p>
            Passionate at being at the forefront of change to maximize
            resources, address client business issues, and promote
            organizational growth.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} />
            </div>
          </div>
        </div>
      </div>
      <Loader type="line-scale-pulse-out" />
    </div>
  );
};
