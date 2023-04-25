import React from "react";
import ProfilePic from "../images/Ryan_Taylor.jpg";

function AboutMe() {
  return (
    <div className="about-me">
      <div className="d-flex justify-content-center flex-column align-items-center">
        <img src={ProfilePic} alt="Ryan's headshot" className="profile-pic  rounded-4 my-2"></img>
        <ul>
          <li>I am a full-stack web developer located in Tacoma, Washington</li>
          <li>Received my certification as a full-stack web developer from UC San Diego Extended Campus</li>
          <li>Experienced in working with a team to develop full-stack web applications while meeting deadlines</li>
          <li>Skilled in working in an agile software development lifecycle</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
