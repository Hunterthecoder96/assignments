import React from 'react';
import { BiLogoLinkedinSquare } from 'react-icons/bi';
import { AiOutlineGithub } from 'react-icons/ai';

export default function () {
  return (
    <div className="contact-container">
      <h1 className="contact-header">Contact Me</h1>
      <p>Email: jhskolnick100@gmail.com</p>
      <BiLogoLinkedinSquare className="linkdinlogo" />
      <AiOutlineGithub className="github-logo" />
    </div>
  );
}
