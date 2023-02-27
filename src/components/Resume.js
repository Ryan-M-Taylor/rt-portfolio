import React from "react";
import RtResume from "./Ryan_Resume.pdf";

function Resume() {
  return (
    <div className="container text-center">
      <h2>Experience:</h2>
      <div className="row justify-content-center mx-auto col-md-10 mb-4">
        <div className="col col-md-2 text-start mt-3">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Python</li>
          </ul>
        </div>
        <div className="col col-md-2 text-start mt-3">
          <ul>
            <li>React</li>
            <li>Node</li>
            <li>MySQL</li>
            <li>NoSQL</li>
          </ul>
        </div>
        <div className="col col-md-2 text-start mt-3">
          <ul>
            <li>Front-End</li>
            <li>Back-End</li>
            <li>Testing</li>
            <li>Heroku</li>
          </ul>
        </div>
      </div>
      <div>
        <p>Click the button below to download my resume:</p>
        <a href={RtResume} download="Ryan_Taylor_Resume.pdf">
          <button className="btn btn-dark border mb-3">Download Resume</button>
        </a>
      </div>
    </div>
  );
}

export default Resume;
