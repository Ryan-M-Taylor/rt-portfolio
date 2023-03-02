import React from "react";
import ProfilePic from "../images/Ryan_Taylor.jpg";

function AboutMe() {
  return (
    <div className="about-me">
      <div className="d-flex justify-content-center flex-column align-items-center">
        <img src={ProfilePic} alt="Ryan's headshot" className="profile-pic  rounded-4 my-2"></img>
        <ul>
          <li>I am a full-stack web developer located in Tacoma, Washington</li>
          <li>I am a full-stack web developer located in Tacoma, Washington</li>
          <li>I am a full-stack web developer located in Tacoma, Washington</li>
          <li>I am a full-stack web developer located in Tacoma, Washington</li>
          <li>I am a full-stack web developer located in Tacoma, Washington</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
