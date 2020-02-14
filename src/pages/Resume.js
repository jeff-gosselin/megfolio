import React from "react";
import { Link } from "react-router-dom";
import Contact from "../icons/nav-icon-09.svg";
import "../scss/Resume.scss";

const Resume = () => {
  return (
    <div className="resume">
      <section className="resume-header">
        <h1>Meghan Gosselin</h1>
        <p>Art Teacher at Maspeth High School</p>
      </section>
      <section className="resume-contact">
        <div className="resume-contact-circle">
          <img src={Contact} alt="" />
        </div>
      </section>

      <section className="resume-label">
        <h2>Education</h2>
      </section>
      <section className="resume-education">
        <ul>
          <li>Hofstra University</li>
          <li>Masters Degree</li>
          <li>Fine Arts Education</li>
          <li>Graduated Jan 2013</li>
        </ul>
      </section>
      <section className="resume-education">
        <ul>
          <li>State University of New York @ Queens College</li>
          <li>Masters Degree</li>
          <li>Major: Studio Art</li>
          <li>Graduated May 2008</li>
        </ul>
      </section>
      <section className="resume-education">
        <ul>
          <li>Fashion Institute of Technology</li>
          <li>AAS Degree</li>
          <li>Major: Fine Arts</li>
          <li>Graduated Spring 2006</li>
        </ul>
      </section>
      <section className="resume-certification">
        <p>
          New York State Professional Certificate - Visual Arts (Grades Pre
          K-12)
        </p>
      </section>
      <section className="resume-label">
        <h2>Teacher Experience</h2>
      </section>
      <section className="resume-job">
        <ul>
          <li className="resume-job-title">
            New York City Department of Education: Maspeth High School
          </li>
          <li>Art Teacher, September 2014 - Present</li>
        </ul>
        <ul className="resume-job-description">
          <li>Received tenure</li>
          <li>
            Designed the Visual Arts Curriculum for Arts I, II, and III
            consisting of both art history and art making.
          </li>
          <li>
            Taught and attended corresponding AP studio art college board
            workshops.
          </li>
          <li>
            Provided differentiated instruction to all students based on their
            individual needs.
          </li>
          <li>
            Initiated an after school art club allowing students to paint murals
            and design sets for the performing arts program.
          </li>
          <li>
            Planned and taught a variety of different art mediums such as
            sewing, drawing, painting, printmaking and 3-D design.
          </li>
          <li>
            Built and maintained a positive rapport with both students, parents,
            colleagues, and administration.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;
