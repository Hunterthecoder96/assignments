import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';

export default function About() {
  const [state] = useState({
    title: 'learn',
    titleTwo: 'work as a team',
    titleThree: 'most importantly CODE',
  });
  return (
    <div className="about">
      <h1 className="About-Title">
        <span className="About-Hunter">Hunter Skolnick</span>
      </h1>

      <div className="About-Par">
        Ready to. . . .
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 100,
            strings: [' learn.', ' work as a team.', ' most importantly CODE!'],
          }}
        />
      </div>

      <div className="About-SkillList">
        <h1 className="About-Skills">Skill's</h1>
        <div className="skills">
          <p>HTML5</p>
          <p>CSS3</p>
        </div>
        <div className="skills">
          <p>JavaScript</p>
          <p>Express.js</p>
        </div>
        <div className="skills">
          <p>JSON</p>
          <p>Nodemon</p>
        </div>
        <div className="skills">
          <p>Git</p>
          <p>postman</p>
        </div>
        <div className="skills">
          <p>React.js</p>
          <p>Vite</p>
        </div>
        <div className="skills">
          <p>MongoDB</p>
          <p>JQuery</p>
        </div>
      </div>
    </div>
  );
}
