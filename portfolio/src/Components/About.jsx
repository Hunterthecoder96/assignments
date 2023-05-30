import React from 'react';

export default function About() {
  return (
    <div className="about">
      <h1 className="About-Title">
        About: <span className="About-Hunter">Hunter Skolnick</span>
      </h1>

      <p className="About-Par">
        Ready to Learn, Work as a team, most importantly CODE
      </p>

      <h1 className="About-Skills">Skill's:</h1>
      <div className="About-SkillList">
        <p>HTML</p>
        <p>JS</p>
        <p>CSS</p>
        <p>React</p>
        <p>Node</p>
        <p>GIT</p>
      </div>
    </div>
  );
}
