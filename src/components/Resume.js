import React from 'react';
import RtResume from './Ryan_Resume.pdf'

function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <p>Click the button below to download my resume:</p>
      <a href={RtResume} download="Ryan_Taylor_Resume.pdf">
        <button>Download Resume</button>
      </a>
    </div>
  );
}

export default Resume;
