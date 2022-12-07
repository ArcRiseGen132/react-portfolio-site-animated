import React from "react";
import { Link } from "react-router-dom";
import LogoTitle from "../../assets/images/logo-s.png";
import "./Home.scss";

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm
          <img src={LogoTitle} alt="developer" />
          heikh
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
