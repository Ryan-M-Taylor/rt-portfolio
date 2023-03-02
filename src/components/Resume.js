import React from "react";

function Resume() {
  return (
    <div className="container text-center resume">
      <h4 className="pt-2">Proficiencies:</h4>
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
        <a href="https://drive.google.com/file/d/1hZaNAJRHDNpJ3LKBSt5OxylChN8-W0Ea/view?usp=sharing">
          <button className="btn mb-3">Download Resume</button>
        </a>
      </div>
    </div>
  );
}

export default Resume;
