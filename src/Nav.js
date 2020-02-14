import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./MLogo.svg";

// Nav Icons
import MyArtwork from "./icons/nav-icon-03.svg";
import StudentWork from "./icons/nav-icon-04.svg";
import Extra from "./icons/nav-icon-05.svg";
import LessonPlan from "./icons/nav-icon-06.svg";
import Rubric from "./icons/nav-icon-07.svg";
import Resume from "./icons/nav-icon-08.svg";

import "./scss/Nav.scss";

const Nav = () => {
  const [page, setPage] = useState("home");
  const pageHandler = (e, pageName) => setPage(pageName);
  console.log(page);
  return (
    <nav>
      <div className="App-logo-block">
        <Link onClick={e => pageHandler(e, "home")} to="/">
          <img
            src={logo}
            className="App-logo"
            alt="Meghan Gosselin's Portfolio"
          />
        </Link>
      </div>
      <ul className="pages">
        <li>
          <Link
            onClick={e => pageHandler(e, "my-artwork")}
            className={page === "my-artwork" ? "nav-links active" : "nav-links"}
            to="/my-artwork"
          >
            <img src={MyArtwork} className="nav-links-img" alt="" />
            <span className="pg-name">My Artwork</span>
          </Link>
        </li>
        <li>
          <Link
            onClick={e => pageHandler(e, "student-work")}
            className={
              page === "student-work" ? "nav-links active" : "nav-links"
            }
            to="/student-work"
          >
            <img src={StudentWork} className="nav-links-img" alt="" />
            <span className="pg-name">Student Artwork</span>
          </Link>
        </li>
        <li>
          <Link
            onClick={e => pageHandler(e, "extra")}
            className={page === "extra" ? "nav-links active" : "nav-links"}
            to="/extra"
          >
            <img src={Extra} className="nav-links-img" alt="" />
            <span className="pg-name">Extracurricular Activities</span>
          </Link>
        </li>
        <li>
          <Link
            onClick={e => pageHandler(e, "lesson-plan")}
            className={
              page === "lesson-plan" ? "nav-links active" : "nav-links"
            }
            to="/lesson-plan"
          >
            <img src={LessonPlan} className="nav-links-img" alt="" />
            <span className="pg-name">Sample Lesson Plan</span>
          </Link>
        </li>
        <li>
          <Link
            onClick={e => pageHandler(e, "sample-rubric")}
            className={
              page === "sample-rubric" ? "nav-links active" : "nav-links"
            }
            to="/sample-rubric"
          >
            <img src={Rubric} className="nav-links-img" alt="" />
            <span className="pg-name">Sample Rubric</span>
          </Link>
        </li>
        <li>
          <Link
            onClick={e => pageHandler(e, "my-resume")}
            className={page === "my-resume" ? "nav-links active" : "nav-links"}
            to="/my-resume"
          >
            <img src={Resume} className="nav-links-img" alt="" />
            <span className="pg-name">My Resume</span>
          </Link>
        </li>
      </ul>
      {/* <Link
        onClick={e => pageHandler(e, "contact")}
        className="contact-link"
        to="/contact"
      >
        <img src={Contact} alt="" />
        <p>Message Me</p>
      </Link> */}
    </nav>
  );
};

export default Nav;
