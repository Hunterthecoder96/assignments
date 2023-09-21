import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import {
  BiLogoLinkedinSquare,
  BiLogoCss3,
  BiLogoJavascript,
  BiSolidFileJson,
  BiLogoReact,
  BiLogoMongodb,
  BiLogoJquery,
} from 'react-icons/bi';
import { AiOutlineGithub, AiFillHtml5 } from 'react-icons/ai';
import { SiNodemon, SiPostman, SiVite } from 'react-icons/si';

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
      <BiLogoLinkedinSquare className="linkdinlogo" id="linkd-logo" />
      <AiOutlineGithub className="github-logo" />
      <div className="About-Par">
        Ready to. . . .
        <Typewriter
          className="About-Par"
          options={{
            autoStart: true,
            loop: true,
            delay: 100,
            strings: [' learn.', ' work as a team.', ' most importantly CODE!'],
          }}
        />
      </div>
      <div>
        <h1 className="aboutMe">About Me</h1>
        <p className="aboutMe-par">
          I am a Strong, determined, work-hard play-hard individual looking for
          an entry level web development postion. I am born and raised from
          Virginia Beach, Virginia who graduated from Point Loma Nazarene
          University in San Diego California with a Business Management degree
          concentrated in Entrepreneurship. Once I graduated I jumped from job
          to job trying to find what I wanted to start a career in when I
          decided to join V-school I had the goal of filling my fathers shoes in
          the tech industry, and I am certain I found an industry I truly enjoy.
        </p>
      </div>
      <div className="About-SkillList">
        <h1 className="About-Skills">Skill's</h1>
        <div className="skills">
          <AiFillHtml5 className="html5" />
          <BiLogoCss3 className="css3" />
        </div>
        <div className="skills">
          <BiLogoJavascript className="javascript" />
          <p>Express.js</p>
        </div>
        <div className="skills">
          <BiSolidFileJson className="json" />
          <SiNodemon className="nodemon" />
        </div>
        <div className="skills">
          <AiOutlineGithub className="github" />
          <SiPostman className="postman" />
        </div>
        <div className="skills">
          <BiLogoReact className="react" />
          <SiVite className="vite" />
        </div>
        <div className="skills">
          <BiLogoMongodb className="mongodb" />
          <BiLogoJquery className="jquery" />
        </div>
      </div>
    </div>
  );
}
