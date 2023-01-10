import "./Sidebar.scss";
import { Link, NavLink } from "react-router-dom";
import LogoS from "../../assets/images/logo-s.png";
import LogoSubtitle from "../../assets/images/logo_sub2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="logo-sub" />
      </Link>
      <nav>
        <NavLink exact="true" activeClassName="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#696969" />
        </NavLink>
        <NavLink
          exact="true"
          activeClassName="active"
          to="/about"
          className="about-link"
        >
          <FontAwesomeIcon icon={faUser} color="#696969" />
        </NavLink>
        <NavLink
          exact="true"
          activeClassName="active"
          to="/contact"
          className="contact-link"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#696969" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/sheikhahmed21/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#696969" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ArcRiseGen132"
          >
            <FontAwesomeIcon icon={faGithub} color="#696969" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
