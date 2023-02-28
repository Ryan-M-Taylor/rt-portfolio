import React from "react";
import ProfilePic from "./Ryan_Taylor.jpg";

function AboutMe() {
  return (
    <div className="text-bg-dark">
      <h1 className="text-center">Ryan Taylor</h1>
      <div className="d-flex justify-content-center">
        <img src={ProfilePic} alt="Ryan's headshot" className="profile-pic border rounded-4"></img>
        <ul>
          <li>I am a full-stack web developer located in Tacoma, Washington</li>
          <li>Huge baseball fan. Go Yankees!</li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
