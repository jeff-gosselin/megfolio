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
        <div className="resume-contact-icon">
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

      <section className="resume-job">
        <ul>
          <li className="resume-job-title">AMS III New Visions High School</li>
          <li>Art Teacher, August 2013 - August 2014</li>
        </ul>
        <ul className="resume-job-description">
          <li>
            Taught student’s visual literacy, art appreciation, an understanding
            of art historical context and art vocabulary.
          </li>
          <li>
            Designed a Studio in Art Curriculum that consists of drawing,
            painting, sculpture, and graphic design.
          </li>
          <li>
            Developed a brand new visual arts program in a brand new school.
          </li>
          <li>
            Collaborated with Teaching Artists from the Lincoln Arts Center.
          </li>
          <li>
            Integrated fine arts into the Global Studies Curriculum by
            co-teaching with Global Studies Teacher.
          </li>
        </ul>
      </section>

      <section className="resume-job">
        <ul>
          <li className="resume-job-title">Tackan Elementary School</li>
          <li>Student Teacher, October 2012 - December 2012</li>
        </ul>
        <ul className="resume-job-description">
          <li>
            Taught lessons for grades k-5 that incorporated art history and a
            variety of artistic skills.
          </li>
          <li>
            Incorporated the elements and principles of design into lessons in
            an age appropriate manner.
          </li>
          <li>
            Facilitated the opportunity for students to display their works of
            art at a local art exhibition.
          </li>
        </ul>
      </section>

      <section className="resume-job">
        <ul>
          <li className="resume-job-title">Smithtown High School</li>
          <li>Art Teacher, September 2012 - October 2012</li>
        </ul>
        <ul className="resume-job-description">
          <li>Taught grades 9 through 12.</li>
          <li>
            Planned and taught lessons for studio in art, ceramics, and crafts
            classes.
          </li>
        </ul>
      </section>

      <section className="resume-job">
        <ul>
          <li className="resume-job-title">
            Half Hollow Hills School District
          </li>
          <li>Para Professional, September 2010 - June 2012</li>
        </ul>
        <ul className="resume-job-description">
          <li>Provided support and guidance to students with special needs.</li>
          <li>
            Collaborated with an educational team consisting of various teachers
            and administrators.
          </li>
          <li>
            Initiated the implementation of a Behavioral Intervention Plan for a
            student with behavioral difficulties.
          </li>
          <li>
            Assisted special education teachers with both crisis and behavioral
            management.
          </li>
          <li>
            Motivated and influenced students to improve both academically and
            socially.
          </li>
        </ul>
      </section>

      <section className="resume-label">
        <h2>Relevant Experience</h2>
      </section>

      <section className="resume-job">
        <ul>
          <li className="resume-job-title">
            Heckscher Museum Of Art: Summer Art Sense Program, Huntington, NY
          </li>
          <li>Museum Educator Intern, Summer 2012</li>
        </ul>
        <ul className="resume-job-description">
          <li>
            Facilitated student’s art exhibition where family and friends are
            welcome to view their children’s artwork.
          </li>
          <li>
            Assisted in helping children to explore contemporary works of art on
            view in the museum.
          </li>
          <li>
            Granted student’s the opportunity to create artwork that is based on
            works in the museum.
          </li>
        </ul>
      </section>

      <section className="resume-job">
        <ul>
          <li className="resume-job-title">
            Teen Hampton Country Day Camp, East Hampton, NY
          </li>
          <li>Art Teacher, Summer 2011</li>
        </ul>
        <ul className="resume-job-description">
          <li>
            Created fun and engaging art activities to middle school and high
            school aged students.
          </li>
          <li>
            Developed an innovative art program designed for student’s
            individual interests.
          </li>
          <li>
            Arranged and chaperoned trips to local Art Museums and Galleries.
          </li>
          <li>
            Responsible for guiding students while collaborating on numerous
            projects..
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;
