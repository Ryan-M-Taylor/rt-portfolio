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
          <li>I have a background in sales and sports management prior to switching career paths to web development</li>
          <li>Have a Master's Degree in Sports Management and a Bachelor's Degree in Kinesiology</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
