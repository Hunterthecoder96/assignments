import React from 'react';
import portfolio from './portfolio';
export default function PortfolioItem({ title, img, stack }) {
  return (
    <div className="project-display">
      <h3>{title}</h3>
      <img src={img} alt="portfolio" className="project-photo" />
      <div>
        <p className='project-description'>
          {stack.map((item) => (
            <span>{item}</span>
          ))}
        </p>
      </div>
    </div>
  );
}
