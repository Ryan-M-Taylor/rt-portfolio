import React from "react";
import ProfilePic from "./Ryan_Taylor.jpg"

function AboutMe() {
    return (
        <div>
            <h1>Ryan Taylor</h1>
            <img src={ProfilePic} className="profile-pic"></img>
            <p>I am full-stack web developer located in Tacoma, Washington</p>
        </div>
    )
}

export default AboutMe