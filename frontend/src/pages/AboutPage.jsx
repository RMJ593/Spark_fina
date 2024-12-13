import React from "react";
import "./about.css";
// import logo from '../components/image/logo.png';
import { Link } from 'react-router-dom'; 

const About = () => {
  return (
    <div className="container">
      {/* <img className="logo" src={logo} alt="Spark Logo" /> */}

      <div className="content">
      <img
          src={require("../components/image/ExampleCarouselImage/pic.jpg")}
          alt="A scenic view"
          className="pic"
        />

        <div className="text">
          <h2 className="subh">Volunteer Together........</h2>
          <p className="para">
            Spark is a social impact platform connecting individuals and communities to meaningful causes.
            Partnered with organizations and NGOs, Spark offers volunteering registrations, rewarding
            contributions to these initiatives. Join our community to share ideas, stay updated on global
            issues, and track your impact in real-time. Together, let's create positive change.
          </p>
          <Link to="/event"><button className="btn"> View Past Events</button></Link>
        </div>
      </div>
    </div>
  );
};

export default About;
