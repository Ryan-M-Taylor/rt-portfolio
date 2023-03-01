import React from "react";
import ProfilePic from "../images/Ryan_Taylor.jpg";

function AboutMe() {
  return (
    <div className="text-bg-dark">
      <h1 className="text-center">Ryan Taylor</h1>
      <div className="d-flex justify-content-center flex-column align-items-center">
        <img src={ProfilePic} alt="Ryan's headshot" className="profile-pic border rounded-4 mb-2"></img>
        <ul>
          <li>I am a full-stack web developer located in Tacoma, Washington</li>
          <li>Huge baseball fan. Go Yankees!</li>
          <li>I am a full-stack web developer located in Tacoma, Washington</li>
          <li>I am a full-stack web developer located in Tacoma, Washington</li>
          <li>I am a full-stack web developer located in Tacoma, Washington</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
